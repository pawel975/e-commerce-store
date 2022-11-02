import { Component } from "react";

class CurrencyPicker extends Component {

    constructor() {
        super()
        this.state = {
            isCurrenciesOptionsContainerOpen: false
        }
        
    }

    handleCurrenciesOptionsContainerOpen(){
        if (this.state.isCurrenciesOptionsContainerOpen) {
            this.setState({isCurrenciesOptionsContainerOpen: false});
        } else {
            this.setState({isCurrenciesOptionsContainerOpen: true});
        }
    }

    render() {
        return (
            <div className="currency-picker">
                <div className="show-currencies-container">
                    <label htmlFor="show-currencies">$</label>
                    <button onClick={this.handleCurrenciesOptionsContainerOpen.bind(this)} className="show-currencies">^</button>
                </div>
                <div className={`currencies-options-container ${this.state.isCurrenciesOptionsContainerOpen ? "visible" : ""} `}>
                    <button className="currency-option" value="usd"><span>$</span><span>USD</span></button>
                    <button className="currency-option" value="eur"><span>€</span><span>EUR</span></button>
                    <button className="currency-option" value="jpy"><span>¥</span><span>JPY</span></button>
                </div>
            </div>
        )
        
    }
}

export default CurrencyPicker;