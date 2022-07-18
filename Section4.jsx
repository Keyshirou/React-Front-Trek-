import React from "react";
import './Section4.css';
import Form from 'react-bootstrap/Form';

function Section4() {
    return(
    <section className='zona4' id='zona4'>
        <div className="contact">
            <div className="contact-form">
                <Form>
                    <h2>Contacto</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" id="text"/>
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" id="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" placeholder="Escriba aquí el asunto o mensaje">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control as="textarea" rows={3} id="textarea" placeholder=''/>
                        <button className="btn-submit">Enviar</button>
                    </Form.Group>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Section4;