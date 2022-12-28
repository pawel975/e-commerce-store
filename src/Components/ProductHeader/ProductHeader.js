import { Component } from "react";
import "./ProductHeader.scss";

class ProductHeader extends Component {
    
    constructor(props){
        super(props)
        this.name = this.props.name;
        this.brand = this.props.brand;

        // Optional to changes styles
        this.nameStyles = this.props.nameStyles;
        this.brandStyles = this.props.brandStyles;
        this.productHeaderContainerStyles = this.props.productHeaderContainerStyles;
    }

    render(){
        return (
            <header 
                style={this.productHeaderContainerStyles ? this.productHeaderContainerStyles : {}}
                className="product-header"
            >
                
                <h1 style={this.nameStyles ? this.nameStyles : {}}>
                    {this.name}
                </h1>

                <h2 style={this.brandStyles ? this.brandStyles : {}}>
                    {this.brand}
                </h2>
            </header>
        )
    }
}

export default ProductHeader;