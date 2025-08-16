
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