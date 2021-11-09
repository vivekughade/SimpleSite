import React from 'react';
import { Redirect } from 'react-router';

const Products = () => {
    const boot=()=>{
        alert("working")
        return <Redirect to='/'  />

    }
    return( <>
      
    <div className="ibox">
        <div className="ab">
        <h1>Farming Needs</h1>
           <hr></hr>
           <p>Blugoon is free HTML template for everyone. 
           This is a Bootstrap v4.3.1 layout which you can fully customize for your websites.
            Please tell your friends about Tooplate. Thank you.</p>
        </div>
        <div className="a">
        <h1>New Web Design</h1>
                <p>You are allowed to use this template for commercial or personal websites. You are NOT allowed to redistribute this on template collection website. You can feature this template on your blog post.

All photos in this template are from Pexels website. Blugoon HTML Template is provided by Tooplate. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                <br></br>
            <button className="btn btn primary w" onClick={boot}>Read More</button>
        </div>
        <div className="a">
        <img src="/images/mountain-reflection.jpg"/>
         
        </div>
        </div>
       
        
    
    <hr></hr>
    
        </>
    )
}

export default Products;