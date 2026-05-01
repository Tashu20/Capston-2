// Dashboard.jsx
// useState and useEffect from notes
// useEffect runs once on load to calculate stats from gamesData

import { useState, useEffect } from "react"
import StatCard from "../components/StartCard.jsx"
import gamesData from "../data/gamesData.jsx"

function Dashboard() {

  // useState from notes - 4 stat values
  const [totalGames,  setTotalGames]  = useState(0)
  const [totalPlayers,setTotalPlayers]= useState(0)
  const [topRating,   setTopRating]   = useState(0)
  const [activeCount, setActiveCount] = useState(0)

  // useEffect from notes - runs once when component mounts (empty dependency [])
  useEffect(() => {
    // total games
    setTotalGames(gamesData.length)

    // total players - using forEach
    let sum = 0
    gamesData.forEach((g) => { sum += g.players })
    setTotalPlayers(sum)

    // top rating
    let max = 0
    gamesData.forEach((g) => { if (g.rating > max) max = g.rating })
    setTopRating(max)

    // active game count - using filter
    setActiveCount(gamesData.filter((g) => g.status === "Active").length)
  }, [])

  // top 5 games by player count for bar chart
  const top5 = [...gamesData].sort((a, b) => b.players - a.players).slice(0, 5)
  const maxPlayers = top5[0]?.players || 1

  return (
    <div className="page-container">

      {/* stat cards row - passing props to StatCard */}
      <div className="stats-row">
        <StatCard title="Total Games"   value={totalGames}                              color="#6b0f1a" />
        <StatCard title="Total Players" value={(totalPlayers / 1000000).toFixed(0) + "M"} color="#8b1a28" />
        <StatCard title="Top Rating"    value={topRating + " / 10"}                    color="#a83240" />
        <StatCard title="Active Games"  value={activeCount}                             color="#c04a58" />
      </div>

      {/* bar chart using divs - no library needed */}
      <div className="section-box">
        <h3 className="section-title">Top 5 by Player Count</h3>
        {top5.map((game) => {
          const w = (game.players / maxPlayers) * 100
          return (
            <div key={game.id} className="bar-row">
              <span className="bar-label">{game.title}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: w + "%" }}></div>
              </div>
              <span className="bar-val">{(game.players / 1000000).toFixed(1)}M</span>
            </div>
          )
        })}
      </div>

      {/* recent games table - slice first 5 */}
      <div className="section-box">
        <h3 className="section-title">Recent Games</h3>
        <table className="my-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* list rendering with key from notes */}
            {gamesData.slice(0, 5).map((game) => (
              <tr key={game.id}>
                <td>{game.title}</td>
                <td>{game.genre}</td>
                <td>{game.rating}</td>
                <td>
                  {/* conditional rendering from notes */}
                  <span className={game.status === "Active" ? "tag-active" : "tag-inactive"}>
                    {game.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard