import React from 'react';
import Form2 from '../component/form_for_login';
import PL from '../component/pL';
import Header from '../component/header'

function Login() {
  return (
  <div className='content'>
    <Header />
    <PL /> 
    <Form2 />
  </div>
  );
}

export default Login;
