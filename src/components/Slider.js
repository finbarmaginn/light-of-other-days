import React from 'react'
import 'imports-loader?jQuery=jquery!owl.carousel';
import sliderImages from '../imgs/slider'
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';

class ImageSlider extends React.Component {
  render() {
    let imagesLoaded = 0

    return (
      <article id="slider">
        <div className="loader" style={{position:'relative',top:'50px'}}>Loading...</div>
        <div>
          <div className="owl-carousel owl-theme">
            {sliderImages.map((image, i) => {
              return (
                <div key={i}>
                  <div className="image">
                    <figure>
                      <img src={image} alt={image} onLoad={() => {
                        imagesLoaded++;
                        if(imagesLoaded === sliderImages.length){
                          jQuery('.loader')[0].style.display = "none";
                          jQuery('.owl-carousel').owlCarousel({
                            autoplay: true,
                            autoplayTimeout:3000,
                            items: 10,
                            pagination: false,
                            loop: true,
                            center: true,
                            autoWidth: true,
                            smartSpeed: 1000,
                            responsiveRefreshRate: 100
                          })
                        }
                      }}/>
                    </figure>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </article>
    )
  }
}


export default ImageSlider