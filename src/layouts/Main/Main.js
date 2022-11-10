import { Component } from "react";
import CartOverlay from "../../Components/CartOverlay/CartOverlay";
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts";
import "./Main.scss";

class Main extends Component {

    render(){
        return (
            <main>
                
                {this.props.isCartOverlayVisible && <CartOverlay/>}

                <CategoryProducts currentCategory={this.props.currentCategory}/>
            </main>
        )
    }
}   

export default Main;