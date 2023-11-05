import Logo from "./Logo";
import Menu from "./Menu";
import React from "react";

const Navbar = () => {
  return (
    <section id="main">
        <article>
            <Logo/>
            <Menu/>
        </article>
    </section>
  )
}

export default Navbar