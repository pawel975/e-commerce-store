import { Component } from "react";
import Cart from "../Cart/Cart";
import CurrencyPicker from "../CurrencyPicker/CurrencyPicker";
import OverlayWrapper from "../OverlayWrapper/OverlayWrapper";

class Actions extends Component {

    constructor() {
        super()
        this.state = {
            isCurrenciesListOpen: false,
            isOverlayWrapperOpen: true,
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
            <div className="actions">
                <CurrencyPicker/>
                <Cart/>
                { this.state.isOverlayWrapperOpen && 
                    <OverlayWrapper component={<CurrencyPicker 
                        state={this.state} 
                        handleCurrenciesListOpen={this.handleCurrenciesListOpen.bind(this)}
                    />} />
                }
                { this.state.isOverlayWrapperOpen && 
                    <OverlayWrapper>
                        <CurrencyPicker 
                            state={this.state} 
                            handleCurrenciesListOpen={this.handleCurrenciesListOpen.bind(this)}
                        />
                    </OverlayWrapper>}
                }
            </div>
        )
    }
}

export default Actions;