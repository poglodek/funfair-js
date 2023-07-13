import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/HomePage';
import { Login } from './pages/LoginPage';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Register } from './pages/RegisterPage';
import PrivateRoute from './utilities/PrivateRoute';
import { Logout } from './pages/Logout';


function App() {

   const [user, setUser] = useState({
      'mail': '',
      'token': false
   });


   return (
      <div className="bg-gradient-to-t from-gray-900 to-gray-700 text-white p-4  h-screen">
         <NavBar user={user} />

         <div className=" h-5/6">

            <Routes>


               <Route path="/login" element={<Login setUser={setUser} />} />
               <Route path="/logout" element={<Logout setUser={setUser} />} />
               <Route path="/register" element={<Register />} />

               <Route element={<PrivateRoute user={user} />}>
                  <Route path="/" element={<Home />} />

               </Route>
            </Routes>
         </div>

         <Footer />
      </div>
   );
}

export default App;
