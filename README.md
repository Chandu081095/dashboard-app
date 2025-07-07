

📊 Dashboard Assignment
A responsive React-based dashboard application designed to demonstrate front-end proficiency. This project showcases routing, data visualization, custom pagination, search functionality, sorting logic, and client-side state persistence — all built with plain JavaScript.

🚀 Live Demo
🌐 Click to view the deployed app

🧩 Features
- 🔗 Routing
- Profile screen displays static user data from dummy API
- Comments dashboard includes custom pagination and table layout
- 🔍 Search
- Partial search on name and email
- ↕️ Sorting
- Custom toggle logic for Post ID, Name, and Email
- Ascending → Descending → No sort cycle
- 📄 Pagination
- Page size options: 10, 50, 100
- Paginated view without external libraries
- 💾 Persistence
- Stores search term, sort state, current page, and page size using localStorage
- 🖥 Responsive UI
- Mobile-friendly layout
- Clean design adhering to wireframe requirements

⚙️ Tech Stack
| Tool | Usage | 
| React | UI construction | 
| React Router | Client-side routing | 
| Plain JavaScript | Core logic implementation | 
| CSS | Styling and responsiveness | 
| Vercel | Deployment | 
| JSONPlaceholder | Dummy API data source | 



📦 Installation & Usage
# Clone the repository
git clone https://github.com/Chandu081095/dashboard-app.git
cd dashboard-app

# Install dependencies
npm install

# Run locally
npm start



🧪 APIs Used
- Users API
- Comments API

🗂 Project Structure
src/
├── components/
│   ├── CommentTable.js
│   ├── Pagination.js
│   ├── SearchBar.js
├── pages/
│   ├── Dashboard.js
│   └── Profile.js
├── App.js
├── index.js
├── vercel.json



🧾 Submission Notes
- .zip includes full source code (excluding node_modules)
- Deployed via Vercel with SPA routing enabled using vercel.json
- Responsive across Chrome, Firefox, and Edge

🙋‍♂️ Author
Built with passion by Chandu
For questions, suggestions, or improvements — feel free to reach out!

You can copy-paste this into your repo’s README.md or twe
