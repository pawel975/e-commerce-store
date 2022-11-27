import { Component } from "react";
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import CartOverlay from "../../Components/CartOverlay/CartOverlay";
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import ProductPage from "../../Components/ProductPage/ProductPage";
import "./Main.scss";

class Main extends Component {

    constructor(){
        super()
        this.state = {
            currentRoute: "/",
            productId: ""
        }
    }

    componentDidMount(){
        this.setState({currentRoute: window.location.pathname})
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
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            addProductToCart={this.props.addProductToCart}
                                        />
                                    }
                                />
                                
                                <Route
                                    path={`/clothes`}
                                    element={
                                        <CategoryProducts 
                                            currentCategory="clothes"
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            addProductToCart={this.props.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/tech`}
                                    element={
                                        <CategoryProducts 
                                            currentCategory="tech"
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            addProductToCart={this.props.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/product/:productId`}
                                    element={
                                        <ProductPage 
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            productId={window.location.pathname.slice(9)}
                                            addProductToCart={this.props.addProductToCart}
                                        />
                                    }
                                />

                                <Route
                                    path={`/cart`}
                                    element={
                                        <Cart
                                            cartElements={this.props.cartElements}
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