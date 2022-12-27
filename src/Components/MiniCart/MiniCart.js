import React, { Component } from "react";
import MiniCartElement from "../MiniCartElement/MiniCartElement";
import './MiniCart.scss';

class MiniCart extends Component {

    constructor(props){
        super(props)
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;
        this.updateElementInCart = this.props.updateElementInCart;
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
            </div>
        )
    }
}

export default MiniCart;