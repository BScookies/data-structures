const Node = function(value, next) {
  this.value = value;
  this.next = next || null;
}

const LinkedList = function() {
  this.head = null;
  this.tail = null;
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