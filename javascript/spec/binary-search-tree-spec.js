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

	it('Should insert a node in order', function() {
		const left = tree.insert(0);
		const right = tree.insert(2);
		const rightRight = tree.insert(4);

		expect(tree.root.left).to.equal(left);
		expect(tree.root.right).to.equal(right);
		expect(tree.root.right.right).to.equal(rightRight);
	});

	it('Should return a node when value is searched for', function() {
		const node = tree.insert(5);
		const node2 = tree.insert(3);
		const node3 = tree.insert(6);

		expect(tree.search(5)).to.equal(node);
		expect(tree.search(3)).to.equal(node2);
		expect(tree.search(6)).to.equal(node3);
		expect(tree.search(14)).to.equal(null);
	});
})