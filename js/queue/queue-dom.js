const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const newQueue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  let listLength = newQueue.display().length;
  for (let i = 0; i < listLength;i++){
    // console.log(queueUL.children[i]);
    queueUL.children[i].className = "active";
    queueUL.children[i].innerHTML = newQueue.display()[i];    
  }
  //Gestion erreur
  if (queueUL.children.length > listLength){
    console.log(queueUL);
    queueUL.children[listLength].className = "inactive";
    queueUL.children[listLength].innerHTML = "";
  } 
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    // ... your code goes here
    warningBottomQueue.style.display = "block";
    warningBottomQueue.innerHTML = type;
  } else if (type === 'overflow') {
    // ... your code goes here
    warningTopQueue.style.display = "block";
    warningTopQueue.innerHTML = type;
  }
};

const addToQueue = () => {
  // ... your code goes here
  if (newQueue.enqueue(queueInput.value) === "Queue Overflow"){
    generateWarningQueue('overflow');
  } else {
    warningBottomQueue.style.display = "none";
    warningBottomQueue.innerHTML = "";
    generateListQueue();
  } 
  clearQueueInput();
};

const removeFromQueue = () => {
  // ... your code goes here
  if (newQueue.dequeue() === "Queue Underflow"){
    generateWarningQueue('underflow');
  } else {
    warningTopQueue.style.display = "none";
    warningTopQueue.innerHTML = "";
    generateListQueue();
  } 
  clearQueueInput();
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
