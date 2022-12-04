import { Component } from "react";
import "./AddToCartBtn.scss";

class AddToCartBtn extends Component {

    constructor(props){
        super(props)
        this.productId = this.props.productId;
        this.currentAttributesStates = this.props.currentAttributesStates;
    }

    render(){
        return (
            <a 
                className="add-to-cart-btn"
                href="/cart"
                onClick={() => this.addProductToCart(this.productId, this.state.currentAttributesStates)}
            >
                ADD TO CART
            </a>
        )
    }
}

export default AddToCartBtn;