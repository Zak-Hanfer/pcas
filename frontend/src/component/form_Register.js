import React from 'react';
import googleicon from "../pages/google.png"
import Header from "./header"
import '../pages/App.css';
function Form1() {
  return (
         
        <div className='form'>
          <h1>Inscription</h1>
          <input type="email" id="inpt1" placeholder='Enter Email'/> 
          <br />
          <input placeholder='Create User name'/> 
          <br />

          <input placeholder='Contact number'/> 
          <br />
          <input type="password" placeholder='Password'/> 
          <br />
          <input type="password" placeholder='Confrim Password'/> 
          <button>Register</button>
          <p id="pf">ou continue avec</p>
          <div id="icongoogle">
          <img  src={googleicon}  width={50} height={50}/>
          </div>
            
          </div>
  
  );
}

export default Form1;
