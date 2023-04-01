import React, { useState } from "react";
import Logo from "../imgs/handle_low_op_bck.png";

const Header = () => {
  const [active, setActive] = useState("home");
  window.onscroll = () => {
    setActive('home')
  }
  return (
    <header>
      <div>
        <a href="/">
          <img src={Logo} alt="" width="106px" height="50px"/>
        </a>
        <ul>
          <a href="/">
            <li
              onClick={() => setActive("home")}
              style={{
                backgroundColor: active === "home" ? "#D93D5E" : "transparent",
              }}
            >
              <i class="fa-solid fa-house"></i> <span>Home</span>
            </li>
          </a>
          <a href="#about-us">
            <li
              onClick={() => setActive("services")}
              style={{
                backgroundColor:
                  active === "services" && "#D93D5E"
              }}
            >
              <i class="fa-solid fa-circle-info"></i> <span>About</span>
            </li>
          </a>
          <a href="#contact">
            <li
              onClick={() => setActive("about us")}
              style={{
                backgroundColor:
                  active === "about us" && "#D93D5E" ,
              }}
            >
              <i class="fa-solid fa-address-book"></i> <span>Contact</span>
            </li>
          </a>
          <a href="#founder">
            <li
              onClick={() => setActive("founder")}
              style={{
                backgroundColor:
                  active === "founder" && "#D93D5E",
              }}
            >
              <i class="fa-solid fa-user-tie"></i> <span>Founder</span>
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
