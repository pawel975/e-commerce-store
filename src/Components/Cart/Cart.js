import React, { Component } from "react";
import CartElement from "../CartElement/CartElement";

class Cart extends Component {

    constructor(props){
        super(props)
        this.cartElements = this.props.cartElements;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol;
        this.allCartElements = null;
        this.changeAttrValue = this.props.changeAttrValue;
    }

    componentDidMount(){
        this.allCartElements = this.cartElements.map((cartElement, index) => {
            return (
                <React.Fragment key={"cartelement" + index}>
                    <CartElement
                        product={cartElement.product}
                        selectedAttributes={cartElement.selectedAttributes}
                        currentCurrencySymbol={this.currentCurrencySymbol}
                    />
                    <hr/>
                </React.Fragment>
            )
        })
    }

    render(){
        return (
            <section className="cart">
                <h2 className="cart__header">CART</h2>
                <hr/>
                {this.allCartElements}
            </section>
        )
    }
}

export default Cart;