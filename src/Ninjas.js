import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
// rendering components as list
    const ninjaList = ninjas.map(ninja => (
      <div className="ninjas" key={ninja.id}>
        <div>name: {ninja.name}</div>
        <div>age: {ninja.age}</div>
        <div>color: {ninja.belt}</div>
      </div>
    ));
    return <div>{ninjaList}</div>;
  }
}

export default Ninjas;
