import React from 'react';

class Shortcuts extends React.Component{
  render(){
    return (      
      <div>                  
        <input class = "navbar" type="text" placeholder="Hosomaki"></input>
        <a class="shortcut" href="#Promociones">Promociones</a>
        <a class="shortcut" href="#Menus">Menus</a>
        <a class="shortcut" href="#Extras">Extras</a>
        <a class="shortcut" href="#Despacho">Despacho</a>
      </div>
    );
  }
}

export default Shortcuts;