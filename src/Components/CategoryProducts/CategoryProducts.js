import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import capitalizeWord from "../../helpers/capitalizeWord";
import "./CategoryProducts.scss";

class CategoryProducts extends Component {

    queryProducts(category){
        return gql`
        {
            category(input: { title: "${category}" }) {
                name
                products {
                    id
                    name
                    inStock
                    gallery
                    description
                    category
                    attributes {
                        id
                        name
                        type
                        items {
                            displayValue
                            value
                            id
                        }
                    }
                    prices {
                        currency {
                            label
                            symbol
                        }
                        amount
                    }
                    brand
                }
            }
        }
    `;
    }

    render(){
        return (
            <section className="category-products">

                <h2 className="category-products__category-name">
                    {capitalizeWord(this.props.currentCategory)}
                </h2>

                <div className="category-products__products-list">

                    <Query query={this.queryProducts(this.props.currentCategory)}>
                        {({loading, data}) => {
                
                            if (loading) return "Loading...";
                
                            const {products} = data.category;
                
                            const productsList = products.map(product => {
                                const {name} = product;
                
                                return (
                                    <span key={name}>{name}</span>
                                )
                            })
                
                            return <div>{productsList}</div>
                        }}
                    </Query>
                    
                </div>

            </section>
        )
    }
}

export default CategoryProducts;