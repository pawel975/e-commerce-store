import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import capitalizeWord from "../../helpers/capitalizeWord";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryProducts.scss";
import queryProducts from "../../queries/queryProducts.js";

class CategoryProducts extends Component {
    
    constructor(props){
        super(props);
        this.addProductToCart = this.props.addProductToCart;
    }

    render(){
        return (
            <section className="category-products">

                <h2 className="category-products__category-name">
                    {capitalizeWord(this.props.currentCategory)}
                </h2>

                <Query query={queryProducts(this.props.currentCategory)}>

                    {({loading, data}) => {
            
                        if (loading) return "Loading...";
            
                        const {products} = data.category;
            
                        const productsList = products.map(productParams => {

                            const {id} = productParams;

                            return (
                                <ProductCard 
                                    key={id} 
                                    productId={id}
                                    addProductToCart={this.addProductToCart}
                                    productParams={productParams}
                                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                                />
                            )
                        })
            
                        return <div className="category-products__products-list">{productsList}</div>
                    }}

                </Query>

            </section>
        )
    }
}

export default CategoryProducts;