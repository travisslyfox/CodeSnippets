/*
Given an array of ints returns indices of the two numbers that add up to target

 @param {number[]} nums
 @param {number} target
 @return {number[]}
*/
 
var twoSum = function(nums, target) {
    let output = [];

    for(let i = 0; i < nums.length; i++){
    
        for(let j = i + 1; j < nums.length; j++){
        
            if(nums[i] + nums[j] == target){
            
                output.push(i, j);
                
                return output;
            }
        }
    }

    return output;
};
