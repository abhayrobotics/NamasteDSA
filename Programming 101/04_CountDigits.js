// TODO 15:Write a function that count the digits of a number
// console.log(359/10)
function countDigits(n) {
  let count = 0;
  let i = n;
  while (i > 0) {
    i = (i - (i % 10)) / 10;
    console.log();
    count++;
  }
  return count;
}
let res = countDigits(100);
console.log(res);


