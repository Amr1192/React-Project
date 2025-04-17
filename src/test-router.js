import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function TestRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
