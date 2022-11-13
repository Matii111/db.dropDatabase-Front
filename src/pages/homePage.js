import React from 'react';
import '../styles.css';
import Navbar from '../components/navbar/navbar';
import SelectRol from '../components/pageDesign/selectRol';
import MenuLogo from "../components/pageDesign/menulogo";
import GotTop from '../components/pageDesign/goTop';
import Footer from '../components/pageDesign/footer';
import styled from 'styled-components';
import Slideshow from '../components/pageDesign/slideshow';
import ItemsMenu, { Items } from '../components/productos/itemsMenu';
import ItemsExtras from '../components/productos/itemsExtras';
import MapDelivery from '../components/map/mapDelivery';

//TODO:Hacer que el mapa de alguna forma tenga una caja de texto para ingresar direcciones

//TODO:Hacer que el button de aniadir al carro agregue algo(? puede que eso sea de back 
//pero al menos dejar una accion que sume +1 junto al icono de comprobar orden

//TODO:Crear nuevo POPUP para el formato de comprobar orden, tiene que mostrar algo 
//parecido al mock (mostrar precio total, productos agregados, costo de envio, costo total)

//TODO:Crear acceso a nueva pagina/ventana para el usuario (se mostraran sus datos y se 
//hara lo del reembolso)

//TODO:Para la lista de productos de  COMPROBAR ORDEN y para las COMPRAS REALIZADAS se tiene
//que crear una ventana con SCROLL


class HomePage extends React.Component {
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
            </body>            
            <h1 id="despacho">Despacho</h1>                      
            <div class="mapContainer">    
              <MapDelivery />  
            </div>           
          </div>
          <Footer></Footer>
        </div>
        <div>

        </div>

      </>
    );
  }
}

export default HomePage;
