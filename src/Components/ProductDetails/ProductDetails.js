import { Component } from "react";
import "./ProductDetails.scss";
import ProductAllAttributes from "../ProductAllAttributes/ProductAllAttributes";
import Price from "../Price/Price";
import ProductHeader from "../ProductHeader/ProductHeader";
import ParsedHtml from "../ParsedHtml/ParsedHtml";
import AddToCartLink from "../AddToCartLink/AddToCartLink";

class ProductDetails extends Component {

    constructor(props){
        super(props)
        this.productDetails = this.props.productDetails;
        this.addProductToCart = this.props.addProductToCart;
        this.changeProductAttributesStates = this.changeProductAttributesStates.bind(this);
        this.state = {
            productAttributesStates: []
        }
    }

    componentDidMount(){

        // Set init product attributes states to default values
        const initProductAttributesStates = this.productDetails.attributes.map(attr => {
            
            const {id, items} = attr;

            return (
                {
                    attrId: id,
                    optionParams: items[0]
                }
            )
                
        })

        this.setState({productAttributesStates: initProductAttributesStates})
    }

    // Changes current attribute value to new picked option
    changeProductAttributesStates(attrId, newOptionParams){

        const newProductAttributesStates = this.state.productAttributesStates.map(attr => {

            if (attr.attrId === attrId) attr.optionParams = newOptionParams;

            return attr;
        }) 

        this.setState({productAttributesStates: newProductAttributesStates});
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
                    productAttributesStates={this.state.productAttributesStates}
                    changeProductAttributesStates={this.changeProductAttributesStates}
                />

                <Price 
                    symbol={price.currency.symbol} 
                    amount={price.amount}
                />

                <AddToCartLink 
                    addProductToCart={this.addProductToCart}
                    productId={this.productDetails.id}
                    selectedAttributes={this.state.productAttributesStates}
                >
                    <button className="product-details__add-to-cart">
                        ADD TO CART
                    </button>
                </AddToCartLink>


                <ParsedHtml
                    html={description}    
                />

            </div>
        )
    }
}

export default ProductDetails;