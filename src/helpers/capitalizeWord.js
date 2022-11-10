
/**
 * Converts text to capitalized version
 * 
 * @param {string} word to capitalize 
 * @returns capitalized word
 */
const capitalizeWord = (word) => {
    
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);

    const capitalizedWord = firstLetter + restOfWord;

    return capitalizedWord;
}

export default capitalizeWord;