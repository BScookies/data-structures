'use strict';
const { BinarySearchTree, Node } = require('../src/binary-search-tree.js');
const { expect } = require('chai');

describe('Node', function() {
	let node = new Node(3);

	it('Should create a node', function() {
		expect(node).to.not.be.undefined;
	});

	it('Should have a value', function() {
		expect(node.value).to.equal(3);
	});
})
describe('Binary Search Tree', function() {
	let tree;

	beforeEach(function() {
		tree = new BinarySearchTree(1);
	});

	it('Should create a tree', function() {
		expect(tree).to.not.be.undefined;
		expect(tree.root).to.not.be.null;
	});
})