import { Component } from "react";
import {BiChevronDown as CurrencyPickerDash} from 'react-icons/bi';

class CurrencyPicker extends Component {

    constructor(props){
        super();
        this.currentCurrencySymbol = props.state.currentCurrencySymbol;
        this.isCurrenciesListOpen = props.state.isCurrenciesListOpen;
        this.handleCurrenciesListOpen = props.handleCurrenciesListOpen;
    }


    render() {
        console.log("XD")
        return (
            <div className="currency-picker">

                <div className="show-currencies-container">

                    <label htmlFor="show-currencies">{this.currentCurrencySymbol}</label>
                    <button 
                        onClick={this.handleCurrenciesListOpen.bind(this)} 
                        className={`show-currencies ${this.isCurrenciesListOpen ? "dash-open" : ""} `}
                    >
                        <CurrencyPickerDash/>
                    </button>

                </div>

            </div>
        )
        
    }
}

export default CurrencyPicker;