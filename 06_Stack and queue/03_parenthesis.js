// TODO 67: check parenthesis
let s = "[[{()}]]"
// method-1
var isValid = function(s) {
    let stack = []
    if(s.length<2){
        return false
    }
    for(let i=0;i<s.length;i++){
        if(s[i]== "{" || s[i]== "("  || s[i]== "[" ){
            stack.push(s[i])
        }
        else if(s[i]=="}" && stack[stack.length-1]=="{"){
            stack.pop()
        
        }
          else if(s[i]=="]" && stack[stack.length-1]=="["){
              stack.pop()
        }
          else if(s[i]==")" && stack[stack.length-1]=="("){
             stack.pop()
        }
        else{
            return false
        }
        console.log(stack)
    }
    if(stack.length==0){
        return true
    }
    return false
};
// TC : O(n)
// SC =O(n)

// method-2
const isValid2 = (s)=>{
    let stack = []
    let map ={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let i=0;i<s.length;i++){
        // if map exist
        if(map[s[i]]){
            stack.push(s[i])
        }

        else {
            let  top = stack.pop()
            if(!top || map[top]!==s[i]){
                return false

            }
        }

    }
    return stack.length ==0

}
// TC : O(n)
// SC =O(n) 
// map has constant space 