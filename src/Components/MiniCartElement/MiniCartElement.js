import { Component } from "react";
import CartProductPhotos from "../CartProductPhotos/CartProductPhotos";
import CartProductQuantity from "../CartProductQuantity/CartProductQuantity";
import MiniCartElementDetails from "../MiniCartElementDetails/MiniCartElementDetails";
import './MiniCartElement.scss';

class MiniCartElement extends Component {

    constructor(props){
        super(props)
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;
        this.updateElementInCart = this.props.updateElementInCart;
        this.product = this.props.product;
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
            <div className="mini-cart-element">
                <MiniCartElementDetails
                    product={this.product}
                    changeAttrValue={this.changeAttrValue}
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
                    productPhotos={this.product.gallery}
                />
            </div>
        )
    }
}

export default MiniCartElement;