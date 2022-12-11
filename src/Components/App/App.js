import React, { Component } from 'react';
import Main from '../../Layouts/Main/Main';
import Header from '../../Layouts/Header/Header';
import './App.scss';
import querySingleProduct from '../../queries/querySingleProduct';
import getFromLocalStorage from '../../helpers/getFromLocalStorage';
import saveToLocalStorage from '../../helpers/saveToLocalStorage';

class App extends Component {

  constructor(){
    super()

    this.addProductToCart = this.addProductToCart.bind(this);
    this.handleCartOverlayVisibleToggle = this.handleCartOverlayVisibleToggle.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleCurrenciesListOpen = this.handleCurrenciesListOpen.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);

    this.state = getFromLocalStorage("state") || {
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

  addProductToCart = async (productId, selectedAttributes) => {
    const product = await querySingleProduct(productId);

    if (this.state.cartElements.length > 0) {

        const newCartElements = this.state.cartElements.map(element => {
    
          if (element.product.id === product.id) {
            
            const newProductAttributesStates = JSON.stringify(selectedAttributes);
            const cartElementAttributesStates = JSON.stringify(element.selectedAttributes);

            if (newProductAttributesStates === cartElementAttributesStates) {

                const orderedProduct = {
                    product: element.product,
                    selectedAttributes: element.selectedAttributes,
                    quantity: element.quantity + 1
                  };
          
                  return orderedProduct;

            } else {

                const orderedProduct = {
                    product: product,
                    selectedAttributes: selectedAttributes,
                    quantity: 1
                };
        
                return orderedProduct;

            }
    
          } else {
    
            const orderedProduct = {
              product: product,
              selectedAttributes: selectedAttributes,
              quantity: 1
            };
    
            return orderedProduct;
          }
          
        })

        console.log(newCartElements, "new cart elements");
        
        this.setState({cartElements: newCartElements});
    } else {

        const orderedProduct = {
            product: product,
            selectedAttributes: selectedAttributes,
            quantity: 1
          };
          
        this.setState({cartElements: [...this.state.cartElements, orderedProduct]})
    }


  }

  componentDidMount(){
    saveToLocalStorage("state", this.state)
  }

  componentDidUpdate(){
    saveToLocalStorage("state", this.state);
  }

  render(){
    return (
      <div className="app">

        <Header 
          handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle}
          handleCurrencyChange={this.handleCurrencyChange}
          handleCurrenciesListOpen={this.handleCurrenciesListOpen}
          handleSelectCategory={this.handleSelectCategory}
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
