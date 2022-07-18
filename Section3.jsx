import React from "react";
import './Section3.css';
import Cards from '../components/Cards';

function Section3(){
    return(
    <section className='zona3' id='zona3'>
        <h1>Catálogo</h1>
        <div className='cards'>
            <Cards />
        </div>
    </section>
    )
}

export default Section3;
