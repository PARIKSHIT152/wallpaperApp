import React, { Component } from "react";
import { Link, Redirect} from "react-router-dom";
import axios from 'axios';


export default class Login extends Component {

  constructor(props){
          super(props);
          this.state = {
             email : '' ,
             password : '',
             redirectToReferrer : false
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }



      handleChange(event){
              this.setState({
                  [event.target.name] : event.target.value

              });
      }
      handleSubmit(event){
              event.preventDefault();

              const user = {
              email : this.state.email,
              password : this.state.password
              };

        if(this.state.email && this.state.password)
          {
       axios.post(`http://localhost:3000/api/users/login`,user)
       .then((response) =>
          {
            if(!response.data.success){
              this.setState({redirectToReferrer: false});
             return alert("invalid email or password");

            }
             
              let userresponse = response;
              console.log(response);
              if(userresponse){
              sessionStorage.setItem('data',JSON.stringify(userresponse));
              this.setState({redirectToReferrer: true});
              }

          },this)
          .catch((error) => alert(error))

      }
  }




    render() {

        if (this.state.redirectToReferrer){

          return (<Redirect to={'/home'}/>)
    }
      if (sessionStorage.getItem('data')){

         return (<Redirect to={'/home'}/>)
        }

       return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>wallpaper App</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>


            <form onSubmit={this.handleSubmit} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
        );
    }
}
