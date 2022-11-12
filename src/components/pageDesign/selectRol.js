import React from 'react';
import datos from '../../mocking/perfiles'
class SelectRol extends React.Component{
  render(){
    return (          
      <div>
        <select class = "select" name="perfil">
            {
            datos.map(obj =>{
                return(
                    <option id={obj.id}>
                        {obj.nombre}
                    </option>
                    )
            })
            }
          </select>  
      </div>
    );
  }
}
export default SelectRol;