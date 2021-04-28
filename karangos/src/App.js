//import logo from './logo.svg';
//import './App.css';
//import Button from '@material-ui/core/Button'


/**
 * <div className="App">
      <header className="App-header">
        <h1>Projeto Karangos</h1>
        <Button>Clique aqui!</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */


import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { yellow, red, dark } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TopBar from './ui/TopBar'
import FooterBar from './ui/FooterBar'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      
      main: yellow[500],
    },
    secondary: {
      main: red[500],
    },
  },
});

    
    function App() {
      return (
        <div>
          <ThemeProvider theme={theme}>
            <TopBar/>
            <FooterBar></FooterBar>
          </ThemeProvider>
            
        </div>
      );
    }
    
    export default App;