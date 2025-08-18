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
console.log(sum2(5))