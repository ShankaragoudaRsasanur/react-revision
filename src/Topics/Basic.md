/*
What is React?

React is a JavaScript library used to build user interfaces (UI).

A user interface means everything you see on a website, such as:

Buttons
Images
Login forms
Navigation bar
Product cards

React helps us build these quickly and reuse them.

Why do we use React?

Imagine creating a website using only HTML, CSS, and JavaScript.

If you have:

100 products
100 buttons
100 cards

You would write a lot of repeated code.

With React, you create one component and reuse it many times.

This saves time and makes the code easier to maintain.

Where is React used?

Many popular websites use React, including:

Facebook
Instagram
Netflix
WhatsApp Web
Airbnb
Amazon (parts of the site)
Real-Life Example

Imagine a classroom with 50 students.

Without React:
You write each student's card separately.

With React:
You create one StudentCard component and display it 50 times with different data.

This is why React is powerful.

What is Vite?

Vite is a tool that creates and runs a React project.

Instead of creating all folders manually, Vite creates them for you.

Create a React project

Open Terminal:

npm create vite@latest

Project name:

react-learning

Choose:

React

Choose:

JavaScript

Then run:

cd react-learning
npm install
npm run dev
What happens after npm run dev?

You will see something like:

http://localhost:5173/

Open this link in your browser.

Your React application will open.

Folder Structure
react-learning
│
├── node_modules
├── public
├── src
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── vite.config.js



================================================================

What is src?

This is where we write most of our React code.

What is App.jsx?

This is the main component of your application.

Example:

function App() {
  return (
    <h1>Hello React</h1>
  );
}

export default App;
What is main.jsx?

It starts your React application and loads App.jsx.

Usually, you don't change it much.

What is JSX?

JSX means JavaScript XML.

It lets you write HTML-like code inside JavaScript.

Example:

function App() {
  return (
    <h1>Welcome to React</h1>
  );
}

export default App;

Even though it looks like HTML, it is JSX.

Why do we use JSX?

Without JSX:

React.createElement("h1", null, "Hello");

With JSX:

<h1>Hello</h1>

JSX is much easier to read and write.





Interview Questions

Q1. What is React?

Answer: React is a JavaScript library used to build user interfaces.

Q2. What is JSX?

Answer: JSX allows us to write HTML-like code inside JavaScript.

Q3. Why do we use React?

Answer: Because React lets us build reusable, fast, and maintainable user interfaces.





*/