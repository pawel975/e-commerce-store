import { Component } from "react";
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import CartOverlay from "../../Components/CartOverlay/CartOverlay";
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import ProductDescriptionPage from "../../Components/ProductDescriptionPage/ProductDescriptionPage";
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
                                        />
                                    }
                                />
                                
                                <Route
                                    path={`/clothes`}
                                    element={
                                        <CategoryProducts 
                                        currentCategory="clothes"
                                        currentCurrencySymbol={this.props.currentCurrencySymbol}
                                        />
                                    }
                                />

                                <Route
                                    path={`/tech`}
                                    element={
                                        <CategoryProducts 
                                        currentCategory="tech"
                                        currentCurrencySymbol={this.props.currentCurrencySymbol}
                                        />
                                    }
                                />

                                <Route
                                    path={`/product/:productId`}
                                    element={
                                        <ProductDescriptionPage 
                                            currentCurrencySymbol={this.props.currentCurrencySymbol}
                                            productId={window.location.pathname.slice(9)}
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


// render(){
//     return (
//         <main>

//             {this.props.isCartOverlayVisible && <CartOverlay/>}

//             {this.state.currentRoute === "/" ? <Navigate to="/all"/> : null}

//             <Routes>
//                 <Route
//                     path={`/all`}
//                     element={
//                         <CategoryProducts 
//                         currentCategory="all"
//                         currentCurrencySymbol={this.props.currentCurrencySymbol}
//                         />
//                     }
//                 />

//                 <Route
//                     path={`/clothes`}
//                     element={
//                         <CategoryProducts 
//                         currentCategory="clothes"
//                         currentCurrencySymbol={this.props.currentCurrencySymbol}
//                         />
//                     }
//                 />

//                 <Route
//                     path={`/tech`}
//                     element={
//                         <CategoryProducts 
//                         currentCategory="tech"
//                         currentCurrencySymbol={this.props.currentCurrencySymbol}
//                         />
//                     }
//                 />

//                 <Route
//                     path={`/product`}
//                     loader={({params}) => {
//                         // this.setState({productId: params.productId})
//                         console.log("XDAGAEG")
//                     }}
//                     element={<ProductDescriptionPage productId={"huarache-x-stussy-le"}/>}
//                 />

//             </Routes>
                
//         </main>
//     )
// }