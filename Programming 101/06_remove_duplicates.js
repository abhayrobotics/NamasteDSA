// TODO 18: remove duplicates from a srted non decreasing array and store the k unique value as first k element in array and return K

// method-1
// var removeDuplicates = function(nums) {
//     // let newArray =nums;
//     let i =0;
//     while(i<nums.length-1){
//         if(nums[i]==nums[i+1]){
//             nums.splice(i+1,1)
//             console.log(nums)
//         }
//         if(nums[i]<nums[i+1]){
//             i++
//         }
//     }
//     console.log(nums)
//     return nums.length
// };
// time complexity O(n^2)


// method -2 efficient solution
function removeDuplicates(num){

    let x =0;
    for(let i=0;i<num.length;i++){

        if(num[i]>num[x]){
            x=x+1;
            num[x]=num[i]
            console.log(num)
        }
    }
    return x+1
}
// time Complexity O(n)

let num =[0,0,1,1,1,2,2,3,3,4]
let res = removeDuplicates(num);
console.log(res)