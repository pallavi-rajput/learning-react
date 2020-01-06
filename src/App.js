import React from "react";
import "./App.css";
import SignUp from "./signUp";
import SignIn from "./signIn";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

export default App;
