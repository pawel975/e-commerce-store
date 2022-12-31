import { Component } from "react";
import "./ProductDetails.scss";
import ProductAllAttributes from "../ProductAllAttributes/ProductAllAttributes";
import Price from "../Price/Price";
import ProductHeader from "../ProductHeader/ProductHeader";
import ParsedHtml from "../ParsedHtml/ParsedHtml";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

class ProductDetails extends Component {

    constructor(props){
        super(props)
        this.productDetails = this.props.productDetails;
        this.addProductToCart = this.props.addProductToCart;
    }
    
    render(){

        const {id, name, brand, attributes, prices, description} = this.productDetails;

        const price = prices.find(price => price.currency.symbol === this.props.currentCurrencySymbol)

        return (
            <div 
                className="product-details"
                id={id}
            >

                <ProductHeader 
                    name={name} 
                    brand={brand}
                />

                <ProductAllAttributes 
                    attributes={attributes}
                    areAttrsEditable={true}
                    productId={id}
                />

                <Price 
                    symbol={price.currency.symbol} 
                    amount={price.amount}
                />

                <AddToCartBtn 
                    addProductToCart={this.addProductToCart}
                    productId={this.productDetails.id}
                    selectedAttributes={this.props.selectedAttributes}
                />

                <ParsedHtml
                    html={description}    
                />

            </div>
        )
    }
}

export default ProductDetails;