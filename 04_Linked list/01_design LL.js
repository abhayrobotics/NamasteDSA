var Node =function(val){
    this.val =val;
    this.next =null;

}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0
   
};
// TODO : IMPORTANT example of a linked list
// ✅ Create linked list: 1 → 2 → 3 → 4 → null
let node4 = new Node(4);
let node3 = new Node(3, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
     console.log(this)
    if(index>=this.size || index<0){
        return -1
    }
    let currentNode = this.head;
    for(let i=0;i<index;i++){
        currentNode = currentNode.next
    }
    return currentNode.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
   const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
  if (!this.head) this.head = newNode;
  else {
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }
  this.size++;
        
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);
  const newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) curr = curr.next;
  newNode.next = curr.next;
  curr.next = newNode;
  this.size++;

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index>=this.size || index<0){
        return 
    }
    if(index===0){
        this.head =this.head.next
    }
    else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next;
    curr.next = curr.next.next;
  }
  this.size--

    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */