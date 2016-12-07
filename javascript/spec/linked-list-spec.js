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

describe('LinkedList', function() {
  let ll = new LinkedList;

  it('Should create a linked list', function() {
    expect(ll).to.not.be.undefined;
  });

  it('Should have a head and tail', function() {
    expect(ll.head).to.not.be.undefined;
    expect(ll.head).to.not.be.undefined;
  });

  it('Should have a working toString method', function() {
    let tmpList = new LinkedList;


    expect(tmpList.toString()).to.equal('');

    tmpList.head = {
      value: 10,
      next: {
        value: 'hi',
        next: null
      }
    }

    expect(tmpList.toString()).to.equal('{ 10 }{ hi }');
  });

  it('Should add nodes', function() {
    ll.add(5);
    ll.add('hello');
    ll.add(true)

    let expectedTail = {
      value: true,
      next: null
    }

    let expectedHead = {
      value: 5,
      next: {
        value: 'hello',
        next: expectedTail
      }
    }

    expect(ll.head).to.eql(expectedHead);
    expect(ll.tail).to.eql(expectedTail);
  })
});