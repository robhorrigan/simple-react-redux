import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

import { incrementCounter, decrementCounter } from '../../actions'

class Counter extends Component {
  increment = () => {
    this.props.dispatch(incrementCounter())
  }

  decrement = () => {
    this.props.dispatch(decrementCounter())
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.increment}>Increment</button>{' '}
        { this.props.count }
        {' '}<button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.app.counter.count
  }
}

export default connect(mapStateToProps)(Counter);