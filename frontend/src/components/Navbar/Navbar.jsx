
import React, { useState } from "react";
import { assets } from "../../assets/assets";
import './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.food_logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <div>
          <img src={assets.search_icon} alt="" />
        </div>
        <div className="navbar-search-icon">
          <img src={assets.grocery_store} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
