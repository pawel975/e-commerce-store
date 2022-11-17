import { gql } from "@apollo/client";

/**
 * 
 * @returns all categories of products
 */
const queryCategories = () => {
    return gql`
        {
            categories {
                name
            }
        }
    `;
}

export default queryCategories;