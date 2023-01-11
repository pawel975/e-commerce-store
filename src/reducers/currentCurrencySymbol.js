import getFromLocalStorage from "../helpers/getFromLocalStorage"
import saveToLocalStorage from "../helpers/saveToLocalStorage";

let initState;

if (getFromLocalStorage("state") === undefined || getFromLocalStorage("state").currentCurrencySymbol === undefined) {

    saveToLocalStorage("state", {
        ...getFromLocalStorage("state"),
        currentCurrencySymbol: "$"
    })
    initState = "$";

} else {
    initState = getFromLocalStorage("state").currentCurrencySymbol;
}

const currentCurrencySymbol = (state = initState, action) => {
    switch(action.type) {
        case "SET_CURRENCY":
            saveToLocalStorage("state", action.payload, "currentCurrencySymbol")
            return action.payload;
        default:
            return state;
    }
}

export default currentCurrencySymbol;