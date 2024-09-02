function greetUser() {
    const userName = document.getElementById("userName").value;
    // Input validation (optional)
    if (userName.trim() === "") {
    alert("Please enter your name!");
    return; // Exit the function if no name is entered
    }
    const greeting = document.getElementById("greeting");
    greeting.textContent = `Hello, ${userName}!`;
    }