//This is where we build the different states

import React from "react";
import { Route, Routes } from "react-router-dom";

//Import All the different States
// import MovieState from "./contexts/movies/movieState";

// import LandingPage from "./pages/LandingPage/LandingPage";
// import LoginPage from "./pages/Login/index";
// import SignupPage from "./Signup/index";
// import Home from "./pages/Home/index";
// import Profil from "./pages/Profile/index";

const Routing = () => {
    return (
        <Routes>
            {/* <Route exact path="/" component={LandingPage}>
                <LandingPage />
            </Route> */}
            <Route exact path="/login" component={LoginPage}>
                <LoginPage />
            </Route>
            <Route exact path="/signup">
                <SignupPage />
            </Route>
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