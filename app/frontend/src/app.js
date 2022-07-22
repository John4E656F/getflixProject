import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./components/navbar/navbar.component";
import Welcome from "./components/welcome/welcome.component";
import Register from "./components/register/register.component";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;