// TODO 27: Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
let strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    let  prefix= "";
    
    let arr= []
    for(let i=0;i<strs.length;i++){
        if(strs[i].length==0){
            return prefix
        }
        let x = strs[i].split("")
        arr.push(x)
    }
    console.log(arr)
    for(let i=0;i<arr[0].length;i++){
        let x = arr[0][i]
        for(let j=1;j<arr.length;j++){
            if(x!==arr[j][i]){
                return prefix
            }

        }
        prefix =prefix+ x;
        

    }
    return prefix
    
};


// TODO: 28 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
let nums = [2,7,11,15]
let target = 9

var twoSum = function (nums, target) {

    // for (let i = 0; i < nums.length; i++) {

    //     let total = nums[i]
    //     for (let j = i + 1; j < nums.length; j++) {
           
    //     if (total + nums[j] == target) {
    //         return [i, j]
    //           }
    //     }

    // }
    

    // method-2
   
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // console.log(map)
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    // Return an empty array if no solution is found
    return [];
};

console.log(twoSum(nums,target))