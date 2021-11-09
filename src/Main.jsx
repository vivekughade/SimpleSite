import React from 'react';
import Nav from './Nav';
import Products from './Products';
import Products2 from './Products2';
import Features from './Features';
import Accordian from './Accordian';
import Contact from './Contact';
const Main = () => {
    return (
        <>  <div className="row">
                <div className="col-lg-3">
                    <Nav/>
                </div>
                <div className="col-lg-9">
          <div className="rpanel">
          
              <img src="/images/aerobic-girls.jpg" alt="aerobic"/>
              
              
              
                
                <Products/>
                <Products2/>
                <Features/>
                <Accordian/> 
                <Contact/>
                </div>  
                </div>
                </div>
        </>
    );
};

export default Main;