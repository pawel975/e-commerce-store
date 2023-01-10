import getFromLocalStorage from "../helpers/getFromLocalStorage"

const initState = getFromLocalStorage("state").isCartOverlayVisible || false;

const cartOverlay = (state = initState, action) => {
    switch(action.type) {
        case "TOGGLE_CART_OVERLAY":
            return !state;
        default:
            return state;
    }
}

export default cartOverlay;