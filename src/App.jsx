import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/user/Create';
import About from './pages/about/About';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Home />} />
        <Route path="/add" element={<Create />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
