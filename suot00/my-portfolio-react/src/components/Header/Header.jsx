import React from "react";
import "./Header.css";
const navLinks = [
  { display: "Services", url: "#services" },
  { display: "Works", url: "#works" },
  { display: "Blog", url: "#blog" },
];
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h3>S</h3>
        </div>
        <div className="nav_menu">
          <ul className="nav_list">
            {navLinks.map((item, index) => (
              <li className="nav_item" key={index}>
                <a href={item.url}>{item.display}</a>
              </li>
            ))}
            <button className="btn">Hire Me</button>
            {/* <span className="mobile_menu">
              <i className="ri-menu-5-line"></i>
            </span> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
