'use strict';
const Queue = require('./queue.js').QueueLinkedList;

class Node {
	constructor(value, parent) {
		this.value = value;
  		this.parent = parent || null;
  		this.children = [];
  	}

  	addChild(value) {
  		const child = new Node(value, this);
  		this.children.push(child);
  		return child;
  	}
};

class Tree {
	constructor(value) {
		this._root = new Node(value);
	}

	traverseDFPre(callback, node = this._root) {
		callback(node);

		for(let child of node.children) {
			this.traverseDFPre(callback, child);
		}
	}

	traverseDFPost(callback, node = this._root) {
		for(let child of node.children) {
			this.traverseDFPost(callback, child);
		}

		callback(node);
	}

	traverseBF(callback) {
		const queue = new Queue;
		queue.enqueue(this._root);

		while(!queue.isEmpty()) {
			let currentNode = queue.dequeue();
			callback(currentNode);

			for(let child of currentNode.children) {
				queue.enqueue(child);
			}
		}
	}
};

module.exports = { Node, Tree };