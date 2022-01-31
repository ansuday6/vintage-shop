import React from "react";
import {useNavigate} from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';


function Subtotal() {
  const [{  basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  
  return (
   <div className="subtotal">
     <CurrencyFormat 
        renderText={(value) => (
          <>
            <div className="subtotal_price">
 
              상품 금액 ( {basket?.length} )개  : <strong> {value}원 </strong>

             </div>
             <div className="subtotal_price">
               총 결제 금액 ( {basket?.length} )개  : <strong> {value}원 </strong>


             </div>
               
          </>

      )}
     declmalScale={2}
     value={getBasketTotal(basket)}
     displayType={"text"}
     thousandSepartor={true}
     prefix={" w "}

     />

     <button onClick={ e => navigate("/payment")} >결제하기 </button>

   </div>
  );
}

export default Subtotal;
