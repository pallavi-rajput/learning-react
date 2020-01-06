import React from "react";
import "./signUp.css";

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    age: null
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
            <label htmlFor="name">Name: {this.state.name}</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              onChange={this.onChange}
            />
            <label htmlFor="email">Email: {this.state.email}</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              onChange={this.onChange}
            />
            <label htmlFor="age">Age: {this.state.age}</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter Your Age"
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

export default SignUp;
