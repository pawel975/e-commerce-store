import getFromLocalStorage from "../helpers/getFromLocalStorage"

const initState = getFromLocalStorage("state").selectedCategory || "all";

const selectedCategory = (state = initState, action) => {
    switch(action.type) {
        case "SET_CATEGORY":
            return action.payload;
        default:
            return state;
    }
}

export default selectedCategory;