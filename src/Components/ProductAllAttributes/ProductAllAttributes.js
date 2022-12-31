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
        
        // Set attrs to editable if it's not specified
        this.areAttrsEditable = this.props.areAttrsEditable ? true : false;
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
                    areAttrsEditable={this.areAttrsEditable}
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