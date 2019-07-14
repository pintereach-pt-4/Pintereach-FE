import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/bootstrap.min.css';


const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Pintereach</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse show" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"> 
                            <NavLink to="/" activeClassName="activeNavButton" className="nav-link">
                            Home <span className="sr-only">(current)</span>
                            </NavLink>
                           
                        </li>
                        <li className="nav-item">
                         <NavLink to="/signin" activeClassName="activeNavButton" className="nav-link">
                            Sign In
                            </NavLink>
                        </li>
                        <li className="nav-item">
                         <NavLink to="/register" activeClassName="activeNavButton" className="nav-link">
                            Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                         <NavLink to="/boards" activeClassName="activeNavButton" className="nav-link">
                            My Boards
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Nav;