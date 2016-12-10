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

LinkedList.prototype.addToFront = function(value) {
  const newNode = new Node(value);

  if(this.head) {
    newNode.next = this.head;
  } else {
    this.tail = newNode;
  }

  this.head = newNode;
}

LinkedList.prototype.remove = function() {
  let oldHead = this.head;

  if(oldHead) {
    this.head = oldHead.next;
  }

  this.length--;

  return oldHead;
}

LinkedList.prototype.removeBack = function() {
  let tail = this.tail;
  let currNode = this.head;

  if(tail !== currNode) {
    while(currNode && currNode.next !== tail) {
      currNode = currNode.next;
    }

    this.tail = currNode;
    this.tail.next = null;
  } else {
    this.tail = this.head = null;
  }

  return tail;
}

LinkedList.prototype.valueAt = function(index) {
  let i = 1;
  let currNode = this.head;

  while(currNode) {
    if(index === i) {
      return currNode.value;
    }

    i++;
    currNode = currNode.next;
  }

  return null;
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

LinkedList.prototype.map = function(cb) {
  const mapped = new LinkedList;

  this.forEach((val, i, node) => {
    mapped.add(cb(val, i, node));
  })

  return mapped;
}

LinkedList.prototype.reduce = function(cb, startVal) {
  this.forEach((val, i, node) => {
    if(i === 1 && !startVal) {
      startVal = val;
    } else {
      startVal = cb(startVal, val, i, node);
    }
  });

  return startVal;
}

LinkedList.prototype.toArray = function() {
  return this.reduce((arr, val) => {
    arr.push(val);
    return arr;
  }, []);
}

// Node references will be different
LinkedList.prototype.reverse = function() {
  const tmpStack = this.toArray();
  const reversed = new LinkedList;

  while(tmpStack.length) {
    reversed.add(tmpStack.pop());
  }

  return reversed;
}

LinkedList.prototype.reverseInPlace = function() {
  let currNode = this.head;
  let lastNode = null;

  while(currNode) {
    let nextNode = currNode.next;
    currNode.next = lastNode;
    lastNode = currNode;
    currNode = nextNode;
  }

  let oldHead = this.head;
  this.head = this.tail;
  this.tail = oldHead;
}

LinkedList.prototype.hasCycle = function() {
  let hare = this.head.next;
  let tortoise = this.head;

  while(hare && hare.next) {
    if(hare === tortoise) {
      return true;
    }

    hare = hare.next.next;
    tortoise = tortoise.next;
  }

  return false;
}

module.exports = { LinkedList, Node };