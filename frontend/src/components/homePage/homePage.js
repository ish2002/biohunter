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

const Button = styled.button`
  color: #fff;
  padding: 5px 15pxs
  border-radius: 40px,
  outline: 0;
  width: 220px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  &:hover{
    background-color: #283593;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: orange;
  color: white;
`;
export default class HomePage extends React.Component {
    render() {
        return (
            <AppContainer>
                <NavBar/>
                <div className="title">
                    <h1>BioHunters</h1>
                </div>
                {/*
                {animals.map((animal) => (
                    <Link to={`/animal/${animal}`}>
                        {animal}<br/>
                    </Link>

                ))} */}
        <div>
            <center>
            <Button style={{backgroundColor:"#FBC197"}}>
                <Link to={`/animal/bee`}>
                Week 1: What's the buzz about?
                </Link>
            </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{backgroundColor:"#fff"}}>
        <Link to={`/animal/bug`}>
                Week 2: Who may I be?
        </Link></Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{backgroundColor:"#38B6FF"}}>
        <Link to={`/animal/bird`}>
                Week 3: A little birdie told me...
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{backgroundColor:"#05ABC4"}}>
        <Link to={`/animal/bug`}>
                Week 4: Are you bugged yet?
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{backgroundColor:"#FAD74B"}}>
        <Link to={`/animal/mouse`}>
                Week 5: Why rat when you can...
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{backgroundColor:"#E8C892"}}>
        <Link to={`/animal/robin`}>
                Week 6: Will you be able to find me?
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{backgroundColor:"#99CC63"}}>
        <Link to={`/animal/mushroom`}>
                Week 7: I'm a fun-guy
        </Link>
        </Button>
        </center>
      </div>
                <br/>    
                <WeeklyChallenge/>
            </AppContainer>

        );
    }
}