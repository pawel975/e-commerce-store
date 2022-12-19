import { Component } from "react";
import './AddToCartLink.scss';

class AddToCartLink extends Component {

    constructor(props){
        super(props)
        this.handleAddProductToCartButtonClick = this.handleAddProductToCartButtonClick.bind(this);
        this.addProductToCart = this.props.addProductToCart;
    }

    handleAddProductToCartButtonClick(e){
        this.addProductToCart(this.props.productId, this.props.selectedAttributes)
    }

    render(){
        return (
            <a 
                className="add-to-cart-link"
                onClick={this.handleAddProductToCartButtonClick}
                href="/cart"
            >
                {this.props.children}
            </a>
        )
    }
}

export default AddToCartLink;