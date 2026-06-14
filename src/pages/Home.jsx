import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api.js";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch popular movies when the component mounts
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
                setError("Failed to load movies. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);
    // [] is the dependency array, which means this effect runs only when the array changes.
    // Since it's empty, it runs only once when the component mounts.

    function handleSearch(event) {
        event.preventDefault();
        if (!searchQuery.trim()) {
            setError("Please enter a search query.");
            return;
        }
        setLoading(true);
        searchMovies(searchQuery)
            .then((searchResults) => {
                setMovies(searchResults);
                setError(null);
            })
            .catch((error) => {
                console.error("Search failed:", error);
                setError("Failed to search movies. Please try again later.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="home">
            <h1>Ma Movies</h1>
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

            {error && <p className="error-message">{error}</p>}

            {loading ? (
                <p>Loading movies...</p>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home; 
