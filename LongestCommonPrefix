/*
  Finds the longest common prefix from an array of strings

 * @param {string[]} strs
 * @return {string}
*/
 
var longestCommonPrefix = function(strs) {
    let result = "";

    for(i = 0; i < strs[0].length; i++){

        let letters = [];
        for(j = 0; j < strs.length; j++){
            letters.push(strs[j][i]);
        };

        if(letters.every(x => x === letters[0])){
            result = result + letters[0];
        }
        else{
            break;
        };
    };

    return result;
};
