'use strict';

class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(node){
    if(!(node instanceof SLL)) return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  removeNode(node){
    if(!(node instanceof SLL)) return null;
    let current = this;
    while(current){
      if(current === node) {
        current.value = current.next.value;
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

  findMiddle(){
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverse() {
    let current = this;
    let previous = null;

    while(current) {
      let tmp = current.next;
      current.next = previous;
      previous = current;
      current = tmp;
    }
    this.next = previous.next;
  }
}

module.exports = SLL;
