import React from "react";
import {Link} from "react-router-dom";
import "./Subtotal.css";
import Subtotal from "./Subtotal";
import BasketProduct from  "./BasketProduct";
import { useStateValue } from './StateProvider';
import Header from "./Header";
import {AiOutlineShop} from "react-icons/ai";


function Basket() {
  const [{basket,user}, distpatch] = useStateValue ();
  
  return (
  <div className={Header}>
    <Header />
    <Link to="/shop">

  <div className="basket_return"><AiOutlineShop  /> Shop </div></Link>

    <div className="basket_title">
                     {user?.email}의 장바구니

                 </div>



                 <div className="basket_name"> 주문상품 </div>
                 
    <div className="basket">

    



            <div className="basket_in">
                
               <div className="basket_detail">
                

                 {basket.map(item => (
                    <BasketProduct 

                     id={item.id}
                     title={item.title}
                     image={item.image} 
                     price={item.price} 
                     
                    />
                  ))}



                </div>
              </div>

             <div className="basket_right">
                  <Subtotal />

              </div>


            
  
     </div>
    </div>
  );
}

export default Basket;