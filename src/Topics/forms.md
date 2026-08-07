

Today we'll make your Notes App interactive.

Until now:

User Clicks Button
        ↓
Fixed Note Appears

After today's lesson:

User Types Note
        ↓
React Stores It
        ↓
User Clicks Button
        ↓
The Typed Note Appears

Now your app starts behaving like a real Notes App.

 Day 7 – Forms + onChange + value
1️ What is a Form?
Definition

A Form is used to collect information from the user.

Examples
Login Form
Registration Form
Contact Form
Search Box
Notes App
🏢 Real Company Example

Instagram

Username
Password

[ Login ]

Amazon

Search Products

[ Search ]

Our Notes App

Write Note

[ Add Note ]

These are all forms.

2️⃣ What is an Input?

An input allows the user to type information.

Example:

<input type="text" />

Output

____________________
|                  |
--------------------

3️..Why Do We Need an Input?
Without an input:
Today I Learned React
This is fixed text.The user cannot change it.

But we want the user to type:
Learning React is Easy So we need an input box.



What is onChange?
Definition

onChange is a React event that runs every time the value of an input changes.

Easy Definition

Whenever the user types something, onChange runs.