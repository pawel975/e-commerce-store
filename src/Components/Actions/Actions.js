import { Component } from "react";
import Cart from "../Cart/Cart";
import CurrencyPicker from "../CurrencyPicker/CurrencyPicker";
import "./Actions.scss";

class Actions extends Component {

    render() {
        return (
            <div className="actions">
                <CurrencyPicker 
                    handleCurrencyChange={this.props.handleCurrencyChange}
                    handleCurrenciesListOpen={this.props.handleCurrenciesListOpen}
                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                    isCurrenciesListOpen={this.props.isCurrenciesListOpen}
                />
                <Cart handleCartOverlayVisibleToggle={this.props.handleCartOverlayVisibleToggle}/>
            </div>
        )
    }
}

export default Actions;