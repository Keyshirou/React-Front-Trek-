import React from 'react'
import './Card.css'

function Card({modelo,imageSource,precio}) {
    return (
    <div className='card text-center bg-black' id='card' >
        <img src={imageSource} alt=""/>
        <div className='card-body text-white'>
            <h4 className='card-title'>{modelo}</h4>
            <p className='card-text text-secondary'>{precio} </p>
            <a href='https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/bicicletas-de-monta%C3%B1a-de-cross-country/top-fuel/top-fuel-7/p/35070/?colorCode=green' className='boton' target='blank'>
                Comprar 
            </a>
        </div>
    </div>
    )
}

export default Card