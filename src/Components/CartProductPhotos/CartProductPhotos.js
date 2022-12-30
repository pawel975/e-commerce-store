import { Component } from "react";
import "./CartProductPhotos.scss";

class CartProductPhotos extends Component {

    constructor(props){
        super(props)
        this.productPhotos = this.props.productPhotos;
        
        this.size = this.props.size ? this.props.size : "";
    }

    render(){
        return (
            <div className={`cart-product-photos ${this.size}`}>
                {
                    this.productPhotos.map((photo, index) => (
                        <div className="cart-product-photos__photo-container">
                            <img 
                                src={photo} 
                                alt="product" 
                                key={"cart-product-photo" + index}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CartProductPhotos;