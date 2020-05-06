import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import home from "./components/home.component";
import favourite from "./components/favourite.component";

function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/home" component={home} />
            <Route exact path="/favourite" component={favourite} />
            <Route path="*" component={() => "404 NOT FOUND"} />

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
