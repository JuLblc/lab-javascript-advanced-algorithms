const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = "";
};

const renderListStack = () => {
  // ... your code goes here
  console.log("renderlist");
  // console.log(stackList.children);
  let listLength = newStack.display().length;
  for (let i = 0; i < listLength;i++){
    console.log(stackList.children[i]);
    stackList.children[i].className = "active";
    stackList.children[i].innerHTML = newStack.display()[i];    
  }
  //Gestion erreur
  if (stackList.children.length > listLength){
    stackList.children[listLength].className = "inactive";
    stackList.children[listLength].innerHTML = "";
  }  
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    // ... your code goes here
    console.log("underflow")
    warningBottomStack.style.display = "block";
    warningBottomStack.innerHTML = type;
  } else if (type === 'overflow') {
    // ... your code goes here
    console.log("overflow")
    warningTopStack.style.display = "block";
    warningTopStack.innerHTML = type;
  }
};

const addToStack = () => {
  // ... your code goes here;
  if (newStack.push(stackInput.value) === "Stack Overflow"){
    generateWarningStack('overflow');
  } else {
    warningBottomStack.style.display = "none";
    warningBottomStack.innerHTML = "";
    renderListStack();
  } 
  clearStackInput();
};

const removeFromStack = () => {
  // ... your code goes here
  if (newStack.pop() === "Stack Underflow"){
    generateWarningStack('underflow');
  } else {
    warningTopStack.style.display = "none";
    warningTopStack.innerHTML = "";
    renderListStack();
  }
  clearStackInput();
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);