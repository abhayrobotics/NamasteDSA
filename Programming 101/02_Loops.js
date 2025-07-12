// ? Loops 

// Syntax
for(let i =0;i<10;i++){
    console.log("Hello World " + i)
}

for(let i=5; i>1;i=i-2){
    console.log("Check "+i)
}


// ! 1: Print all even nos of an array

let arr1 = [23,3,2,43,31,4,30]

for(let i=0; i<arr1.length;i++){
   if(arr1[i]%2 ==0){

       console.log(arr1[i])
   }
}


// ! 2: Write a fucntion that searches or an element in an array and returns the index , if the element is not present, return -1.

let arr2 = [4,2,0,10,8,30]