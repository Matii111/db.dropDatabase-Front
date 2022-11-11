import React, { useState } from 'react';
import styled from 'styled-components';
//TODO:El popup va joya , lo unico es que no cambia de tamanio con la pagina , no recuerdo la palabra pero no es 
//"adaptable"
const PopupLogin = ({children, statePopup, changeStatePopup, titulo ='alert', icon, logo}) =>{
  return(
    <> 
      {statePopup &&
        <DarkBackground>
          <Popup>       
            <PopupTitle>           
              {logo}
              <h1>{titulo}</h1>                                           
            </PopupTitle>          
            <ButtonClose onClick={()=>changeStatePopup(false)}>
              {icon}            
            </ButtonClose>
            {children}            
          </Popup>
        </DarkBackground>
      }
    </>
  )
}
export default PopupLogin;

const DarkBackground = styled.div`
  padding:40px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  background: rgba(0,0,0,.5);
  display: flex;
  align-item: center;
  justify-content: center;
  z-index:10;

  `;  
const Popup = styled.div`
  width:500px;  
  height: 800px;
  background: #111;
  position: fixed;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding:20px;
  z-index:10;
`;
const ButtonClose = styled.div`
  position: absolute;
  top:20px;
  right:20px;
  width:30px;
  height:30px;
  border:none;
  background:none;
  cursor: pointer;
  border-radius:5px;
  transition: .3s ease all;
  color: #ddd;
  &:hover{
    background: #333;
  }
  svg{
    width:100%;
    height:100%;
  }
  z-index:10;
`;
const PopupTitle = styled.div`
  display:flex;
  align-items:center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  h1{
    color:#ddd;
  }
  z-index:10;
`;
