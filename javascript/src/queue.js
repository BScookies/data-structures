const QueueArray = function() {
  this.storage = [];
}

QueueArray.prototype.enqueue = function(val) {
  return this.storage.push(val);
}

QueueArray.prototype.dequeue = function(val) {
  return this.storage.shift();
}

module.exports = { QueueArray };