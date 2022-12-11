import { Component } from "react";
import "./CartProductQuantity.scss";

class CartProductQuantity extends Component {

    constructor(props){
        super(props);
        this.productQuantity = this.props.productQuantity;
    }
    render(){
        return (
            <section className="cart-product-quantity">
                <div className="cart-product-quantity__change-amount less">-</div>
                <div className="cart-product-quantity__quantity">{!this.productQuantity && 0}</div>
                <div className="cart-product-quantity__change-amount more">+</div>
            </section>
        )
    }
}

export default CartProductQuantity;