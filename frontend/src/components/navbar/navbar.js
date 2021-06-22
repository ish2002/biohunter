import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";
import logo from "./BioHunters.png";

const Button = styled.button`
  display: center;
  justify-content: space-between;
  padding: 7px 20px; 
  border: 0;
  float: right;
  background: blanchedalmond;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;
  color: black;
  border-radius: 40px;
  outline: 0;
  width: 120px;
  margin: 7px;
  box-shadow: 0px 2px 2px lightgray;
  &:hover{
    background-color: #fff;
  }
`;

export default class NavBar extends React.Component {
    render() {
        return (
        <div class="nav-bar">
            <div class="logo">
              <img src={logo} alt="BioHunters Logo"></img>
            </div>
        <div class="nav-links" id="nav-links">
          <i class="fa fa-close" onclick="closeMenu()"></i>
            <ul>
              <li>
                <Link to="/home">
                    Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                    About
                </Link>
              </li>
              <li>
                <Link to="/community">
                    Community
                </Link>
              </li>
              <li>
                <Link to="/login">
                    Gallery
                </Link>
              </li>
              <li>
                <Link to="/login">
                    Contact Us
                </Link>
              </li>
            </ul>
            <div>
              <Button>LOGIN</Button>
            </div>
            <div>
              <Button>SIGN UP</Button>
            </div>
          </div>
          <i class="fa fa-bars" onclick="showMenu()"></i>
        </div>
            
        );
    }
}

/* <ul>
                <div className="nav-bar">
                <Link to="/login">
                    <div class="button">
                        Home
                    </div>
                </Link>
                <Link to="/signup">
                    <div class="button">
                        About
                    </div>
                </Link>
                <Link to="/about">
                    <div class="button">
                        Community
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="button">
                        Gallery
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="button">
                        Contact
                    </div>
                </Link>
            </div>
            </ul> */