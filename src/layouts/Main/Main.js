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
        this.addProductToCart = this.props.addProductToCart;
        this.changeAttrValue = this.changeAttrValue.bind(this);
        this.currentCurrencySymbol = this.props.currentCurrencySymbol
        this.cartElements = this.props.cartElements;
        this.state = {
            currentRoute: "/",
            productId: "",
            currentAttributesStates: null
        }
    }

    componentDidMount(){
        this.setState({currentRoute: window.location.pathname})

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

    changeAttrValue(selectedOptionAttrId, selectedOptionParams){

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
                                            changeAttrValue={this.changeAttrValue}
                                        />
                                    }
                                />

                                <Route
                                    path={`/cart`}
                                    element={
                                        <Cart
                                            cartElements={this.cartElements}
                                            currentCurrencySymbol={this.currentCurrencySymbol}
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