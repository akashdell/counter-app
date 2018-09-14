import React, { Component } from "react";
import Counter from "./counter";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
class Counters extends Component {
  state = {
    currentPage: 1,
    pageSize: 4
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    const { currentPage, pageSize } = this.state;
    const countered = paginate(counters, currentPage, pageSize);
    return (
      <React.Fragment>
        <div>
          <button
            onClick={() => onReset()}
            className="btn btn-primary btm-sm m-2"
          >
            Reset
          </button>
          {countered.map(counter => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            /> //child component ==Counter and props are value,onDelete
          ))}
        </div>
        <Pagination
          itemsCount={this.props.counters.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Counters;
