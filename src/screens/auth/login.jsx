import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const uniqueToken = crypto.randomUUID(); // Tạo token ngẫu nhiên
    localStorage.setItem("token", uniqueToken); // Lưu vào localStorage
    navigate("/"); // Chuyển hướng về Library
    window.location.reload();
  };

  return (
    <div className="bg-[#1E2A3E] h-[100vh] w-[100vw] flex flex-col items-center justify-center overflow-hidden">
      <button
        onClick={handleLogin}
        className="w-[320px] h-[80px] text-center bg-gradient-to-r from-[#491aca] to-[#5244b7] text-white text-3xl font-bold rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl active:scale-95 cursor-pointer"
      >
        🎵 Nghe nhạc ngay
      </button>
    </div>
  );
}
