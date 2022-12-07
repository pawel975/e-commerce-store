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
        this.isCartOverlayVisible = this.props.isCartOverlayVisible
        this.addProductToCart = this.props.addProductToCart;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol
        this.cartElements = this.props.cartElements;
        this.setAttrValue = this.setAttrValue.bind(this);
        this.state = {
            currentRoute: "/",
            productId: "",
            currentAttributesStates: []
        }
    }

    componentDidMount(){
        this.setState({currentRoute: window.location.pathname})

        if (this.cartElements.length > 0) {
            // Set all attributes to first value by default
            const initAttributeStates = this.cartElements.map(element => {
    
                const {id, attributes} = element.product;
    
                const attrs = attributes.map(attr => (
                    {
                        attrId: attr.id,
                        attrValue: attr.items[0]
                    }
                ))
                
                return {
                    productId: id,
                    productAttrs: attrs
                }
                
            })
    
            this.setState({currentAttributesStates: initAttributeStates})

        }

    }
    
    setAttrValue(selectedOptionAttrId, selectedOptionParams){
        
        // Continue if any attribute is set
        if (this.state.currentAttributesStates.length > 0) {

            // Check if any of attributes has changed it's value and save it if so
            const newAttributesStates = this.state.currentAttributesStates.map(attribute => {
    
                if (attribute.attrId === selectedOptionAttrId) {
                    return {
                        attrId: selectedOptionAttrId,
                        attrValue: selectedOptionParams.value
                    }
                } else {
                    return attribute
                }
            })
    
            this.setState({currentAttributesStates: newAttributesStates})

        } else {

            this.setState({currentAttributesStates: [
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
                                            currentAttributesStates={this.state.currentAttributesStates}
                                            currentCurrencySymbol={this.currentCurrencySymbol}
                                            productId={window.location.pathname.slice(9)}
                                            addProductToCart={this.addProductToCart}
                                            setAttrValue={this.setAttrValue}
                                        />
                                    }
                                />

                                <Route
                                    path={`/cart`}
                                    element={
                                        <Cart
                                            cartElements={this.cartElements}
                                            currentCurrencySymbol={this.currentCurrencySymbol}
                                            setAttrValue={this.setAttrValue}
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