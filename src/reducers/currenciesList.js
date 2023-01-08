import getFromLocalStorage from "../helpers/getFromLocalStorage";

const initState = getFromLocalStorage("state").isCurrenciesListOpen;

const currenciesList = (state = initState, action) => {
    switch(action.type) {
        case "TOGGLE":
            return !state;
        default:
            return state;
    }
}

export default currenciesList;