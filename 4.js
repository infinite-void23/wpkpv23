let numbers = []; // Array to store entered numbers
function addNumber() {
    const numberInput = document.getElementById("numberInput");
    const number = parseFloat(numberInput.value); // Convert input to number
    // Input validation (optional)
    if (isNaN(number)) {
        alert("Please enter a valid number!");
        numberInput.value = ""; // Clear the input field
        return; // Exit the function if not a number
    }
    numbers.push(number); // Add number to the array
    numberInput.value = ""; // Clear the input field for next number
    // Update the list of entered numbers
    const numberList = document.getElementById("numberList");
    numberList.textContent = `Entered numbers: ${numbers.join(", ")}`;
    // Calculate and display the sum
    const sum = numbers.reduce((total, num) => total + num, 0);
    const sumElement = document.getElementById("sum");
    sumElement.textContent = `Sum: ${sum}`;
}