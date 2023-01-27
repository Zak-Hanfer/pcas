import React from 'react';
import googleicon from "../pages/google.png"

function form2() {
  return (
  

    <div className='form'>
    <h1>Connexion</h1>
    <input id="inpt1" placeholder='Entrer email ou nom d’utilisateur '/> 
    <br />
    <input type="password" id="inpt2_fro_login" placeholder='mot de passe'/> 
    <br />

     <p id="ps">mot de passe oublier?</p>
    <button id="btn_fro_login" >Connexion</button>
    <p id="pf">ou continue avec</p>
    <div id="icongoogle">
    <img  src={googleicon}  width={50} height={50}/>
    </div>   

  </div>
 
  );
}
export default form2;
