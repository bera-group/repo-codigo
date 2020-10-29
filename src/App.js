import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';


const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <CssBaseline />
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}

