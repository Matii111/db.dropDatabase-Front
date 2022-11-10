import React, { useState } from 'react';
import PopupLogin from './popup';
import RegisterForm from './registerFormat';
import styled from 'styled-components';
import RecoverPass from './recoverPassFormat';
const LoginForm =()=>{  
    const [statePopup1, changeStatePopup1] = useState(false); 
    const [statePopup2, changeStatePopup2] = useState(false);    
    const [statePopup3, changeStatePopup3] = useState(false);    
    return (      
    <div>  
      <button class="useroption" onClick={()=>changeStatePopup1(!statePopup1)}>
      <label class="useroption">Iniciar sesión</label>  
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
      </button>
      <PopupLogin
        statePopup={statePopup1}
        changeStatePopup={changeStatePopup1}
        titulo="Login"
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>}
      >                     
      <div class="form-element">
        <label for="email">Correo eléctronico </label>
        <input type="text" id="email" placeholder="fukusukesushi@gmail.com"></input>
      </div>
      <div class="form-element">
            <label for="password">Contraseña </label>
            <input type="password" id="password"></input>
      </div>
      <div class="form-element">
            <input type="checkbox" id="remember-me"></input>
            <label for="remember-me">Mantener sesión </label>
      </div>
      <div class="form-element">
            <button class="form-button">Sign in</button>  
            <a onClick={()=>changeStatePopup3(!statePopup3)}href="#">Olvidaste tu contraseña?</a>
            <a onClick={()=>changeStatePopup2(!statePopup2)} href="#">Aun no te registras clickea aqui</a> 
            <PopupLogin
              statePopup={statePopup3}
              changeStatePopup={changeStatePopup3}
              titulo="Recuperar contraseña"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
              }
            >              
                <RecoverPass></RecoverPass>
            </PopupLogin> 
            <PopupLogin
              statePopup={statePopup2}
              changeStatePopup={changeStatePopup2}
              titulo="Register"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
              }
            >              
                <RegisterForm></RegisterForm>
            </PopupLogin>  
      </div>    
    
      </PopupLogin>
    </div>
    );
}
export default LoginForm;