class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
    console.log(`${item} added into the queue at position ${this.count - 1}`);
  }
  dequeue() {
    const item = this.items.shift();
    console.log(`${item} removed from the queue at position`);
    this.count--;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

// kinda understand how this works now.
