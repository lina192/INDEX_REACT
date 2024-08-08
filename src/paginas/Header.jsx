import React from 'react';
import logo from '../elementos/logo.png'; 
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <div className="container-fluid">
                <img src={logo} className="usuario" alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className="nav-link btn btn-link" onClick={() => { }}>Login</button>
                    </div>
                </div>
            </div>
        </nav>    
    );
}

export default Header;
