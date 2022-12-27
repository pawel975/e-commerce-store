import { Component } from "react";
import "./Price.scss";

class Price extends Component {

    constructor(props){
        super(props)
        this.symbol = this.props.symbol;
        this.amount = this.props.amount;
        this.headerStyles = this.props.headerStyles;
        this.priceStyles = this.props.priceStyles;
    }

    render(){

        console.log(this.headerStyles)
        return (
            <div className="price">
                <div className="product-details__price">

                    <h3 style={this.headerStyles}>
                        PRICE:
                    </h3>

                    <span style={this.priceStyles && {}}>
                        {this.symbol}{this.amount}
                    </span>
                </div>
            </div>
        )
    }
}

export default Price;