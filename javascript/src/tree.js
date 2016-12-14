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
};

module.exports = { Node, Tree };