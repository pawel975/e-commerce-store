import React, { Component } from 'react';
import Main from '../../Layouts/Main/Main';
import Header from '../../Layouts/Header/Header';
import './App.scss';

class App extends Component {

  constructor(){
    super()
    this.state = {
      isCartOverlayVisible: false,
      currentCategory: "all"
    }
  }
  
  handleCartOverlayVisibleToggle(){
    this.setState({
      isCartOverlayVisible: !this.state.isCartOverlayVisible
    })
  }

  handleCurrentCategoryChange(e){
    this.setState({
      currentCategory: e.target.textContent
    })
  }

  render() {
    return (
      <div className="app">

        <Header 
          handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle.bind(this)}
          handleCurrentCategoryChange={this.handleCurrentCategoryChange.bind(this)}
        />

        <Main 
          isCartOverlayVisible={this.state.isCartOverlayVisible}
          currentCategory={this.state.currentCategory}
        />

      </div>
    )
  };
}

export default App;
