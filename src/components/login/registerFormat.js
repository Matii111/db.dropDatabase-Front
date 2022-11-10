import React, { useState } from 'react';
import PopupLogin from './popup';
import styled from 'styled-components';
const RegisterForm =()=>{       
    return (      
    <div>    
      <div class="form-elementRegister">
            <label for="email">Nombre</label>
            <input type="text" id="name"></input>
      </div>
      <div class="form-elementRegister">
            <label for="email">Apellido</label>
            <input type="text" id="sername"></input>
      </div>
      <div class="form-elementRegister">
            <label for="email">Teléfono</label>
            <input type="tel" id="phone"></input>
      </div>      
      <div class="form-elementRegister">
        <label for="email">Correo eléctronico </label>
        <input type="text" id="email" placeholder="fukusukesushi@gmail.com"></input>
      </div>          
      <div class="form-elementRegister">
        <label for="email"> Confirmar correo eléctronico </label>
        <input type="text" id="confirmEmail"></input>
      </div>
      <div class="form-elementRegister">
            <label for="password">Contraseña </label>
            <input type="password" id="password"></input>
      </div>
      <div class="form-elementRegister">
            <label for="password">Confirmar contraseña </label>
            <input type="password" id="confirmPassword"></input>
            <button class="form-button">Registrar</button>              
      </div>             
    </div>
    );
}
export default RegisterForm;