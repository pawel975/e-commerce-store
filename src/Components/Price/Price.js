import { Component } from "react";
import "./Price.scss";

class Price extends Component {

    constructor(props){
        super(props)
        this.symbol = this.props.symbol;
        this.amount = this.props.amount;

        this.size = this.props.size;
    }
    
    render(){

        return (
            <div className={`price ${this.size}`}>
                    {this.size === "small" ? null : <h3>PRICE:</h3>}

                    <span>{this.symbol}{this.amount}</span>
            </div>
        )
    }
}

export default Price;