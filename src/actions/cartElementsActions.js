
const getCartElements = () => {
    return {
        type: "GET_CART_ELEMENTS"
    };
};

const setCartElements = (cartElements) => {
    return {
        type: "SET_CART_ELEMENTS",
        payload: cartElements
    };
};

const cartElementsActions = {
    getCartElements,
    setCartElements
}

export default cartElementsActions;
