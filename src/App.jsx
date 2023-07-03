import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from './pages/HomePage';
import { Login } from './pages/LoginPage';
import { NavBar } from './pages/NavBar';

function App() {
  return (
      <div className="bg-gradient-to-t from-gray-900 to-gray-700 text-white p-4 h-screen">
         <NavBar />
        <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
     </BrowserRouter>
      </div>
   );
}

export default App;
