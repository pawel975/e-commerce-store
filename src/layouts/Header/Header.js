import { Component } from "react";
import Actions from "../../Components/Actions/Actions";
import Logo from "../../Components/Logo/Logo";
import Navigation from "../../Components/Navigation/Navigation";
import './Header.scss';

class Header extends Component {

    render(){
        return (
            <header>         
                <Navigation handleCurrentCategoryChange={this.props.handleCurrentCategoryChange}/> 
                <Logo/>
                <Actions handleCartOverlayVisibleToggle={this.props.handleCartOverlayVisibleToggle}/>
            </header>
        )
    }
}   

export default Header;