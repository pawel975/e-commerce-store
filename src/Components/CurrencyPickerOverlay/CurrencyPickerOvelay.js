import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";

const currenciesArray = gql`
    {
        currencies {
            label,
            symbol
        }
    }
`

class CurrencyPickerOverlay extends Component {

    render(){
        return (
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
        )
    }
}

export default CurrencyPickerOverlay;