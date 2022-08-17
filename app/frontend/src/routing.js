//This is where we build the different states

import React from "react";
import { Route, Routes } from "react-router-dom";

//Import All the different States
// import MovieState from "./contexts/movies/movieState";

// import LandingPage from "./pages/LandingPage/LandingPage";
import Welcome from './pages/Landing/landing'
import LoginPage from "./pages/Login/login";
import SignupPage from "./pages//Signup/signup";
import Home from "./pages/Home/home";
import Anime from './pages/Anime/anime';
import Manga from './pages/Manga/manga';
import Kids from './pages/Kids/kids';
import Contact from './components/Contact/contact'
import VideoPage from "./pages/Video/video";


const Routing = () => {


    return (

        <Routes>

            <Route exact path="/" element={<Welcome />} />

            <Route exact path="/home" element={<Home />} />

            <Route exact path="/anime" element={<Anime />} />

            <Route exact path="/manga" element={<Manga />} />

            <Route exact path="/kids" element={<Kids />} />

            <Route exact path="/contact" element={<Contact />} />

            <Route exact path="/login" element={<LoginPage /> } />

            <Route exact path="/signup" element={<SignupPage /> } />

            <Route path="/watch">
                <Route exact path=":id" element={<VideoPage />} />
            </Route>

        </Routes>

    )
}
export default Routing;