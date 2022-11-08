import React from 'react';
let navbar;
let sticky;

class Navbar extends React.Component{
  componentDidMount(){
    navbar = document.getElementById("main-navigation");
    sticky = navbar.offsetTop;
    window.addEventListener('scroll', this.handleSticky);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleSticky);
  }
  handleSticky = () =>{
    if(window.pageYOffset > sticky){
      navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
  }
  render(){
    return (      
      <div id="main-navigation" className="navbar navbar-expand-lg navbar-light">            
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>                          
        <ul>
          <form class="searchbox">
            <input type="text" placeholder="Hosomaki..."></input>
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
            <div>            
                <li><a href="#promociones">Promociones</a></li>          
                <li><a href="#menus">Menus</a></li>
                <li><a href="#extras">Extras</a></li>
                <li><a href="#despacho">Despacho</a></li>                 
            </div>
          <div class="useroption">
            <button> Ver orden</button>          
            <button> Login</button>                   
          </div>       
        </ul>          
      </div>
    );
  }
}

export default Navbar;