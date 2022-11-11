import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import CartOverlay from "../../Components/CartOverlay/CartOverlay";
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts";
import "./Main.scss";

class Main extends Component {

    render(){
        return (
            <main>

                {this.props.isCartOverlayVisible && <CartOverlay/>}
                <Routes>
                    <Route
                        path={`/all`}
                        element={<CategoryProducts currentCategory="all"/>}
                    />
                    <Route
                        path={`/tech`}
                        element={<CategoryProducts currentCategory="tech"/>}
                    />
                    <Route
                        path={`/clothes`}
                        element={<CategoryProducts currentCategory="clothes"/>}
                    />
                </Routes>
                {/* <CategoryProducts currentCategory={this.props.currentCategory}/> */}
                
            </main>
        )
    }
}   

export default Main;