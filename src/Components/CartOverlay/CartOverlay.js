import { Component } from "react";
import MiniCart from "../MiniCart/MiniCart";
import "./CartOverlay.scss"

class CartOverlay extends Component {

    constructor(props){
        super(props)
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;
        this.changeAttrValue = this.props.changeAttrValue;
    }

    render(){
        return(
            <section className="cart-overlay">
                <div className="cart-overlay__background"></div>
                <MiniCart 
                    updateProductCartQuantity={this.updateProductCartQuantity}
                    changeAttrValue={this.changeAttrValue}
                    totalCartCost={this.props.totalCartCost}
                />
            </section>
        )
    }
}

export default CartOverlay;