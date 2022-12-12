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
                
                <button className="cart-product-quantity__change-amount less">
                    <img src="/assets/img/plus-icon.svg" alt="add"/>
                </button>
                
                <div className="cart-product-quantity__quantity">{!this.productQuantity && 1}</div>

                <button className="cart-product-quantity__change-amount more">
                    <img src="/assets/img/minus-icon.svg" alt="minus"/>
                </button>
                
            </section>
        )
    }
}

export default CartProductQuantity;