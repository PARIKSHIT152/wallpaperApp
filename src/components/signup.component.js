import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
           name :'',
           email : '' ,
           password : ''
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
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
            };
            console.log(user);


     axios.post(`http://localhost:3000/api/users`,user)
     .then((response) =>
          {
            if(response.data.success){
              // this.setState({redirectToReferrer: false});
             return alert("signup successful");

            }
          },this)
     .catch((error) => alert("api problem"))

    }




    render() {
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


            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label> Name</label>
                    <input type="text" name="name" onChange={this.handleChange} className="form-control" placeholder="Name" required />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" required />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
       </div>
        );
    }
}
