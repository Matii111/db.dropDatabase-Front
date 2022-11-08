import React from 'react';
let TopButton ;
//funcion que al clickear el TopButton vuelve la pagina al header
function topFunction(){  
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
class GotTop extends React.Component{
  //funcion que permite ver el boton TOP al bajar mas de 400px
  componentDidMount(){
    TopButton = document.getElementById("topButton"); 
    window.addEventListener('scroll', this.scrollFunction);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollFunction);
  }
  scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
      TopButton.style.display = "block";
    } else {
      TopButton.style.display = "none";
    }
  }
  render(){
    return (
    <div>      
      <button onClick={topFunction} class = "topButtonStyle" id="topButton" title='got to top'>
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </button>       
    </div>
    );
  }
}
export default GotTop;


