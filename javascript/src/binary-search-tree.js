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

	delete(key) {
		// get a reference to the node to be deleted, its parent, and the direction it hangs off its parent
		const deletedNode = this.search(key);
		const parent = deletedNode.parent;	
		const direction = parent && parent.left === deletedNode ? 'left' : 'right';

		// if node is a leaf..
		if(!deletedNode.left && !deletedNode.right) {
			// set the parent's pointer to this node to null, or in the case of root deletion set root to null
			return parent ? parent[direction] = null : this.root = null;
		}

		// if node has two children..
		if(deletedNode.left && deletedNode.right) {
			// find the minimum value node, starting from the node to be deleted's right child..
			let curr = deletedNode.right;

			while(curr.left) {
				curr = curr.left;
			}

			// then swap the minimum and node to be deleted, while removing the minimum
			this.delete(curr.value);
			return deletedNode.value = curr.value;
		}

		// otherwise, node has a single child and should swap node to be deleted with its child
		const child = deletedNode.left || deletedNode.right;
		return parent ? parent[direction] = child : this.root = child;
	}
};

module.exports = { Node, BinarySearchTree };