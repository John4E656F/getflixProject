import React, { useState, useEffect, useCallback } from 'react';

// import logo from "../../../assets/images.logo.png"

import Button from "../Button/btn.component";
import { NavLink, Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const Navbar = (props) => {
    const { navigation, profileDropdown, navDropdown, loginButton } = props;
    const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);

    const scrollNavbarStateHandler = userCallback(() => {
        const navbarAtTop = window.scrollY < 40;
        if (navbarAtTop !== isNavbarAtTop) {
            setIsNavbarAtTop(navbarAtTop);
        }
    }, [isNavbarAtTop]);

    useEffect(() => {
        document.addEventListener('scroll, scrollNavbarStateHandler');
        return () => {
            document.removeEventListener("scroll", scrollnavbarStateHandler);
        };
    }, [scrollNavbarStateHandler]);

    let navTiles = null;
    let flexStyle = { justifyContent: "space-between", backgroundColor: !isNavbarAtTop && "rgba(0,0,0,0,)" };

    if(navigation) {
        navTiles = (
            <>
                <div className="LinkContainer">
                    <div className="Horizontal">
                        <NavLink 
                            className="inactive" 
                            activeClassName="active" 
                            to="/browse" 
                            exact
                        >
                                Home
                        </NavLink>
                        <NavLink 
                            className="inactive" 
                            activeClassName="active" 
                            to="/browse/anime" 
                            exact
                        >
                                Anime
                        </NavLink>
                        <NavLink 
                            className="inactive" 
                            activeClassName="active" 
                            to="/browse/manga" 
                            exact
                        >
                                Manga
                        </NavLink>
                        <NavLink 
                            className="inactive" 
                            activeClassName="active" 
                            to="/browse/latest" 
                            exact
                        >
                                Latest
                        </NavLink>
                        <NavLink 
                            className="inactive" 
                            activeClassName="active" 
                            to="/browse/list" 
                            exact
                        >
                                My List
                        </NavLink>
                    </div>
                    <div className="Vertical">{navDropdown}</div>
                </div>

                <div className="OptionsContainer">
                    {/* <Search />*/}
                    <span className="ExtraOptions" style={{ fontWeight: "350 "}}>
                        Kids
                    </span>
                    <Icon className="fas fa-gift ExtraOptions" fontSize="small" />
                    <Icon className="fas fa-gift ExtraOptions" fontSize="small" />
					<Icon className="fas fa-bell ExtraOptions" fontSize="small" />
					{/* <FontAwesomeIcon className="ExtraOptions" size="lg" icon={faGift} />
					<FontAwesomeIcon className="ExtraOptions" size="lg" icon={faBell} /> */}
					{profileDropdown}
                </div>
            </>
        )
    }
        return (
            <div className="NavBar Sticky" style={flexStyle}>
                <img src={logo} alt="Aniflex Logo" />
                {navTiles}
                {loginButton && (
                    <Link to="/login">
                        <Button height="34px" width="75px" backgroundColor="#e50914" textColor="#fff">
                            Sign in
                            </Button>
                    </Link>
                )}
            </div>
        );
};

export default Navbar;