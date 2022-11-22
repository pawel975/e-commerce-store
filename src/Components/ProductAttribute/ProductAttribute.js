import { Component } from "react";
import ProductAttributeOption from "../ProductAttributeOption/ProductAttributeOption";
import "./ProductAttribute.scss";

class ProductAttribute extends Component {
    
    handleAttrStatusChange(e){
        
        // Reset all size buttons to default not pressed state
        const allAttrOptions = [...e.target.parentNode.children];
        
        allAttrOptions.forEach(option => {
            option.setAttribute("aria-pressed", false);
        });
        
        // Set clicked button as a choosed size
        const chosenOption = e.target;
        
        chosenOption.setAttribute("aria-pressed", true);
    }

    render(){

        const {name, type, options} = this.props;

        const allAttrOptions = options.map(option => {

            const {id, displayValue, value} = option;

            return (
                <ProductAttributeOption
                    key={id}
                    displayValue={displayValue}
                    value={value}
                    type={type}
                    handleAttrStatusChange={this.handleAttrStatusChange.bind(this)}
                />
            )
        })

        return(
            <section className="product-attribute">
                <h3>{name}:</h3>
                <div className="product-attribute__all-options">
                    {allAttrOptions}
                </div>
            </section>
            
        )
    }
}

export default ProductAttribute;