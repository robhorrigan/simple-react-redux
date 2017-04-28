import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './react-redux-logos.jpg';
import './App.css';

import { incrementCounter, decrementCounter } from './actions'

class App extends Component {
  increment = () => {
    this.props.dispatch(incrementCounter())
  }

  decrement = () => {
    this.props.dispatch(decrementCounter())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Simple React-Redux</h2>
        </div>
        <p className="App-intro">
           <code>src/App.js</code>
        </p>
        <h1>Simple Redux</h1>
        <button onClick={this.increment}>Increment</button>
        {this.props.counter}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
