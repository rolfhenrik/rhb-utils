/**
 * Find keys in object that includes the search key
 * @param {object} obj Object to search for the key
 * @param {string} search_key The key to search for
 * @returns {Array} An array with matching keys as strings
 */
 function findKeysInObject(obj, search_key){

    let arr = new Array();
    for(const key in obj){

        if(key.includes(search_key)){
            arr.push(key);
        }
    }

    return arr;
}