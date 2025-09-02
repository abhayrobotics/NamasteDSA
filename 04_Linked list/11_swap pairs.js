
var swapPairs = function(head) {

    //    iterative
    // if(!head || !head.next){
    //         return head
    //     }
    // let headStart = head.next;
    // let current = head;
    // let prev = null
    // while(current && current.next){
    //     let p2 = current.next
    //     let temp = current.next.next
    //     p2.next = current
    //     current.next = temp
    //     if(prev!==null){
    //         prev.next= p2
    //     }
    //     prev = current
    //     current = temp
    // }
    // return headStart



// Method-2 : recursive
    if(!head || !head.next){
            return head
        }
        let headStart = head.next
        swap(head)
        function swap(head){
            if(!head ){
                return null
            }
            else if(!head.next){
                return head
            }
            let p1 = head
            let p2= head.next
            let current = p2.next
            p2.next =p1
            p1.next= swap(current)
            return p2
        }
        return headStart
       

};