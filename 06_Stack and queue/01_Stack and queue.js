// TODO 65: making stack using queue
var MyStack = function() {
    this.q1 =[]
    this.q2= []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
    
    return
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   
    while(this.q1.length>1){
        this.q2.push(this.q1[0])
        this.q1.shift()


    }
    let result =this.q1[0]
    this.q1.shift() 
    // while(this.q2.length>0){
    //     this.q1.push(this.q2[0])
    //     this.q2.shift()
    // }
    let temp = this.q2
    this.q2= this.q1
    this.q1= temp
    return result
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    
     while(this.q1.length>1){
        this.q2.push(this.q1[0])
        this.q1.shift()
    }
    let result =this.q1[0]
    this.q2.push(this.q1[0])
    this.q1.shift() 
   // while(this.q2.length>0){
    //     this.q1.push(this.q2[0])
    //     this.q2.shift()
    // }
    let temp = this.q2
    this.q2= this.q1
    this.q1= temp

    return result
};


/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q1.length==0  
};


// Method-2 :using 1 queue

// method- 2
MyStack.prototype.pop2= function(){
    let n= this.q1.length-1
    for(let i=0;i<n;i++){
        this.q1.push(this.q1[0])
        this.q1.shift()
    }
    let result = this.q1[0]
    this.q1.shift()
    return result

}