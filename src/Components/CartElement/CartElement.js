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
        this.changeAttrValue = this.props.changeAttrValue;

        this.handleQuantityIncrease = this.handleQuantityIncrease.bind(this);
        this.handleQuantityDecrease = this.handleQuantityDecrease.bind(this);
    }

    handleQuantityIncrease(){
        this.updateProductCartQuantity(this.props.cartElementParams, this.props.cartElementParams.quantity + 1)
    }

    handleQuantityDecrease(){
        this.updateProductCartQuantity(this.props.cartElementParams, this.props.cartElementParams.quantity - 1)
    }

    render(){

        return (
            <div className="cart-element">
                <CartElementDetails 
                    changeAttrValue={this.changeAttrValue}
                    product={this.props.product}
                    selectedAttributes={this.props.selectedAttributes}
                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                    updateElementInCart={this.props.updateElementInCart}
                    cartElementParams={this.props.cartElementParams}
                />
                <CartProductQuantity
                    handleQuantityIncrease={this.handleQuantityIncrease}
                    handleQuantityDecrease={this.handleQuantityDecrease}
                    cartElementParams={this.props.cartElementParams}
                    updateProductCartQuantity={this.updateProductCartQuantity}
                />

                <CartProductPhotos
                    isSliderVisible={true}
                    productPhotos={this.props.product.gallery}
                />
            </div>
        )
    }
}

export default CartElement;