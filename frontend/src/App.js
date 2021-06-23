import "./App.css";
import styled from "styled-components";
import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./components/homePage/homePage";
import About from "./components/homePage/about";
//import { useState } from "react";
import { BiodiversityProfile } from "./components/biodiversityProfile";
import { WeeklyChallenge } from "./components/biodiversityProfile";
import { UserProfile } from "./components/userProfile";
import LogIn  from "./components/login/login";
import SignUp from "./components/signup/signup";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState()
  
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const user = { username, password };
  //   // send the username and password to the server
  //   const response = await axios.post(
  //     "http://biohunter.herokuapp.com/api/login",
  //     user
  //   );
  //   // set the state of the user
  //   setUser(response.data)
  //   // store the user in localStorage
  //   localStorage.setItem('user', response.data)
  //   console.log(response.data)
  // };

  // if(user) {
  //   return <div>{user.name} is logged in</div>
  // }

export default class App extends React.Component {

  render() {
    return (
      <>
        <title>BioHunters</title>
        <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/login">
              <LogIn/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
            <Route path="/animal/:name">
              <BiodiversityProfile/>
            </Route>
            <Route path="/profile">
              <UserProfile />
            </Route>
            <Route path="/about">
              <About />
            </Route>

        </Switch>
      </>
    );
  }
}


