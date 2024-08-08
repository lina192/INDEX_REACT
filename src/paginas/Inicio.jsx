import React from 'react';
import promGif from '../elementos/prom.gif';
import img1 from '../elementos/1.png';
import img2 from '../elementos/2.png';
import img3 from '../elementos/3.png';
import img4 from '../elementos/4.png';
import img5 from '../elementos/5.png';
import img6 from '../elementos/6.png';
import img7 from '../elementos/7.png';
import img8 from '../elementos/8.png';

const Inicio = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={promGif} className="d-block w-100" alt="Promoción" />
                    </div>
                </div>
            </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


            

                <div className="container my-4">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src={img3} className="d-block w-100" alt="Arepas" />
                        <br></br>
                        <h5>Arepas</h5>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={img5} className="d-block w-100" alt="Empanadas" />
                        <br></br>
                        <h5>Empanadas</h5>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={img1} className="d-block w-100" alt="Picadas" />
                        <br></br>
                        <h5>Hamburguesas</h5>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={img4} className="d-block w-100" alt="Otros Platillos" />
                        <br></br>
                        <h5>Perros Calientes</h5>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src={img7} className="d-block w-100" alt="Hamburguesas" />
                        <br></br>
                        <h5>Picadas</h5>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={img2} className="d-block w-100" alt="Salchipapas" />
                        <br></br>
                        <h5>Salchipapas</h5>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={img6} className="d-block w-100" alt="Mazorcadas" />
                        <br></br>
                        <h5>Mazorcadas</h5>
                    </div>
                    <div className="col-md-3 text-center">
                        <img src={img8} className="d-block w-100" alt="Perros Calientes" />
                        <br></br>
                        <h5>Otros Platillos</h5>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Inicio;
