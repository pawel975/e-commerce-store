import { Component } from "react";
import CartElementDetails from "../CartElementDetails/CartElementDetails";
import CartProductPhotos from "../CartProductPhotos/CartProductPhotos";
import CartProductQuantity from "../CartProductQuantity/CartProductQuantity";
import './CartElement.scss';

class CartElement extends Component {

    constructor(props){
        super(props)
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;
        this.updateElementInCart = this.props.updateElementInCart;
        this.cartElementParams = this.props.cartElementParams;
        this.product = this.props.product;
        this.changeAttrValue = this.props.changeAttrValue;

        this.handleQuantityIncrease = this.handleQuantityIncrease.bind(this);
        this.handleQuantityDecrease = this.handleQuantityDecrease.bind(this);
    }

    handleQuantityIncrease(){
        this.updateProductCartQuantity(this.cartElementParams, this.cartElementParams.quantity + 1)
    }

    handleQuantityDecrease(){
        this.updateProductCartQuantity(this.cartElementParams, this.cartElementParams.quantity - 1)
    }

    render(){

        return (
            <div className="cart-element">
                <CartElementDetails 
                    product={this.product}
                    changeAttrValue={this.changeAttrValue}
                    selectedAttributes={this.props.selectedAttributes}
                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                    updateElementInCart={this.props.updateElementInCart}
                />
                <CartProductQuantity
                    handleQuantityIncrease={this.handleQuantityIncrease}
                    handleQuantityDecrease={this.handleQuantityDecrease}
                    cartElementParams={this.cartElementParams}
                    updateProductCartQuantity={this.updateProductCartQuantity}
                />

                <CartProductPhotos
                    productPhotos={this.product.gallery}
                />
            </div>
        )
    }
}

export default CartElement;