import React from "react";
import "./App.css";
// import SignUp from "./signUp";
// import SignIn from "./signIn";
import Ninjas from "./Ninjas";

class App extends React.Component {
  state = {
    ninjas: [
      { name: "ryu", age: 27, belt: "brown", id: 1 },
      { name: "coshi", age: 27, belt: "white", id: 2 },
      { name: "yoshi", age: 0, belt: "extra-white", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        {/* <SignUp />
        <SignIn /> */}
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
