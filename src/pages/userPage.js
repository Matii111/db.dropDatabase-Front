import React from 'react';
import '../styles.css';
import Navbar from '../components/navbar/navbar';
import SelectRol from '../components/pageDesign/selectRol';
import MenuLogo from "../components/pageDesign/menulogo";
import GotTop from '../components/pageDesign/goTop';
import Footer from '../components/pageDesign/footer';
import styled from 'styled-components';
import UserData from '../components/userPage/userData';
import ScrollWindow from '../components/userPage/scrollWindow';

class UserPage extends React.Component {
  render() {
    return (
      <>
        <div class="contentBackground">
          <Navbar></Navbar>
          <header id="promociones" class="header-image">
            <SelectRol></SelectRol>
            <MenuLogo></MenuLogo>
          </header>
          <GotTop></GotTop>
          <div class="content">
            <body>
              <ScrollWindow 
              titulo="Historial de compras"
              />
              <UserData></UserData>
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

export default UserPage;
