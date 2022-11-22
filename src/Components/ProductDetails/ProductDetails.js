import { Component } from "react";
import ProductAttribute from "../ProductAttribute/ProductAttribute";
import "./ProductDetails.scss";

class ProductDetails extends Component {
    
    render(){

        const {name, brand, attributes} = this.props.productDetails;

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

        return (
            <div className="product-details">

                <header className="product-details__header">
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
                </header>

                <div className="product-details__all-attributes">
                    {productAttributes}
                </div>

            </div>
        )
    }
}

export default ProductDetails;