import React from "react";
import logo from "../../assets/img/logo.svg";
import Mainbanner from '../../assets/img/background-main.png';


const Header = () => {
  return (
    <>
      <header>
        <img src={Mainbanner} alt="" />
        
      </header>
      <section className="logo">
        <img src={logo} alt="" />
      </section>
      <section className="text">
        <p>
          Good food is <br /> The Foundation of <br />{" "}
          <span>GENUINE HAPPINESS</span>
        </p>
      </section>
      </>
  );
};

export default Header;
