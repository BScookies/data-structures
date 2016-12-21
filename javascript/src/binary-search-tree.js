'use strict';

class Node {
	constructor(value, parent) {
		this.value = value;
  		this.parent = parent || null;
  		this.left = null;
  		this.right = null;
  	}
};

class BinarySearchTree {
	constructor(value) {
		this.root = value ? new Node(value) : null;
	}
};

module.exports = { Node, BinarySearchTree };