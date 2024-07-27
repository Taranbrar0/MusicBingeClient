import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Signin from "./Components/Signin.jsx";
import LogIn from "./Components/LogIn.jsx";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<Signin />} />
        <Route 
          path="/" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" /> : <LogIn onLogin={handleLogin} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
