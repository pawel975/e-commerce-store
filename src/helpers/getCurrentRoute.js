
const getCurrentRoute = () => {
    const pathname = window.location.pathname.slice(1);

    return pathname;
}

export default getCurrentRoute;