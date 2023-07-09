import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
      <div className="bg-blue-900 bg-opacity-25 w-auto h-14 text-white flex rounded-xl mr-3 ml-3 p-3 pb-3 space-x-3 justify-end sticky top-0">
        <Link to="/" className="rounded-md p-2 justify-center flex items-center transition-all duration-300 hover:bg-blue-600">Home</Link>
        <Link to="/login" className="rounded-md p-2 justify-center flex items-center transition-all duration-300 hover:bg-blue-600 mr-0">Login</Link>
      </div>
  );
}
