import getFromLocalStorage from "../helpers/getFromLocalStorage"
import saveToLocalStorage from "../helpers/saveToLocalStorage";

let initState;

if (getFromLocalStorage("state") === undefined || getFromLocalStorage("state").isCartOverlayVisible === undefined) {

    saveToLocalStorage("state", {
        ...getFromLocalStorage("state"),
        isCartOverlayVisible: false
    })
    initState = [];

} else {
    initState = getFromLocalStorage("state").isCartOverlayVisible;
}

const cartOverlay = (state = initState, action) => {
    switch(action.type) {
        case "TOGGLE_CART_OVERLAY":
            saveToLocalStorage("state", !state, "isCartOverlayVisible")
            return !state;
        default:
            return state;
    }
}

export default cartOverlay;