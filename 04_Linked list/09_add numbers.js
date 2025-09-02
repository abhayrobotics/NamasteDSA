// TODO 50: Add Two Numbers

var addTwoNumbers = function(l1, l2) {
   
   let carry =0
   let prev = new ListNode()
   let head = prev
    while(l1 || l2 || carry){
      let   res = (l1==null?0:l1.val) + (l2==null?0:l2.val) +carry
        if(res>9){
            res = res-10;
            carry=1
        }else{
            carry =0
        }
        let node = new ListNode(res)
        prev.next = node
        prev = prev.next;
       
        l1==null?l1= null: l1 =l1.next;
        l2==null?l2=null: l2 = l2.next;
       
    }
    return head.next
};