import React from 'react';
import './styles.css';
import Navbar from './components/navbar/navbar';
import SelectRol from './components/pageDesign/selectRol';
import MenuLogo from "./components/pageDesign/menulogo";
import GotTop from './components/pageDesign/goTop';
import Footer from './components/pageDesign/footer';
import styled from 'styled-components';
import Slideshow from './components/pageDesign/slideshow';
import ItemsMenu, { Items } from './components/productos/itemsMenu';
import ItemsExtras from './components/productos/itemsExtras';
import MapDelivery from './components/map/mapDelivery';

// TODO:Hay que implementar el coso de maps y las ventanas esas dinamicas de pcfactory, ademas dentro de esas hay que agregar
// productos y  para luego hacer los popup de cada uno
class App extends React.Component {
  render() {
    return (
      <>
        <div class="contentBackground">
          <Navbar></Navbar>
          <header id="promociones" class="header-image">
            <SelectRol></SelectRol>
            <MenuLogo></MenuLogo>
          </header>
          <Slideshow></Slideshow>
          <GotTop></GotTop>
          <div class="content">
            <body>
              <ItemsMenu></ItemsMenu>
              <ItemsExtras></ItemsExtras>
              <h1 id="despacho">Despacho</h1>
              <div style={
                { 
                border: "1px", 
                width: "500px", 
                height: "300px",
                margin:"20px",
                padding:"20px",      
                paddingLeft:"230px",              
                zIndex:"1"       
                }}>                        
                <MapDelivery />                                
              </div>
            </body>
          </div>
          <Footer></Footer>
        </div>
        <div>

        </div>

      </>
    );
  }
}

export default App;
