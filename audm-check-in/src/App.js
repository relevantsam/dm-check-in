import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Home from './home/home.component';
import AppBar from 'material-ui/AppBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar 
            title="AUDM | Sign-In"
            showMenuIconButton={false}
            onTitleClick={(e) => console.log('clicked title', e)}
          />
          <Home/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
