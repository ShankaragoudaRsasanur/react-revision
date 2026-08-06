 /*What is a Component?
 Why do we use Components?
 Where are Components used in real projects?
 How to create Components?
 Import & Export
 Build our Notes App using Components

  1. whatis component
it is a reusable  peice of website

*  many small components come together to build one website.



imagine you're building the Amazon homepage.

It contains:

Amazon Website

------------------------
Navbar
------------------------
Search Bar
------------------------
Banner
------------------------
Categories
------------------------
Product Cards
------------------------
Footer
------------------------

In React:

App
│
├── Navbar
├── SearchBar
├── Banner
├── Categories
├── ProductCard
└── Footer

Each box is a component.
==================================================
  2.Why Do We Use Components?

Suppose your company has 20 pages.

Every page needs the same Navbar.
==================================================

 Without Components:

You copy the Navbar code into all 20 pages.

If the company changes its logo, you must edit all 20 pages.

==================================================

With Components

Create one Navbar.jsx.

Use it everywhere.

If you change it once, every page updates automatically.

This saves time and avoids mistakes.



Interview Questions
1. What is a Component?

Answer:
A component is a reusable part of a user interface.

Easy Example:
A website has a Navbar, Footer, and Login Form. Each one is a component.

2. Why do we use Components?

Answer:
We use components to reuse code and keep the application organized.

Easy Example:
Instead of writing the same Navbar on every page, create it once and use it everywhere.

3. What are the advantages of Components?

Answer:

Reusable
Easy to maintain
Easy to understand
Saves development time

Easy Example:
If the company logo changes, update it once in the Navbar component and every page is updated.

4. What is a Functional Component?

Answer:
A functional component is a JavaScript function that returns JSX.

Example:

function Navbar() {
  return <h1>Navbar</h1>;
}
5. Why are Functional Components used?

Answer:
They are simple, easy to write, and are the standard way to build React applications today.

Easy Example:
Most React projects use functional components for Navbar, Footer, Login, Dashboard, etc.

6. How do you create a Component?

Answer:
Create a JavaScript (.jsx) file, write a function that returns JSX, and export it.

Example:

function Footer() {
  return <h2>Footer</h2>;
}

export default Footer;
7. How do you use a Component?

Answer:
Import it into another file and render it using its tag.

Example:

import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Footer />
    </div>
  );
}
8. What is export default?

Answer:
It allows a component to be used in another file.

Easy Example:
Without export default, you cannot import the component into App.jsx.

9. What is import?

Answer:
import brings a component from another file into the current file.

Easy Example:

import Navbar from "./Components/Navbar";

This imports the Navbar component so it can be displayed.

10. Where are Components used in real projects?

Answer:
Components are used to build different sections of a website.

Examples:

Navbar
Footer
Login Form
Registration Form
Product Card
Shopping Cart
Sidebar
Dashboard
Profile Card
Contact Form
⭐ Quick Revision
Question	Easy Answer
What is a Component?	A reusable part of the UI.
Why use Components?	To reuse code and organize the app.
What is a Functional Component?	A JavaScript function that returns JSX.
Why use Functional Components?	They are simple and commonly used.
How do you create a Component?	Create a .jsx file with a function and export it.
How do you use a Component?	Import it and render it with <ComponentName />.
What is import?	Brings a component into a file.
What is export default?	Makes a component available to other files.
Can Components be reused?	Yes, as many times as needed.
Give Component examples.	Navbar, Footer, Login Form, Product Card

*/


