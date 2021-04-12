import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input aria-label='Nombre' className='input' type='text' placeholder='Nombre' />
        <input aria-label='Correo' className='input' type='text' placeholder='Correo' />
        <input aria-label='Contaseña' className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Registrarme</button>
      </form>
      <p className='register__container--login'>Ya tienes cuenta? <a href='/'>Inicia sesión</a></p>
    </section>
  </section>
);

export default Register;
