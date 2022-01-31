import React from 'react';
import './Payment.css';
import Header from "./Header";
import {useStateValue} from "./StateProvider";
import {Link, useNavigate} from 'react-router-dom';
import BasketProduct from "./BasketProduct";
 


function Payment() {
  const[{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();


  return (

    <div className = {Header}>
     <Header />

       <div className="payment">
          
         

         
         <div className="payment_section">
           <div className="payment_title">
             <h3>결제 목록</h3>
           </div>

             <div className="payment_items">
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

         <div className="payment_container">
            <Link to="/basket" className="basketLink">
             <h1> 총({basket?.length})개의 주문 수량 </h1> 
             </Link>

            
          
                <form>
                <h6>{user?.email} 배송 정보</h6>
                  


                  <div className="payment_info">
               
                    <h4>* 이름</h4>
                  <input type="textr" className="payment_name"/>
                  <h4>* 연락처</h4>
                    <input type="textr" className="payment_ph"/>
                    <h4>* 주소</h4>
                    <input type="text" className="payment_address"/>
                    <button className="payment_bt">결제하기</button>
                  
                </div>
            

                </form>
                


          </div>


  
         
    </div>
    </div>
  );
}

export default Payment;