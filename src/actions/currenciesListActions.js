
const open = () => {
    return {
        type: "OPEN"
    };
};

const close = () => {
    return {
        type: "CLOSE"
    };
};

const currenciesListActions = {
    open,
    close
}

export default currenciesListActions;
