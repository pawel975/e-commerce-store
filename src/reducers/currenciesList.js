import getFromLocalStorage from "../helpers/getFromLocalStorage";

const initState = getFromLocalStorage("state").isCurrenciesListOpen || false;

const currenciesList = (state = initState, action) => {
    switch(action.type) {
        case "TOGGLE_VISIBILITY":
            return !state;
        default:
            return state;
    }
}

export default currenciesList;