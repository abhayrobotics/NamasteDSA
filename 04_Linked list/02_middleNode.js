// TODO 41: Middle node in linked list  
// Intutive approach
function middleNodes(head){

    let count =1;
    let currentNode = head
    
    console.log(currentNode)
    while(currentNode.next!=null){
        currentNode= currentNode.next;
        count++
    }
    
    let mid=Math.ceil(count/2)
    if(count%2==0){
        mid=mid+1
    }
    let x=1
    console.log(mid)
    let middleNode =head
    while(mid!==x){
        middleNode =middleNode.next
        ++x
        console.log(middleNode,x)
    }
    return middleNode

}

// MEthod 2:  slow and fast pointer
// here slow moves 1 element and fast moves 2 element,
// so when fast reaches Last, slow reaches middleNodes

function Middle(head){
    let slow =head
    let fast =head
    while(fast!= null && fast.next!= null){
        slow =slow.next
        fast = fast.next.next
    }
    return slow
}