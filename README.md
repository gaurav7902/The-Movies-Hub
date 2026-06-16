# The Movies Hub 🎬

Deployed at: [The-Movies-Hub](https://the-movies-hub.vercel.app/)

A modern movie search and discovery application built with React and Vite. The Movies Hub allows users to explore popular films and keep track of their favorite movies.

## 🌟 Features

- **Movie Search**: Find your favorite movies by searching for titles via The Movie Database (TMDB) API.
- **Popular Movies**: Discover trending movies on the home page.
- **Favorites List**: Save movies you love to a personal favorites list for quick access.
- **Responsive Design**: A clean and intuitive user interface that works on both desktop and mobile devices.
- **State Management**: Efficiently manage favorites across the application using React Context API.

## 🚀 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
- **Styling**: Custom CSS

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn
- A TMDB API Key (Get one at [them lmoviedb.org](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/gaurav7902/The-Movies-Hub.git
    cd The-Movies-Hub
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Environment Setup:**
   The app requires a TMDB API key to function.
   A free api key is alreay provided in the .env.example file. If it expires, you can get your own API key from [TMDB](https://www.themoviedb.org/documentation/api) and update the .env file.

    ```bash
    cp .env.example .env
    ```

4. **Run the application:**
    ```bash
    npm run dev
    ```
    The app should now be running at `http://localhost:5173`.

## 📁 Project Structure

```text
src/
├── components/   # Reusable UI components (MovieCard, NavBar)
├── context/      # Global state management for Favorites (MovieContext)
├── css/          # Application styles
├── pages/        # Page components (Home, Favorites)
├── services/     # API integration and data fetching (api.js)
└── main.jsx      # Application entry point
```

## 📝 License

This project is for educational purposes as part of a Full Stack Development course.
