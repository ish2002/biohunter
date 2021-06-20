import React from "react";
import NavBar from "../navbar/navbar";
import "./homePage.css";
import { BiodiversityProfile } from "../biodiversityProfile";
import { WeeklyChallenge } from "../biodiversityProfile";
import { UserProfile } from "../userProfile";
import LogIn  from "../login/login";
import SignUp from "../signup/signup";
import { AccountBox } from "../accountBox";
import styled from "styled-components";
import { Link } from "react-router-dom";

const animals = [
    "bee",
    "birch",
    "bird",
    "bug",
    "mouse",
    "mushroom",
    "robin",
];

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: orange;
  color: white;
`;

export default class About extends React.Component {
    render() {
        return (
            <AppContainer>
                <div className="title">
                    <h1>About</h1>
                </div>
                <p>
                BioHunters is a nature scavenger app for everyone.
                We aim to build educational awareness on the importance of conservation and create an army of citizen scientists to aid such efforts.
                </p>
            </AppContainer>

        );
    }
}