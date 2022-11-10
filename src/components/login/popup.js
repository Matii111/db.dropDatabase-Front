import React, { useState } from 'react';
import styled from 'styled-components';

const PopupLogin = ({children, statePopup, changeStatePopup, titulo ='alert'}) =>{
  return(
    <> 
      {statePopup &&
        <DarkBackground>
          <Popup>       
            <PopupTitle> 
              <h1>{titulo}</h1>                             
            </PopupTitle>          
            <ButtonClose onClick={()=>changeStatePopup(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
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

  `;  
const Popup = styled.div`
  width:500px;  
  height: 800px;
  background: #111;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding:20px;
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
`;
