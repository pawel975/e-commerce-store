import { Component } from "react";
import "./CartOverlay.scss"

class CartOverlay extends Component {
    render(){
        return(
            <section className="cart-overlay">
                <div className="cart-overlay__background"></div>
                <div className="cart-overlay__cart">
                    
                </div>
            </section>
        )
    }
}

export default CartOverlay;