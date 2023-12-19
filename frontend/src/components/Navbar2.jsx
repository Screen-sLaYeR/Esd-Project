import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/Navbar2.css";
import logo from "../assets/5856.jpg";
const Navbar2 = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [logout, setLogout] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const handleItemClick = (itemNumber) => {
    setSelectedItem(itemNumber);
    props.onSelected(itemNumber);
    console.log(itemNumber);
  };
  const handleLogout = () => {
    localStorage.removeItem("username");
    setLogout(true);
  };
  return (
    <div>
      {logout ? (
        <Navigate to="/" replace />
      ) : (
        <nav className="navbar">
          <ul className="left">
            <li
              className={selectedItem === 1 ? "selected" : ""}
              onClick={() => handleItemClick(1)}
            >
              {props.n1}
            </li>
            <li
              className={selectedItem === 2 ? "selected" : ""}
              onClick={() => handleItemClick(2)}
            >
              {props.n2}
            </li>
            <li
              className={selectedItem === 3 ? "selected" : ""}
              onClick={() => handleItemClick(3)}
            >
              {props.n3}
            </li>
          </ul>

          <ul className="right">
            <img
              src={logo}
              className="logo"
              alt="account icon"
              onClick={toggleDropDown}
            />
          </ul>
          {showDropDown && (
            <div>
              <ul>
                <button onClick={handleLogout} id="logout-button">
                  Logout
                </button>
              </ul>
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navbar2;