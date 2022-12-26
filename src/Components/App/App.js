import React, { Component } from 'react';
import Main from '../../Layouts/Main/Main';
import Header from '../../Layouts/Header/Header';
import './App.scss';
import querySingleProduct from '../../queries/querySingleProduct';
import getFromLocalStorage from '../../helpers/getFromLocalStorage';
import saveToLocalStorage from '../../helpers/saveToLocalStorage';
import getDefaultProductAttributes from '../../helpers/getDefaultProductAttributes';

class App extends Component {

  constructor(){
    super()

    this.addProductToCart = this.addProductToCart.bind(this);
    this.updateProductCartQuantity = this.updateProductCartQuantity.bind(this);
    this.updateElementInCart = this.updateElementInCart.bind(this);

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
    this.setState({isCartOverlayVisible: !this.state.isCartOverlayVisible})
  }

  handleCurrencyChange(e){
    
    const currencyOptionSymbol = e.target.children[0].textContent;
    
    this.setState({
      currentCurrencySymbol: currencyOptionSymbol,
      isCurrenciesListOpen: !this.state.isCurrenciesListOpen
    }) 
  }

  handleCurrenciesListOpen(){
    this.setState({isCurrenciesListOpen: !this.state.isCurrenciesListOpen});
  }

  handleSelectCategory(e){
    this.setState({currentCategory: e.target.textContent})
  }

  updateProductCartQuantity = (product, quantity) => {

    const cartElements = this.state.cartElements;
    const productToUpdate = JSON.stringify(product);

    // Update quantity of particular product and delete if from cart if it's quantity is 0
    const updatedCartElements = cartElements.map(element => {

      if (JSON.stringify(element) === productToUpdate) {
        element.quantity = quantity;
      }

      if (element.quantity > 0) {
        return element;
      } else {
        return false;
      }

    });

    this.setState({cartElements: updatedCartElements.filter(Boolean)}); 
  }

  addProductToCart = async (productId, selectedAttributes) => {
    const product = await querySingleProduct(productId);

    const productAttributes = selectedAttributes ? selectedAttributes : await getDefaultProductAttributes(productId);

    if (this.state.cartElements.length > 0) {

      let isExistingProductQuantityUpdated = false;

      const updatedCartElements = [];

      this.state.cartElements.forEach(element => {
  
        // Check if that type of product exists in cart by comparing ID's
        if (element.product.id === product.id) {

          const newProductAttributesStates = JSON.stringify(productAttributes);
          const cartElementAttributesStates = JSON.stringify(element.selectedAttributes);
          
          // If product exists and has the same attributes, increment it's quantity
          if (newProductAttributesStates === cartElementAttributesStates) {
            
            element.quantity += 1;
            isExistingProductQuantityUpdated = true;
            
          }
          
        }

        updatedCartElements.push(element);
      })

      // If we don't update existing product order quantity, add new product to cart 
      if (!isExistingProductQuantityUpdated) {

        const orderedProduct = {
          product: product,
          selectedAttributes: productAttributes,
          quantity: 1
        };

        updatedCartElements.push(orderedProduct);
      }
      
      this.setState({cartElements: updatedCartElements});

    } else {

        const orderedProduct = {
            product: product,
            selectedAttributes: productAttributes,
            quantity: 1
          };
          
        this.setState({cartElements: [...this.state.cartElements, orderedProduct]})
    }

  }

  updateElementInCart(product, newAttributes){
    
    const cartElements = this.state.cartElements;
    const productToUpdate = JSON.stringify(product);

    
    // Update attributes of element to update
    const updatedCartElements = cartElements.map(element => {

      if (JSON.stringify(element) === productToUpdate) {
        element.selectedAttributes = newAttributes;
      }

      return element;

    });

    this.setState({cartElements: updatedCartElements}); 
  }

  // TODO: implement algorithm that takes same products with same attributes and merge them if they are different positions

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
          updateProductCartQuantity={this.updateProductCartQuantity}
          updateElementInCart={this.updateElementInCart}
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
