import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className="badge badge-info">
          {this.getItems()}
        </span>

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
    return value;
  }

  getItems() {
    const { item } = this.props.counter;
    return item;
  }
}
export default Counter;
