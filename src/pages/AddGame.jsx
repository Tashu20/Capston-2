// AddGame.jsx
// Form handling from notes - one object state for all fields
// Form validation from notes - one object state for errors
// e.preventDefault() from notes - stop form default submit

import { useState } from "react"

function AddGame({ games, setGames }) { 

  // one object for all form fields - from notes (industry standard)
  const [form, setForm] = useState({
    title:    "",
    genre:    "",
    platform: "",
    rating:   "",
    players:  "",
    year:     "",
    status:   "Active",
  })

  // one object for errors - from notes
  const [errors,  setErrors]  = useState({})
  const [success, setSuccess] = useState(false)

  // handleChange - controlled component from notes
  // [e.target.name]: e.target.value updates only the changed field
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    // clear error for that field when user starts typing
    setErrors({ ...errors, [e.target.name]: "" })
  }

  // validate function - from notes
  function validate() {
    let newErrors = {}
    if (!form.title.trim())                          newErrors.title    = "Title is required"
    if (!form.genre)                                 newErrors.genre    = "Please select a genre"
    if (!form.platform)                              newErrors.platform = "Please select a platform"
    if (!form.rating || form.rating < 0 || form.rating > 10) newErrors.rating = "Rating must be 0 to 10"
    if (!form.players || form.players < 0)           newErrors.players  = "Enter a valid number"
    if (!form.year || form.year < 1970 || form.year > 2030)  newErrors.year = "Enter a valid year"
    return newErrors
  }

  // handleSubmit from notes - e.preventDefault() stops page reload
  function handleSubmit(e) {
    e.preventDefault()

    const foundErrors = validate()
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
      return
    }
    const newGame = { ...form, id: games.length + 1, 
    players: Number(form.players), rating: Number(form.rating),
     year: Number(form.year) }
    setGames([...games, newGame])

    console.log("new game added:", form)
    setSuccess(true)

    // reset form after 3 seconds
    setTimeout(() => {
      setSuccess(false)
      setForm({ title: "", genre: "", platform: "", rating: "", players: "", year: "", status: "Active" })
    }, 3000)
  }

  return (
    <div className="page-container">

      <h2 className="page-heading">Add New Game</h2>

      {/* conditional rendering - show success message only after submit */}
      {success && (
        <div className="success-msg">Game added successfully!</div>
      )}

      <div className="form-box">
        <form onSubmit={handleSubmit} noValidate>

          {/* game title */}
          <div className="form-field">
            <label>Game Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. GTA 6"
            />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>

          {/* genre and platform side by side */}
          <div className="form-row">
            <div className="form-field">
              <label>Genre</label>
              <select name="genre" value={form.genre} onChange={handleChange}>
                <option value="">Select genre</option>
                <option>RPG</option>
                <option>Shooter</option>
                <option>Action</option>
                <option>Sports</option>
                <option>Sandbox</option>
                <option>Battle Royale</option>
                <option>Roguelike</option>
                <option>Strategy</option>
              </select>
              {errors.genre && <span className="error-text">{errors.genre}</span>}
            </div>

            <div className="form-field">
              <label>Platform</label>
              <select name="platform" value={form.platform} onChange={handleChange}>
                <option value="">Select platform</option>
                <option>PC</option>
                <option>PS5</option>
                <option>Xbox</option>
                <option>Mobile</option>
                <option>Multi</option>
              </select>
              {errors.platform && <span className="error-text">{errors.platform}</span>}
            </div>
          </div>

          {/* rating and year side by side */}
          <div className="form-row">
            <div className="form-field">
              <label>Rating (0 to 10)</label>
              <input
                type="number"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                placeholder="e.g. 8.5"
                min="0"
                max="10"
                step="0.1"
              />
              {errors.rating && <span className="error-text">{errors.rating}</span>}
            </div>

            <div className="form-field">
              <label>Release Year</label>
              <input
                type="number"
                name="year"
                value={form.year}
                onChange={handleChange}
                placeholder="e.g. 2024"
              />
              {errors.year && <span className="error-text">{errors.year}</span>}
            </div>
          </div>

          {/* total players */}
          <div className="form-field">
            <label>Total Players</label>
            <input
              type="number"
              name="players"
              value={form.players}
              onChange={handleChange}
              placeholder="e.g. 5000000"
            />
            {errors.players && <span className="error-text">{errors.players}</span>}
          </div>

          {/* status radio buttons */}
          <div className="form-field">
            <label>Status</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={form.status === "Active"}
                  onChange={handleChange}
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={form.status === "Inactive"}
                  onChange={handleChange}
                />
                Inactive
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Add Game</button>

        </form>
      </div>

    </div>
  )
}

export default AddGame