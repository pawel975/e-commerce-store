import querySingleProduct from "../queries/querySingleProduct";

const getDefaultProductAttributes = async (productId) => {

    const productDetails = await querySingleProduct(productId);

    const defaultProductAttributesStates = productDetails.attributes.map(attr => {
            
        const {id, items} = attr;

        return (
            {
                attrId: id,
                optionParams: items[0]
            }
        )
            
    })

    return defaultProductAttributesStates;
}

export default getDefaultProductAttributes;