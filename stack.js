// we can only remove from top of the stack

// stack implamantation

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    // return this.count - 1;
  }

  pop() {
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed from stack`);
    return deleteItem;
  }

  // see what is on top of the stack
  peak() {
    let topItem = this.items[this.count - 1];
    console.log(`${topItem} is at the top of stack`);
    return topItem;
  }

  // check if stack is empty
  isEmpty() {
    console.log(this.count === 0 ? "stack is empty" : "stack is not empty");
  }
}

const stack = new Stack();

stack.peak();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.pop();
stack.pop();
stack.isEmpty();

// pretty easy ehh
