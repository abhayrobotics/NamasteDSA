console.log("resursion");


function fun(n){
    if(n==0){
        return;
    }
    console.log(n)
    n--
    fun(n)
}

fun(20)


function fun2(n,start){
    
    if(start>n){
        return;
    }
    console.log(start)
    start++
    fun2(n,start)
}

fun2(20,1)