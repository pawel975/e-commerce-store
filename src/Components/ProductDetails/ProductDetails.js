import { Component } from "react";
import "./ProductDetails.scss";
import ProductAllAttributes from "../ProductAllAttributes/ProductAllAttributes";
import Price from "../Price/Price";
import ProductHeader from "../ProductHeader/ProductHeader";
import AddToCatBtn from "../AddToCartBtn/AddToCartBtn";
import ParsedHtml from "../ParsedHtml/ParsedHtml";

class ProductDetails extends Component {

    constructor(props){
        super(props)
        this.productDetails = this.props.productDetails;
        this.addProductToCart = this.props.addProductToCart;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol;
        this.changeAttrValue = this.props.changeAttrValue;
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
                    changeAttrValue={this.changeAttrValue}

                />

                <Price 
                    symbol={price.currency.symbol} 
                    amount={price.amount}
                />

                <AddToCatBtn 
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