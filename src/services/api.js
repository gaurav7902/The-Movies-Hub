const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
    try {
        const response = await fetch(
            `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await fetch(
            `${baseUrl}/movie/popular?api_key=${apiKey}`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};
