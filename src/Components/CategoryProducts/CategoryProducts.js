import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import capitalizeWord from "../../helpers/capitalizeWord";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryProducts.scss";
import queryProducts from "../../queries/queryProducts.js";

class CategoryProducts extends Component {

    constructor(props){
        super(props);
        this.currentCategory = this.props.currentCategory;
    }

    render(){
        return (
            <section className="category-products">

                <h2 className="category-products__category-name">
                    {capitalizeWord(this.currentCategory)}
                </h2>

                <Query query={queryProducts(this.currentCategory)}>

                    {({loading, data}) => {
            
                        if (loading) return "Loading...";
            
                        const {products} = data.category;
            
                        const productsList = products.map(productParams => {

                            const {id} = productParams;

                            return (
                                <ProductCard 
                                    key={id} 
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