import { Component } from "react";
import CartButton from "../CartButton/CartButton";
import CurrencyPicker from "../CurrencyPicker/CurrencyPicker";
import "./Actions.scss";

class Actions extends Component {

    constructor(props){
        super(props)
            this.handleCurrencyChange = this.props.handleCurrencyChange;
            this.handleCurrenciesListOpen = this.props.handleCurrenciesListOpen;
            this.handleCartOverlayVisibleToggle = this.props.handleCartOverlayVisibleToggle;
    }

    render() {
        
        return (
            <div className="actions">
                <CurrencyPicker 
                    handleCurrencyChange={this.handleCurrencyChange}
                    handleCurrenciesListOpen={this.handleCurrenciesListOpen}
                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                    isCurrenciesListOpen={this.props.isCurrenciesListOpen}
                />
                <CartButton handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle}/>
            </div>
        )
    }
}

export default Actions;