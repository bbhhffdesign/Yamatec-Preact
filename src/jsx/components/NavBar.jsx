// import { useState } from 'react';
import logo from "../../assets/img/logos/logoYamatecHeader.webp";
import { motion } from "motion/react";

function NavBar() {
  return (
    <motion.header
      className="nav"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "tween", ease: "linear", duration: .8 }}
    >
      <div className="nav__bar"></div>
      <img className="nav__logo" src={logo} alt="" />
    </motion.header>
  );
}

export default NavBar;
