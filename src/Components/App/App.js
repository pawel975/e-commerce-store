import React, { Component } from 'react';
import Main from '../../Layouts/Main/Main';
import Header from '../../Layouts/Header/Header';
import './App.scss';

class App extends Component {

  constructor(){
    super()
    this.state = {
      isCartOverlayVisible: false,
    }
  }
  
  handleCartOverlayVisibleToggle(){
    this.setState({
      isCartOverlayVisible: !this.state.isCartOverlayVisible
    })
  }

  render() {
    return (
      <div className="app">

        <Header handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle.bind(this)}/>

        <Main isCartOverlayVisible={this.state.isCartOverlayVisible}/>

      </div>
    )
  };
}

export default App;
