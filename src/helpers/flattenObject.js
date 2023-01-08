
function flattenObject(obj){
    const flatten = Object.values(obj).flat()

    const flattenAgain = [];

    flatten.forEach(el => {

        const objectProperties = Object.keys(el);

        for (let i = 0; i < objectProperties.length; i++) {
            flattenAgain.push(el[objectProperties[i]]);
        }
    })

    return flattenAgain;
  }

export default flattenObject;