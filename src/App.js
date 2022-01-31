import React, { useState, useEffect } from "react";

import './App.css';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from './Register';
import Basket from "./Basket";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import BoardList from "./BoardList";
import Write from "./Write";
import WriteDetail from "./WriteDetail";
import Shop1 from "./Shop1";
import Shop from "./Shop";
import "./Home.css";
import Payment from "./Payment";
import {BsFillRecordCircleFill} from "react-icons/bs"
import Detail from "./Detail";
import {Link} from "react-router-dom";





function App() {



  
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })



//


  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
    
      console.log('현재 사용자는' + authUser + '입니다.');

      if(authUser) {

         dispatch({
            type: 'SET_USER',
            user: authUser
         })
       }

        else {

         dispatch({
           type: 'SET_USER',
           user: null
           
           })
         }
       })


    }, []
    )

    
  
  return (
    

    

    <Router>
     
    <div className="App">


      
    <button 
        className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={handleTop}  // 버튼 클릭시 함수 호출
      >TOP</button>



      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/boardList" element={<BoardList/>} />
        <Route path="/Write" element={<Write />}/>
        <Route path="/WriteDetail" element={<WriteDetail />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/shop1" element={<Shop1 />}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/detail/:id" elment={<Detail />} />
       

        

   


       
        </Routes>
      
      

      <div className="box1"> 
     <Link to="/"> 

       TOY RECORDS  <BsFillRecordCircleFill/>

    
     </Link></div>
    
    </div>
    
   

    
   

  </Router>

  
  );


}

export default App;
