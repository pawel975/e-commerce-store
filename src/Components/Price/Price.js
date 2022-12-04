import { Component } from "react";
import "./Price.scss";

class Price extends Component {

    constructor(props){
        super(props)
        this.symbol = this.props.symbol;
        this.amount = this.props.amount;
    }

    render(){
        return (
            <div className="price">
                <div className="product-details__price">
                    <h3>PRICE:</h3>
                    <span>{this.symbol}{this.amount}</span>
                </div>
            </div>
        )
    }
}

export default Price;