const QueueArray = function() {
  this.storage = [];
}

QueueArray.prototype.enqueue = function(val) {
  return this.storage.push(val);
}

QueueArray.prototype.dequeue = function(val) {
  return this.storage.shift();
}

QueueArray.prototype.size = function(val) {
  return this.storage.length;
}

QueueArray.prototype.isEmpty = function() {
  return this.size() === 0;
}

module.exports = { QueueArray };