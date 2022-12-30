import { Component } from "react";
import './MiniCartTotalCost.scss';

class MiniCartTotalCost extends Component {

    render(){
        return(
            <div className="mini-cart-total-cost">
                <div>Total</div>
                <div>
                    <span className="mini-cart-total-cost__currency-symbol">
                        {this.props.currentCurrencySymbol}
                    </span>
                    <span className="mini-cart-total-cost__amount">
                        {this.props.totalCartCost}
                    </span>
                </div>
            </div>
        )
    }
}

export default MiniCartTotalCost;