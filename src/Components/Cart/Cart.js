import { Component } from "react";
import './Cart.scss'

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <button className="cart__btn">
                    <img src="/assets/img/cart.svg" alt="cart" className="cart__image"/>
                </button>
            </div>
        )
    }
}

export default Cart;