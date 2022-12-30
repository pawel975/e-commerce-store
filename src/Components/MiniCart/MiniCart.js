import React, { Component } from "react";
import MiniCartElement from "../MiniCartElement/MiniCartElement";
import MiniCartTotalCost from "../MiniCortTotalCost/MiniCartTotalCost";
import './MiniCart.scss';

class MiniCart extends Component {

    constructor(props){
        super(props)
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;
        this.updateElementInCart = this.props.updateElementInCart;
        this.handleCartOverlayVisibleToggle = this.props.handleCartOverlayVisibleToggle;
        this.changeAttrValue = this.props.changeAttrValue;
    }
    
    render(){

        const itemsCount = 
            this.props.cartElements.length > 1 ? 
            this.props.cartElements.length + " items" :
            this.props.cartElements.length + " item"
        
        return(
            <div className="mini-cart">
                <header className="mini-cart__header">
                    <span><strong>My Bag</strong>, {itemsCount}</span>
                </header>
                {
                    this.props.cartElements.map((cartElement, index) => {

                        if (cartElement.quantity > 0) {
                            return (
                                <React.Fragment key={"mini__cart__element" + index}>
                                    <MiniCartElement
                                        updateProductCartQuantity={this.updateProductCartQuantity}
                                        updateElementInCart={this.updateElementInCart}
                                        changeAttrValue={this.changeAttrValue}
                                        currentCurrencySymbol={this.props.currentCurrencySymbol}
                                        cartElementParams={cartElement}
                                        product={cartElement.product}
                                        selectedAttributes={cartElement.selectedAttributes}
                                    />
                                </React.Fragment>
                            )
                        } else {
                            return false
                        }   
                        
                    }).filter(Boolean)
                }
                <MiniCartTotalCost
                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                    totalCartCost={this.props.totalCartCost}
                />
                <div className="mini-cart__links-container">
                    <a 
                        href="/cart"
                        className="mini-cart__cart-link"
                        onClick={this.handleCartOverlayVisibleToggle}
                    >
                        VIEW BAG
                    </a>
                    <a 
                        href="#"
                        className="mini-cart__check-out-link"
                        onClick={this.handleCartOverlayVisibleToggle}
                    >
                        CHECK OUT
                    </a>
                </div>
            </div>
        )
    }
}

export default MiniCart;