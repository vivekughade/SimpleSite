import React from 'react';

import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <>
        
        <div className="row">
        <div className="col-lg-3">
             <div className="lpanel">
            <img src="/images/logo-image.jpg" className="img-thumbnail"/>
            <h1>Farming</h1>
            <p>All essential farming tools are here.</p>

            
              
            <nav className="main-nav" role="navigation">
        <ul className="main-menu">
        <NavLink exact activeClassName="ac" className="a"to="/" >Home</NavLink>
        <NavLink activeClassName="ac" className="a" to="/products">Products</NavLink>
        <NavLink activeClassName="ac" className="a" to="/products2">Services</NavLink>
        <NavLink activeClassName="ac" className="a" to="/features">Features</NavLink>
        <NavLink activeClassName="ac" className="a" to="/todolist">ToDoList</NavLink>
        <NavLink activeClassName="ac" className="a" to="/accordian">Gallery</NavLink>
        <NavLink activeClassName="ac" className="a" to="/contact">Contact</NavLink>
        </ul>
        </nav>
        </div>
        </div>
        
          
          </div>
        </>
    );
};

export default Home;