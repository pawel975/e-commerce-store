
const getFromLocalStorage = (key) => {

    const data = JSON.parse(localStorage.getItem(key));

    if (data) {
        return data;
    } else {
        console.log(`There is no "${key}" key in localStorage`);
    }
}

export default getFromLocalStorage;