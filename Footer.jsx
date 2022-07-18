import React from "react";
import './Footer.css';
import {faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';

//para esta pagina web se instalaron repositorios de font awesome para utilizar sus iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faShop} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <footer class="footer ">
            <h3>Frontend Sección P12C2 2022 <span>|</span> Egon Benavente Rodríguez <div className="redes" style={{fontSize:"30px"}} >
            <a href="https://www.trekbikes.com/es/es_ES/" target="blank"><FontAwesomeIcon icon={faShop} /></a>       <a href="https://github.com/Keyshirou/React-Front-Trek-" target="blank"><FontAwesomeIcon icon={faGithub} /></a>    <a className='insta' href="https://www.instagram.com/trekbikes/" target="blank"><FontAwesomeIcon icon={faInstagram}/></a>  </div> </h3>
        </footer>
)
}

export default Footer;