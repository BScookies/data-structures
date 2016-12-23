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

	insert(value, currentNode = this.root) {
		if(!this.root) {
			this.root = new Node(value);
		}

		if(value < currentNode.value) {
			if(!currentNode.left) {
				return currentNode.left = new Node(value, currentNode);
			} else {
				return insert(value, currentNode.left);
			}
		}

		if(value > currentNode.value) {
			if(!currentNode.right) {
				return currentNode.right = new Node(value, currentNode);
			} else {
				return this.insert(value, currentNode.right);
			}
		}
	}

	search(key, currentNode = this.root) {
		if(!currentNode) {
			return null;
		}

		if(key < currentNode.value) {
			return this.search(key, currentNode.left);
		}

		if(key > currentNode.value) {
			return this.search(key, currentNode.right);
		}

		return currentNode;
	}
};

module.exports = { Node, BinarySearchTree };