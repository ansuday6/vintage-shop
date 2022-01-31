import React from "react";

import Product from "./Product";
import "./Shop.css";

function Shop2 () {

   
  return (

    

      
     
  
    <div className="shop">

     <div className="shop_container">
       





        <div className="shop_row">



          
     

            <Product
              id="2006"
              image="http://image.kyobobook.co.kr/newimages/music/large/4545/2545475.jpg"
              title="O.S.T - 봄날은 간다 [180G LP]"
              price={59400}
              />

            <Product 
              id="2007"
              title="신촌블루스 - 신촌블루스 5집: COLLECTION LIGHT [180G BLUE LP]"
              price={46000} image="http://image.kyobobook.co.kr/newimages/music/large/9445/2544940.jpg"
               />

            <Product 
             id="2008"
             title="LEE MOONSAE(이문세) - 골든베스트 14 [180G LP]"
             price={330000} image="http://image.kyobobook.co.kr/newimages/music/large/9545/2545947.jpg"
             />

            <Product 
             id="2009"
             title="SOONY(장필순) - 장필순 1집 [180G 투명옐로우 LP] [한정반]"
             price={330000} image="http://image.kyobobook.co.kr/newimages/music/large/0245/2542097.jpg"
              />

          
           <Product 
             id="2010"
             title="VARIOUS - 오아시스 팝 페스티발 VOL.4 [180G LP]"
             price={45000} image="http://image.kyobobook.co.kr/newimages/music/large/1545/2545195.jpg"
            />

             </div>





         <div className="home_row">

            <Product 
              id="2011"
              title="EMILE MOSSERI - MINARI [미나리] [180G CLEAR BLUE LP] [한정반]"
              price={39900} 
              image="http://image.kyobobook.co.kr/newimages/music/large/2145/2541268.jpg"
               />

             <Product  
              id="2012"
              title="LEE SORA(이소라) - 베스트 [180G LP]"
              price={64600} 
              image="http://image.kyobobook.co.kr/newimages/music/large/6145/2541652.jpg"
               />          


             <Product  
              id="2013"
              title="AKMU(악뮤) - 3RD FULL ALBUM [항해SAILING] [CLEAR BLUE LP] -2ND ANNIVERSARY LIMITED EDITION-"
              price={40000} 
              image="http://image.kyobobook.co.kr/newimages/music/large/0445/2544047.jpg"
              />          

             <Product  
              id="1008"
              title="AKMU COLLABORATION ALBUM [NEXT EPISODE] LP -LIMITED EDITION"
              price={46000} 
              image="http://image.yes24.com/goods/102801747/XL"
              />


             <Product  
              id="2014"
              title="이적 - DEAD END [LP]"
              price={32900} 
              image="http://image.kyobobook.co.kr/newimages/music/large/7745/2547726.jpg"
              />          

             </div>




       
          <div className="home_row">

            <Product 
             id="2000"
             title="빛과 소금 - BEST [CLEAR GOLD SPLATTER] [180G LP]"
             price={536800} 
             image="http://image.kyobobook.co.kr/newimages/music/large/5935/2539587.jpg"
            />



     

            <Product 
              id="2001"
              title="THE SOLUTIONS(솔루션스) - 솔루션스 LOAD [180G 45RPM YELLOW LP]"
              price={524700} 
              image="http://image.kyobobook.co.kr/newimages/music/large/5935/2539592.jpg"
              />


     
      

           <Product 
             id="2003"
             title="P 버스커 버스커 - 1집 + 1집 마무리 합본 [투명 컬러 2LP"
             price={69100} 
             image="http://image.yes24.com/goods/98800488/XL"
              />


           <Product 
              id="2004"
              title="조이 (JOY) - 스페셜 앨범 안녕 (Hello) [LP]"
              price={44600} 
              image="http://image.yes24.com/goods/102229150/XL"
              />



           <Product 
            id="2005"
            title="P 악동뮤지션 - AKMU 3rd FULL ALBUM [항해/SAILING] LP -2nd ANNIVERSARY LIMITED EDITION"
            price={40000} 
            image="http://image.yes24.com/goods/103388545/XL"
               />


              </div>

              

              




     

       
         

         </div>
     
   
     </div>
     
        
 
       
    
     );
   
 }
    export default Shop2;
