import React, { Component } from "react";
class Counter extends Component {
  // styles = {
  //   fontSize: 150,
  //   fontWeigth: "bold"
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleDecrement = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btm-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value <= 0}
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? value : value;
  }
}
export default Counter;
