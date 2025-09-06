// TODO 57: Find Most Frequent Vowel and Consonant

var maxFreqSum = function (s) {
  let map = new Map();
  let set = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
      // console.log(false,s[i])
    } else {
      let x = map.get(s[i]);
      // console.log(true,s[i],++x)
      map.set(s[i], ++x);
    }
  }

  let maxV = 0;
  let maxC = 0;

  for (let [key, value] of map) {
    if (set.has(key) && maxV < value) {
      maxV = value;
    } else if (!set.has(key) && maxC < value) {
      maxC = value;
    }
    console.log(maxC, maxV);
  }
  return maxC + maxV;
};


// TODO 58: Split a String in Balanced Strings
let s  = "RLRRLLRLRL"
var balancedStringSplit = function(s) {
    let l= 0
    let r=0;
    let count =0;

    for(let i=0;i<s.length;i++){
        if(s[i]=='L'){
            l++
        }
        else if(s[i]=='R'){
            r++
        }
        if(l==r){
            count++
            l=0;
            r=0;
        }
    }

    return count
}

// TODO 59:Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
var reverseStr = function(s, k) {
    s = s.split("");

    
    for(let i=0 ;i<s.length;i=i+(2*k)){
        let mid = Math.floor((k)/2)

        for(j=0;j<mid;j++){
            let temp = s[i+ k -1-j]
            s[i+ k -1-j]= s[i+j]
            s[i+j]=temp
        }
    }

    s=s.join("")
    return s
};