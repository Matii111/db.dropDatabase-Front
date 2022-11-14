import React, { useState } from 'react';
import styled from 'styled-components';
import Direcciones from '../../mocking/direcciones';
import PAYMENTS from '../../mocking/payments';
import datos from '../../mocking/perfiles';
import ScrollWindow from '../userPage/scrollWindow';
import OrderPopup from './orderPopup';

const Order = () => {
  const [statePopup4, changeStatePopup4] = useState(false);
  return (
    <div>
      <button class="useroption" onClick={() => changeStatePopup4(!statePopup4)}>
        <label class="useroption">Comprobar orden</label>
        <svg color="#fe646f" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>
      <OrderPopup
        statePopup={statePopup4}
        changeStatePopup={changeStatePopup4}
        titulo="Orden"
        logo={<img width="50" height="50" src="https://cdn.discordapp.com/attachments/352829804057329674/1040420749321711676/sushiNOTEXT.png"></img>}
        icon=
        {<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        }
      >
        <div class="scrollOrder">
          <div class="form-element">
            <h2>
              Dirección
            </h2>
            <body class="direcciones">         
              <div class="userPageInfo">    
                <input type="editable" id="address" placeholder='Nueva dirección'></input>                              
              </div>
              <div>
                <select class="select">
                  {
                    Direcciones.map(obj=>{
                      return(
                        <option id={obj.id}>
                          {obj.direc}
                        </option>
                      )
                    })
                  }               
                </select>
              </div>                       
            </body>
            <h2> Método de pago</h2>                          
              <body class="direcciones">     
                  <select class="select" style={{fontSize:"15px",  marginTop: "35px" }}>
                  {
                    PAYMENTS.map(obj=>{
                      return(
                        <option id={obj.id}>
                          {obj.payment}
                        </option>
                      )
                    })
                  } 
                  </select>                      
              </body>     
          </div>                  
          <div>
            <ScrollWindow titulo="Carrito"/>      
          </div>        
          <div class="scrollOrderPrices">
            <h2> Costo
            </h2>
            <body class="direcciones">                
              <h2>
                Total producto:
              </h2>
              <h2>
                Total despacho:
              </h2>
              <h2>
                Subtotal:
              </h2>
              <h2 style={{fontSize:"20px", width:"100px"}}>                
                Total:                                
                <div class="pay">
                <button class="form-button">Pagar</button>     
              </div> 
              </h2>
            </body>            
          </div>
        </div>    
      </OrderPopup>
      
    </div>
  );
}
export default Order;