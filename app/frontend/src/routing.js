//This is where we build the different states

import React from "react";
import { Route, Routes, } from "react-router-dom";

import Home from './pages/Home/Home';
import Anime from './pages/Anime/Anime';
import Contact from './components/Contact/Contact';
import Manga from './pages/Manga/Manga';
import Kids from './pages/Kids/Kids';
import LoginPage from './pages/login/login';
import SignupPage from './pages/Signup/signup';

const Routing = () => {

    return (

        <Routes>
            {/* <Route exact path="/" component={LandingPage}>
                <LandingPage />
            </Route> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Anime" element={<Anime />} />
            <Route exact path="/Manga" element={<Manga />} />
            <Route exact path="/Kids" element={<Kids />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/login" element={<LoginPage /> } />

            <Route exact path="/signup" element={<SignupPage /> } />


            {/* <Route exact path="/profile">
                <Profil />
            </Route>
            <Route exact path="/browse" component={Home}>
                <MovieState>
                    <Home />
                </MovieState>
            </Route> */}
        </Routes>

    )
}
export default Routing;