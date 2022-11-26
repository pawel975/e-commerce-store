import { gql } from "@apollo/client";
import { client } from "..";

/**
 * 
 * @param {string} [productId] id of product products to query
 * @returns product params object
 */ 

const querySingleProduct = async (productId) => {

    const query = gql`
        {
            product(id:"${productId}") {
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
    `;

    const productParams = await client.query({query: query}).then(response => (response.data.product))
    
    return productParams
}

export default querySingleProduct;