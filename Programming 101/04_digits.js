// TODO 15:Write a function that count the digits of a number
// console.log(359/10)
function countDigits(n){
    let count =0;
    for(let i=n;i>0;i--){
        i= (i- i%10)/10;
        count++

    }
    return count
}
let res= countDigits(10)
console.log(res);

// Bug with 100