import { Component } from "react";
import Cart from "../Cart/Cart";
import CurrencyPicker from "../CurrencyPicker/CurrencyPicker";

class Actions extends Component {
    render() {
        return (
            <div className="actions">
                <CurrencyPicker/>
                <Cart/>
            </div>
        )
    }
}

export default Actions;