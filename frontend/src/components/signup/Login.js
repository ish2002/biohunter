import React from 'react';

const Login = (props) => {
  const
    { 
      email, 
      setEmail, 
      password, 
      setPassword, 
      handleLogin, 
      handleSignUp, 
      hasAccount, 
      setHasAccount, 
      handleLogout, 
      emailError, 
      passwordError
    } = props;
  return(
    <section class="login">
      <div class="loginContainer">
        <label>Username</label>
        <input 
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />  
        <p class="errorMsg">{emailError}</p>
        <label>Password</label>
        <input 
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />  
        <p class="errorMsg">{passwordError}</p>
        <div class="btnContainer">
          {hasAccount ? (
              <>
                <button onClick={handleLogin}>
                  Login
                </button>
                <p>
                  Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                </p>
              </>
            ) : (
              <>
              <button onClick={handleSignUp}>
                Sign up
              </button>
              <p>
                Already have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
              </>
            )}
        </div>
      </div>
    </section>
  )
}

export default Login;