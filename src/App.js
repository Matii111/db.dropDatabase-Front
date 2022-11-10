import React from 'react';
import './styles.css';
import Navbar from './components/navbar/navbar';
import SelectRol from './components/selectRol';
import MenuLogo from "./components/pageDesign/menulogo";
import GotTop from './components/pageDesign/goTop';
import Footer from './components/pageDesign/footer';
import styled from 'styled-components';
import Slideshow from './components/slideshow';


// TODO:Hay que implementar el coso de maps y las ventanas esas dinamicas de pcfactory, ademas dentro de esas hay que agregar
// productos y  para luego hacer los popup de cada uno
class App extends React.Component{
  render(){
    return (
      <div>                  
        <header class="header-image">
          <SelectRol></SelectRol>
          <MenuLogo></MenuLogo>                  
          <Navbar></Navbar>  
        </header>
        <Slideshow></Slideshow>
        <GotTop></GotTop>            
        <div class="content">
          <body>
            <h1> bbbbbb</h1>
            <p>            
            </p>
          </body>           
        </div> 
        <Footer></Footer>    
      </div>    
    );
  }
}

export default App;
