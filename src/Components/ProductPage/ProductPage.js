import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import "./ProductPage.scss";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductPhotos from "../ProductPhotos/ProductPhotos";
import queryProducts from "../../queries/queryProducts";

class ProductPage extends Component {

    render(){
        return (
            <section className="product-page">
                <Query query={queryProducts("all")}>
                    {({loading, data}) => {

                        if (loading) return "Loading..."

                        const {products} = data.category;

                        const productParams = products.find(product => 
                            product.id === this.props.productId
                        );

                        return (
                            <>
                                <ProductPhotos productPhotos={productParams.gallery}/>
                                <ProductDetails 
                                    productDetails={productParams}
                                    currentCurrencySymbol={this.props.currentCurrencySymbol}
                                    addProductToCart={this.props.addProductToCart}
                                />
                            </>
                        )
                    }}
                </Query>
            </section>
        )
    }
}

export default ProductPage;