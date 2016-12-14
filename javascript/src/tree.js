'use strict';
class Node {
	constructor(value, parent) {
		this.value = value;
  		this.parent = parent || null;
  		this.children = [];
  	}
};

class Tree {
	constructor(value) {
		this._root = new Node(value);
	}
};

module.exports = { Tree };