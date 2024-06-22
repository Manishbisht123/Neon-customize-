// switch button on/off

function powerSwitch() {
    var textElement = document.getElementById('customText');
    var button = document.getElementById("switchBtn");

    // color change button 
    if (textElement.classList.contains('no-text-shadow')) {
        textElement.classList.remove('no-text-shadow');
        textElement.classList.add('no-text-color');
    } else {
        textElement.classList.remove('no-text-color');
        textElement.classList.add('no-text-shadow');
    }
    if (button.textContent === "ON") {
        button.textContent = "OFF";
    } else {
        button.textContent = "ON";
    }
};



// Get the draggable element
var draggableElement = document.getElementById('customText');

// Define variables to keep track of mouse positions
var offsetX, offsetY;

// Function to handle mouse down event
function dragMouseDown(event) {
    event.preventDefault();
    // Get the initial mouse position
    offsetX = event.clientX - draggableElement.offsetLeft;
    offsetY = event.clientY - draggableElement.offsetTop;

    // Attach event listeners to handle dragging
    document.addEventListener('mousemove', elementDrag);
    document.addEventListener('mouseup', closeDragElement);
}

// Function to handle element dragging
function elementDrag(event) {
    event.preventDefault();
    // Calculate the new position of the draggable element
    var newX = event.clientX - offsetX;
    var newY = event.clientY - offsetY;

    // Set the new position
    draggableElement.style.left = newX + 'px';
    draggableElement.style.top = newY + 'px';
}

// Function to handle mouse up event
function closeDragElement() {
    // Remove event listeners when dragging ends
    document.removeEventListener('mousemove', elementDrag);
    document.removeEventListener('mouseup', closeDragElement);
}

// Attach event listener to handle mouse down event
draggableElement.addEventListener('mousedown', dragMouseDown);



// Text RunTime change show the Output with the Js

function updateOutput() {
    const input = document.getElementById('customInput');
    const outputText = document.getElementById('customText');
    // const inputText = document.getElementById('inputText');
    outputText.textContent = input.value || 'Your Text';
}

//============ COLOR CHANGE ========

function red() {
    var textElement = document.getElementById('customText');
    textElement.style.textShadow = ' rgba(255, 225, 225, 0.974) 0px 0px 0px, rgb(255, 0, 0) 0px 0px 0px, rgb(1, 1, 1) 0px 0px 0px, rgb(255, 42, 77) 0px 0px 30px, rgb(255, 42, 77) 0px 0px 40px, rgb(255, 42, 77) 0px 0px 50px';
    textElement.style.color = 'rgba(255, 0, 0, 0.974)';

}

function blue() {
    var textElement = document.getElementById('customText');
    textElement.style.textShadow = 'rgb(255, 255, 255, 0.974) 0px 0px 0px, rgb(255, 0, 0) 0px 0px 0px,  rgb(1, 1, 1) 0px 0px 0px, rgb(2, 116, 252) 0px 0px 30px, rgb(2, 116, 252) 0px 0px 40px, rgb(2, 116, 252) 0px 0px 55px, rgb(2, 116, 252) 0px 0px 75px';
    textElement.style.color = 'blue';
}

function yellow() {
    var textElement = document.getElementById('customText');
    textElement.style.textShadow = 'rgb(255, 255, 255 , 0.974)0px 0px 0px, rgb(255, 0, 0) 0px 0px 0px, rgb(1, 1, 1) 0px 0px 0px, rgb(255, 249, 124) 0px 0px 30px, rgb(255, 249, 124) 0px 0px 40px, rgb(255, 249, 124) 0px 0px 55px, rgb(255, 249, 124) 0px 0px 75px';
    textElement.style.color = 'yellow';
}

function orange() {
    var textElement = document.getElementById('customText');
    textElement.style.textShadow = ' rgb(255, 255, 255 , 0.974) 0px 0px 0px, rgb(255, 0, 0) 0px 0px 0px, rgb(1, 1, 1) 0px 0px 0px,rgb(255, 141, 2) 0px 0px 30px, rgb(255, 141, 2) 0px 0px 40px, rgb(255, 141, 2) 0px 0px 55px, rgb(255, 141, 2) 0px 0px 75px';
    textElement.style.color = 'orange';
}

function pink() {
    var textElement = document.getElementById('customText');
    textElement.style.textShadow = 'rgb(255, 255, 255 , 0.974) 0px 0px 0px, rgb(255, 0, 0) 0px 0px 0px, rgb(1, 1, 1) 0px 0px 0px, rgb(255, 92, 232) 0px 0px 30px, rgb(255, 92, 232) 0px 0px 40px, rgb(255, 92, 232) 0px 0px 55px, rgb(255, 92, 232) 0px 0px 75px';
    textElement.style.color = 'pink';
}

function green() {
    var textElement = document.getElementById('customText');
    textElement.style.textShadow = 'rgb(255, 255, 255 , 0.974) 0px 0px 0px, rgb(255, 0, 0) 0px 0px 0px, rgb(1, 1, 1) 0px 0px 0px, rgb(11, 215, 72) 0px 0px 30px, rgb(11, 215, 72) 0px 0px 40px, rgb(11, 215, 72) 0px 0px 55px, rgb(11, 215, 72) 0px 0px 75px';
    textElement.style.color = 'green';
}

function purple() {
    var textElement = document.getElementById('customText');
    textElement.style.textShadow = 'rgb(255, 255, 255 , 0.974) 0px 0px 0px, rgb(140, 89, 255) 0px 0px 20px, rgb(140, 89, 255) 0px 0px 30px, rgb(140, 89, 255) 0px 0px 40px, rgb(140, 89, 255) 0px 0px 55px, rgb(140, 89, 255) 0px 0px 80px';
    textElement.style.color = 'purple';
}



//============ FONTS CHANGE ========

function changeFont(fontStyle) {
    var textElement = document.getElementById('customText');
    var textData = document.getElementById('inputText');
    textElement.style.fontFamily = fontStyle;
  }
  