// TODO 30: merge sort

// practice: merge 2 sorted array
let a1 = [1, 3, 5, 7];
let a2 = [2, 4, 8, 9,25];

function merge(a1, a2) {
  let i1 = 0;
  let i2 = 0;
  let result = [];
  while (i1 <a1.length && i2 < a2.length) {
    if (a1[i1] >= a2[i2]) {
      result.push(a2[i2]);
      i2++;
    } else {
      result.push(a1[i1]);
      i1++;
    }
  }

//   method-1 :remaining elements if any one array ended
  //   if (a1.length == i1) {
//     while (i2 < a2.length) {
//       result.push(a2[i2]);
//       i2++;
//     }
//   } else if (a2.length == i2) {
//     while (i1 < a1.length) {
//       result.push(a1[i1]);
//       i1++;
//     }
//   }
//   return result;

// method-2 :

return [...result,...a1.slice(i1),...a2.slice(i2)]


}
console.log(merge(a1, a2));

let arr =[7,1,5,12,-10,0,4,3,2]
function mergeSort(arr){
    
    if(arr.length <=1){
        return arr
    }
    let mid= Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
   
}

console.log(mergeSort(arr))

// TODO: splice
// modies the original array
// Array.splice(startIndex,deletecount,Additem1,additem2...)

let a =[1,2,3,4,5,6,7]

a.splice(3,1,)
console.log(a)
a.splice(2,1,'A',"B","C")
console.log(a)

// todo: Slice
// returns a new extracted array
let b = [1,2,3,4,5,6,7]

let res = b.slice(2,4)
console.log(res)

// all element from index 4
res = b.slice(4)
console.log(res)

// original array not modified
console.log(b)