import React, { Component } from "react";
import { Redirect,Link} from "react-router-dom";
import Gallery from './images';

export default class home extends Component {

     constructor(props){
        super(props);
        this.state={
          
            redirectToReferrer:false

        }
        this.logout = this.logout.bind(this);
    }

    logout(){

     sessionStorage.clear();
     this.setState({redirectToReferrer: true});
    }



   

    render() {

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/sign-in'}/>)
          }
      
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
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><img src="user.ico" className="img-thumbnail img-responsive" /></a>
                  </li>
                  <li>
                  <button type="button" className="btn" onClick={this.logout} >LOGOUT</button>
                  </li>
                  </ul>
              </div>
            </div>
            </nav>
            <div className="images">
                <Gallery />
             </div>
         </div>        
            
        );
    }
}


