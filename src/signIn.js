import React from "react";
import "./signIn.css";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="form_container">
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <div className="sign_up">
            <label htmlFor="email">Email: {this.state.email}</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              onChange={this.onChange}
            />
            <label htmlFor="password">Password: {this.state.password}</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
