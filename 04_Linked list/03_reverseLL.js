function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


var reverseList = function(head) {
   let prev =null
   let current = head;
   while(current){
    let temp =current.next;
    current.next =prev;
    prev = current;
    current = temp
   }
   head =prev
   console.log(head)
    return   head
};




// ✅ 4. Create linked list: 1 → 2 → 3 → 4 → null
let node4 = new ListNode(4);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);


// ✅ 5. Show original list
// console.log("Original Linked List:");
// console.log(node1);


reverseList(node1)
// console.log(res)