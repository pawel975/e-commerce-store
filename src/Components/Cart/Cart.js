import React, { Component } from "react";
import CartElement from "../CartElement/CartElement";
import "./Cart.scss";

class Cart extends Component {

    constructor(props){
        super(props)
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;
        this.deleteProductFromCart = this.props.deleteProductFromCart;
        this.changeAttrValue = this.props.changeAttrValue;
    }

    render(){
        return (
            <section className="cart">
                <h2 className="cart__header">CART</h2>
                <hr/>
                {
                    this.props.cartElements.map((cartElement, index) => {

                        if (cartElement.quantity > 0) {
                            return (
                                <React.Fragment key={"cartelement" + index}>
                                    <CartElement
                                        updateProductCartQuantity={this.updateProductCartQuantity}
                                        cartElementParams={cartElement}
                                        product={cartElement.product}
                                        selectedAttributes={cartElement.selectedAttributes}
                                        currentCurrencySymbol={this.props.currentCurrencySymbol}
                                        changeAttrValue={this.changeAttrValue}
                                    />
                                    <hr/>
                                </React.Fragment>
                            )
                        } else {
                            return false
                        }   
                        
                    }).filter(Boolean)
                }
            </section>
        )
    }
}

export default Cart;