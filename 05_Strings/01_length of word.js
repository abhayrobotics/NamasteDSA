// TODO 54: Length of Last Word


var lengthOfLastWord = function(s) {
    let  n = s.length-1
    let count =0;
    let i=0;
    while(i<=n){
        if(s[n-i]==" " && count ==0){
            i++
        }
        else if(s[n-i]!==" "){
            count++
            i++
        }
        else{
           break

        }
        // console.log(s[n-i])

    }
    return count
};
// TC =O(n) ; SC= O(1)


// TODO 55: return the index of words which contain character x
let words = ["hello","leet","appl"] 
let x='e'

var findWordsContaining = function(words, x) {
    let arr =[]
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            if(words[i][j]==x){
                arr.push(i)
                break;
            }
        }
    }
    return arr
    
};

// TC =O(m*n) ; 
// SC= O(1) - if the result array is also cnsidered than O(n)


// TODO 56: return the no of jewels inside stones
// "A"!="a"
let jewels = "aA"
let stones = "asAAbdbsAsa"

var numJewelsInStones = function(jewels, stones) {
    // method-1
    // let count =0
    // for(let i= 0;i<jewels.length;i++){
    //     for(let  j=0;j<stones.length;j++){
    //         if(jewels[i]==stones[j]){
    //             count++
    //         }
    //     }
    // }
    // return count
    
    // method-2
    let count =0;
    let jset = new Set()

    for(let i=0; i<jewels.length;i++){
        jset.add(jewels[i])
    }

    for(let j=0;j<stones.length;j++){
        if(jset.has(stones[j])){
            count++
        }
    }

    return count

};

// method-1

// TC =O(m* n) ; SC= O(1)
// method-2

// TC =O(n) ; SC= O(1)
