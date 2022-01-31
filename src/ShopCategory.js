
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Shop1 from "./Shop1";
import Shop2 from "./Shop2";
import Shop3 from "./Shop3";
import Shop4 from "./Shop4";
import Shop5 from "./Shop5";
import Shop6 from "./Shop6";


import "./ShopCategory.css";


export default function ShopCategory() {
    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        {
            tabTitle:(
                <Link to="" className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> All </Link>
            ),
            tabCont:(
              <div className={Shop1}><Shop1 /> </div>
            )
        },
        {
            tabTitle:(
                <Link to="" className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> Domestic </Link>
            ),
            tabCont:(
              <div className={Shop2}><Shop2 /> </div>
            )
        },
    

    {
          tabTitle:(
                <Link to="" className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> Overseas </Link>
           ),
           tabCont:(
            <div className={Shop3}><Shop3 /> </div>


             
            )
          },

          
    {
      tabTitle:(
            <Link to="" className={activeIndex===3 ? "is-active" : ""} onClick={()=>tabClickHandler(3)}> Limited Edition </Link>
       ),
       tabCont:(
        <div className={Shop4}><Shop4 /> </div>

         
        )
      },

      
    {
      tabTitle:(
            <Link to="" className={activeIndex===4 ? "is-active" : ""} onClick={()=>tabClickHandler(4)}> SET </Link>
       ),
       tabCont:(
        <div className={Shop5}><Shop5 /> </div>


         
        )
      },

      
    {
      tabTitle:(
            <Link to="" className={activeIndex===5 ? "is-active" : ""} onClick={()=>tabClickHandler(5)}> Player </Link>
       ),
       tabCont:(
        <div className={Shop6}><Shop6 /> </div>


         
        )
      }




        ];


    

    return (

     
      
        <div>
          <ul className="tabs_box">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </ul>
          <div>
          	{tabContArr[activeIndex].tabCont}
          </div>
        </div>
        
    );
}