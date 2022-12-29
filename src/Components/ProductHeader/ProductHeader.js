import { Component } from "react";
import "./ProductHeader.scss";

class ProductHeader extends Component {
    
    constructor(props){
        super(props)
        this.name = this.props.name;
        this.brand = this.props.brand;

        this.size = this.props.size;
    }

    render(){
        return (
            <header 
                className={`product-header ${this.size}`}
            >
                <h1>{this.name}</h1>
                <h2>{this.brand}</h2>
            </header>
        )
    }
}

export default ProductHeader;