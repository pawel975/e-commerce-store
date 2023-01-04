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
    this.eraseZeroQuantityCartElements = this.eraseZeroQuantityCartElements.bind(this);

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

  eraseZeroQuantityCartElements(cartElements){

    const hasZeroQuantityCartElements = cartElements.find(cartEl => cartEl.quantity < 1);

    if (hasZeroQuantityCartElements) {

      const filteredCartElements = cartElements.filter(cartEl => cartEl.quantity > 0)

      this.setState({cartElements: filteredCartElements})
    }
  }

  updateProductCartQuantity = (product, quantity) => {

    const cartElements = this.state.cartElements;
    const productToUpdate = JSON.stringify(product);

    // Update quantity of particular product and delete if from cart if it's quantity is 0
    let updatedCartElements = cartElements.map(element => {

      if (JSON.stringify(element) === productToUpdate) {
        element.quantity = quantity;
      }

      return element;

    });

    this.setState({cartElements: updatedCartElements}); 
  }

  addProductToCart = async (productId, selectedAttributes) => {
    const product = await querySingleProduct(productId);

    console.log(selectedAttributes)

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
          quantity: 1,
          uuid: crypto.randomUUID(),
        };

        updatedCartElements.push(orderedProduct);
      }
      
      this.setState({cartElements: updatedCartElements});

    } else {

        const orderedProduct = {
          product: product,
          selectedAttributes: productAttributes,
          quantity: 1,
          uuid: crypto.randomUUID(),
        };
          
        this.setState({cartElements: [...this.state.cartElements, orderedProduct]})
    }

  }

  componentDidMount(){
    this.eraseZeroQuantityCartElements(this.state.cartElements);
    saveToLocalStorage("state", this.state)
  }

  componentDidUpdate(){
    this.eraseZeroQuantityCartElements(this.state.cartElements);
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
          isCartOverlayVisible={this.state.isCartOverlayVisible}
          currentCurrencySymbol={this.state.currentCurrencySymbol}
          cartElements={this.state.cartElements}
          addProductToCart={this.addProductToCart}
          handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle}
        />

      </div>
    )
  }
}

export default App;
