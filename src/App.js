import React from 'react';
import './styles.css';
import Navbar from './components/navbar';
import SelectRol from './components/selectRol';
import MenuLogo from "./components/menulogo";
import GotTop from './components/goTop';
import Footer from './components/footer';
import styled from 'styled-components';

class App extends React.Component{
  render(){
    return (
      <div>                  
        <header class="header-image">
          <SelectRol></SelectRol>
          <MenuLogo></MenuLogo>                  
          <Navbar></Navbar>  
        </header>                                          
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
