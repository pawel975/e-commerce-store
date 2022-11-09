import { Component } from "react";
import Cart from "../Cart/Cart";
import CurrencyPicker from "../CurrencyPicker/CurrencyPicker";
import "./Actions.scss";

class Actions extends Component {

    render() {
        return (
            <div className="actions">
                <CurrencyPicker/>
                <Cart handleCartOverlayVisibleToggle={this.props.handleCartOverlayVisibleToggle}/>
            </div>
        )
    }
}

export default Actions;