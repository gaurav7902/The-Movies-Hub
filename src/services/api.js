const apiKey = "959312a447b152fcab0b8f19f42f7991"
const baseUrl = "https://api.themoviedb.org/3"

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    )
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Error searching movies:", error)
    return []
  }
}

// export const fetchMovieDetails = async (movieId) => {
//   try {
//     const response = await fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`)
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error("Error fetching movie details:", error)
//     return null
//   }
// }

export const getPopularMovies = async (query) => {
  try {
    const response = await fetch(
      `${baseUrl}/movie/popular?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    )
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Error fetching popular movies:", error)
    return []
  }
}
