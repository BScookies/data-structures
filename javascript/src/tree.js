'use strict';
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
};

module.exports = { Node, Tree };