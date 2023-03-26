import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{boxShadow: ".9px .9px 10px .9px black"}}>
                    <div className="container-fluid justifyContent-center">
                        <a className="navbar-brand" href="/"><strong>News&You</strong></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Business-News">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Entertainment-News">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Health-News">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Science-News">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Sports-News">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Technology-News">Technology</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar