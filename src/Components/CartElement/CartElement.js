import { Component } from "react";
import CartElementDetails from "../CartElementDetails/CartElementDetails";
import CartProductPhotos from "../CartProductPhotos/CartProductPhotos";
import CartProductQuantity from "../CartProductQuantity/CartProductQuantity";
import './CartElement.scss';

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
                    changeAttrValue={this.changeAttrValue}
                    selectedAttributes={this.selectedAttributes}
                    currentCurrencySymbol={this.currentCurrencySymbol}
                />
                <CartProductQuantity
                    productQuantity={this.product.quantity}
                />

                <CartProductPhotos
                    productPhotos={this.product.gallery}
                />
            </div>
        )
    }
}

export default CartElement;