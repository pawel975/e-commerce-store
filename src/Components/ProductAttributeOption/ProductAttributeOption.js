import { Component } from "react";
import "./ProductAttributeOption.scss";

class ProductAttributeOption extends Component {
    
    render(){

        const {handleAttrStatusChange, displayValue} = this.props;

        return (
            <button 
                className="product-attribute-option"
                onClick={handleAttrStatusChange}
            >
                <span className="product-attribute-option__name">{displayValue}</span>
            </button>
        )
    }
}

export default ProductAttributeOption;