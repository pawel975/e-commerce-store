import { Component } from "react";
import ProductAttributeOption from "../ProductAttributeOption/ProductAttributeOption";
import "./ProductAttribute.scss";

class ProductAttribute extends Component {

    constructor(props){
        super(props)
        this.id = this.props.id
        this.name = this.props.name
        this.type = this.props.type
        this.options = this.props.options
        this.changeAttrValue = this.props.changeAttrValue;
    }

    changeActiveOption(e, attrOptionParams){
        
        // Reset all size buttons to default not pressed state
        const allAttrOptions = [...e.target.parentNode.children];
        
        allAttrOptions.forEach(option => {
            option.setAttribute("aria-pressed", false);
        });
        
        // Set clicked button as a choosed size
        const chosenOption = e.target;
        
        chosenOption.setAttribute("aria-pressed", true);

        // Change attr value based on selected one
        this.changeAttrValue(this.id, attrOptionParams)
    }

    render(){

        const allAttrOptions = this.options.map(option => {

            return (
                <ProductAttributeOption
                    key={this.id + option.value}
                    type={this.type}
                    attrOptionParams={option}
                    changeActiveOption={this.changeActiveOption.bind(this)}
                />
            )
        })

        return(
            <section className="product-attribute">
                <h3>{this.name}:</h3>
                <div className="product-attribute__all-options">
                    {allAttrOptions}
                </div>
            </section>
            
        )
    }
}

export default ProductAttribute;