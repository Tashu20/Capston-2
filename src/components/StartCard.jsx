// StatCard.jsx
// reusable component - used 4 times on Dashboard
// props from notes: title, value, color

function StatCard({ title, value, color }) {
  return (
    <div className="stat-card" style={{ borderLeft: `4px solid ${color}` }}>
      <p className="stat-title">{title}</p>
      <h2 className="stat-value">{value}</h2>
    </div>
  )
}

export default StatCard