
const getCurrency = () => {
    return {
        type: "GET_CURRENCY"
    };
};

const setCurrency = (currencySymbol) => {
    return {
        type: "SET_CURRENCY",
        payload: currencySymbol
    };
};

const currentCurrencySymbolActions = {
    getCurrency,
    setCurrency
}

export default currentCurrencySymbolActions;
