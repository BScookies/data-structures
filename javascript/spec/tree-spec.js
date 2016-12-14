'use strict';
const { Tree, Node } = require('../src/tree.js');
const { expect } = require('chai');

describe('Node', function() {
	let node = new Node(3);

	it('Should create a node', function() {
		expect(node).to.not.be.undefined;
	});

	it('Should have a value', function() {
		expect(node.value).to.equal(3);
	})

	it('Should add a child', function() {
		const child1 = node.addChild('hello');
		node.addChild(14);
		child1.addChild('One.. last trip.. to flavortown');

		expect(node.children[0].value).to.equal('hello');
		expect(node.children[1].value).to.equal(14);
		expect(child1.children[0].value).to.equal('One.. last trip.. to flavortown');
	});
})
describe('Tree', function() {
	let tree;

	beforeEach(function() {
		tree = new Tree(1);
		const l = tree._root.addChild(2);
		const r = tree._root.addChild(3);
		l.addChild(4);
		l.addChild(5);
		r.addChild(6);
		r.addChild(7);
	});

	it('Should create a tree', function() {
		expect(tree).to.not.be.undefined;
	});

	it('Should traverse depth-first pre-order', function() {
		const result = [];

		tree.traverseDFPre(node => result.push(node.value));
		expect(result).to.eql([1,2,4,5,3,6,7]);
	})
})