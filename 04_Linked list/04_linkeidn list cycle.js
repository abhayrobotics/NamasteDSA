// TODO 43: check a cycle linked list  

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// ✅ Create linked list: 1 → 2 → 3 → 4 → null
let node4 = new ListNode(4);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
node4.next = node2



// Method-1: using set

var hasCycle = function(head) {
    if(head==null){
        return false
    }
    let current =head;
    let s = new Set();
    while(!s.has(current)){
        if(current.next==null){
            return false
        }
        s.add(current)
        current = current.next
    }
    return true

}

// TC=O(n)
// SC=O(n)
console.log(hasCycle(node1))


// method -2  floyd cycle algorithm

var hasCycle2 = function(head) {
    let slow= head
    let fast = head;

    while((fast!==null || fast.next==null)){
        slow =slow.next
        fast =fast.next.next
        if(slow==fast){
            return true
        }
    }
    return false
}
console.log(hasCycle2(node1))

// TC=O(n)
// SC=O(1)