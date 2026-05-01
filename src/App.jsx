// App.jsx - root component
// useState is used here to track which page is open
// setActivePage is passed to Sidebar as a prop (parent to child)

import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"
import Navbar from "./components/Navbar.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Games from "./pages/Game.jsx"
import Players from "./pages/Players.jsx"
import AddGame from "./pages/AddGame.jsx"
import "./App.css"

function App() {
  const [games, setGames] = useState(gamesData) 

  // useState from notes - track which page to show
  const [activePage, setActivePage] = useState("Dashboard")

  // conditional rendering from notes - show page based on state
  function renderPage() {
    if (activePage === "Dashboard") return <Dashboard />
    if (activePage === "Games") return <Games games={games} />
    if (activePage === "Players")   return <Players />
    if (activePage === "Add Game") return <AddGame setGames={setGames} games={games} />
  }

  return (
    <div className="app-layout">
      {/* passing activePage and setActivePage as props to Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="main-content">
        {/* passing activePage as prop to Navbar */}
        <Navbar activePage={activePage} />

        <div className="page-area">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App