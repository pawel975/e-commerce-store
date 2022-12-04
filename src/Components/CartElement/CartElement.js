import { Component } from "react";
import CartElementDetails from "../CartElementDetails/CartElementDetails";


class CartElement extends Component {

    constructor(props){
        super(props)
        this.product = this.props.product;
        this.selectedAttributes = this.props.selectedAttributes;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol;
        this.changeAttrValue = this.props.changeAttrValue;
    }

    render(){
        return (
            <div className="cart-element">
                <CartElementDetails 
                    product={this.product}
                    selectedAttributes={this.selectedAttributes}
                    currentCurrencySymbol={this.currentCurrencySymbol}
                    
                />
            </div>
        )
    }
}

export default CartElement;