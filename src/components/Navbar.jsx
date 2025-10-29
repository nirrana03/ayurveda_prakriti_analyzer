import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">Ayurveda</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/about">Ayurveda</Link>
        <Link to="/doshas">Doshas</Link>
        <Link to="/quiz" className="pill">Take Quiz</Link>
      </div>
    </nav>
  );
}