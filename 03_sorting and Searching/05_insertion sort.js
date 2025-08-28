// TODO 38:  Insertion sORT

let arr = [7,4,3,5,1,2,3]
// arr =[7,1,5,12,-10,0,4,3,2]
// arr=[10, 9, 8, 7, 6];

function Insertion(arr){
    
    for(let i=1;i<arr.length;i++){
       
        let previous =i-1;
        let  current =arr[i]

        while( previous>=0 && current< arr[previous]){
            
            arr[previous+1] =arr[previous];
            previous--;
            console.log(previous)
        }
        arr[previous+1] = current
    }
    return arr
}

console.log(Insertion(arr))

// TC:O(n^2)
// SC:O(1)