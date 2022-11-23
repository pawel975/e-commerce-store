import { Component } from "react";
import ProductAttribute from "../ProductAttribute/ProductAttribute";
import "./ProductDetails.scss";

class ProductDetails extends Component {
    
    render(){

        const {name, brand, attributes, prices} = this.props.productDetails;

        const productAttributes = attributes.map(attribute => {

                const {id, name, type, items} = attribute;

                return (
                    <ProductAttribute 
                        key={id}
                        name={name}
                        type={type}
                        options={items}
                    />
                )
            })

        const price = prices.find(price => price.currency.symbol === this.props.currentCurrencySymbol)

        return (
            <div className="product-details">

                <header className="product-details__header">
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
                </header>

                <div className="product-details__all-attributes">
                    {productAttributes}
                </div>

                <header className="product-details__price">
                    <h3>Price:</h3>
                    <span>{price.currency.symbol}{price.amount}</span>
                </header>

            </div>
        )
    }
}

export default ProductDetails;