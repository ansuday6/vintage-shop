import React ,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";



export default function MultipleItems()  {
     
  
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      pausOnHover: true,
      lazyLoad: true, 
      opacity: 1,
      
      
      

      responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
        },

        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3
          }
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }

     
    
      ]};


    
    return (
    <div>
        <Slider {...settings}>

    
        
            <img src="http://image.kyobobook.co.kr/newimages/music/large/6725/2527636.jpg"/>
           

            <img src="https://oppastore.ph/web/product/big/202105/0066bbb7247a6cf915b54b1e12a04bc2.png"/>
           

            <img src="http://image.kyobobook.co.kr/newimages/music/large/0245/2542098.jpg" />
           
            <img src="https://contents.lotteon.com/itemimage/_v144252/LO/14/90/29/70/61/_1/49/02/97/06/2/LO1490297061_1490297062_1.jpg/dims/resizef/720X720"/>


            <img src="https://static.coupangcdn.com/image/vendor_inventory/09d3/dc766140bcf235a67af7fdcaed1cba3375d86623667e57f77311cac28088.jpg"/>

            <img src="http://image.kyobobook.co.kr/newimages/music/large/3715/2517380.jpg"/>
           
            <img src="https://pbs.twimg.com/media/FHX2z8waMAgjqlY?format=jpg" />

            <img src="http://image.yes24.com/usedshop/2021/0218/_/afda1036-856e-419b-a40b-0236ad4cb407.jpg"/>

            <img src="https://ygselect.com/web/product/big/202109/ac96b0daa687294bb2508b001caba954.jpeg"/>

      
   
        
        </Slider>

        </div>

       
      
    );
  }



