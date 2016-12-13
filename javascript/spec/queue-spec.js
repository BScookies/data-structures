'use strict';
const expect = require('chai').expect;
const QueueArray = require('../src/queue.js').QueueArray;

describe('QueueArray', function() {
  let queue;
  beforeEach(function() {
    queue = new QueueArray;
  });

  it('Should create a queue', function() {
    expect(queue).to.not.be.undefined;
  });

  it('Should have storage as an array', function() {
    expect(Array.isArray(queue.storage)).to.equal(true);
  });
})