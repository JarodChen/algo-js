export class LinkedListNode {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

export class LinkedListDoublyNode extends LinkedListNode {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
