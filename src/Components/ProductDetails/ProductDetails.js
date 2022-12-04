import { Component } from "react";
import "./ProductDetails.scss";
import parse from "html-react-parser";
import ProductAllAttributes from "../ProductAllAttributes/ProductAllAttributes";
import Price from "../Price/Price";
import ProductHeader from "../ProductHeader/ProductHeader";

class ProductDetails extends Component {

    constructor(props){
        super(props)
        this.productDetails = this.props.productDetails;
        this.addProductToCart = this.props.addProductToCart;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol;
        this.state = {
            currentAttributesStates: null,
        }
    }

    componentDidMount(){
        // Set all attributes to first value by default
        const attrs = this.productDetails.attributes.map(attr => (
            {
                attrId: attr.id,
                attrValue: attr.items[0]
            }
        ))

        this.setState({currentAttributesStates: attrs})
    }

    changeAttrValue(selectedOptionAttrId, selectedOptionParams){

        // Check if any of attributes has changed it's value and save it if so
        const newAttributesStates = this.state.currentAttributesStates.map(attribute => {

            if (attribute.attrId === selectedOptionAttrId) {
                return {
                    attrId: selectedOptionAttrId,
                    attrValue: selectedOptionParams.value
                }
            } else {
                return attribute
            }
        })

        this.setState({currentAttributesStates: newAttributesStates})
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
                    changeAttrValue={this.changeAttrValue.bind(this)}
                />

                <Price 
                    symbol={price.currency.symbol} 
                    amount={price.amount}
                />

                <a 
                    className="product-details__add-to-cart"
                    href="/cart"
                    onClick={() => this.addProductToCart(id, this.state.currentAttributesStates)}
                >
                    ADD TO CART
                </a>

                {parse(description)}

            </div>
        )
    }
}

export default ProductDetails;