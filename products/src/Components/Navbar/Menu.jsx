import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id="menu">
        <ul>
            <li>
                <Link to={"/"}>ADD_PRODUCT</Link>
            </li>
            <li>
                <Link to={"/view"}>VIEW</Link>
            </li>
            <li>SERVICES</li>
            <li>ABOUT</li>
        </ul>
    </div>
  )
}

export default Menu