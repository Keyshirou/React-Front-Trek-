import './App.css';
import React from 'react';

import NavBar from './components/navBar';
import Slider from './components/Slider';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';

import trek from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import subrayado from './images/subrayado.png';


function App() {
  return (
    <div className="App">
      <NavBar />
      <body>
        <section className='zona1' id='zona1'><h1>DESATA <br /> A LA <span>BESTIA!</span> <br />TÚ BICICLETA IDEAL  <br /> EN <img src={trek} alt=""/><br /><img src={subrayado} alt="" id='subray' /> </h1><Slider /></section>
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </body>
        </div >
  );
}

export default App;
