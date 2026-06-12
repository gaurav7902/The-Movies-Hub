import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, title: "The Godfather", genre: "Crime", year: 1972 },
    { id: 3, title: "The Dark Knight", genre: "Action", year: 2008 },
  ]

  function handleSearch(event) {
    event.preventDefault()
    alert(`Searching for: ${searchQuery}`)
    setSearchQuery(searchQuery) // This line is redundant, but included to show state update
  }

  return (
    <div className="home">
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main landing page of our application.</p>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies
          .filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  )
}

export default Home
