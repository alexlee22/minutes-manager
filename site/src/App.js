import React, { Component } from 'react';
import logo from './logo.svg';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';
import './App.css';

import Minutes from './components/Minutes'

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
   return (
    <div id="main">
      <div>
        <Minutes />
      </div>
    </div>
   );
  }
 }

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
