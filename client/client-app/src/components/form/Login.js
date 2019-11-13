import React, { Component } from "react";
import LoginForm from "./loginForm.js";
import { validateLoginForm } from "./validate";
import axios from "axios";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: "",
        password: ""
      },
      history: false
    };
  }
  handleInputChange = event => {
    const currentUser = this.state.user;
    currentUser[event.target.name] = event.target.value;
    this.setState({
      user: currentUser
    });
  };

  loginSubmit(user) {
    const userData = {
      email: user.email,
      password: user.password
    };

    axios
      .post("/api/user/login", userData)
      .then(res => {
        if (res.status === 200) {
          this.setState({ histroy: true });
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ email: "", password: "", history: false });
  }

  validateForm(event) {
    event.preventDefault();
    const data = validateLoginForm(this.state.user);
    console.log(data);
    if (data.success) {
      this.setState({
        errors: {}
      });
      const user = {
        password: this.state.user.password,
        email: this.state.user.email
      };
      this.loginSubmit(user);
      // console.log(user);
    } else {
      const errors = data.errors;

      this.setState({
        errors
      });
    }
  }

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={event => this.validateForm(event)}
          onChange={event => this.handleInputChange(event)}
          errors={this.state.errors}
          user={this.state.user}
          history={this.state.history}
        />
      </div>
    );
  }
}

export default Login;
