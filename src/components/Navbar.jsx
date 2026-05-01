// Navbar.jsx
// props from notes - activePage is passed from App.jsx

function Navbar({ activePage }) {
  return (
    <div className="navbar">
      <div>
        {/* showing the active page name - using props */}
        <h3 className="nav-title">{activePage}</h3>
        <p className="nav-sub">Welcome back, Admin</p>
      </div>

      <div className="nav-right">
        <div className="avatar">A</div>
        <span className="admin-name">Admin</span>
      </div>
    </div>
  )
}

export default Navbar