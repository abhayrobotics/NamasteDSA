// TODO 36:  BUBBLE sORT
// (COMPARING EACH PAIR AND SETTING THE LARGEST TO LAST POSITION)

// let arr = [5,2,4,1,6,3,-5,34,43,-11]
// let arr = [5,2,4,1]
let arr = [8,2,4,7]

function bubble(arr){
    let count =0;
    for(let i=0;i<arr.length -1;i++){

        for(let j=0;j<arr.length -1-i;j++){
            if(arr[j]>arr[j+1]){
                let c =arr[j+1]
                arr[j+1]= arr[j]
                arr[j]= c;
            }
            console.log(++count)
        }
    }
    return count
}
let rep = bubble(arr)
console.log(arr,rep)

// efficien solution for speciific arr , ie alrady sorted or nearly sorted
let arr2 = [8,2,4,7]
function bubble2(arr){
    let count =0;
    for(let i=0;i<arr.length -1;i++){

        let isSwap =false;

        for(let j=0;j<arr.length -1-i;j++){
            if(arr[j]>arr[j+1]){
                let c =arr[j+1]
                arr[j+1]= arr[j]
                arr[j]= c;
                isSwap =true
            }
            console.log(++count)
        }
        if(! isSwap) break;
    }
    return count
}
let rep2 = bubble2(arr)
console.log(arr,rep2)

// TC =O(n^2)