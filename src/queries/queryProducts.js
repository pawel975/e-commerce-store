import { gql } from "@apollo/client";

/**
 * 
 * @param {string} [category] name of category products to query. If param is not included it gets default value of "all"
 * @returns category products object
 */ 
const queryProducts = (category = "all") => {
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

export default queryProducts;