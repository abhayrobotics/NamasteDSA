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

// TODO 19: remove the element which is equal to val from first k places.

// Intuitive method
var removeElement = function(nums, val) {

    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1)
            i--;
        }
        
    }
    return nums.length;
    
};
// TIME complexity -O(n^2)
//  //! 2 pointer technique
function removeElelements(num,val){
    let x =0;
    for(let i=0;i<num.length;i++){
        // if no. is not equal to val, increment 2nd pointer
        if(num[i]!=val){
            num[x]=num[i]       
            x=x+1
        }
    }
    console.log(num)
    return x       
}
let num2 =[0,1,2,2,3,0,4,2,3,3,2], val=2

let res19 = removeElelements(num2,2)

console.log(res19)

// TIME complexity -O(n)


//TODO:20  Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
let s=["a","b","c","d","e"]

const  reverseString = function(s) {
    
    for(let i=0 ;i<s.length/2;i++){
        let t= s[i] 
        s[i]= s[s.length-i-1]
        s[s.length-i-1]=t;
    }
    console.log(s)
};
reverseString(s)