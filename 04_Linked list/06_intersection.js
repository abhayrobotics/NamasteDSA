// TODO 45: Intersection of Two Linked Lists

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// ✅ Create linked list: 1 → 2 → 3 → 4 → null
    //                        6→7--^

let node4 = new ListNode(4);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
let node7 = new ListNode(7,node3);
let node6 = new ListNode(6,node7);


var getIntersectionNode = function(headA, headB) {

    let set = new Set()
    let current = headA
    while(current!==null){
        set.add(current);
        current = current.next
    }
    let checkB = headB
    while(checkB){
        // console.log(checkB)
        if(set.has(checkB)){
            return checkB
        }
        checkB = checkB.next
    }
    return null

};
console.log(getIntersectionNode(node1,node6))
// i. node3


// TODO 46: Remove Linked List Elements

var removeElements = function(head, val1) {

    let sentinel = new ListNode()
    sentinel.next = head
    let prev = sentinel
    // console.log(sentinel)
    while(prev && prev.next){
        if(prev.next.val == val1 ){
            prev.next = prev.next.next
        
        }
        else{
            prev = prev.next
        }

    }
    return sentinel.next

}