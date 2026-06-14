import "./css/App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";

function App() {
    return (
        <MovieProvider>
            <NavBar className="nav" />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </main>
        </MovieProvider>
    );
}

export default App; 
