import { Component } from "react";
import Actions from "../../Components/Actions/Actions";
import Logo from "../../Components/Logo/Logo";
import Navigation from "../../Components/Navigation/Navigation";
import './Header.scss';

class Header extends Component {

    render(){
        return (
            <header>         
                <Navigation
                    currentCategory={this.props.currentCategory}
                    handleSelectCategory={this.props.handleSelectCategory}
                /> 
                <Logo/>
                <Actions 
                    handleCartOverlayVisibleToggle={this.props.handleCartOverlayVisibleToggle}
                    handleCurrencyChange={this.props.handleCurrencyChange}
                    handleCurrenciesListOpen={this.props.handleCurrenciesListOpen}
                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                    isCurrenciesListOpen={this.props.isCurrenciesListOpen}
                />
            </header>
        )
    }
}   

export default Header;