import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
    //    imageUrl: "https://picsum.photos/200"
  };

  // styles = {
  //   fontSize: 150,
  //   fontWeigth: "bold"
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btm-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-warning btn-sm m-2"
        >
          Decreament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? value : value;
  }
}
export default Counter;
