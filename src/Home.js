import React from 'react';

import "./Home.css";
import Header from "./Header";
import Slider from "./Slider";
import Product from "./Product";
import useScrollFadeIn from "./useScrollFadeIn";
import {Link} from "react-router-dom";









 
const Home = () => {
  const animatedItem = {
    0: useScrollFadeIn('up',1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('right',2, 0.5),
    5: useScrollFadeIn('left', 2, 0.6),
    6: useScrollFadeIn('right',2, 0.7),
    7: useScrollFadeIn('left', 2, 0.8),
    8: useScrollFadeIn('up', 2, 0.9),
    9: useScrollFadeIn('up',2, 1.0),
    10:useScrollFadeIn('left',2,1.1),
    11:useScrollFadeIn('down',2,1.2),
};

  

  
    

   return (
    <div className={Header}>
      <Header/>
    

      
     <div className="home">
       <div className={Slider}><Slider /></div>



     

       <div className="home_container">
        
        
     

      

        <span {...animatedItem[0]} className="home_text"  > List </span>







         <div  {...animatedItem[1]}  className="home_row">


           
      

             <Product
               id="1000"
               image="http://image.kyobobook.co.kr/newimages/music/large/4745/2547416.jpg"
               title="O.S.T - THE ESSENTIAL DISNEY COLLECTION [디즈니 베스트 주제곡 모음집] [CLEAR ROYAL BLUE LP]"
               price={12900}
               />

             <Product 
               id="1001"
               title="ED SHEERAN - = [LP]"
               price={33000} image="http://image.kyobobook.co.kr/newimages/music/large/3645/2546310.jpg"
                />

             <Product 
              id="1002"
              title="LEE MOONSAE(이문세) - 골든베스트 14 [180G LP]"
              price={33000} image="http://image.kyobobook.co.kr/newimages/music/large/9545/2545947.jpg"
              />

             <Product 
              id="1003"
              title="SOONY(장필순) - 장필순 1집 [180G 투명옐로우 LP] [한정반]"
              price={33000} image="http://image.kyobobook.co.kr/newimages/music/large/0245/2542097.jpg"
               />

           
            <Product 
              id="1004"
              title="VARIOUS - PSYCHE FRANCE 60-70 VOL.2 [LP]"
              price={33000} image="http://image.kyobobook.co.kr/newimages/music/large/7484/2484720.jpg"
             />

              </div>





          <div {...animatedItem[2]} className="home_row">

             <Product 
               id="1005"
               title="COLDE(콜드) - WAVE [LP]"
               price={13400} 
               image="http://image.kyobobook.co.kr/newimages/music/large/3745/2547384.jpg"
                />

              <Product  
               id="1006"
               title="BEATLES - ABBEY ROAD [ANNIVERSARY EDITION] [180G LP]"
               price={20000} 
               image="http://image.kyobobook.co.kr/newimages/music/large/7425/2524723.jpg"
                />          


              <Product  
               id="1007"
               title="AKMU(악뮤) - 3RD FULL ALBUM [항해SAILING] [CLEAR BLUE LP] -2ND ANNIVERSARY LIMITED EDITION-"
               price={40000} 
               image="http://image.kyobobook.co.kr/newimages/music/large/0445/2544047.jpg"
               />          

              <Product  
               id="1008"
               title="VINCE GUARALDI - A BOY NAMED CHARLIE BROWN [LP]"
               price={32900} 
               image="http://image.kyobobook.co.kr/newimages/music/large/7345/2543791.jpg"
               />


              <Product  
               id="1009"
               title="O.S.T - IN THE MOOD FOR LOVE [화양연화] [왕가위의 택동 영화사 30주년 기념] [180G LP]"
               price={32900} 
               image="http://image.kyobobook.co.kr/newimages/music/large/7745/2547754.jpg"
               />          

              </div>




        
           <div {...animatedItem[3]} className="home_row">

             <Product 
              id="1110"
              title="BEATLES - THE BEATLES IN MONO VINYL BOX [180G LP]"
              price={536800} 
              image="http://image.kyobobook.co.kr/newimages/music/large/8654/2456853.jpg"
             />



      

             <Product 
               id="1111"
               title="QUEEN - COMPLETE STUDIO ALBUM VINYL COLLECTION [180G COLOURED LP]"
               price={524700} 
               image="http://image.kyobobook.co.kr/newimages/music/large/3674/2476345.jpg"
               />


      
       

            <Product 
              id="1112"
              title="ISAO SUZUKI - THE THREE BLIND MICE 45 BOX [180G 45RPM LP]"
              price={238900} 
              image="http://image.kyobobook.co.kr/newimages/music/large/7825/2528714.jpg"
               />


            <Product 
               id="1113"
               title="RIHANNA - THE STUDIO ALBUMS [LIMITED EDITION] [LP BOX SET]"
               price={351100} 
               image="http://image.kyobobook.co.kr/newimages/music/large/6294/2492633.jpg"
               />



            <Product 
             id="1114"
             title="ROLLING STONES - 1971-2005: BACK TO BLACK [180G LP BOXSET]"
             price={332100} 
             image="http://image.kyobobook.co.kr/newimages/music/large/2604/2406298.jpg"
                />


               </div>




        
          <div  className="home_content">

            <img  {...animatedItem[4]} className="home_contentImage" src="https://cdn.imweb.me/upload/S20210318daec942d4e05e/4384f6c7ffd44.png" />

            
          <div {...animatedItem[5]} className="text_content">  
            <div className="home_text1">
            Classic Sound
            </div>

            <div className="home_text2"> 
            since 1994
            high quality player

            <button> BUY </button>
            </div> </div>
            

      

          </div>



     <div className="home_end">

          <div className="home_text3">
          If you are an icon of the times, you can make special LP albums that you can't help but pay for. 
          <button> BUY </button>
          </div>
         



          <div className="home_pic">
            <img {...animatedItem[7]} className="home_picture" src="https://www.earlyadopter.co.kr/wp-content/uploads/2020/08/universal-music-colored-LP-1-1024x683.jpg"/>
          </div>
          


        </div>



        <div  className="home_end_pic">
          <img {...animatedItem[8]}className="end_pic1" src= "https://townsquare.media/site/443/files/2016/06/ColdplayW2B.jpg?w=980q=75"/> 

        <div {...animatedItem[10]}className="end_text3">
          <div className="end_text">Coldplay where every moment is a legend! </div> 
           <div className="end_text2">since 1996_</div>
           </div>


        </div>
        <img {...animatedItem[9]} className="end_pic2" src= "https://vipgift.co.uk/wp-content/uploads/2017/02/cold-play-vinyl-550x550.jpg"/>
         <Link to="/shop"{...animatedItem[11]} className="end_link">GO SHOP?</Link>


      </div>

      
    
    </div>
    
       

       </div>
    
    );
   }
  
export default Home;