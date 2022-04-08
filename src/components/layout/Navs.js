import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import {FcContacts} from 'react-icons/fc'
const Navs = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondry">
                <div className="container-fluid"> 
                    <Link className="navbar-brand bg-light" to="#"><FcContacts /> Contact Book</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <Link type="button" className="btn btn-primary" to="/adduser">AddUser</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navs