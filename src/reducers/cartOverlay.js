import getFromLocalStorage from "../helpers/getFromLocalStorage"

const initState = getFromLocalStorage("state").isCartOverlayVisible;

const cartOverlay = (state = initState, action) => {
    switch(action.type) {
        case "OPEN":
            return true;
        case "CLOSE":
            return false;
        default:
            return state;
    }
}

export default cartOverlay;