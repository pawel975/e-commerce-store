import { Component } from "react";
import "./ProductDetails.scss";
import parse from "html-react-parser";
import ProductAllAttributes from "../ProductAllAttributes/ProductAllAttributes";

class ProductDetails extends Component {

    constructor(props){
        super(props)
        this.productDetails = this.props.productDetails;
        this.state = {
            selectedAttributes: null,
        }
    }

    componentDidMount(){
        // Set all attributes to first value by default
        const attrs = this.productDetails.attributes.map(attr => (attr.items[0]))

        this.setState({selectedAttributes: attrs})
    }

    handleAttrValueChange(newSelectedAttribute){

        // Check if any of attributes has changed it's value and save it if so
        const newSelectedAttributes = this.state.selectedAttributes.map((selectedAttribute) => {

            if (selectedAttribute.id !== newSelectedAttribute.id) {
                return newSelectedAttribute
            } else {
                return selectedAttribute
            }
        })

        this.setState({selectedAttributes: newSelectedAttributes})

    }
    
    render(){

        const {id, name, brand, attributes, prices, description} = this.productDetails;

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

                <ProductAllAttributes 
                    attributes={attributes}
                    handleAttrValueChange={this.handleAttrValueChange.bind(this)}
                />

                <header className="product-details__price">
                    <h3>PRICE:</h3>
                    <span>{price.currency.symbol}{price.amount}</span>
                </header>

                <a 
                    className="product-details__add-to-cart"
                    href="/cart"
                    onClick={() => this.props.addProductToCart(id, this.state.selectedAttributes)}
                >
                    ADD TO CART
                </a>

                {parse(description)}

            </div>
        )
    }
}

export default ProductDetails;