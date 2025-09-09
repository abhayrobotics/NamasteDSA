// TODO 63: Isomorphic Strings
let s= "add"
let t ="egg"

var isIsomorphic = function(s, t) {
    let mapST= {}
    let mapTS ={}

    for(let i=0;i<s.length;i++){

        if(!mapST[s[i]] && !mapTS[t[i]]){
            mapST[s[i]]=t[i]
            mapTS[t[i]]=s[i]
        }
        else if( mapST[s[i]] !==t[i] ){
            return false
        }else if(mapTS[t[i]] !==s[i]){
            return false
        }

    }   
    return true


};