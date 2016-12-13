'use strict';
const LinkedList = require('./linked-list.js').LinkedList;

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

const QueueFixedArray = function(maxSize) {
  this.storage = [];
  this.maxSize = maxSize || 8;
  this.read = 0;
  this.write = 0;
  this.length = 0;
}

const QueueLinkedList = function() {
  this.storage = new LinkedList;
}

QueueLinkedList.prototype.enqueue = function(val) {
  this.storage.add(val);
  return this.storage.size();
}

QueueLinkedList.prototype.dequeue = function(val) {
  return this.storage.remove();
}

QueueLinkedList.prototype.size = function(val) {
  return this.storage.size();
}

QueueLinkedList.prototype.isEmpty = function() {
  return this.size() === 0;
}

module.exports = { QueueArray, QueueFixedArray, QueueLinkedList };