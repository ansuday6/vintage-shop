import React, { useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Header from "./Header";
import {FcGoogle} from "react-icons/fc";




function Login() {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const navigate = useNavigate();

  const signIn = e => {
     e.preventDefault()
     auth.signInWithEmailAndPassword(email, password)
       .then(_auth => {
         navigate("/")
       })

      }


      //naver

      const { naver } = window;
      const location = useLocation();
      const NAVER_CALLBACK_URL = '/';
      const NAVER_CLIENT_ID = 'M7P9IALDCfidDd8wTXVB';
  
      const initializeNaverLogin = () => {
          const naverLogin = new naver.LoginWithNaverId({
              clientId: NAVER_CLIENT_ID,
              callbackUrl: NAVER_CALLBACK_URL,
              isPopup: false,
              loginButton: { color: 'white', type: 1, height: '47' },
          });
          naverLogin.init();
      };
  
      const getNaverToken = () => {
          if (!location.hash) return;
          const token = location.hash.split('=')[1].split('&')[0];
          console.log(token);
      };
  
      useEffect(() => {
          initializeNaverLogin();
          getNaverToken();
      }, []);

//google





  return (

    <div className={Header}><Header/>

   <div className="login">

     
    
    
         <p  className="login_home"></p>



      <div className="login_container">

         <h1> LOGIN </h1>

           <form>
            
              <h5> Email </h5>

              <input value={email} onChange={e => setEmail(e.target.value)}
              type="text" />

              <h5> Password </h5>

              <input value={password} onChange={e => setPassword(e.target.value)}
              type="password" />

              <button onClick={signIn} type='submit' className="login_signInButton"> 확인 </button>

              

            </form>


          <Link to= "/register" className="login_register_button"> 회원가입 </Link>

          
          <div className="login_form">
          
          
          <h6>소셜 로그인</h6>


          <p className="login_bt"> 
          <div id='naverIdLogin' className="login_naver" />  


          <button onClick= {() => {const auth = getAuth();
signInWithPopup(auth, provider)

  .then((result) => {
    if(auth) {
      navigate("/")
    }
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
   
    const user = result.user;
  
  }).catch((error) => {
  
    const errorCode = error.code;
    const errorMessage = error.message;
   
    const email = error.email;
 
    const credential = GoogleAuthProvider.credentialFromError(error);
    
   
  });}} className="login_google" > <FcGoogle/>  </button> </p>
        </div>





          
         






 



      </div>




      </div>

      </div>

  );
}

export default Login;