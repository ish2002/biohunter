import React from 'react';
import { FaHome } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

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
        <div>
          <button>
            <VscAccount size="18px" color="black"/>
              <Link to="/profile" style={{ textDecoration: 'none', color: "black"}}>
                &nbsp; Account
              </Link>  
          </button>
        </div>
        <button onClick={handleLogout}>
          <FiLogOut size="18px" color="black"/>
          Logout
        </button>
      </nav>
    </section>
  )
}

export default Hero;

