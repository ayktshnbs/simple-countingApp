const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const doubleBtn = document.getElementById('doubleBtn');
const divideBtn = document.getElementById('divideBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

incrementBtn.onclick = function() {
    count++;
    countLabel.textContent = count; 
}

decrementBtn.onclick = function() {
    count--;
    countLabel.textContent = count; 
}

doubleBtn.onclick = function() {
    count *= 2;
    countLabel.textContent = count; 
}
divideBtn.onclick = function() {
    count /= 2;
    countLabel.textContent = count; 
}
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count; 
}