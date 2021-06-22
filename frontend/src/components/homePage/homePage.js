import React from "react";
import NavBar from "../navbar/navbar";
import "./homePage.css";
import "./homepagestyle.css";
// import { BiodiversityProfile } from "../biodiversityProfile";
// import { WeeklyChallenge } from "../biodiversityProfile";
// import { UserProfile } from "../userProfile";
// import LogIn  from "../login/login";
// import SignUp from "../signup/signup";
// import { AccountBox } from "../accountBox";
import styled from "styled-components";
import { Link } from "react-router-dom";

{/* <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,300;1,600&display=swap" rel="stylesheet"></link> */}

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
  display: flex;
  justify-content: space-between;
  padding: 10px 20px; 
  border: 0;
  background: blanchedalmond;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;
  color: #fff;
  border-radius: 40px;
  outline: 0;
  width: 220px;
  margin: 10px;
  box-shadow: 0px 2px 2px lightgray;
  &:hover{
    background-color: #000;
  }
`;

const AppContainer = styled.div`
  display: flex;
  width: device-width;
  height: 100%;
  flex-direction: column;
  align-items: column;
  justify-content: center;
  background: white;
  color: white;
`;

const TopContainer = styled.div`
  display: center;
  width: device-width;
  background: rgb(0,0,0);
`;
export default class HomePage extends React.Component {
    render() {
        return (
            <AppContainer>
                <TopContainer>
                  <NavBar/>
                </TopContainer>
                
                <div class="welcome-text">
                  <h1>Are you a <span>BioHunter</span>?</h1>
                  <Button>LEARN MORE</Button>
                </div>
                {/*
                {animals.map((animal) => (
                    <Link to={`/animal/${animal}`}>
                        {animal}<br/>
                    </Link>

                ))} */}
        <div>
            <center>
            <Button>
                <Link to={`/animal/bee`}>
                Week 1: What's the buzz about?
                </Link>
            </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{color:"#fff"}}>
        <Link to={`/animal/bug`}>
                Week 2: Who may I be?
        </Link></Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{color:"#38B6FF"}}>
        <Link to={`/animal/bird`}>
                Week 3: A little birdie told me...
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{color:"#05ABC4"}}>
        <Link to={`/animal/bug`}>
                Week 4: Are you bugged yet?
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{color:"#FAD74B"}}>
        <Link to={`/animal/mouse`}>
                Week 5: Why rat when you can...
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{color:"#E8C892"}}>
        <Link to={`/animal/robin`}>
                Week 6: Will you be able to find me?
        </Link>
        </Button>
        </center>
      </div>
      <div>
        <center>
        <Button style={{color:"#99CC63"}}>
        <Link to={`/animal/mushroom`}>
                Week 7: I'm a fun-guy
        </Link>
        </Button>
        </center>
      </div>
            </AppContainer>

        );
    }
}