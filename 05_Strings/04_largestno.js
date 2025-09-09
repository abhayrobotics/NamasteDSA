
// TODO:61:
var largestOddNumber = function(num) {
    let maxOdd =0
    for(let i= num.length-1;i>=0;i--){

        if(num[i]%2!=0){
         // maxOdd = num.slice(0,i+1)
            maxOdd  = num.substring(0,i+1)
            return maxOdd
        }
    }
    return ""    
};
// TC=O(n) SC =O(1)

// TODO 62: check anagram
// method-1: sort and check
let s = "anagram" 
let t = "nagaram";
var isAnagram = function(s, t) {

    // convert to array
    let arr1 = s.split("").sort().join("")
    let arr2 = t.split("").sort().join("")
    
    return arr1== arr2
}
// TC= O(nlogn)
// SC = O(n)

// MEthod-2

var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let i =0
    let map = new Map()
    let map2 = new Map()
    while(i<s.length){
        if(map.has(s[i])){
            let x= map.get(s[i])
            map.set( s[i], ++x )
        }
        else{
            map.set(s[i],1)
        }
        if(map2.has(t[i])){
             let y= map2.get(t[i])
            map2.set( t[i], ++y )
        }
        else{
            map2.set(t[i],1)
        }
        i++
    // console.log(map,map2)
    }
    for(let [key,value] of map){
        if( map2.get(key)!==value ){
            return false
        }
    }
    return true
};

// TC=(n)
// SC=O(1)