import React ,{useState} from 'react';
import { auth } from './firebase';
import {Link, useNavigate} from "react-router-dom";
import "./Register.css";
import {RiChatSmile3Line} from "react-icons/ri"
import {FaArrowLeft} from "react-icons/fa";




export default function Register() {

const [email, setEmail] = useState ("");
const [password, setPassword] = useState ("");
const [passwordCheck, setPasswordCheck] = useState("");
const navigate = useNavigate();



const register = e => {
  e.preventDefault();

  auth.createUserWithEmailAndPassword( email, password, passwordCheck)
   .then((auth) => {
    if (password !== passwordCheck) {
      return alert('비밀번호가 일치하지 않습니다! 다시 한번 확인해주세요!');
    }
     if(auth) {
       navigate("/login")
       alert('회원가입을 완료하였습니다');
     }
    console.log(auth)
     })
     .catch(error => alert(error.message))



}

 
    return (
 
 <div className="register">




  <div className="register_container">
    <Link to="/">

    <span className="register_logo"> <FaArrowLeft className="register_logoHome"/> TOY RECORDS </span>

    </Link>


    <img className="lp" src="https://i.pinimg.com/474x/7d/7e/2b/7d7e2b82cb9db9bd064493e9103c0ff8--record-collection-turntable.jpg" alt=""/>



      <span className="register_text"> Hello <RiChatSmile3Line className="text_icon" /></span>
      <span className="register_text2"></span>

    

       </div>


       <div className="register_border"></div>

   



    <div className="register">


     <div className="register_content">


      <form>

       


        <h3> Email</h3>
      <input value={email} onChange={e => setEmail(e.target.value)}
              type="text" />

       <h3> Password</h3>
          <input value={password} onChange={e => setPassword(e.target.value)}
              type="password" />

              <h5>* Password Check</h5>
              <input value={passwordCheck} onChange={e => setPasswordCheck(e.target.value)}
              type="password" />


              

              
       </form>
       



       <div className="register_check">


       <p className="register_checkbox"><input type="checkbox"></input> 모든 약관 동의 </p>

       <p className="register_agree">아래 모든 약관(필수), 개인정보 수집 및 이용에 대한 동의(필수) 및 광고성 정보수신 동의(선택)내용을 확인하고 전체 동의합니다.</p>

       <p className="register_detail">
             -필수 정보의 수집 및 이용에 관한 동의를 거부하실 수 있으나, 다만 이 경우 회원가입 및 관련 서비스 이용은 불가합니다.</p>
             <p className="register_detail">

             -선택 항목에 대한 동의를 거부하더라도 회원가입에 영향을 미치지 않습니다. </p>
             <p className="register_detail">


             -만 14세 미만은 서비스 이용이 불가합니다.</p>
      

       <p className="register_agree2">TOY RECORDS 온라인 스토어 회원 약관 및 개인정보 수집 이용에 대한 동의</p>
       <p className="register_detail"><input type="checkbox"></input>(필수)이용 약관에 대한 동의</p>
       <p className="register_detail"><input type="checkbox"></input>(필수)개인정보 수집 및 이용에 대한 동의</p>

       <div className="login_Button">

       <button onClick={register} type='submit' > SEND </button></div>
       <Link to= "/login" className="login_registerButton"> LOGIN </Link>


       </div>






       

       



       </div>


     
       </div>
  
 </div>
      
    );
}

