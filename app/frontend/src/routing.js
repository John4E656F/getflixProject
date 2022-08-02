//This is where we build the different states

import React from "react";
import { Route, Routes } from "react-router-dom";

//Import All the different States
// import MovieState from "./contexts/movies/movieState";

// import LandingPage from "./pages/LandingPage/LandingPage";
import Welcome from './pages/Landing/landingPage.component'
import LoginPage from "./pages/Login/login";
import SignupPage from "./pages//Signup/signup";
import Home from "./pages/Home/home";
import Anime from './pages/Anime/anime'
import Manga from './pages/Manga/manga'
import Kids from './pages/Kids/kids'

// import Profil from "./pages/Profile/index";

const Routing = () => {


    return (

        <Routes>
            <Route exact path="/" element={<Home />} />

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