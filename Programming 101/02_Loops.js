// ? Loops 

// Syntax
for(let i =0;i<10;i++){
    console.log("Hello World " + i)
}

for(let i=5; i>1;i=i-2){
    console.log("Check "+i)
}


// TODO 1: Print all even nos of an array

let arr1 = [23,3,2,43,31,4,30]
 
for(let i=0; i<arr1.length;i++){
   if(arr1[i]%2 ==0){

       console.log(arr1[i])
   }
}


// TODO 2: Write a fucntion that searches  an element in an array and returns the index , if the element is not present, return -1.

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

// TODO 3: Write a fucntion that returns then. of negative numbers in ar array

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

// TODO 4: Write a fucntion that returns a largest no. in an array 

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

// TODO 5: Write a fucntion that returns a smallest no. in an array.

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


// TODO 6: Find the second largest no. in an array
let arr6 = [5,0,7,10,-8,17,1]
function secondLargest(arr){

    let largest = -Infinity;
    let secondLar = -Infinity;

    for(let i=0; i<arr.length;i++){

        if(arr[i]>largest){
            secondLar =largest;
            largest =arr[i];
        }
        else if (arr[i]>secondLar){
            secondLar =arr[i]
        }

    }
    return secondLar;
}

let result6 = secondLargest(arr6);
console.log(result6)

// ? corner cases 
//  what if array has one element or no element
//  What is array has duplicate arr= [10,5,10]
// what if array has all equal nos.
//  what if array = [5, -Infinity]
// improved version

function secondLargest2(arr){

    if(arr.length < 2){
        return null
    }
    let largest = -Infinity;
    let secondLar = -Infinity;

    for(let i=0; i<arr.length;i++){

        if(arr[i]>largest){
            secondLar =largest;
            largest =arr[i];
        }
        else if (arr[i]>secondLar && arr[i]<largest){
            secondLar =arr[i]
        }
        
    }
    if(secondLar==-Infinity && arr.length>2){
        return "second largest no. cannot be found"
    }
    
    return secondLar;
}
let res61 = secondLargest2([5, -Infinity])
console.log(res61)

