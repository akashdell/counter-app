import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDecrement = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.handleDecrement}
            value={counter.value}
          /> //child component ==Counter and props are value,onDelete
        ))}
      </div>
    );
  }
}

export default Counters;
