import React from 'react';
import img1 from '../elementos/ig.png';
import img2 from '../elementos/face.png';
import img3 from '../elementos/x.png';

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <h6 className="text-muted lead">CONTACTO:</h6>
                    <h6 className="text-muted">
                        Cra. 80 # 72b-23, Barrio Tabora<br />
                        Localidad de Engativá, Bogotá.<br />
                        Teléfonos: 3142141524 - 3155346512.<br />
                    </h6>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="pull-right">
                        <h6 className="text-muted lead">ENCUÉNTRANOS EN LAS REDES</h6>
                        <div className="redes-footer">
                            <a href="https://www.instagram.com/epalarepa_/"><img src={img1} alt="Instagram" /></a>
                            <a href="https://www.facebook.com/epaarepacolombia/"><img src={img2} alt="Facebook" /></a>
                            <a href="https://x.com/epaLarepa"><img src={img3} alt="Twitter" /></a>
                        </div>
                    </div>
                    <div className="row">
                        <p className="text-muted small text-right">
                            Copyright &copy; 2024 - BOGOTÁ <br />
                            Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
