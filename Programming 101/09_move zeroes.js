
// TODO 23: move zeroes to last in an array 
// method-1 

let nums = [0,1,0,3,12];
var moveZeroes = function(nums) {
    let z =0;

    for(let i=0;i<nums.length;i++ ){
        if(nums[i]==0  && nums[z]!=0){
            z=i;
            console.log("hello")
        }
        else if(nums[i]!=0 && nums[z]==0 ){
            
            nums[z]= nums[i]
            nums[i] =0
            if(z-i==1) z=i
            else z++
        }
        
        
    }
    console.log(nums)
};
// TC= O(n)

// moveZeroes(nums)
// method-2

const moveZeroes2 =(nums)=>{
    let x =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[x]=nums[i];
            x++;
        }
        
    }
    for(let j =x;j<nums.length;j++){
        nums[j]=0;
    }
    console.log(nums)
}
moveZeroes2(nums)

// TODO 24:MAx consecutive ones
let nums24 =[1,1,0,1,1,1]

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let current = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            current++;
            if (max < current) {
                max = current;
            }
        }else{
            current = 0;
        }

    }
    return max;;

};
console.log(findMaxConsecutiveOnes(nums24))


// TODO 25: find missing no. in an array
// method -1
let num25 =[3,0,1]
var missingNumber = function(nums) {
    let arr = new Array(nums.length+1).fill("A")
    for(let i=0;i<nums.length;i++){
        arr[nums[i]]= nums[i];
    }
    console.log(arr)
    for(let i=0;i<nums.length+1;i++){
        if(arr[i]==="A"){
            return i
        }
    }
};
console.log(missingNumber(num25))
// TC=O(n)  SC= O(n+1)

// method-2 :efficient solution

function missingNumber2(nums){
    let n= nums.length
     let totalSum = n * ( n + 1 ) / 2
     let partialSum =0
     for(let i=0;i<n;i++){
        partialSum =partialSum+nums[i]
     }

     return totalSum-partialSum
}
console.log(missingNumber2(num25))


// TC=O(n) SC= O(1)


// TODO 26: find sinlge no. in an array of every other having 2 occurances

let nums26 =[4,1,2,1,2]
var singleNumber = function(nums) {
    let obj ={}
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]] ){

        obj[nums[i]] =1
        }
        else{
            obj[nums[i]]++
        }
    }
    console.log(obj)
     for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==1){
            return nums[i]
        }
     }
};

// Tc= O(n) SC=O(n)
console.log(singleNumber(nums26))

// method-2
var singleNumber2 = function(nums) {
   let xor= 0
    for(let i=0;i<nums.length;i++){
        xor =xor ^ nums[i]
    }
    return xor
      
};

// Tc= O(n) SC=O(1)