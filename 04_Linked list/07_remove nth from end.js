// TODO 47: Remove nth node from last in Linked List
// 
// aprproach 1:2 pass 
var removeNthFromEnd = function(head, n) {

        let sentinel = new ListNode()
        sentinel.next = head

        let prev = sentinel

        // find the size
        let length= 0
        while(prev.next!== null){
            length++
            prev= prev.next
        }
        console.log(length)
        // find tje positin to delte

        // delete the element
        prev= sentinel
        for(let i=0;i<length;i++){
            if(i==length-n){
                prev.next = prev.next.next;
                return sentinel.next
            }
            prev = prev.next
        }
};

// approach-2: 1 passs, 2 pointer approach
