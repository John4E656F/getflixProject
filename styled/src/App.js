import React from "react";
import "./App.css";
import Home from './Component/Home/Home';
import Anime from './Component/Anime/Anime';
import Contact from './Component/Contact/Contact';
import Manga from './Component/Manga/Manga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import NavBar from './Component/Navbar/Navbar';
import Footer from "./Component/Footer/Footer";

function App() {
    return (
        <div className="App">
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Anime" element={<Anime />} />
                <Route exact path="/Manga" element={<Manga />} />
                <Route exact path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;