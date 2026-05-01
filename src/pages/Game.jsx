import { useState } from "react";
import GameCard from "../components/GameCard.jsx";

function Games({ games }) {
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  // get genres from games (dynamic)
  const genres = ["All", ...new Set(games.map((g) => g.genre))];

  // filter logic
  const filteredGames = games.filter((game) => {
    const matchSearch = game.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchGenre =
      selectedGenre === "All" || game.genre === selectedGenre;

    return matchSearch && matchGenre;
  });

  return (
    <div className="page-container">
      <h2 className="page-heading">All Games</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />

      {/* 🎮 Genre Filter */}
      <div className="filter-row">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={
              selectedGenre === genre
                ? "filter-btn active"
                : "filter-btn"
            }
          >
            {genre}
          </button>
        ))}
      </div>

      {/* 📊 Count */}
      <p className="result-count">
        {filteredGames.length} game
        {filteredGames.length !== 1 ? "s" : ""} found
      </p>

      {/* ❌ No Data */}
      {filteredGames.length === 0 ? (
        <p className="no-results">No games found</p>
      ) : (
        <div className="games-grid">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Games;