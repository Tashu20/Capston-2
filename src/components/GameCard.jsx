// GameCard.jsx
// one game card shown in the games grid
// props from notes - game object passed from Games.jsx

function GameCard({ game }) {
  return (
    <div className="game-card">

      {/* top colored section showing first letter */}
      <div className="game-card-top">
        <span className="game-initial">{game.title.charAt(0)}</span>
      </div>

      <div className="game-card-body">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-meta">{game.genre} &middot; {game.platform}</p>

        <div className="game-row">
          <span className="grey">Rating</span>
          <span className="bold">{game.rating} / 10</span>
        </div>

        <div className="game-row">
          <span className="grey">Players</span>
          <span className="bold">{(game.players / 1000000).toFixed(1)}M</span>
        </div>

        {/* conditional rendering from notes */}
        <span className={game.status === "Active" ? "tag-active" : "tag-inactive"}>
          {game.status}
        </span>
      </div>

    </div>
  )
}

export default GameCard