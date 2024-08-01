import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Signin from "./Components/Signin.jsx";
import LogIn from "./Components/LogIn.jsx";
import { useState } from "react";
import UserProfile from "./Components/UserProfile.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Documentation from "./Components/Documentation";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [loading,setLoading] = useState(true);
  if(loading === true){
    setTimeout(()=>{
      setLoading(false);
    },2000);
  }

  return (
    <div>
      {/* routes for managing pages checks if user is authenticated then only allowed to go to home page*/}
      <ToastContainer />
      <Routes>
        <Route path="/signUp" element={<Signin />} />
        <Route 
          path="/" 
          element={isAuthenticated ? <Home loading={loading} setLoading={setLoading} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" /> : <LogIn />} 
        />
        <Route
          path="/userProfile" 
          element ={ isAuthenticated ? <UserProfile /> : <Navigate to="/"  />} 
        />
        <Route path="/Documentation" element={<Documentation setLoading={setLoading}/>} />
      </Routes>
    </div>
  );
}

export default App;
