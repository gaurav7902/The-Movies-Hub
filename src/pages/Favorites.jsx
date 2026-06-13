import "../css/Favorites.css";
import { useMovieContext } from "../context/useMovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favoriteMovies } = useMovieContext();
    if (favoriteMovies.length > 0) {
        return (
            <div className="favorites">
                <h1>Favorites</h1>
                <div className="movies-grid">
                    {favoriteMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="favorites-empty">
            <h1>Favorites</h1>
            <h2>No Favorite Movies Yet.</h2>
            <p>Start adding favorites and they'll appear here!</p>
        </div>
    );
}

export default Favorites;
