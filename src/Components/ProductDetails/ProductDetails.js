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
        this.currentCurrencySymbol = this.props.currentCurrencySymbol;
        this.setAttrValue = this.props.setAttrValue;
        this.currentAttributesStates = this.props.currentAttributesStates;
    }
    
    render(){

        const {id, name, brand, attributes, prices, description} = this.productDetails;

        const price = prices.find(price => price.currency.symbol === this.currentCurrencySymbol)

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
                    setAttrValue={this.setAttrValue}

                />

                <Price 
                    symbol={price.currency.symbol} 
                    amount={price.amount}
                />

                <AddToCartBtn 
                    productId={id}
                    currentAttributesStates={this.currentAttributesStates}    
                    addProductToCart={this.addProductToCart}
                />

                <ParsedHtml
                    html={description}    
                />

            </div>
        )
    }
}

export default ProductDetails;