// TODO 16 : Write a function to check a palindrome no. 

function checkPalindrome(n){
    let original =n;
    let reversedNo = 0;
    let temp =0 ;
    while(n>0){
        temp = n%10;
        n = (n-n%10)/10;
        reversedNo = reversedNo*10 +temp
    }
    if(reversedNo == original){
        return true    }
    else{
        return false
    }
}
let result = checkPalindrome(1001)
console.log(result)

// it automatically check for negative no. 

// TODO:17 Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned)
function reverse(x) {
    let orginal = x;
    let remainder = 0
    let reverseNo =0;
    let negative =false
    if(x<0){
        x =Math.abs(x);
        negative = true;
    }
    while(x>0){
        remainder = x%10;
        x = (x-x%10)/10
        reverseNo = reverseNo*10+ remainder;

    }
    let limit = Math.pow(2,31)
    if(reverseNo <-limit || reverseNo > limit-1){
        return 0
    }

    if(negative){
        reverseNo = -reverseNo
    }
    return reverseNo

};
let res12 = reverse(-2342)
console.log(res12)