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
        this.isCartOverlayVisible = this.props.isCartOverlayVisible
        this.addProductToCart = this.props.addProductToCart;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol
        this.cartElements = this.props.cartElements;
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
        return (
            <main>

                {this.props.isCartOverlayVisible && <CartOverlay/>}

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
                                            currentCurrencySymbol={this.currentCurrencySymbol}
                                            addProductToCart={this.addProductToCart}
                                        />
                                    }
                                />
                                
                                <Route
                                    path={`/clothes`}
                                    element={
                                        <CategoryProducts 
                                            currentCategory="clothes"
                                            currentCurrencySymbol={this.currentCurrencySymbol}
                                            addProductToCart={this.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/tech`}
                                    element={
                                        <CategoryProducts 
                                            currentCategory="tech"
                                            currentCurrencySymbol={this.currentCurrencySymbol}
                                            addProductToCart={this.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/product/:productId`}
                                    element={
                                        <ProductPage 
                                            currentCurrencySymbol={this.currentCurrencySymbol}
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
                                            cartElements={this.cartElements}
                                            currentCurrencySymbol={this.currentCurrencySymbol}
                                            changeAttrValue={this.changeAttrValue}
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