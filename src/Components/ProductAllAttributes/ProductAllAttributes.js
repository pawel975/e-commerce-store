import { Component } from "react";
import ProductAttribute from "../ProductAttribute/ProductAttribute";
import './ProductAllAttributes.scss';

class ProductAllAttributes extends Component {

    constructor(props){
        super(props);
        this.attributes = this.props.attributes;
        this.setAttrValue = this.props.setAttrValue;
    }

    render(){

        const productAttributes = this.attributes.map(attribute => {

            const {id, name, type, items} = attribute;

            return (
                <ProductAttribute 
                    id={id}
                    key={id}
                    name={name.toUpperCase()}
                    type={type}
                    options={items}
                    setAttrValue={this.setAttrValue}
                />
            )
        })

        return (
            <div className="product-all-attributes">
                {productAttributes}
            </div>
        )
    }
}

export default ProductAllAttributes;