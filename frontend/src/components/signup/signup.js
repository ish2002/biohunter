import React, { useState, useEffect } from "react";
import "./signup.css";
import fire from "./fire";
import { SignupForm } from "../accountBox/signupForm.jsx";
import Login from "./Login";
import Hero from "./Hero";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const ClearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const ClearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    try
    {
      ClearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          switch(error.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(error.message);
                break;
            case "auth/wrong-password":
                setPasswordError(error.message);
                break;
          }
        })
    }
    finally{}
    };

  const handleSignUp = () => {
    try
    {
      ClearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          switch(error.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(error.message);
              break;
            case "auth/wrong-password":
              setPasswordError(error.message);
              break;
          }
        })
    }
    finally{}
  };

  const handleLogout = () => {
    fire
    .auth()
    .signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(username => {
      if(username) {
        ClearInputs();
        setUsername(username);
      } else {
        setUsername("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="SignUp">
      {username ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          handleLogout={handleLogout}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
      </div>
  )
}

export default SignUp;

// export default class SignUp extends React.Component {
//     render() {
//         return (
//             <>
//                 <SignupForm/>
//             </>
//         );
//     }
// }