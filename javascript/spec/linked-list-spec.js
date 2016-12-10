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

  it('Should add nodes to front', function() {
    ll.addToFront(4);
    expect(ll.head.value).to.equal(4);
    expect(ll.tail.value).to.equal(4);

    ll.addToFront(10);
    expect(ll.head.value).to.equal(10);
    expect(ll.tail.value).to.equal(4);
  })

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

  it('Should remove nodes from the back', function() {
    ll.add(5);
    ll.add(9);
    ll.add(10);
    ll.removeBack();
    expect(ll.head.value).to.equal(5);
    expect(ll.tail.value).to.equal(9);

    ll.removeBack();
    expect(ll.head.value).to.equal(5);
    expect(ll.tail.value).to.equal(5);

    ll.removeBack();
    expect(ll.head).to.equal(null);
    expect(ll.tail).to.equal(null);
  });

  it('Should retrieve a value at a given index', function() {
    ll.head = {
      value: 4,
      next: {
        value: 5,
        next: null
      }
    }

    expect(ll.valueAt(2)).to.equal(5);
    expect(ll.valueAt(3)).to.equal(null);
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

  it('Should return true if empty', function() {
    expect(ll.empty()).to.equal(true);
    ll.head = {
      value: 4,
      next: {
        value: 5,
        next: null
      }
    }

    expect(ll.empty()).to.equal(false);
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

  it('Should reduce nodes', function() {
    ll.head = {
      value: 4,
      next: {
        value: 5,
        next: null
      }
    }
    let cb = (sum, val) => sum + val
    let reduced = ll.reduce(cb);
    let reducedStart = ll.reduce(cb, 5);
    let reducedArr = ll.reduce((arr, val) => {
      arr.push(val);
      return arr;
    }, []);

    expect(reduced).to.equal(9);
    expect(reducedStart).to.equal(14);
    expect(reducedArr).to.eql([4,5]);
  });

  it('Should convert list to an array', function() {
    ll.head = {
      value: 'hello',
      next: {
        value: [133, true],
        next: null
      }
    };

    expect(ll.toArray()).to.eql(['hello', [133, true]]);
  });

  it('Should reverse the list', function() {
    ll.head = {
      value: 4,
      next: {
        value: 5,
        next: null
      }
    };

    let reversed = ll.reverse();

    expect(reversed.head.value).to.equal(5);
    expect(reversed.tail.value).to.equal(4);
    expect(ll.head.value).to.equal(4);
    expect(ll.head.next.value).to.equal(5);
  });

  it('Should reverse the list in place', function() {
    let tail = ll.tail = {
      value: 5,
      next: null
    }

    let head = ll.head = {
      value: 4,
      next: tail
    };

    ll.length = 2;

    ll.reverseInPlace();

    expect(JSON.stringify(ll)).to.eql(JSON.stringify({ head: tail, tail: head, length: 2 }));
  });

  it('Should detect cycles', function() {
    const first = ll.add(4);
    ll.add(3);
    ll.add('woooh');

    expect(ll.hasCycle()).to.equal(false);

    ll.tail.next = first;

    expect(ll.hasCycle()).to.equal(true);
  })
});