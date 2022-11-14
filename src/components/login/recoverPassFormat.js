import React, { useState } from 'react';
import PopupLogin from './loginPopup';
import styled from 'styled-components';
const RecoverPass = () => {
  return (
    <div>
      <div class="form-elementRegister">
        <label for="email">Correo eléctronico </label>
        <input type="text" id="email"></input>
        <button class="form-button">Enviar</button>
        <p>
          Para recuperar tu cuenta ingresa el correo con el que te registraste
          en el sitio, si los datos son correctos recibirás un mail para restablecer tu contraseña.
        </p>
      </div>
    </div>
  );
}
export default RecoverPass;