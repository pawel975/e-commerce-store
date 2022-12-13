import { Component } from "react";
import "./AddToCartBtn.scss";

class AddToCartBtn extends Component {

    constructor(props){
        super(props)
        this.handleAddProductToCartButtonClick = this.props.handleAddProductToCartButtonClick;
    }

    render(){
        return (
            <a 
                className="add-to-cart-btn"
                href="/cart"
                onClick={this.handleAddProductToCartButtonClick}
            >
                ADD TO CART
            </a>
        )
    }
}

export default AddToCartBtn;