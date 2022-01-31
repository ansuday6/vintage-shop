import React from "react";
import "./Home.css";
import {useStateValue} from "./StateProvider";
import {MdAddShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";

function Product( {image,id, title, price } ) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {

    dispatch ({ 
      type: 'ADD_TO_BASKET', 
      item: {
        
        id:id,
        title:title,
        image:image,
        price:price,
        
      },
  
     });
    };
 


  return (
    <div className="product">
    
    
     <img src={image} alt=""/>

     
      <div className="product_info">

        <Link to="/detail"><strong>{ title }</strong></Link>
        
        <p className="product_price">
       
          <strong>{ price }W</strong>
        
        </p>
      
      <button className="product_button" onClick={addToBasket}><MdAddShoppingCart /></button>
      
      
    </div>
    </div>
  );
}

export default Product;
