import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div class="ffooter">
        <ul class="ulFooter">
          <div class="rrssFooter">
            <h3 class="rrssFooterH3">Redes Sociales</h3>
            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer noopener">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer noopener">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href='https://twitter.com/' target="_blank" rel="noreferrer noopener">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
          </div>
          <div class="infoFooter">
            <li class="liFooter">
              <a class="infoFooter" href="https://github.com/Matii111/reactTest" target="_blank" rel="noreferrer noopener">Contacto</a></li>
            <li class="liFooter">
              <a class="infoFooter" href="https://github.com/Matii111/reactTest" target="_blank" rel="noreferrer noopener">Términos y condiciones</a></li>
            <li class="liFooter">
              <a class="infoFooter" href="https://github.com/Matii111/reactTest" target="_blank" rel="noreferrer noopener"> Preguntas frecuentes </a></li>
          </div>
          <div class="cartaFooter">
            <p></p>
            <li class="liFooter"><a class="infoFooter"  href="https://github.com/Matii111/reactTest" target="_blank" rel="noreferrer noopener">Descargar carta</a></li>
          </div>
          <a href="/home"><img class="logoFooter" alt="logo"
            src="https://media.discordapp.net/attachments/352829804057329674/1039616691979690117/sushi.png" /></a>
        </ul>
      </div>
    );
  }
}
export default Footer;