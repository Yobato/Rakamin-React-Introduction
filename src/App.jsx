// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Message from "./components/Message";
import Card from "./components/Card";
import Game from "./components/Game";
import Form from "./components/Form";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
