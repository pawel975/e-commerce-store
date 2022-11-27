/**
 * 
 * @param {string} key of record in localstorage
 * @param {any} data to be assigned to the key 
 */
const saveToLocalStorage = (key, data) => {
    
    localStorage.setItem(key, JSON.stringify(data));
}

export default saveToLocalStorage;