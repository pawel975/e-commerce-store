import { Component } from 'react';
import Price from '../Price/Price';
import ProductAllAttributes from '../ProductAllAttributes/ProductAllAttributes';
import ProductHeader from '../ProductHeader/ProductHeader';
import './CartElementDetails.scss';

class CartElementDetails extends Component {

    constructor(props){
        super(props)
        this.product = this.props.product;
        this.selectedAttributes = this.props.selectedAttributes;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol;
        this.changeAttrValue = this.props.changeAttrValue;
    }
    
    render(){

        const {id, name, attributes, prices, brand} = this.product;

        const price = prices.find(price => price.currency.symbol === this.currentCurrencySymbol)

        return (
            <div className='cart-element-details'>
                <ProductHeader 
                    name={name} 
                    brand={brand}
                />

                <Price 
                    symbol={price.currency.symbol} 
                    amount={price.amount}
                />
                <ProductAllAttributes 
                    attributes={attributes}
                    changeAttrValue={this.changeAttrValue}
                />

            </div>
        )
    }
}

export default CartElementDetails;