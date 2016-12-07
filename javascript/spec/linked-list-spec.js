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
  let ll;

  beforeEach(function() {
    ll = new LinkedList;
  })

  it('Should create a linked list', function() {
    expect(ll).to.not.be.undefined;
  });

  it('Should have a head and tail', function() {
    expect(ll.head).to.not.be.undefined;
    expect(ll.head).to.not.be.undefined;
  });

  it('Should have a working toString method', function() {
    expect(ll.toString()).to.equal('');

    ll.head = {
      value: 10,
      next: {
        value: 'hi',
        next: null
      }
    }

    expect(ll.toString()).to.equal('{ 10 }{ hi }');
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
  });

  it('Should remove nodes', function() {
    ll.head = {
      value: [1,2,3],
      next: {
        value: 5,
        next: null
      }
    }

    expect(ll.remove().value).to.eql([1,2,3]);
    expect(ll.head.value).to.equal(5);
  });

  it('Should return size of the list', function() {
    expect(ll.size()).to.equal(0);

    ll.add(5);
    ll.add(3);
    ll.add('Guy Fieri');

    expect(ll.size()).to.equal(3);

    ll.remove();

    expect(ll.size()).to.equal(2);
  });

  it('Should invoke callback on each node', function() {
    let result = [];
    ll.head = {
      value: [1,2,3],
      next: {
        value: 5,
        next: null
      }
    }

    ll.forEach((val) => result.push(val));

    expect(result).to.eql([[1,2,3], 5]);
  });

  it('Should filter a list based on a predicate', function() {
    let target = {
      value: 5,
      next: null
    };

    ll.head = {
      value: [1,2,3],
      next: target
    }

    let filtered = ll.filter((val) => typeof val === 'number');

    expect(JSON.stringify(filtered)).to.eql(JSON.stringify({ head: target, tail: target, length: 1 }));
  });

  it('Should map each node', function() {
    ll.head = {
      value: 4,
      next: {
        value: 5,
        next: null
      }
    }

    let mapped = ll.map(val => val * val);

    expect(mapped.head.value).to.equal(16);
    expect(mapped.tail.value).to.equal(25);
  });
});