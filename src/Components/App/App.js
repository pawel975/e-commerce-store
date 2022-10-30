import React, { Component } from 'react';
import Main from '../../Layouts/Main/Main';
import Nav from '../../Layouts/Nav/Nav';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Nav/>

        <Main/>

      </div>
    )
  };
}

export default App;
