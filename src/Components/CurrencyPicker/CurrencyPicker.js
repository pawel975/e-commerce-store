import { Component } from "react";
import {BiChevronDown as CurrencyPickerDash} from 'react-icons/bi';

class CurrencyPicker extends Component {

    constructor() {
        super()
        this.state = {
            isCurrenciesListOpen: false
        }
    }

    handleCurrenciesListOpen(){
        if (this.state.isCurrenciesListOpen) {
            this.setState({isCurrenciesListOpen: false});
        } else {
            this.setState({isCurrenciesListOpen: true});
        }
    }

    render() {
        return (
            <div className="currency-picker">

                <div className="show-currencies-container">

                    <label htmlFor="show-currencies">$</label>
                    <button 
                        onClick={this.handleCurrenciesListOpen.bind(this)} 
                        className={`show-currencies ${this.state.isCurrenciesListOpen ? "dash-open" : ""} `}
                    >
                        <CurrencyPickerDash/>
                    </button>

                </div>

                <div 
                    className={`currencies-options-container ${this.state.isCurrenciesListOpen ? "currencies-options-container-visible" : ""} `}
                >
                    <button className="currency-option" value="usd">
                        <span className="currency-symbol">$</span>
                        <span className="currency-code">USD</span>
                    </button>
                    <button className="currency-option" value="eur">
                        <span className="currency-symbol">€</span>
                        <span className="currency-code">EUR</span>
                    </button>
                    <button className="currency-option" value="jpy">
                        <span className="currency-symbol">¥</span>
                        <span className="currency-code">JPY</span>
                    </button>

                </div>
            </div>
        )
        
    }
}

export default CurrencyPicker;