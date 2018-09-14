import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, item: "mobile1" },
      { id: 2, value: 0, item: "mobile2" },
      { id: 3, value: 0, item: "mobile3" },
      { id: 4, value: 0, item: "mobile4" },
      { id: 5, value: 0, item: "mobile5" },
      { id: 6, value: 0, item: "mobile6" },
      { id: 7, value: 0, item: "mobile7" },
      { id: 8, value: 0, item: "mobile8" },
      { id: 9, value: 0, item: "mobile9" },
      { id: 10, value: 0, item: "mobile10" },
      { id: 11, value: 0, item: "mobile11" },
      { id: 12, value: 0, item: "mobile12" },
      { id: 13, value: 0, item: "mobile13" },
      { id: 14, value: 0, item: "mobile14" },
      { id: 15, value: 0, item: "mobile15" },
      { id: 16, value: 0, item: "mobile16" }
    ]
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
