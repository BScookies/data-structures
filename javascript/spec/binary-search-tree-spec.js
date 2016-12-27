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

	it('Should delete a leaf', function() {
		tree.insert(3);
		tree.delete(3);

		expect(tree.root).to.eql({ value: 1, parent: null, left: null, right: null });

		tree.delete(1)
		expect(tree.root).to.equal(null)
	});

	it('Should delete a node with left and right', function() {
		const r = tree.insert(3);
		const l = tree.insert(0);

		tree.delete(1);
		expect(tree.root).to.eql({ value: 3, parent: null, left: l, right: null });
	});

	it('Should delete a node with a single left or right', function() {
		const l = tree.insert(-15);
		const r = tree.insert(15);
		const rr = tree.insert(17);
		tree.delete(15);

		expect(tree.root).to.eql({ value: 1, parent: null, left: l, right: rr });
	});

	it('Should return a count of nodes', function() {
		tree.insert(5);
		tree.insert(20);
		tree.insert(8);

		expect(tree.getNodeCount()).to.equal(4);
	});
})