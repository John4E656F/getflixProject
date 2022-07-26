import React from "react";
import "./App.css";
import Home from './Component/Home/Home';
import Anime from './Component/Anime/Anime';
import Contact from './Component/Contact/Contact';
import Manga from './Component/Manga/Manga';
import Kids from './Component/Kids/Kids'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from "react-router-dom";

function App() {

   


    return (
        <div className="App">
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Anime" element={<Anime />} />
                <Route exact path="/Manga" element={<Manga />} />
                <Route exact path="/Kids" element={<Kids />} />
                <Route exact path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;