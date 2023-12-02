import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./NavBar.module.css";


/*function Navbar () {
    return (
        <NavContainer>
            <h2>Navbar <span>responsive</span></h2>
            <div>
                <a href='./Home'>Home</a>
                <a href='./Makeup'>Makeup</a>
                <a href='./Productos'>Productos</a>
                <a href='./Servicios'>Servicios</a>
            </div>
        </NavContainer>
    )
}*/


const Links  = [
   {
    name: "Home",
    href: "/Home",
},

{
    name: "Makeup",
    href: "/Makeup",
},
{
    name: "Productos",
    href: "/Productos",
},
{
    name: "Servicios",
    href: "/Servicios",
},
];

const NavBar = () => {


    return (
    
    <div className={styles.navBar}>
        <ul className={styles.linksContainer}>
           
            {Links.map(x => (
                <div >
                <Link to={x.href} className={styles.navLink}>{x.name} </Link>
                </div>
            ))}
        </ul>
    </div>
   
    );
};


export default NavBar;









