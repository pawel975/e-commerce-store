import { Component } from "react";
import ProductAttributeOption from "../ProductAttributeOption/ProductAttributeOption";
import "./ProductAttribute.scss";

class ProductAttribute extends Component {

    constructor(props){
        super(props)
        this.id = this.props.id
        this.name = this.props.name
        this.type = this.props.type
        this.attrOptions = this.props.attrOptions
        this.changeProductAttributesStates = this.props.changeProductAttributesStates;
        this.changeActiveOption = this.changeActiveOption.bind(this);
        this.isOptionPicked = this.isOptionPicked.bind(this);
    }

    isOptionPicked(attrId, attrOption, productSelectedAttributes){

        const attribute = productSelectedAttributes.find(attr => attr.attrId === attrId)

        if (attribute) {
            return attribute.optionParams.id === attrOption.id
        } else {
            return false;
        }
    }

    changeActiveOption(e, attrOptionParams){
        
        // Reset all size buttons to default not pressed state
        const allAttrOptions = [...e.target.parentNode.children];
        
        allAttrOptions.forEach(option => {
            option.setAttribute("aria-pressed", false);
        });
        
        // Set clicked button as a choosed attr option
        const chosenOption = e.target;
        
        chosenOption.setAttribute("aria-pressed", true);

        // Change attr value based on selected attr option
        this.changeProductAttributesStates(this.id, attrOptionParams)
    }

    render(){

        const allAttrOptions = this.attrOptions.map(attrSingleOption => {

            return (
                <ProductAttributeOption
                    key={this.id + attrSingleOption.value}
                    type={this.type}
                    attrSingleOption={attrSingleOption}
                    changeActiveOption={this.changeActiveOption}
                    productAttributesStates={this.props.productAttributesStates}
                    isOptionPicked={this.isOptionPicked(this.id, attrSingleOption, this.props.productAttributesStates)}
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