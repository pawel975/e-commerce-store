import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CartOverlay from "../../Components/CartOverlay/CartOverlay";
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts";
import "./Main.scss";

class Main extends Component {

    constructor(){
        super()
        this.state = {
            isDefault: "/"
        }
    }

    componentDidMount(){
        this.setState({isDefault: window.location.pathname})
    }

    render(){
        return (
            <main>

                {this.props.isCartOverlayVisible && <CartOverlay/>}

                {this.state.isDefault === "/" ? <Navigate to="/all"/> : null}
                
                <Routes>
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
                </Routes>
                
            </main>
        )
    }
}   

export default Main;