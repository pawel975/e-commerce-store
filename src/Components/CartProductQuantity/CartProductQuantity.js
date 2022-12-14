import { Component } from "react";
import "./CartProductQuantity.scss";

class CartProductQuantity extends Component {

    constructor(props){
        super(props);

        this.cartElementParams = this.props.cartElementParams;
        this.updateProductCartQuantity = this.props.updateProductCartQuantity;

        this.handleQuantityIncrease= this.props.handleQuantityIncrease;
        this.handleQuantityDecrease= this.props.handleQuantityDecrease

    }

    render(){
        return (
            <section className="cart-product-quantity">
                
                <button 
                    className="cart-product-quantity__change-amount more"
                    onClick={this.handleQuantityIncrease}
                >
                    <img src="/assets/img/plus-icon.svg" alt="add"/>
                </button>
                
                <div className="cart-product-quantity__quantity">{this.cartElementParams.quantity}</div>

                <button 
                    className="cart-product-quantity__change-amount less"
                    onClick={this.handleQuantityDecrease}
                >
                    <img src="/assets/img/minus-icon.svg" alt="minus"/>
                </button>
                
            </section>
        )
    }
}

export default CartProductQuantity;


// import { Component } from "react";
// import "./CartProductQuantity.scss";

// class CartProductQuantity extends Component {

//     constructor(props){
//         super(props);
//         this.cartElementParams = this.props.cartElementParams;
//         this.productQuantity = this.props.productQuantity;
//         this.updateProductCartQuantity = this.props.updateProductCartQuantity;
//     }

//     handleChangeProductCartQuantity(){
//         this.updateProductCartQuantity(this.cartElementParams, )
//     }

//     render(){
//         return (
//             <section className="cart-product-quantity">
                
//                 <button 
//                     className="cart-product-quantity__change-amount more"
//                     onClick={this.updateProductCartQuantity}
//                 >
//                     <img src="/assets/img/plus-icon.svg" alt="add"/>
//                 </button>
                
//                 <div className="cart-product-quantity__quantity">{this.productQuantity}</div>

//                 <button 
//                     className="cart-product-quantity__change-amount less"
//                     onClick={this.updateProductCartQuantity}
//                 >
//                     <img src="/assets/img/minus-icon.svg" alt="minus"/>
//                 </button>
                
//             </section>
//         )
//     }
// }

// export default CartProductQuantity;