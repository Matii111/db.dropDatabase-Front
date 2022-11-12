import React from 'react';
import { Slide } from 'react-slideshow-image';
const slideImgs = [
  {
    url: 'https://cdn.discordapp.com/attachments/352829804057329674/1040406560704307240/sushiSlide.png',
    caption: 'Nagasaki'
  },
  {
    url: 'https://cdn.discordapp.com/attachments/530176357108285441/1040411098207244388/sushiSlideChiba.png',
    caption: 'Chiba'
  },
  {
    url: 'https://cdn.discordapp.com/attachments/530176357108285441/1040412940387496006/sushiSlideHokkaido.png',
    caption: 'Hokkaido'
  }
];

const responsiveSettings = [
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
];


const buttons = {
  prevArrow:
    <button className="slideButtons">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
      </svg>
    </button>,
  nextArrow:
    <button className="slideButtons">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
      </svg>
    </button>
}
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide
        {...buttons}
        responsive={responsiveSettings}
        slidesToScroll={1} slidesToShow={1}
      >
        {slideImgs.map((slideImgs, index) => (
          <div className="each-slide" key={index}>
            <div style={{ 'backgroundImage': `url(${slideImgs.url})` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}


export default Slideshow;