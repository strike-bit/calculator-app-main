       // Get the element where the answer will be shown (the <p> inside .answers)
       const display = document.querySelector('.answers p');

       // Get all the <h1> buttons inside the .row (these are like 1, 2, +, = buttons)
       const buttons = document.querySelectorAll('.row h1');
       
       // We'll store what the user types (like "12+3") in this variable
       let currentInput = "";
       
       // Go through each button and listen for clicks
       buttons.forEach(button => {
         
         // When a button is clicked, do something
         button.addEventListener("click", () => {
       
           // Get the text on the button (like "1", "2", "+", "=")
           const value = button.textContent.trim();
       
           // If the button says "DEL", remove the last number/character typed
           if (value === "DEL") {
             currentInput = currentInput.slice(0, -1);
           
           // If the button says "RESET", clear everything
           } else if (value === "RESET") {
             currentInput = "";
           
           // If the button is "=", calculate the answer
           } else if (value === "=") {
             try {
               // Change 'x' to '*' because computers use * for multiplication
               const expression = currentInput.replace(/x/g, '*');
       
               // Use a math tool to evaluate (solve) the math problem
               const result = math.evaluate(expression);
       
               // Show the result as a string (so it displays properly)
               currentInput = result.toString();
             } catch (err) {
               // If something goes wrong, show "Error"
               currentInput = "Error";
             }
           
           // If it's a number or operator like +, -, x, / just add it to the input
           } else {
             currentInput += value;
           }
       
           // Show whatever the current input or answer is on the screen
           display.textContent = currentInput;
         });
       });