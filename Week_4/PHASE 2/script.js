// Set initial text when page loads
window.addEventListener('load', function() {
    const h1 = document.querySelector('h1');
    h1.textContent = "Hello, World!";
});

// Get button element
const button = document.getElementById('button');

// Add click event handler to button
button.addEventListener('click', function() {
    const h1 = document.querySelector('h1');
    h1.textContent = "Button clicked!";
    h1.style.backgroundColor = 'red';
});

// Get text input element
const textInput = document.getElementById('textInput');

// Add keypress event handler to text input
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        console.log('Input value:', textInput.value);
        textInput.value = ''; //Clear input after logging
    }
});

// Get list items
const listItems = document.querySelectorAll('.list-item');

// Add click event handler to each list item
listItems.forEach(item => {
    item.addEventListener('click', function() {
        this.remove(); // Remove clicked item
    });
}); 



