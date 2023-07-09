import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/HomePage';
import { Login } from './pages/LoginPage';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';


function App() {
  return (
      <div className="bg-gradient-to-t from-gray-900 to-gray-700 text-white p-4  h-screen">
        <NavBar />

        <div className=" h-5/6">
            <Routes>
               <Route path="/" element={ <Home/> } />
               <Route path="/login" element={ <Login/> } />
            </Routes>
         </div>

         <Footer />
      </div>
  );
}

export default App;
