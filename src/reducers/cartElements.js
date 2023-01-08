import getFromLocalStorage from "../helpers/getFromLocalStorage";

const initState = getFromLocalStorage("state").cartElements;

const cartElements = (state = initState, action) => {
    switch(action.type){
        case "GET_CART_ELEMENTS":
            return state;
        case "SET_CART_ELEMENTS":
            return action.payload
        default:
            return state;
    }
}

export default cartElements;