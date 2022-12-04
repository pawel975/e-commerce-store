import { Component } from "react";


class CartElement extends Component {

    constructor(props){
        super(props)
        this.product = this.props.product;
        this.selectedAttributes = this.props.selectedAttributes;
    }

    render(){
        return (
            <div className="cart-element">
                {this.product.name}
            </div>
        )
    }
}

export default CartElement;