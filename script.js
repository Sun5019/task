// CONCEPT 1: Selecting Elements (DOM Selection)
// We "grab" the HTML elements using their IDs so we can control them.
const input = document.getElementById('taskInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('taskList');
const typeSelect = document.getElementById('taskType');
const urgencySelect = document.getElementById('taskUrgency');

// CONCEPT 2: Functions
// A reusable block of code that performs a specific action.
function addTask() {
    // CONCEPT 3: Variables & Values
    // Getting the text typed into the input box and selected values.
    const taskValue = input.value;
    const taskType = typeSelect.value;
    const taskUrgency = urgencySelect.value;

    // CONCEPT 4: Conditionals (If/Else)
    // Checking if the user actually typed something.
    if (taskValue === "") {
        alert("Please go out of my class!");
    } else {
        // CONCEPT 5: Creating Elements (DOM Manipulation)
        // Making a new <li> element "on the fly".
        const listItem = document.createElement('li');
        
        // Creating a task object to store all information
        const task = {
            text: taskValue,
            type: taskType,
            urgency: taskUrgency
        };

        // Setting the text inside that element with type and urgency.
        listItem.textContent = `${task.text} (${task.type}, ${task.urgency})`;

        // "Appending" (adding) it to our list on the page.
        list.appendChild(listItem);

        // Clearing the input for the next task.
        input.value = "";
    }
}

// CONCEPT 6: Event Listeners
// Telling the button to "listen" for a click and run our function.
button.addEventListener('click', addTask);