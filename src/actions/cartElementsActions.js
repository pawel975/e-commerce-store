const setCartElements = (cartElements) => {
    return {
        type: "SET_CART_ELEMENTS",
        payload: cartElements
    };
};

const cartElementsActions = {
    setCartElements
}

export default cartElementsActions;
