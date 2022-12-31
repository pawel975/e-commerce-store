import { Component } from "react";
import getDefaultProductAttributes from "../../helpers/getDefaultProductAttributes";
import ProductAttribute from "../ProductAttribute/ProductAttribute";
import './ProductAllAttributes.scss';

class ProductAllAttributes extends Component {

    constructor(props){
        super(props);
        this.attributes = this.props.attributes;
        this.productId = this.props.productId;

        this.changeProductAttributesStates = this.changeProductAttributesStates.bind(this);
        this.state = {
            productAttributesStates: []
        }

        this.size = this.props.size ? this.props.size : "";
        
        // Set attrs to editable if it's not specified
        this.areAttrsEditable = this.props.areAttrsEditable;
    }

    async componentDidMount(){

        // Set init product attributes states to default values
        const initProductAttributesStates = await getDefaultProductAttributes(this.productId);

        this.setState({productAttributesStates: initProductAttributesStates})
    }

    // Changes current attribute value to new picked option
    changeProductAttributesStates(attrId, newOptionParams){

        const newProductAttributesStates = this.state.productAttributesStates.map(attr => {

            if (attr.attrId === attrId) attr.optionParams = newOptionParams;

            return attr;
        }) 

        this.setState({productAttributesStates: newProductAttributesStates});
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
                    productAttributesStates={this.state.productAttributesStates}
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