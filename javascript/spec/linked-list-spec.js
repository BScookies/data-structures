'use strict';
const expect = require('chai').expect;
const LinkedList = require('../src/linked-list.js').LinkedList;
const Node = require('../src/linked-list.js').Node;

describe('Node', function() {
  it('Should create a node', function() {
    let node = new Node;

    expect(node).to.not.be.undefined;
  })

  it('Should create a node with a value', function() {
    let node = new Node(5);

    expect(node.value).to.equal(5);
  });

  it('Should create a node with a next property', function() {
    let node = new Node(5, new Node(3));

    expect(node.next.value).to.equal(3);
  });

  it('Should default next property to null if unspecified', function() {
    let node = new Node(5);

    expect(node.next).to.equal(null);
  });
});