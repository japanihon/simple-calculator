// Get Elements
let viewer = document.querySelector('.viewer');
const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const backBtn = document.querySelector('.back');

// Insert Values Inside the Viewer
const insertValues = (value) => {
  // First Prevent Adding Values That Should not be inside
  if(value != 'C' && value != '=' && value != '<') {
    viewer.value += value;
  }
}

// Equal Function
const equal = () => {
  viewer.value = eval(viewer.value);
}

// Backward Function
const backward = () => {
  let view = viewer.value;
  viewer.value = view.substring(0, view.length -1);
}

// Clear Viewer Fully
const clear = () =>  {
  viewer.value = '';
}

// Events
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', equal);
backBtn.addEventListener('click', backward);

buttons.forEach(button => button.addEventListener('click', () => {
  insertValues(button.value);
}));