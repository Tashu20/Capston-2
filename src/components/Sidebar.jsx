// Sidebar.jsx
// props from notes - activePage and setActivePage come from App.jsx
// list rendering with .map() and key prop - from notes

function Sidebar({ activePage, setActivePage }) {

  // array of menu items - rendered using .map()
  const menuItems = [
    { name: "Dashboard" },
    { name: "Games" },
    { name: "Players" },
    { name: "Add Game" },
  ]

  return (
    <div className="sidebar">

      {/* logo area */}
      <div className="logo">
        <span className="logo-dot"></span>
        <h2>GameZone</h2>
      </div>

      {/* nav buttons - using .map() from lists & keys notes */}
      <nav className="menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActivePage(item.name)}
            className={activePage === item.name ? "menu-btn active" : "menu-btn"}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <p className="sidebar-footer">Admin Panel</p>
      <p className="sidebar-footer">© 2024 GameZone</p>
      <p className="sidebar-footer">Version 1.0.0</p>
      <p className="sidebar-footer">Contact: admin@gamezone.com</p>
      <p className="sidebar-footer">Follow us on social media!</p>
      <p className="sidebar-footer">Facebook | Twitter | Instagram</p>
      <p className="sidebar-footer">Privacy Policy | Terms of Service</p>
      <p className="sidebar-footer">
        <h4>About this website</h4>
        <p>Welcome to GameZone! We are dedicated to providing the best gaming experience for all our users. The website provides a comprehensive platform for game enthusiasts to discover, review, and connect with other players.</p>
      </p>
    </div>
  )
}

export default Sidebar