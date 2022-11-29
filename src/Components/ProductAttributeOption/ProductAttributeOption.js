import { Component } from "react";
import "./ProductAttributeOption.scss";

class ProductAttributeOption extends Component {

    constructor(props){
        super(props);
        this.changeActiveOption = this.props.changeActiveOption;
        this.type = this.props.type;
        this.attrOptionParams = this.props.attrOptionParams;
    }
    
    render(){
        
        const optionType = this.type === "swatch" ? 

            <button 
                className="product-attribute-option"
                onClick={(e) => this.changeActiveOption(e, this.attrOptionParams)}
                data-type="swatch"
                style={{backgroundColor: this.attrOptionParams.value}}
            />
            
            :

            <button 
                className="product-attribute-option"
                onClick={(e) => this.changeActiveOption(e, this.attrOptionParams)}
                data-type="text"
            >
                <span className="product-attribute-option__name">{this.attrOptionParams.displayValue}</span>
            </button>

        return optionType;
    }
}

export default ProductAttributeOption;