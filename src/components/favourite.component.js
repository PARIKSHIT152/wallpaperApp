import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class favourite extends Component {
    render() {
        return (
         <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-up"}>wallpaper App</Link>
              <div className="collapse navbar-collapse"   id="navbarTogglerDemo02">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/home"}>HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/favourite"}>FAVOURITE</Link>
                  </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#"><img src="user.ico" class="img-thumbnail img-responsive" /></a>
                  </li>
                  <li>
                    <button type="button" class="btn">LOGOUT</button>

                  </li>
                </ul>
              </div>
            </div>
           </nav>

           <div
             ><h3>favourite Images</h3>
         </div> 

         </div>        
            
        );
    }
}