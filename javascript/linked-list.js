const Node = function(value, next) {
  this.value = value;
  this.next = next || null;
}

const LinkedList = function() {
  this.head = null;
  this.tail = null;
}