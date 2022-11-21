import { Component } from "react";
import SizeOption from "../SizeOption/SizeOption";
import "./ProductDetails.scss";

class ProductDetails extends Component {

    constructor(){
        super()
        this.state = {
            size: null,
        }
    }

    handleSizeChange(e){
        
        // Reset all size buttons to default not pressed state
        const allSizes = [...e.target.parentNode.children];
        
        allSizes.forEach(size => {
            size.setAttribute("aria-pressed", false);
        });
        
        // Set clicked button as a choosed size
        const chosenSize = e.target;
        
        chosenSize.setAttribute("aria-pressed", true);
        this.setState({size: chosenSize.textContent});
    }
    
    render(){

        const {name, brand, attributes} = this.props.productDetails;

        const productSizes = attributes[0].items.map(size => (
            <SizeOption 
                key={size.id}
                sizeParams={size}
                handleSizeChange={this.handleSizeChange.bind(this)}
            />
        ))

        return (
            <div className="product-details">

                <header className="product-details__header">
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
                </header>
                
                <section className="product-details__size-picker">
                    <h3>Size:</h3>
                    <div className="product-details__all-sizes">{productSizes}</div>
                </section>

            </div>
        )
    }
}

export default ProductDetails;