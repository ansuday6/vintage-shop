import React from 'react';
import './Subtotal.css';
import {useStateValue} from "./StateProvider";

function BasketProduct({id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
   const removeFromBasket = () => {
 
     dispatch({
       type:'REMOVE_FROM_BASKET',
       id:id,
 
 
 
       });
 
    };
 


  return (

    <div className="basketProduct">
       <img className="basketProduct_image" src={image} alt="" />
      
    <div className="basketProduct_info">

         <p className="basketProduct_title">
          {title}
           </p>

         <p className="basketProduct_price">
           <small>w</small>
           <strong>{price}</strong>
           <small>원</small>
           </p>


           </div>

       <div className="basketProductDel">
           <button onClick={removeFromBasket}> Delete </button></div>

           </div>
    
  );
}

export default BasketProduct;