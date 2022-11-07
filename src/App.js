import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Users from './User';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}