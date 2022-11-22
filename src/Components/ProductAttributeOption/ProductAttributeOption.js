import { Component } from "react";
import "./ProductAttributeOption.scss";

class ProductAttributeOption extends Component {
    
    render(){
    
        const {handleAttrStatusChange, displayValue, value, type} = this.props;
        
        const optionType = type === "swatch" ? 

            <button 
                className="product-attribute-option"
                onClick={handleAttrStatusChange}
                data-type="swatch"
                style={{backgroundColor: value}}
            />
            
            :

            <button 
                className="product-attribute-option"
                onClick={handleAttrStatusChange}
                data-type="text"
            >
                <span className="product-attribute-option__name">{displayValue}</span>
            </button>

        return optionType;
    }
}

export default ProductAttributeOption;