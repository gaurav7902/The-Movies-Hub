import "../css/MovieCard.css"

function MovieCard({ movie }) {
  function onFavourite() {
    alert('Clicked')
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.name} />
        <div className="movie-overlay">
          <button className="favourite-button" onClick={onFavourite}>
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
