import React from "react";
import { Link } from "react-router-dom";
const axios = require('axios');

const Home = () => {
  return (
    <div className="home-container">
      <h2>Trang Chủ</h2>
      <p>Chào mừng bạn đến với ứng dụng!</p>
      <Link to="/login">Đăng nhập</Link> | <Link to="/register">Đăng ký</Link>
    </div>
  );
};

export default Home;
