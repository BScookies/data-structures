'use strict';
const { Tree } = require('../src/tree.js');
const { expect } = require('chai');

describe('Tree', function() {
	let tree;

	beforeEach(function() {
		tree = new Tree(4);
	});

	it('Should create a tree', function() {
		expect(tree).to.not.be.undefined;
	})
})