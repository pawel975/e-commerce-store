import { Component } from "react";
import MiniCart from "../MiniCart/MiniCart";
import "./CartOverlay.scss"

class CartOverlay extends Component {
    render(){
        return(
            <section className="cart-overlay">
                <div className="cart-overlay__background"></div>
                <MiniCart cartElements={this.props.cartElements}/>
            </section>
        )
    }
}

export default CartOverlay;