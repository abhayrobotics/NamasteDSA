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


// ! 2: Write a fucntion that searches  an element in an array and returns the index , if the element is not present, return -1.

let arr2 = [4,2,0,10,8,30]

function searchIndex(arr2,x){
    
    for(let i=0; i<arr2.length; i++){
        if(x == arr2[i]){
            return i;
        }
    }    
    return -1
}

let result = searchIndex(arr2,30)
console.log(result)

// ! 3: Write a fucntion that returns then. of negative numbers in ar array

let arr3 = [2,-9,17,0,1,-10,-4,8]

function countNegatives(arr2){
    let count =0;
    for(let i=0 ;i<arr2.length;i++){
        if(arr2[i]<0){
            count++;
        }
    }
    return count;
}
let count =countNegatives(arr3)
console.log(count)

// ! 4: Write a fucntion that returns a largest no. in an array 

let arr4 = [5,0,7,10,-8,17,1]

function findlargest(arr){
    let largest =arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest= arr[i]
        }
    }
    return largest;
}
let result4 = findlargest(arr4)
console.log(result4)
console.log(-Infinity)

// ! 5: Write a fucntion that returns a smallest no. in an array.

function findSmallest(arr){
    let smallest = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest =arr[i]
        }
    }
    return smallest;
}
let res5 = findSmallest(arr4)
console.log(res5)