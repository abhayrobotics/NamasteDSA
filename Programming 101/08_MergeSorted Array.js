// TODO 22: Merge 2 sorted array in-place
let nums1= [1,2,3,0,0,0,0]
let nums2 =[2,5,6,7]
let m=3
let n=4

// method-1 :inuitive
function mergeSorted(nums1,nums2,m,n){
    nums1.splice(m,m+n,...nums2)

    nums1.sort()
    
    
    // console.log(nums1)
} 
//  mergeSorted(nums1,nums2,m,n)

//  TC:O (nlogn)

// method 2:extra space

function mergeSorted2(nums1,nums2,m,n){
   
    num1copy = nums1.splice(0,m)
    // console.log(num1copy)
    // console.log(nums1)

    let n1= 0
    let n2 =0
    for(let i =0;i<m+n;i++){
        // if n2 array ended or n1 element is lower than n2 ,then n1 
        if(n2>=n || (n1<m && num1copy[n1]<nums2[n2])){
            nums1[i] =num1copy[n1];
            n1++
        }
        else{
            nums1[i]=nums2[n2];
            n2++;
        }

    }
    console.log(n1,n2, nums1)
}

mergeSorted2(nums1,nums2,m,n)

// TC - O(m+n) SC: 