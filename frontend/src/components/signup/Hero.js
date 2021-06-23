import React from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = ({handleLogout}) => {
  return(
    <section className="hero">
      <nav>
        <h2>Hello, Welcome back!</h2>
        <div>
          <button>
            <FaHome fontsize="18px"/>
              <Link to="/home" style={{ textDecoration: 'none', color: "black"}}>
                &nbsp; Home
              </Link>  
          </button>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  )
}

export default Hero;

