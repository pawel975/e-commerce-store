import { gql } from "@apollo/client";

/**
 * 
 * @returns all currencies
 */
const queryCurrencies = () => {
    return gql`
        {
            currencies {
                label,
                symbol
            }
        }
    `;
}

export default queryCurrencies;