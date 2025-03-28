import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Library from "./screens/Library.jsx";
import Favorites from "./screens/Favorites";
import Player from "./screens/Player";
import Trending from "./screens/Trending";
import Sidebar from "./components/sidebar/index.jsx";
import Login from "./screens/auth/login.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [favoriteSongs, setFavoriteSongs] = useState([]); // Thêm state cho favoriteSongs
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!playlist.some((s) => s.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <Router>
      <div className="h-[100vh] w-[100vw] bg-white rounded-[30px] flex">
        {token && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              token ? <Library playlist={playlist} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/favorites"
            element={
              token ? (
                <Favorites favoriteSongs={favoriteSongs} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/player"
            element={token ? <Player /> : <Navigate to="/login" />}
          />
          <Route
            path="/trending"
            element={
              token ? (
                <Trending
                  favoriteSongs={favoriteSongs}
                  setFavoriteSongs={setFavoriteSongs}
                  addToPlaylist={addToPlaylist}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
