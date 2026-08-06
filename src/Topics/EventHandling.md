 What is an Event?
 Why do we use Events?
 Where are Events used?
 onClick
 onChange (Introduction)
 Functions
 Without and without Event Handling
 Notes App Example
 10 Interview Questions
 HR Question

 

 1. What is an Event?

Answer:
An event is an action performed by the user.

Example:

Clicking a button
Typing in an input
Submitting a form

2. What is Event Handling?

Answer:
Event handling means responding to a user's action.

Example:
When a user clicks Add Note, React runs a function.

3. Why do we use Event Handling?

Answer:
We use event handling to make the application interactive.

Example:
Without event handling, clicking a button does nothing.

4. Which event is used for a button click?

Answer:
onClick

Example:

<button onClick={addNote}>
  Add Note
</button>
5. What is onClick?

Answer:
onClick is a React event that runs a function when a button is clicked.

Example:

function addNote() {
  alert("Note Added");
}

<button onClick={addNote}>
  Add Note
</button>
6. Why do we write onClick={addNote} instead of onClick={addNote()}?

Answer:
Because we want the function to run only when the button is clicked.

Example:

 Correct

<button onClick={addNote}>

 Wrong

<button onClick={addNote()}>

The wrong code runs the function immediately when the page loads.

7. Can one page have multiple events?

Answer:
Yes.

Example:

Add Note button
Delete Note button
Save button

Each button can have its own event.

8. Where is Event Handling used in real applications?

Answer:
Event handling is used in:

Login button
Register button
Add to Cart
Search
Like button
Delete button
Payment button
9. Which event is used for typing in an input box?

Answer:
onChange

Example:

<input onChange={handleChange} />

We'll learn this in the next lesson.

10. What happens when the user clicks the Add Note button?

Answer:
React calls the function attached to onClick.

Flow:

User Clicks Button
        ↓
onClick
        ↓
addNote()
        ↓
Alert appears



 HR Interview Question
Q: Why is Event Handling important in React?

Answer:

Event handling makes a React application interactive. It allows users to click buttons, type in inputs, submit forms, and perform different actions smoothly.






Quick Revision

QuestionEasy Answer

What is an Event?
A user action.

What is Event Handling?	
Responding to a user action.

Click event?
onClick

Input event?
onChange

Why use Event Handling?	
To make the app interactive.

Correct syntax?
onClick={addNote}

Wrong syntax?	
onClick={addNote()}


Real example?	
Add to Cart, Login, Like Button.
Can one page have many events?	
Yes.

What happens after a click?	
React calls the function.
 
 
 