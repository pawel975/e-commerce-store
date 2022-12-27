import { Component } from "react";
import './MiniCart.scss';

class MiniCart extends Component {
    render(){
        return(
            <div className="mini-cart">
                <header className="mini-cart__header">
                    <span><strong>My bag</strong>, {this.props.cartElements.length} items</span>
                </header>
            </div>
        )
    }
}

export default MiniCart;