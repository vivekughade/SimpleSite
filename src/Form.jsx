import React from 'react';
import "./style.css"
const Form = () => {
    return (
        <>
        <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label ">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label ">Email</label>
  <input type="email" className="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
         <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label c">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label c">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label c">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label c">Confirm password</label>
  <input type="password"  className="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
    <div class="mb-3">
    <button class="btn btn-dark">Submit</button>
    </div>
    
        </>
    );
};

export default Form;