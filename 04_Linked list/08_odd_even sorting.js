// TODO 49: given a linkedlist change the order by inserteiing all odd nodes first and then even nodes

//  input =[1,2,3,4,5,6,null]
//  return [1,3,5,2,4,6,null]

var oddEvenList = function(head) {
    if(!head || !head.next){
        return head
    }
    
    let headeven = head.next
    let even = head.next
    let odd = head 

    while(  odd.next && even.next){
        odd.next = odd.next.next
        even.next = even.next.next
        odd= odd.next
        even= even.next
    }

    odd.next = headeven
    return head
    
    
    
};