import React, { useState } from 'react';
import PopupLogin from './popup';
import RegisterForm from './registerFormat';
import styled from 'styled-components';
const LoginForm =()=>{  
    const [statePopup1, changeStatePopup1] = useState(false); 
    const [statePopup2, changeStatePopup2] = useState(false);    
    return (      
    <div>    
      <button class="useroption" onClick={()=>changeStatePopup1(!statePopup1)}>Login</button>
      <PopupLogin
        statePopup={statePopup1}
        changeStatePopup={changeStatePopup1}
        titulo="Login"
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
            <a href="#">Olvidaste tu contraseña?</a>
            <a onClick={()=>changeStatePopup2(!statePopup2)} href="#">Aun no te registras clickea aqui</a> 
            <PopupLogin
              statePopup={statePopup2}
              changeStatePopup={changeStatePopup2}
              titulo="Register">
                <RegisterForm></RegisterForm>
            </PopupLogin>  
      </div>    
    
      </PopupLogin>
    </div>
    );
}
export default LoginForm;