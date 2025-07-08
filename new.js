

{/* <script
src="https://cdn.jsdelivr.net/npm/mathjs@12.4.2/lib/browser/math.js"></scri
pt>
Place this before your custom new.js script at the bottom of the HTML file:
<script
src="https://cdn.jsdelivr.net/npm/mathjs@12.4.2/lib/browser/math.js"></scri
pt>
<script src="new.js"></script>
📜 2. Your new.js (Using math.evaluate() Safely)
const display = document.querySelector('.answers p');
const buttons = document.querySelectorAll('.row h1');
let currentInput = "";
buttons.forEach(button => {
button.addEventListener("click", () => {
const value = button.textContent.trim();
if (value === "DEL") {
currentInput = currentInput.slice(0, -1);
} else if (value === "RESET") {
currentInput = "";
} else if (value === "=") {
try {
// Replace 'x' with '*' before evaluation
const expression = currentInput.replace(/x/g, '*');
const result = math.evaluate(expression);
currentInput = result.toString();
} catch (err) {
currentInput = "Error";
}
} else {
currentInput += value;
}
display.textContent = currentInput;
});
}); */}
const display = document.querySelector('.answers p');
const buttons = document.querySelectorAll('.row h1');
let currentInput = "";
buttons.forEach(button => {
button.addEventListener("click", () => {
const value = button.textContent.trim();
if (value === "DEL") {
currentInput = currentInput.slice(0, -1);
} else if (value === "RESET") {
currentInput = "";
} else if (value === "=") {
try {
// Replace 'x' with '*' before evaluation
const expression = currentInput.replace(/x/g, '*');
const result = math.evaluate(expression);
currentInput = result.toString();
} catch (err) {
currentInput = "Error";
}
} else {
currentInput += value;
}
display.textContent = currentInput;
});
});