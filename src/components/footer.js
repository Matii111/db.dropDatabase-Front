import React from 'react';

class Footer extends React.Component{
  render(){
    return (          
      <div class="ffooter">
        <ul class="ulFooter">        
            <div class="rrssFooter">
                <h3 class="rrssFooterH3">Redes Sociales</h3>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
            <div class="infoFooter">                
                <li class="liFooter"><a class = "infoFooter" href="#">Contacto</a></li>
                <li class="liFooter"><a class = "infoFooter" href="#">Términos y condiciones</a></li>
                <li class="liFooter"><a class = "infoFooter" href="#"> Preguntas frecuentes </a></li>
            </div>                        
            <div class="cartaFooter">   
            <p></p>             
                <li class="liFooter"><a class = "infoFooter" href="#">Descargar carta</a></li>                
            </div>
        </ul>
      </div>
    );
  }
}
export default Footer;