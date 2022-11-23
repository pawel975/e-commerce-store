import { Component } from "react";
import './CartButton.scss'

class Cart extends Component {

    render() {
        return (
            <div className="cart-button">
                <button 
                    className="cart-button__btn"
                    onClick={this.props.handleCartOverlayVisibleToggle.bind(this)}
                >
                    <img src="/assets/img/cart-dark.svg" alt="cart" className="cart-button__image"/>
                </button>
            </div>
        )
    }
}

export default Cart;