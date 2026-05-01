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
    </div>
  )
}

export default Sidebar