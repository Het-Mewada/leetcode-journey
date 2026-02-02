/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let prefix = "";

    for(let i = 0 ; i < strs[0].length ; i++){
        if(strs[0][i] === strs[strs.length - 1][i]){
            prefix += strs[0][i]
        }else{
            return prefix
        }
    }
    return prefix;
};