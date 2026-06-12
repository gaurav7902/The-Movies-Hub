import "./css/App.css"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Favourites from "./pages/Favourites"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <div className="nav">
        <NavBar />
      </div>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
