
const setCurrency = (currencySymbol) => {
    return {
        type: "SET_CURRENCY",
        payload: currencySymbol
    };
};

const currentCurrencySymbolActions = {
    setCurrency
}

export default currentCurrencySymbolActions;
