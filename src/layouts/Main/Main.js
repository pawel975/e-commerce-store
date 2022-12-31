import { Component } from "react";
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import CartOverlay from "../../Components/CartOverlay/CartOverlay";
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import ProductPage from "../../Components/ProductPage/ProductPage";
import "./Main.scss";

class Main extends Component {

    constructor(props){
        super(props)
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;
        this.addProductToCart = this.props.addProductToCart;
        this.deleteProductFromCart = this.props.deleteProductFromCart;
        this.handleCartOverlayVisibleToggle = this.props.handleCartOverlayVisibleToggle;
        this.changeAttrValue = this.changeAttrValue.bind(this);

        this.state = {
            productId: "",
            cartProdcutsAttributesStates: []
        }
    }
    
    changeAttrValue(selectedOptionAttrId, selectedOptionParams){
        
        // Continue if any attribute is set
        if (this.state.cartProdcutsAttributesStates.length > 0) {

            // Check if any of attributes has changed it's value and save it if so
            const newAttributesStates = this.state.cartProdcutsAttributesStates.map(attribute => {
    
                if (attribute.attrId === selectedOptionAttrId) {
                    return {
                        attrId: selectedOptionAttrId,
                        attrValue: selectedOptionParams.value
                    }
                } else {
                    return attribute
                }
            })
    
            this.setState({cartProdcutsAttributesStates: newAttributesStates})

        } else {

            this.setState({cartProdcutsAttributesStates: [
                {
                    attrId: selectedOptionAttrId,
                    attrValue: selectedOptionParams.value
                }
            ]})
        }

    }

    render(){

        const totalCartCost = this.props.cartElements.map(cartEl => {

            const unitCost = cartEl.product.prices.find(price => price.currency.symbol === this.props.currentCurrencySymbol).amount;

            const productQuantity = cartEl.quantity;

            return unitCost * productQuantity;

        }).reduce((acc, currentVal) => acc + currentVal, 0).toFixed(2);

        return (
            <main>

                {this.props.isCartOverlayVisible && 
                    <CartOverlay 
                        updateProductCartQuantity={this.updateProductCartQuantity}
                        handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle}
                        cartElements={this.props.cartElements}
                        currentCurrencySymbol={this.props.currentCurrencySymbol}
                        changeAttrValue={this.changeAttrValue}
                        totalCartCost={totalCartCost}
                    />
                }

                <RouterProvider router={
                    createBrowserRouter(
                        createRoutesFromElements(
                            <>
                                <Route
                                    path={"/"}
                                    loader={() => {
                                        throw redirect("/all");
                                    }}
                                    errorElement={<ErrorBoundary/>}
                                />
                                <Route
                                    path={`/all`}
                                    element={
                                        <CategoryProducts 
                                            currentCategory="all"
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            addProductToCart={this.addProductToCart}
                                        />
                                    }
                                />
                                
                                <Route
                                    path={`/clothes`}
                                    element={
                                        <CategoryProducts 
                                            currentCategory="clothes"
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            addProductToCart={this.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/tech`}
                                    element={
                                        <CategoryProducts 
                                            currentCategory="tech"
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            addProductToCart={this.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/product/:productId`}
                                    element={
                                        <ProductPage 
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            productId={window.location.pathname.slice(9)}
                                            addProductToCart={this.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/cart`}
                                    element={
                                        <Cart
                                            updateProductCartQuantity={this.updateProductCartQuantity}
                                            cartElements={this.props.cartElements}
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            changeAttrValue={this.changeAttrValue}
                                            totalCartCost={totalCartCost}
                                        />
                                    }
                                />
                            </>
                        )
                    )
                }/>
                    
            </main>
        )
    }
}   

export default Main;