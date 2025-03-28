import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PlayCircle, PauseCircle, Heart, HeartOff } from "lucide-react";
import { motion } from "framer-motion";
import songs from "../data";
import "./Trending.css";

const Trending = ({ favoriteSongs, setFavoriteSongs }) => {
  const [songList, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState(null);
  // Giả lập API lấy danh sách nhạc
  useEffect(() => {
    setTimeout(() => {
      setSongs(songs);
      setLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const handleSongClick = (song) => {
    navigate("/player", { state: { song, source: "trending" } }); // Gửi dữ liệu bài hát đến Player
  };

  // Hàm xử lý phát / dừng nhạc
  const togglePlay = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  const toggleFavorite = (song) => {
    if (favoriteSongs.some((fav) => fav.id === song.id)) {
      setFavoriteSongs(favoriteSongs.filter((fav) => fav.id !== song.id));
    } else {
      setFavoriteSongs([...favoriteSongs, song]);
    }
  };

  return (
    <div className="w-full h-full bg-[#1E2A3E] rounded-3xl p-6 text-white shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-5 text-center">🔥 Trending Now</h2>

      <div className="flex flex-col gap-4 overflow-y-auto max-h-[900px] custom-scrollbar">
        {loading
          ? Array(5)
              .fill(0)
              .map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4 p-4 bg-[#27354D] rounded-xl"
                >
                  <div className="w-16 h-16 bg-gray-600 animate-pulse rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 bg-gray-600 animate-pulse rounded" />
                    <div className="h-4 w-1/2 bg-gray-600 animate-pulse rounded" />
                  </div>
                  <div className="w-6 h-6 bg-gray-600 animate-pulse rounded-full" />
                </motion.div>
              ))
          : songList.map((song) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 p-4 bg-[#27354D] rounded-xl hover:bg-[#32415F] transition-all cursor-pointer"
              >
                <img
                  src={song.cover}
                  alt={song.name}
                  className="w-16 h-16 rounded-lg object-cover shadow-md hover:scale-105 transition-transform"
                  onClick={() => handleSongClick(song)}
                />
                <div className="flex-1" onClick={() => handleSongClick(song)}>
                  <h3 className="text-lg font-semibold hover:text-blue-400">
                    {song.name}
                  </h3>
                  <p className="text-sm text-gray-300">{song.artist}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(song)}
                  className="focus:outline-none"
                >
                  {favoriteSongs.some((fav) => fav.id === song.id) ? (
                    <Heart className="text-red-500 w-6 h-6 hover:scale-110 transition-transform" />
                  ) : (
                    <HeartOff className="text-gray-400 w-6 h-6 hover:scale-110 transition-transform" />
                  )}
                </button>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default Trending;
