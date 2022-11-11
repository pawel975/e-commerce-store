import { Component } from "react";
import "./ProductCard.scss";

class ProductCard extends Component {

    render(){

        const currentCurrencySymbol = this.props.currentCurrencySymbol
        
        const {id, name, inStock, gallery, description, category, attributes, prices, brand} = this.props.productParams;

        const {currency, amount} = prices.find(price => (
            price.currency.symbol === currentCurrencySymbol
        ));

        const {label, symbol} = currency;

        return(
            <section id={id} className="product-card">
                <img className="product-card__photo" src={gallery[0]} alt="product"/>
                <div className="product-card__description">
                    <span className="product-card__title">{name}</span>
                    <span className="product-card__price">{symbol}{amount}</span>
                </div>
            </section>
        )
    }
}

export default ProductCard;