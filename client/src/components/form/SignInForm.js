import React from "react";

import Link from "@material-ui/core/Link";
import photo_loginpic from "../../img/loginpic.jpg";

import { Redirect } from "react-router-dom";

function Copyright() {
  return (
    <p variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Canterbury Music Teacher</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

 const SignInForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user
}) => {
 
  if (history) {
    return <Redirect to="/" />
  }

  return (

    <div className="container">
        <div className="row">
            <div className="col s8 offset-s2 m6 offset-m3">
                <div className="card center-align">
                    <div className="card-image">
                        <img className="activator" src={photo_loginpic} ></img>
                    </div>
                    <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a href="#test4">Admin</a></li>
                    </ul>
                    </div>
                    <div className="card-content grey lighten-4">
                    <div id="test4">
                        <div className="row">
                            <form action="" method="post">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="email" name="email" type="text" className="validate"></input>
                                    <label for="email">User Name</label>
                                </div> 
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">vpn_key</i>
                                    <input id="password" name="password" type="text" className="validate"></input>
                                    <label for="password">Password</label>
                                </div>  
                                <div>
                                    <button type="submit" className="waves-effect waves-light btn red"><i className="material-icons right">arrow_forward</i>Login</button>
                                </div>                             
                            </form>                          
                        </div>                       
                    </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>
  



  );
}

export default SignInForm