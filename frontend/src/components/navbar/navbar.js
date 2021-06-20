import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/login">
                    <div className="button">
                        Login
                    </div>
                </Link>
                <Link to="/signup">
                    <div className="button">
                        Sign up
                    </div>
                </Link>
                <Link to="/about">
                    <div className="button">
                        About
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="button">
                        Profile
                    </div>
                </Link>
            </div>
        );
    }
}