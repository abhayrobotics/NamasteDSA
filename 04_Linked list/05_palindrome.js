
// TODO 44: palindrome linked list checking

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// ✅ Create linked list: 1 → 2 → 2 → 1 → null
let node4 = new ListNode(1);
let node3 = new ListNode(2, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

// SOlution

var isPalindrome = function(head) {
    // method-1: using array
    // let arr = []
    // let current = head
    // while(current!= null){
    //     arr.push(current.val)
    //     current = current.next
    // }
    // console.log(arr)
    // for(let i=0 ;i<=arr.length/2;i++){
    //     if(arr[i]!==arr[arr.length-1-i]){
    //         return false
    //     }

    // }
    // return true

    // method-2:

    // find the middle
    let slow = head;
    let fast = head;
    while(fast!==null && fast.next!==null){
    // console.log(slow,fast)
        slow =slow.next
        fast = fast.next.next
    }
   
    let mid = slow
    
    console.log(head)

    // reverse th e 2ns half
    let prev = null;
    let current = mid;
    while(current!== null){
        let temp = current.next;
        current.next = prev;
        prev =current
        current = temp
    }

    console.log(prev)

    // check the palindrome
    let p2 = prev
    let p1 =head
    while(p2){
        if(p1.val !==p2.val){
            return false
            }
        p1 =p1.next;
        p2=p2.next   
    }
    return true


};
console.log(isPalindrome(node1))