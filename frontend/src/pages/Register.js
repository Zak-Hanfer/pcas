import React from 'react';
import Form1 from '../component/form_Register';
import PR from '../component/pR';
import Header from '../component/header'
function Register() {
  return (
  <div className='content'>
    <Header />
    <PR /> 
    <Form1 />
  </div>
  );
}

export default Register;