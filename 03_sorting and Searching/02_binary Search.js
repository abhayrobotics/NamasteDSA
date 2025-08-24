var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
   while(left<=right){
    let middle = Math.floor((left+right)/2)

    if(target === nums[middle]){
        return middle
    }
    else if(target>nums[middle]){
        left = middle +1
    }
    else{
        right = middle-1
    }

   }
   return -1
    
};

let nums =[-12,2,3,5,8,34,56]
console.log(search(nums,5))

// TC= O(log n with base 2)
// SC: O(1) as constant 3 varibles