
const setCategory = (categoryName) => {
    return {
        type: "SET_CATEGORY",
        payload: categoryName
    };
};

const selectedCategoryActions = {
    setCategory
}

export default selectedCategoryActions;
