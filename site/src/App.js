import React, { Component } from 'react';
import logo from './logo.svg';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';
import './App.css';

import Minutes from './components/Minutes'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f50057',
    },
    secondary: {
      main: '#ffd740',
    }
  }
  /*
  status: {
    danger: 'orange',
  },
  */
});

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
   return (
    <div id="main">
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Minutes Editer
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Minutes />
        </div>
      </MuiThemeProvider>
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
