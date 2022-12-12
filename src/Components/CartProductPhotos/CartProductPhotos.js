import { Component } from "react";
import "./CartProductPhotos.scss";

class CartProductPhotos extends Component {

    constructor(props){
        super(props)
        this.productPhotos = this.props.productPhotos;
    }

    render(){
        return (
            <div className="cart-product-photos">
                {this.productPhotos.map(photo => (
                    <img src={photo} alt="product"/>
                ))}
            </div>
        )
    }
}

export default CartProductPhotos;