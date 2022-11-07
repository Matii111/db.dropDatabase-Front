import React from 'react';
import './styles.css';
import Shortcuts from './components/shortcuts';
import datos from './mocking/perfiles';
import MenuLogo from "./components/menulogo";
import UserOptions from './components/useroptions';

class App extends React.Component{
  render(){
    return (
      <div>
        <select name="perfil">
          {
          datos.map(obj =>{
            return(
              <option id={obj.id}>{obj.nombre}</option>
            )
          })
          }
        </select>
        <header>
          <logo-row></logo-row>
          <MenuLogo></MenuLogo>
          <Shortcuts></Shortcuts>                          
          <UserOptions></UserOptions>
        </header>      
        
      </div>    
    );
  }
}

export default App;
