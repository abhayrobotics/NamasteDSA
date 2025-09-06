// TODO 57: 
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
