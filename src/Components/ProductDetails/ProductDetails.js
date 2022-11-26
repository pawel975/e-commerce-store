import { Component } from "react";
import "./ProductDetails.scss";
import parse from "html-react-parser";
import ProductAllAttributes from "../ProductAllAttributes/ProductAllAttributes";

class ProductDetails extends Component {
    
    render(){

        const {id, name, brand, attributes, prices, description} = this.props.productDetails;

        const price = prices.find(price => price.currency.symbol === this.props.currentCurrencySymbol)

        return (
            <div 
                className="product-details"
                id={id}
            >

                <header className="product-details__header">
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
                </header>

                <ProductAllAttributes attributes={attributes}/>

                <header className="product-details__price">
                    <h3>PRICE:</h3>
                    <span>{price.currency.symbol}{price.amount}</span>
                </header>

                <a 
                    className="product-details__add-to-cart"
                    // href="/cart"
                    onClick={() => this.props.addProductToCart(id)}
                >
                    ADD TO CART
                </a>

                {parse(description)}

            </div>
        )
    }
}

export default ProductDetails;