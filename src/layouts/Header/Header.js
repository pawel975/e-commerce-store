import { Component } from "react";
import Logo from "../../Components/Logo/Logo";
import Categories from "../../Components/Navigation/Navigation";
import './Header.scss';

class Header extends Component {
    render(){
        return (
            <header>         
                <Categories/> 
                <Logo />
            </header>
        )
    }
}   

export default Header;