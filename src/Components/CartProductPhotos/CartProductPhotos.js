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
                {
                    this.productPhotos.map((photo, index) => (
                        <img 
                            src={photo} 
                            alt="product" 
                            key={"cart-product-photo" + index}
                        />
                    ))
                }
            </div>
        )
    }
}

export default CartProductPhotos;