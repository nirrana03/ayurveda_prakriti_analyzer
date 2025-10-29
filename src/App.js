import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import Dosha from './pages/Dosha';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/doshas" element={<Dosha/>} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}