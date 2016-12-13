'use strict';
const expect = require('chai').expect;
const Queue = require('../src/queue.js');

['QueueArray', 'QueueLinkedList'].forEach(className => {
  describe(className, function() {
    let queue;
    beforeEach(function() {
      queue = new Queue[className];
    });

    it('Should create a queue', function() {
      expect(queue).to.not.be.undefined;
    });

    it('Should have storage as an array', function() {
      expect(Array.isArray(queue.storage)).to.equal(true);
    });

    it('Should add items to the end and remove from the front', function() {
      queue.enqueue(4);
      queue.enqueue(13);
      queue.enqueue({ test: 'test' });
      queue.enqueue('wooooh');

      expect(queue.dequeue()).to.equal(4);
      expect(queue.dequeue()).to.equal(13);
    });

    it('Should return correct size and report if empty', function() {
      expect(queue.size()).to.equal(0);
      expect(queue.isEmpty()).to.equal(true);

      queue.enqueue('some stuff');
      queue.enqueue('some more stuff');

      expect(queue.size()).to.equal(2);
      expect(queue.isEmpty()).to.equal(false);

      queue.dequeue();

      expect(queue.size()).to.equal(1);
      expect(queue.isEmpty()).to.equal(false);

      queue.dequeue();

      expect(queue.size()).to.equal(0);
      expect(queue.isEmpty()).to.equal(true);
    })
  })
});