import { Component } from "react";
import ProductAttribute from "../ProductAttribute/ProductAttribute";
import './ProductAllAttributes.scss';

class ProductAllAttributes extends Component {

    constructor(props){
        super(props);
        this.attributes = this.props.attributes;
        this.changeProductAttributesStates = this.props.changeProductAttributesStates;
        this.attrNameStyles = this.props.attrNameStyles;

        this.size = this.props.size ? this.props.size : "";
    }

    render(){

        const productAttributes = this.attributes.map(attribute => {

            const {id, name, type, items} = attribute;

            return (
                <ProductAttribute 
                    id={id}
                    key={id}
                    name={name}
                    type={type}
                    size={this.size}
                    attrOptions={items}
                    productAttributesStates={this.props.productAttributesStates}
                    changeProductAttributesStates={this.changeProductAttributesStates}
                    attrNameStyles={this.attrNameStyles}
                />
            )
        })

        return (
            <div className={`product-all-attributes ${this.size}`}>
                {productAttributes}
            </div>
        )
    }
}

export default ProductAllAttributes;