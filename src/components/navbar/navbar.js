import React from 'react';
import LoginForm from '../login/loginFormat';
import RegisterForm from '../login/registerFormat';
import Order from './order';
let navbar;
let sticky;

class Navbar extends React.Component {
  //funcion que permite a la navbar permanecer o no en top   
  componentDidMount() {
    navbar = document.getElementById("main-navigation");
    sticky = navbar.offsetTop;
    window.addEventListener('scroll', this.handleSticky);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSticky);
  }
  handleSticky = () => {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  render() {
    return (
      <div id="main-navigation" className="navbar navbar-expand-lg navbar-light">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <ul class="ulHeader">
          <form class="searchbox">
            <input type="text" placeholder="Hosomaki..."></input>
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
          <div>
            <li class="liHeader"><a href="#promociones">Promociones</a></li>
            <li class="liHeader"><a href="#menus">Menus</a></li>
            <li class="liHeader"><a href="#extras">Extras</a></li>
            <li class="liHeader"><a href="#despacho">Despacho</a></li>
            <LoginForm></LoginForm>
            <Order></Order>
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;