/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// TODO 52: Rotate list
var rotateRight = function(head, k) {
    if(!head || !head.next || k==0){
        return head
   }
    let headStart = head
   
   let fast = head
    let size =1
    // check the size
    while(fast.next && fast ){
        size++
        fast = fast.next
   }
   console.log(size)
//    remve unnecessay aproach
   let rotation =  k % size 
    
    // find the new head
    let slow = head
    let faster =head
    let i=0
    while(faster.next){
        if(i<rotation){
            faster = faster.next
            i++
        }
        else{
             faster = faster.next
             slow =slow.next
        }
    }
    // connection 
    faster.next=headStart;
    let  resultHead = slow.next 
    slow.next = null
    return resultHead
        
};  