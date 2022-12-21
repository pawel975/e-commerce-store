import { Component } from "react";
import "./ProductCard.scss";

class ProductCard extends Component {

    constructor(props){
        super(props)
        this.addProductToCart = this.props.addProductToCart;
    }

    showAddToCartBtn(e){

        if (e.target.className === "product-card") {

            // Hide add to cart button for all button that has no mouse over
            const allProducts = [...e.target.parentNode.children]

            allProducts.forEach(product => {
                product.children[2].style.display = "none";
            });

            // Show button for product that has mouse over
            const activeProduct = [...e.target.children][2]

            activeProduct.style.display = "flex";
        }
    }

    handleRedirectToDetails(e){
        const productId = e.target.id;
        window.location.pathname = `/product/${productId}`
    }

    handleQuickAddToCart(){
        this.addProductToCart(this.props.productId);
    }

    render(){
        
        const {id, name, gallery, prices} = this.props.productParams;

        const {currency, amount} = prices.find(price => (
            price.currency.symbol === this.props.currentCurrencySymbol
        ));

        const {symbol} = currency;

        return(
            <section 
                id={id} 
                className="product-card"
                onMouseOver={this.showAddToCartBtn.bind(this)}
                onClick={this.handleRedirectToDetails.bind(this)}
            >
                <img className="product-card__photo" src={gallery[0]} alt="product"/>
                
                <div className="product-card__description">
                    <span className="product-card__title">{name}</span>
                    <span className="product-card__price">{symbol}{amount}</span>
                </div>

                <a 
                    className="product-card__add-to-cart"
                    href="/cart"
                    onClick={this.handleQuickAddToCart.bind(this)}
                >
                    <img className="product-card__cart-image" src="/assets/img/cart-white.svg" alt="cart"/>
                </a>

            </section>
        )
    }
}

export default ProductCard;