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
function removeN(head ,n){
     // method-2: 2 pointer 
        let sentinel = new ListNode(0,head)
        let p1 = sentinel
        let p2  = sentinel
        let i = 0
        
        //exit when p2 reach last point
        while(p2.next!== null){
            // reach p2  to n
            if(i<n){
                i++;
                p2 = p2.next;
            }
            else{
                p1=p1.next
                p2=p2.next
            }
        }
        // delete the element
        p1.next = p1.next.next

        return sentinel.next;

    }

    // TODO:  48 Remove Duplicates from Sorted List
    