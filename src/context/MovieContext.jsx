import { useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";

export const MovieProvider = ({ children }) => {
    const [favoriteMovies, setFavoriteMovies] = useState(() => {
        const storedFavorites = localStorage.getItem("favoriteMovies");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    const addFavoriteMovie = (movie) => {
        setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFavoriteMovie = (movieId) => {
        setFavoriteMovies((prevFavorites) =>
            prevFavorites.filter((movie) => movie.id !== movieId)
        );
    };

    const isFavorite = (movieId) => {
        return favoriteMovies.some((movie) => movie.id === movieId);
    };

    const value = {
        favoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};
