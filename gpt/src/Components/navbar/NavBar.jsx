import React, { useState } from "react";
import "./navbar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <>
      <div className="gpt3__navbar-links_container">
        <motion.p whileHover={{ y: -2 }}>
          <a href="#home">Home</a>
        </motion.p>
        <p>
          <a href="#whgpt3">What is GPT3?</a>
        </p>
        <p>
          <a href="#possibility">Open AI</a>
        </p>
        <p>
          <a href="#features">Library</a>
        </p>
        <p>
          <a href="#blog">Library</a>
        </p>
      </div>
    </>
  );
};

export default function NavBar() {
  const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu />
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toogleMenu ? (
          <RiCloseLine
            color="#fff"
            size={26}
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={26}
            onClick={() => setToogleMenu(true)}
          />
        )}
        {toogleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
