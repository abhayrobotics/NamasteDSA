console.log("Hello Abhay")

let a = 3
let b= 5
let c= "Abhay"
console.log(a+b+c)
console.log(a+c+b)

// ?Array
let arr = [2,3,4,5]
console.log(0)

// ? Object
let obj = {
    firstName:'ABhay',
    lastName :"Gupta",

}

console.log(obj.firstName)
console.log(obj.firstName +" "+obj.lastName)

//? IF else

function elegibleToVote(age){
    if(age<1){
        console.log("Not Valid input")
    }
    else if (age>17){
        console.log("Eligible to vote")
    }
    else{
        console.log("Not Eligible")
    }
}

elegibleToVote(18)
elegibleToVote(10)
elegibleToVote(25)
elegibleToVote(0)
elegibleToVote("Avs")


