'use strict';

const expect = require('expect');
const SLL = require('./../SLL.js');

describe('testing linked list', () => {
  let list = new SLL(2);
  it('should contain one node with the value of 2', () => {
    expect(list.value).toEqual(2);
  });
  it('next value should be null', () => {
    expect(list.next).toEqual(null);
  });
});

describe('testing appendNode()', () => {
  let list = new SLL(2);
  list.appendNode(new SLL(3));
  list.appendNode(new SLL(4));

  it('first node should have a value of 2', () => {
    expect(list.value).toEqual(2);
  });
  it('second node should have a value of 3', () => {
    expect(list.next.value).toEqual(3);
  });
  it('third node should have a value of 4', () => {
    expect(list.next.next.value).toEqual(4);
  });
});

describe('testing removeNode()', () => {
  let list = new SLL(1);
  list.appendNode(new SLL(2));
  list.appendNode(new SLL(3));
  list.appendNode(new SLL(4));
  list.appendNode(new SLL(5));

  it('should have a value of 2', () => {
    list.removeNode(list);
    expect(list.value).toEqual(2);
  });

  it('should have a value of 4', () => {
    list.removeNode(list.next);
    expect(list.next.value).toEqual(4);
  });

  it('should have a value of 5', () => {
    list.removeNode(list.next);
    expect(list.next.value).toEqual(5);
  });
});

describe('testing forEach()', () => {
  let list = new SLL(2);
  it('first node should have a value of 2', () => {
    let sum = 0;
    list.forEach((node) => {
      sum += node.value;
    });
    expect(sum).toEqual(2);
  });

  it('second node should have a value of 5', () => {
    list.appendNode(new SLL(3));
    let sum = 0;
    list.forEach((node) => {
      sum += node.value;
    });
    expect(sum).toEqual(5);
  });

  it('third node should have a value of 9', () => {
    list.appendNode(new SLL(4));
    let sum = 0;
    list.forEach((node) => {
      sum += node.value;
    });
    expect(sum).toEqual(9);
  });
});

describe('testing findMiddle()', () => {
  let list = new SLL(2);
  it('should have a value of 2', () => {
    let middle = list.findMiddle();
    expect(middle.value).toEqual(2);
  });

  it('should have a value of 2', () => {
    list.appendNode(new SLL(3));
    let middle = list.findMiddle();
    expect(middle.value).toEqual(2);
  });

  it('should have a value of 3', () => {
    list.appendNode(new SLL(4));
    let middle = list.findMiddle();
    expect(middle.value).toEqual(3);
  });

  it('should have a value of 3', () => {
    list.appendNode(new SLL(5));
    let middle = list.findMiddle();
    expect(middle.value).toEqual(3);
  });
});

describe('testing reverse()', () => {
  let list = new SLL(2);
  list.appendNode(new SLL(3));
  list.appendNode(new SLL(4));
  list.reverse();
  it('first node should have a value of 4', () => {
    expect(list.value).toEqual(4);
  });
  it('second node should have a value of 3', () => {
    expect(list.next.value).toEqual(3);
  });
  it('third node should have a value of 2', () => {
    expect(list.next.next.value).toEqual(2);
  });
});
