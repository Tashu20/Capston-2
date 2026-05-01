// Players.jsx
// useState from notes - sortBy state
// sorting data using .sort() based on selected option

import { useState } from "react"
import gamesData from "../data/gamesData.jsx"

function Players() {

  // useState from notes - which column to sort by
  const [sortBy, setSortBy] = useState("players")

  // sort a copy of gamesData - spread to avoid mutating original
  const sorted = [...gamesData].sort((a, b) => {
    if (sortBy === "players") return b.players - a.players
    if (sortBy === "rating")  return b.rating  - a.rating
    if (sortBy === "title")   return a.title.localeCompare(b.title)
  })

  return (
    <div className="page-container">

      <h2 className="page-heading">Player Stats</h2>

      {/* sort buttons - onClick event handling from notes */}
      <div className="sort-row">
        <span className="sort-label">Sort by:</span>
        <button
          onClick={() => setSortBy("players")}
          className={sortBy === "players" ? "sort-btn active" : "sort-btn"}
        >
          Players
        </button>
        <button
          onClick={() => setSortBy("rating")}
          className={sortBy === "rating" ? "sort-btn active" : "sort-btn"}
        >
          Rating
        </button>
        <button
          onClick={() => setSortBy("title")}
          className={sortBy === "title" ? "sort-btn active" : "sort-btn"}
        >
          Title
        </button>
      </div>

      <div className="section-box" style={{ padding: 0 }}>
        <table className="my-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Platform</th>
              <th>Players</th>
              <th>Rating</th>
              <th>Year</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* list rendering from notes - index for rank */}
            {sorted.map((game, index) => (
              <tr key={game.id}>
                <td className="grey">#{index + 1}</td>
                <td className="bold">{game.title}</td>
                <td>{game.genre}</td>
                <td>{game.platform}</td>
                <td>{(game.players / 1000000).toFixed(1)}M</td>
                <td>{game.rating}</td>
                <td>{game.year}</td>
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

export default Players