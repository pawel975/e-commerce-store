import React, { Component } from 'react';
import Main from '../../Layouts/Main/Main';
import Header from '../../Layouts/Header/Header';
import './App.scss';
import querySingleProduct from '../../queries/querySingleProduct';

class App extends Component {

  constructor(){
    super()
    this.state = {
      isCartOverlayVisible: false,
      isCurrenciesListOpen: false,
      currentCurrencySymbol: "$",
      cartElements: [],
    }
  }
  
  handleCartOverlayVisibleToggle(){
    this.setState({
      isCartOverlayVisible: !this.state.isCartOverlayVisible
    })
  }

  handleCurrencyChange(e){
    const currencyOptionSymbol = e.target.children[0].textContent;
    this.setState({
      currentCurrencySymbol: currencyOptionSymbol,
      isCurrenciesListOpen: !this.state.isCurrenciesListOpen
    }) 
  }

  handleCurrenciesListOpen(){
    if (this.state.isCurrenciesListOpen) {
        this.setState({isCurrenciesListOpen: false});
    } else {
        this.setState({isCurrenciesListOpen: true});
    }
  }

  handleSelectCategory(e){
    this.setState({currentCategory: e.target.textContent})
  }

  addProductToCart = async (productId) =>{
    const product = await querySingleProduct(productId);

    this.setState({cartElements: [...this.state.cartElements, product]});

    console.log(this.state.cartElements)
  }

  render(){
    return (
      <div className="app">

        <Header 
          handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle.bind(this)}
          handleCurrencyChange={this.handleCurrencyChange.bind(this)}
          handleCurrenciesListOpen={this.handleCurrenciesListOpen.bind(this)}
          handleSelectCategory={this.handleSelectCategory.bind(this)}
          currentCurrencySymbol={this.state.currentCurrencySymbol}
          isCurrenciesListOpen={this.state.isCurrenciesListOpen}
        />

        <Main 
          isCartOverlayVisible={this.state.isCartOverlayVisible}
          currentCurrencySymbol={this.state.currentCurrencySymbol}
          cartElements={this.state.cartElements}
          addProductToCart={this.addProductToCart}
        />

      </div>
    )
  }
}

export default App;
