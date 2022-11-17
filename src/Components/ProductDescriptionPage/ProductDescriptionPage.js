import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductPhotos from "../ProductPhotos/ProductPhotos";
import queryProducts from "../../queries/queryProducts";

class ProductDescriptionPage extends Component {

    render(){
        return (
            <section className="product-description-page">
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
                                <ProductDetails productDetails={productParams}/>
                            </>
                        )
                    }}
                </Query>
            </section>
        )
    }
}

export default ProductDescriptionPage;