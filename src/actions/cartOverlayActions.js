
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

const cartOverlayActions = {
    open,
    close
}

export default cartOverlayActions;

