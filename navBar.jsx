import React from "react";
import './navBar.css';
import trek from '../images/logo.png';

function navBar() {
    return(
    <header className = "App-header" >
        <a href="#zona1" className='logo' id='logo'> <img src={trek} alt="" /></a>
        <nav className='NavBar'>
            <ul>
                <li><a href="#zona1">Inicio</a></li>
                <li><a href="#zona2">Presentación</a></li>
                <li><a href="#zona3">Catálogo</a></li>
                <li><a href="#zona4">Contacto</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default navBar;