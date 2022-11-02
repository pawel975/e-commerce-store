import { Component } from "react";
import Actions from "../../Components/Actions/Actions";
import Logo from "../../Components/Logo/Logo";
import Categories from "../../Components/Navigation/Navigation";
import './Header.scss';

class Header extends Component {
    render(){
        return (
            <header>         
                <Categories/> 
                <Logo/>
                <Actions/>
            </header>
        )
    }
}   

export default Header;