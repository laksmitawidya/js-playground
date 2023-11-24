import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>Result: {this.count}</h2>
        <button
          className="btnDecrement"
          onClick={() => {
            const perhitungan = this.count - 1;
            this.setState({
              counter: perhitungan,
            });
          }}
        >
          -
        </button>

        <button
          className="btnIncrement"
          onClick={(e) => {
            const perhitungan = this.count + 1;
            this.setState({
              counter: perhitungan,
            });
          }}
        >
          +
        </button>

        <button
          className="btnReset"
          onClick={() => {
            this.setState({
              counter: 0,
            });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
