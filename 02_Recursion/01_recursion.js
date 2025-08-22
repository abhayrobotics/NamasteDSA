console.log("resursion");


function fun(n){
    if(n==0){
        return;
    }
    console.log(n)
    n--
    fun(n)
}

// fun(20)


function fun2(n,start){
    
    if(start>n){
        return;
    }
    console.log(start)
    start++
    fun2(n,start)
}

// fun2(20,1)


// TODO 29: Sum of 1st n nos using recursion

function sum(n,total){
    if(n==0){
        console.log(total)
        return ;
    }
    total =total+ n;
    n--
    sum(n,total)
}

sum(5,0)

// better syntax
function sum2(n){
    if(n==0){
        return 0;
    }
    return n+sum2(n-1)
}
// console.log(sum2(5))


// TODO 30: Sum of all nos in array using recursion

let arr =[2,3,4,5,6]
function sum(arr,n){
    
    if(n==0){
        return 0;
    }
    // console.log(arr[n-1])
    return arr[n-1]+ sum(arr,n-1)

}

let res =sum(arr,arr.length)
// console.log(res)

// a little variant

function sum30(n){
    if(n==0){
        return arr[0];
    }

    return arr[n]+ sum30[n-1]
}
// sum30(arr.length-1)

//variant 3:  Sum of all odd nos in array using recursion

arr =[1,2,3,4,5,7]
function sum31(n){

    if(n==0){
        return (arr[0]%2!==0? arr[0] : 0); 
    }
   let x =arr[n]%2 !==0 ? arr[n]:0;
   console.log(x,n)
    return x+sum31(n-1); 
}

console.log(sum31(arr.length-1))

// TODO 31: Factorial using recursion

function factorial(n){
    if(n==1){
        return 1;
    }
    return n* factorial(n-1)
}
console.log(factorial(4))