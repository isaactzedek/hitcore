import React from 'react';
import Logo from './Logo.PNG'
import { NavLink } from 'react-router-dom'; 
function Navigationbar()
{
    return(
        <>
        <div className="container bg-light">
        <nav class="navbar navbar-expand-sm bglight">
            <img src={Logo} height="50" width="100"/>
            <form method="post">
                <div className="form-group">
                    <input type="search" placeholder="Enter Keywords #" size="100"/>
                    <span> </span> <span>  </span>   <span> </span> <span>  </span>
                    <span> </span> <span>  </span>    <span> </span> <span>  </span>
                    <button type="button" className="btn btn-danger">Search</button>
                </div>
            </form>
            </nav>
        </div>
        <nav className="navbar navbar-expand-md bg-light">
        <NavLink className="navbar-brand" to="/">HitCore</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Departments</NavLink>
                <div class="dropdown-menu">
                    <NavLink className="dropdown-item" to="/electric">Electric Guitars</NavLink>
                    <NavLink className="dropdown-item" to="/basses">Basses</NavLink>
                    <NavLink className="dropdown-item" to="/amp">Amps and Effects</NavLink>
                    <NavLink className="dropdown-item" to="/drums">Drums</NavLink>
                    <NavLink className="dropdown-item" to="/recording">Recording</NavLink>
                </div>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" >Services</NavLink>
                <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/lessons">Lessons</NavLink>
                </div>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Blog</NavLink>
                <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/news">News</NavLink>
                </div>
            </li>
            </ul>
        </div>
        </nav>
        <div className="container">
        <img src="https://ocl-steinberg-live.steinberg.net/_storage/asset/84403/storage/master/granular-guitars-opengraph.jpg" height="500" width="100%"/>
        </div>
        </>

    );
}

export default Navigationbar;