import React from 'react';
import { Slide } from 'react-slideshow-image';
/*import { ReactComponentElement as flechaizquierda} from './../imgs/iconmonstr-angel-left-thin.svg';
import { ReactComponentElement as flechaderecha} from './../imgs/iconmonstr-angel-right-thin.svg';*/


const slideImgs = [

  {
    url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/17/00/aa/sushi-roll.jpg',
    caption: 'sushipleto'
  },
  {
    url: 'https://s1.eestatic.com/2021/05/27/como/584453709_186431572_1706x960.jpg',
    caption: 'sushiburger'
  },
  {
    url: 'https://www.sushinikkei.cl/images/bg1.jpg',
    caption: 'sushipletoa'    

  }

];


const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
       {slideImgs.map((slideImgs, index)=> (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${slideImgs.url})`}}>
              <span>{slideImgs.caption}</span>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}


export default Slideshow;