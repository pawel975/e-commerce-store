import { Component } from "react";
import SizeOption from "../SizeOption/SizeOption";
import "./ProductDetails.scss";

class ProductDetails extends Component {
    render(){

        const {name, brand, attributes} = this.props.productDetails;

        const productSizes = attributes[0].items.map(size => (
            <SizeOption sizeParams={size}/>
        ))

        return (
            <div className="product-details">

                <header className="product-details__header">
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
                </header>
                
                <section className="product-details__size-picker">
                    <h3>Size:</h3>
                    <div className="product-details__all-sizes">{productSizes}</div>
                </section>

            </div>
        )
    }
}

export default ProductDetails;