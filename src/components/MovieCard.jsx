import "../css/MovieCard.css";
import { useMovieContext } from "../context/useMovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addFavoriteMovie, removeFavoriteMovie } =
        useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavorite(e) {
        e.preventDefault();
        if (favorite) {
            removeFavoriteMovie(movie.id);
        } else {
            addFavoriteMovie(movie);
        }
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || movie.name}
                />
                <div className="movie-overlay">
                    <button
                        className={`favorite-button ${favorite ? "active" : ""}`}
                        onClick={onFavorite}
                        title={
                            favorite
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }
                    >
                        {favorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title || movie.name}</h3>
                <p>
                    {movie.release_date
                        ? movie.release_date.split("-")[0]
                        : "N/A"}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
