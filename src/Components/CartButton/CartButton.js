import { Component } from "react";
import { connect } from "react-redux";
import allActions from "../../actions";
import './CartButton.scss'

class CartButton extends Component {

    render() {
        return (
            <div className="cart-button">
                <button 
                    className="cart-button__btn"
                    onClick={this.props.toggleCartOverlay}
                >
                    <img src="/assets/img/cart-dark.svg" alt="cart" className="cart-button__image"/>
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    toggleCartOverlay: allActions.cartOverlayActions.toggleCartOverlay,
}

export default connect(null, mapDispatchToProps)(CartButton);