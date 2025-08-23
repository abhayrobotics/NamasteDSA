
// TODO 34:  Linear Search

let arr =[2,5,6,4,0,35]

function linearSearch(arr,x){
   for(let i=0;i<arr.length;i++){
       if(x==arr[i]){
        return i
       }


   }
   return -1
}
console.log(linearSearch(arr,35))

// TC: O(n)