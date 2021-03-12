class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    return this.stackControl.length < this.MAX_SIZE ? true : false;
  }

  display() {
    // ... your code goes here
    return this.stackControl;
  }

  isEmpty() {
    // ... your code goes here    
    return this.stackControl.length === 0 ? true : false;
  }

  push(item) {
    // ... your code goes here
    if (this.canPush()) {
      this.stackControl.push(item);
      //console.log(this.stackControl);
      return this.display();
    } else {
      return 'Stack Overflow';
    }
  }

  pop() {
    // ... your code goes here
    if (this.isEmpty()){
      return 'Stack Underflow';
    } else {            
      return this.stackControl.pop();
    }
  }
}
