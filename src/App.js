import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Signin from "./Components/Signin.jsx";
import LogIn from "./Components/LogIn.jsx";
function App() {
  return ( 
  <div>

    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<LogIn />} />
      </Routes>

    </div>
  );
}

export default App;
