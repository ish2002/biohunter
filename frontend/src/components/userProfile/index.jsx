import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "../accountBox/loginForm";
//import { motion } from "framer-motion";
import { AccountContext } from "../accountBox/accountContext";
import { SignupForm } from "../accountBox/signupForm";
import image from './leavesbg.png';
import icon from './icon.png';
import beeliever from '../challenges/beeliever.png';
import './styles.css';

const BoxContainer = styled.div`
  width: 290px;
  max-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #BCE790;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  align-items: center;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0em;
  padding-bottom: 0em;
`;

const BottomContainer = styled.div`
width: 250px;
min-height: 60px;
display: flex;
flex-direction: column;
border-radius: 12px;
top: 50px;
right: 50px;
background-color: #fff;
box-shadow: 0 0 5px rgba(15, 15, 15, 0.28);
position: right;
overflow: hidden;
`;

// const BackDrop = styled(motion.div)`
//   width: 160%;
//   height: 550px;
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   border-radius: 50%;
//   transform: rotate(60deg);
//   top: -290px;
//   left: -70px;
//   background: rgb(115,123,249);
//   background: linear-gradient(
//     50deg,
//     rgba(115,123,249,1) 20%,
//     rgba(45,217,191,1) 100%
//   );
// `;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  color: #43281C;
  z-index: 10;
  margin: 0;
`;

// Username
// Location
// Badges Earned : Number/ Number+picture
// Pictures ? Rohan.

const SmallText = styled.h5`
  color: #43281C;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  margin-top: 50px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;
`;

// const backdropVariants = {
//   expanded: {
//     width: "233%",
//     height: "1050px",
//     borderRadius: "20%",
//     transform: "rotate(60deg)",
//   },
//   collapsed: {
//     width: "160%",
//     height: "550px",
//     borderRadius: "50%",
//     transform: "rotate(60deg)",
//   },
// };

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function UserProfile(props) {
//  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
  //  setExpanded(true);
    setTimeout(() => {
  //    setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  // const switchToSignup = () => {
  //   playExpandingAnimation();
  //   setTimeout(() => {
  //     setActive("signup");
  //   }, 400);
  // };

  // const switchToSignin = () => {
  //   playExpandingAnimation();
  //   setTimeout(() => {
  //     setActive("signin");
  //   }, 400);
  // };

  const switchToHomePage = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("Home");
    }, 400);
  };


  const contextValue = { switchToHomePage };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <img src={image} width="290" height="250" alt="Profile Background"/>
        <TopContainer>
          <HeaderContainer>
          <center>
          <HeaderText>User</HeaderText>
          <HeaderText>Profile</HeaderText>
          </center>
        </HeaderContainer>
        <center><img src={icon} width={100} height={100} class="center" alt="Profile icon"/></center>
        </TopContainer>
        <p></p>
        <center><BottomContainer>
          <InnerContainer>
            <div className="myDiv">
              <label>Username : <txt>James Todd</txt></label>
            </div>
            <div className="myDiv">
              <label>Location : <txt>Wales</txt></label>
            </div>
            <div className="myDiv">
              <label>Achievements : <txt>Points</txt></label>
            </div>
          </InnerContainer>
          {active === "Home" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </BottomContainer></center>
      <p></p>
      </BoxContainer>
    </AccountContext.Provider>
  );
}

/* <center>
<img src={beeliever} width={40} height={40}/>
</center> */

/* <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          /> */
// {/* <SmallText>Please sign-up to continue!</SmallText> */}

// {active === "signin" && (
//   
// )}
// {active === "signup" && (
//   <HeaderContainer>
//     <HeaderText>Create</HeaderText>
//     <HeaderText>Account</HeaderText>
//   </HeaderContainer>
// )}
