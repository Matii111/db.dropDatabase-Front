import React, { useState } from 'react';
import ScrollWindow from './scrollWindow';
const UserData = () => {
      return (
            <>  
                  <div class="userPageInfo">                                        
                    <h2 class="seccionUsuario">Datos de usuario</h2>       
                    <div class="userPageInfo">    
                        <label for="email">Nombre</label>
                        <input type="non-editable" id="name"></input>      
                    </div>
                    <div class="userPageInfo">          
                        <label for="email">Apellido</label>
                        <input type="non-editable" id="sername"></input>                                        
                    </div>
                    <div class="userPageInfo">
                        <label for="email">Correo eléctronico </label>
                        <input type="non-editable" id="email" ></input>
                    </div>
                    <div class="userPageInfo">
                        <label for="email">Teléfono</label>
                        <input type="editable" id="phone"></input>
                    </div>
                    <div class="userPageInfo">    
                        <label for="email">Dirección</label>
                        <input type="editable" id="address"></input>                              
                    </div>
                    <button class="form-button">Actualizar datos</button>
                  </div>
                <div class="userPageInfo">
                    <h2 class="seccionUsuario">Datos de despacho</h2>     
                    <div class="userPageInfo">    
                        <label for="email">Región</label>
                        <input type="editable" id="region"></input>      
                    </div>
                    <div class="userPageInfo">    
                        <label for="email">Comuna</label>
                        <input type="editable" id="comuna"></input>      
                    </div>
                    <div class="userPageInfo">    
                        <label for="email">Ciudad</label>
                        <input type="editable" id="ciudad"></input>      
                    </div>
                    <div class="userPageInfo">    
                        <label for="email">Número</label>
                        <input type="editable" id="ciudad" placeholder='Casa, Depto, Oficina, Piso.'></input>      
                    </div>
                    <button class="form-button">Actualizar datos</button>
                </div>
                <div class="userPageInfo">
                    <h2 class="seccionUsuario">Datos de facturación</h2>    
                    <div class="userPageInfo">    
                        <label for="email">Metódo de pago 1</label>
                        <input type="non-editable" id="ciudad"></input>      
                    </div>  
                    <div class="userPageInfo">    
                        <label for="email">Metódo de pago 2</label>
                        <input type="editable" id="ciudad" ></input >      
                    </div>  
                    <button class="form-button" style={{marginBottom:"30px"}}>Actualizar datos</button>
                </div>        
                
            </>
      );
} 
export default UserData;