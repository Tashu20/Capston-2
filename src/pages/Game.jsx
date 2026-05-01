// Games.jsx
// useState from notes - for search text and selected genre filter
// filtering with .filter() and .includes()

import { useState } from "react"
import GameCard from "../components/GameCard.jsx"



    function Games({ games }) {

  // useState from notes
  const [searchText,    setSearchText]    = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")

  // get unique genres from data - using Set
  const genres = ["All", ...new Set(gamesData.map((g) => g.genre))]

  // filter games based on search and genre
  const filteredGames = gamesData.filter((game) => {
    const matchSearch = game.title.toLowerCase().includes(searchText.toLowerCase())
    const matchGenre  = selectedGenre === "All" || game.genre === selectedGenre
    return matchSearch && matchGenre
  })

  return (
    <div className="page-container">

      <h2 className="page-heading">All Games</h2>

      {/* search input - controlled component from notes */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />

      {/* genre filter buttons - list rendering from notes */}
      <div className="filter-row">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={selectedGenre === genre ? "filter-btn active" : "filter-btn"}
          >
            {genre}
          </button>
        ))}
      </div>

      <p className="result-count">
        {filteredGames.length} game{filteredGames.length !== 1 ? "s" : ""} found
      </p>

      {/* conditional rendering from notes */}
      {filteredGames.length === 0 ? (
        <p className="no-results">No games match your search.</p>
      ) : (
        <div className="games-grid">
          {/* passing game as prop to GameCard */}
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}

    </div>
  )
}

export default Games