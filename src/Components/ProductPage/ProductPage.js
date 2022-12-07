import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import "./ProductPage.scss";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductPhotos from "../ProductPhotos/ProductPhotos";
import queryProducts from "../../queries/queryProducts";

class ProductPage extends Component {

    constructor(props){
        super(props)
        this.currentAttributesStates = this.props.currentAttributesStates;
        this.setAttrValue = this.props.setAttrValue;
        this.currentCurrencySymbol = this.props.currentCurrencySymbol;
        this.addProductToCart = this.props.addProductToCart;
        this.productId = this.props.productId;
    }

    render(){
        return (
            <section className="product-page">
                <Query query={queryProducts("all")}>
                    {({loading, data}) => {

                        if (loading) return "Loading..."

                        const {products} = data.category;

                        const productParams = products.find(product => 
                            product.id === this.productId
                        );

                        return (
                            <>
                                <ProductPhotos productPhotos={productParams.gallery}/>
                                <ProductDetails 
                                    productDetails={productParams}
                                    currentAttributesStates={this.currentAttributesStates}
                                    currentCurrencySymbol={this.currentCurrencySymbol}
                                    addProductToCart={this.addProductToCart}
                                    setAttrValue={this.setAttrValue}
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