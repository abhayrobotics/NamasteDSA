// TODO 60: Palindrome String
// method-1
var isPalindrome = function(s) {
    s= s.toLowerCase();
    // remove extra items
    let filter = ""
    for(let i=0 ;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/)){
            filter= filter+s[i]
        }

    }
    if(filter.length<=1){
        return true
    }
    
    modified= filter.split("").reverse().join("")
    console.log(filter,s)

    return filter===modified
};

// method-2
var isPalindrome2 = function(s) {
    s= s.toLowerCase();
    // remove extra items
    let filter = ""
    let rev = ""
    for(let i=0 ;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/)){
            filter= filter+s[i]
            rev =s[i]+rev
        }

    }
    if(filter.length<=1){
        return true
    }
    
    return filter===modified
};
// TC =O(n)
// SC = O(2n) =O(n), string of length n


// method-3 without regex
var isPalindrome3 = function(s) {
    s= s.toLowerCase();
    // remove extra items
    let filter = "";
     let rev = ""
    for(let i=0 ;i<s.length;i++){
        if((s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt() ) || 
           (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt()  ))
           {
            filter= filter+s[i]
             rev =s[i]+rev
             }

    }
    

    return filter===rev
};

// method-4 : without extra space 

var isPalindrome = function(s) {
    if(s.length<=1){
        return true
    }
    s= s.toLowerCase();
    let p1= 0
    let p2= s.length-1
    
    let filter =""
    while(p1<=p2){
        if(!s[p1].match(/[a-z0-9]/)){
            p1++
        }
        else if(!s[p2].match(/[a-z0-9]/)){
            p2--
        }
        else{
            if( s[p1]==s[p2]){

            p1++;
            p2--
            }
            else{
                return false
            }
        }
    }    
    return true

}

// TC=O(n)
// SC = O(1)