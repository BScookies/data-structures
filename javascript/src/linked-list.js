'use strict';

const Node = function(value, next) {
  this.value = value;
  this.next = next || null;
}

const LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.toString = function() {
  let currNode = this.head;
  let str = '';

  while(currNode) {
    str += `{ ${currNode.value} }`
    currNode = currNode.next;
  }

  return str;
}

LinkedList.prototype.add = function(value) {
  const newNode = new Node(value);

  if(!this.head) {
    this.head = this.tail = newNode;
  } else {
    this.tail = this.tail.next = newNode;
  }

  this.length++;

  return newNode;
}

LinkedList.prototype.remove = function() {
  let oldHead = this.head;

  if(oldHead) {
    this.head = oldHead.next;
  }

  this.length--;

  return oldHead;
}

LinkedList.prototype.size = function() {
  return this.length;
}

LinkedList.prototype.forEach = function(cb) {
  let currNode = this.head;
  let index = 1;

  for(var i = 1; currNode; i++) {
    cb(currNode.value, index, currNode);
    currNode = currNode.next;
  }
}

LinkedList.prototype.filter = function(predicate) {
  const filtered = new LinkedList;

  this.forEach((val, i, node) => {
    if(predicate(val, i, node)) {
      filtered.add(val);
    }
  });

  return filtered;
}

module.exports = { LinkedList, Node };