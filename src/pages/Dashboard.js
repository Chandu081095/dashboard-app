import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import CommentTable from '../components/CommentTable';



const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Fetch & persist
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dashboardState'));
    if (saved) {
      setSearchTerm(saved.searchTerm);
      setSortConfig(saved.sortConfig);
      setPageSize(saved.pageSize);
      setCurrentPage(saved.currentPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'dashboardState',
      JSON.stringify({ searchTerm, sortConfig, pageSize, currentPage })
    );
  }, [searchTerm, sortConfig, pageSize, currentPage]);

  const filteredData = useMemo(() => {
    return comments.filter(
      c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [comments, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (sortConfig.direction === 'asc') return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      if (sortConfig.direction === 'desc') return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const toggleSort = key => {
    setSortConfig(prev => {
      if (prev.key !== key) return { key, direction: 'asc' };
      if (prev.direction === 'asc') return { key, direction: 'desc' };
      if (prev.direction === 'desc') return { key: null, direction: null };
      return { key, direction: 'asc' };
    });
  };

  return (
    <div>
      <h1>Comments Dashboard</h1>
      <button onClick={() => navigate('/profile')}>Go to Profile</button>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <select onChange={e => setPageSize(Number(e.target.value))} value={pageSize}>
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      <table>
        <thead>
          <tr>
            <th onClick={() => toggleSort('postId')}>Post ID</th>
            <th onClick={() => toggleSort('name')}>Name</th>
            <th onClick={() => toggleSort('email')}>Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(c => (
            <tr key={c.id}>
              <td>{c.postId}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {[...Array(Math.ceil(sortedData.length / pageSize))].map((_, idx) => (
          <button key={idx} onClick={() => setCurrentPage(idx + 1)}>
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
