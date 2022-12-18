import { Component } from "react";
import Actions from "../../Components/Actions/Actions";
import Logo from "../../Components/Logo/Logo";
import Navigation from "../../Components/Navigation/Navigation";
import './Header.scss';

class Header extends Component {

    constructor(props){
        super(props);
            this.handleCartOverlayVisibleToggle = this.props.handleCartOverlayVisibleToggle;
            this.handleCurrencyChange = this.props.handleCurrencyChange;
            this.handleCurrenciesListOpen = this.props.handleCurrenciesListOpen;
            this.handleSelectCategory = this.props.handleSelectCategory;
    }

    render(){

        return (
            <header className="header">         
                <Navigation
                    handleSelectCategory={this.handleSelectCategory}
                /> 
                <Logo/>
                <Actions
                    handleCartOverlayVisibleToggle={this.handleCartOverlayVisibleToggle}
                    handleCurrencyChange={this.handleCurrencyChange}
                    handleCurrenciesListOpen={this.handleCurrenciesListOpen}
                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                    isCurrenciesListOpen={this.props.isCurrenciesListOpen}
                />
            </header>
        )
    }
}   

export default Header;