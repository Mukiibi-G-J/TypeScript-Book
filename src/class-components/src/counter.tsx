import React, { Component } from "react";

type CounterState = {
  count: number;
};

export class counter extends Component {
  state: CounterState = {
    count: 0,
  };

  private increment = () => {};
  private decrement = () => {};
  render() {
    return (
      <>
        <p>Count:{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}
