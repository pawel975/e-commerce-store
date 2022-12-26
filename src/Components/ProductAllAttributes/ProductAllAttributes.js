import { Component } from "react";
import ProductAttribute from "../ProductAttribute/ProductAttribute";
import './ProductAllAttributes.scss';

class ProductAllAttributes extends Component {

    constructor(props){
        super(props);
        this.attributes = this.props.attributes;
        this.changeProductAttributesStates = this.props.changeProductAttributesStates;
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
                    attrOptions={items}
                    productAttributesStates={this.props.productAttributesStates}
                    changeProductAttributesStates={this.changeProductAttributesStates}
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