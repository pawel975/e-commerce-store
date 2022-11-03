import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import {BiChevronDown as CurrencyPickerDash} from 'react-icons/bi';

const currenciesArray = gql`
    {
        currencies {
            label,
            symbol
        }
    }
`

class CurrencyPicker extends Component {

    constructor() {
        super()
        this.state = {
            isCurrenciesListOpen: false,
            currentCurrencySymbol: "$"
        }
    }

    handleCurrenciesListOpen(){
        if (this.state.isCurrenciesListOpen) {
            this.setState({isCurrenciesListOpen: false});
        } else {
            this.setState({isCurrenciesListOpen: true});
        }
    }

    handleCurrencyChange(e){
        const currencyOptionSymbol = e.target.children[0].textContent;
        this.setState({currentCurrencySymbol: currencyOptionSymbol})
    }

    render() {
        return (
            <div className="currency-picker">

                <div className="show-currencies-container">

                    <label htmlFor="show-currencies">{this.state.currentCurrencySymbol}</label>
                    <button 
                        onClick={this.handleCurrenciesListOpen.bind(this)} 
                        className={`show-currencies ${this.state.isCurrenciesListOpen ? "dash-open" : ""} `}
                    >
                        <CurrencyPickerDash/>
                    </button>

                </div>

                <Query query={currenciesArray}>
                    {({loading, data}) => {
            
                        if (loading) return "Loading...";
            
                        const {currencies} = data;
            
                        const currenciList = currencies.map(currency => {
                            const {label, symbol} = currency;

                            return (
                                
                                <button
                                    key={label} 
                                    className="currency-option"
                                    onClick={this.handleCurrencyChange.bind(this)}
                                >
                                    <span className="currency-symbol">{symbol}</span>
                                    <span className="currency-label">{label}</span>
                                </button>
                            )
                        })
            
                        return (
                            <div 
                                className={`currencies-options-container ${this.state.isCurrenciesListOpen ? "currencies-options-container-visible" : ""} `}
                            >
                                {currenciList}
                            </div> 
                        )
                    }}
                </Query>
            </div>
        )
        
    }
}

export default CurrencyPicker;