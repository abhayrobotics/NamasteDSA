// TODO 64:
var groupAnagrams = function(strs) {
    
    const map = {}
   
    for(let i=0 ;i<strs.length;i++){
        let x =strs[i].split("").sort().join("")
        if(!map[x]){
            map[x] = [strs[i]]
        }
        else{
            map[x] =[...map[x],strs[i]]
        }

    }
    
    return Object.values(map)

}

// TC= O( n x mLogm)
// SC =O(mxn)
// m= length of str
// n= Node. of str 

// method-2

function groupAnagrams2(strs){
       let map ={}
    for(let i=0;i<strs.length;i++){
    // creating a key
    let freq = new Array(26).fill(0)
        for(let j=0;j<strs[i].length;j++){
            let index = strs[i][j].charCodeAt()- 'a'.charCodeAt()
            ++freq[index]          
        }
        let x =""
        for(let k=0;k<26;k++){
            x= x + String.fromCharCode(k+97) +freq[k]
        }

    // creating a map
        console.log(x)
        if(!map[x]){
            map[x] = [strs[i]]
        }
        else{
            map[x].push(strs[i])
        }

    }
    return Object.values(map)
    

}