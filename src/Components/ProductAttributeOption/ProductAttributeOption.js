import { Component } from "react";
import "./ProductAttributeOption.scss";

class ProductAttributeOption extends Component {

    constructor(props){
        super(props);
        this.handleAttrStatusChange = this.props.handleAttrStatusChange;
        this.type = this.props.type;
        this.optionParams = this.props.optionParams;
    }
    
    render(){
        
        const optionType = this.type === "swatch" ? 

            <button 
                className="product-attribute-option"
                onClick={(e) => this.handleAttrStatusChange(e, this.optionParams)}
                data-type="swatch"
                style={{backgroundColor: this.optionParams.value}}
            />
            
            :

            <button 
                className="product-attribute-option"
                onClick={(e) => this.handleAttrStatusChange(e, this.optionParams)}
                data-type="text"
            >
                <span className="product-attribute-option__name">{this.optionParams.displayValue}</span>
            </button>

        return optionType;
    }
}

export default ProductAttributeOption;