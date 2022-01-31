import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import "./Router.css";
import Home from "./Home";
import Register from "./Register";



  const WithRouter = () => { 
  
    const location = useLocation();
  return (

    <TransitionGroup className="transition-group">
      <div
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <section className="route-section">
          <Routes location={location}>
            <Route
              
              path={process.env.PUBLIC_URL + "/"}
              element={<Home />} 
            />
            <Route path="/register"  element={<Register />}/>
          </Routes>
        </section>
      </div>
    </TransitionGroup>
  );
  }
export default WithRouter;