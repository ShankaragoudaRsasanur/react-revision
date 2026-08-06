/*
  What are Props?
 Why do we use Props?
 Where are Props used?
 Parent Component
 Child Component
 How to pass data
 Real project example
 Notes App implementation



1. What are Props?

Definition:

Props (Properties) are used to pass data from a Parent Component to a Child Component.


2. Why do we use Props?

Without props, every component would show the same fixed data.

With props, we can make components reusable by showing different data.



What happens WITHOUT Props?

Imagine we want to show the title "Notes App".

Navbar.jsx
function Navbar() {
  return (
    <nav>
      <h2>Notes App</h2>
    </nav>
  );
}

export default Navbar;
App.jsx
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
Output
Notes App

 It works.

 Now suppose tomorrow your manager says:

"We also need Home, About, and Contact pages."

Now you write:

<Navbar />
<Navbar />
<Navbar />

Output
Notes App
Notes App
Notes App

Problem:

We wanted:

Home
About
Contact

But every Navbar shows the same text because the title is hardcoded.

Interview Questions (10)
1. What are Props?

Answer: Props are used to pass data from a parent component to a child component.

2. What is the full form of Props?

Answer: Properties.

3. Why do we use Props?

Answer: We use props to send data and make components reusable.

4. Can a child component send props to a parent?

Answer: No. Props flow from parent to child.

5. Which component sends props?

Answer: Parent component.

6. Which component receives props?

Answer: Child component.

7. Are props read-only?

Answer: Yes. A child component should not change the props it receives.

8. How do you pass props?

Answer:

<Navbar title="My Notes App" />
9. How do you receive props?

Answer:

function Navbar(props) {
  return <h2>{props.title}</h2>;
}
10. Where are props used in real projects?

Answer: Props are used to pass product details, user information, employee data, student data, blog content, and many other types of data between components.

💼 HR Question

Q: Why are props important in React?

Answer:

Props are important because they help us pass data between components and make components reusable. This keeps the code clean and easy to maintain.




*/