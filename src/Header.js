import React, {useState} from 'react';
import './Header.css';
import {BiSearchAlt} from "react-icons/bi";
import {TiThMenu} from "react-icons/ti";
import { FaTwitter} from 'react-icons/fa';

import { IconContext } from 'react-icons';
import {Link } from "react-router-dom";
import { MenubarData } from './MenubarData';
import {GrClose} from 'react-icons/gr';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import {MdAddShoppingCart} from 'react-icons/md';





function Header() {
  

  const [menubar, setMenubar] = useState(false);
  const showMenubar = () => setMenubar(!menubar);
  <IconContext.Provider value={{ size: "20rem" }}></IconContext.Provider>

  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  

  return (
    

    <div className="header">

      
      <div className="header_menu">
        
        <Link to="" className="menubarOpen">
           <TiThMenu onClick={showMenubar} />
         </Link>
         <nav className={menubar ? 'nav_menu active' : 'nav_menu'}>
         <ul className="nav_menu_items" onClick={showMenubar}>
           <li className="menubar_toggle">
             <Link to="" className="menubarClose">
               <GrClose/> 
             </Link>
           </li>
          
           {MenubarData.map((item, index) => {
             return (


              
               <li key={index} className={item.cName}>
                 <Link to={item.path}>
                   {item.icon}
                   <span>{item.title}</span>
              
                 </Link>
               </li>  
             );
           })}
         </ul>
       </nav>

       









       </div>
       <Link to= "/">
        <span className="header_logo"> TOY RECORDS </span>
       </Link>

       




       <div className="header_log">  
   <Link to={!user && "/login"} className="header_login">
    <span onClick={ handleAuthentication } className="header_logout"> {user ? 'LOGOUT': 'LOGIN'} </span>
    </Link></div>  



       <div className="header_nav">

   

        <div className="header_search">
          <input className="header_searchInput" type="text"/>

           <BiSearchAlt className="header_searchIcon"/>
           </div>

           


         


        <div className="header_social">
          <Link to="/">
          <img className="header_instagramIcon" src="/img/instagram.png"/> </Link>
           <Link to= "/"><FaTwitter className="header_twitterIcon"/></Link>
        </div>


     
        <Link to="/basket">
        <div className="header_basket">
        <MdAddShoppingCart />
          <span className="header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>

      
      </div>

  
    </div>

    
  );
}

export default Header;