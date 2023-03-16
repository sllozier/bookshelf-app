# Bookshelf.App.Solution.Classes

## Overview

This time around, you've been assigned to build out an entire web app: Bookshelf helps users keep track of all the books they've read and all the books they might want to read.

This assessment will test your ability to design classes that show a solid understanding of OOP best practices and build a small project given high level descriptions.

Refer to Canvas for more information as well as the rubric.

## General Code

Design choices are explained and documented in comments.
DOM elements are styled via CSS.

## Add Books

Users can enter book title, author, subjects, language and add new Books.
The Bookshelf instance is updated accordingly.
The Bookshelf instance renders Books accurately.

## Navigation

A Navigation Bar is included in the web app with links to other parts of the site e.g. "About", "Contact".
No real information is required. Dummy data or lorum ipsum is fine!

## Comments

Users can leave comments no longer than 280 characters on any Book they want.
Users can press a "Comment" button which reveals a `text` input element.
Users can then type their comment and click "send" to add it to the Book.
Comments should be represented by HTML elements on the page.
The Book and Bookshelf instances are updated accordingly.
The comments persist even if a search or sort rerenders the Books.
Data can be stored locally or in state memory. A database is not required.

## Alternate Assessment Requirements

Note: do not complete any of the following unless assigned by your instructional team

If you did not pass the TDD specs for the Milestone Assessment, you must demonstrate your understanding of that concept by completing any of the following assigned to you by your instructional team: during this project. You T

TDD 1 Alternate: add a function to your application that uses a `for` loop to count the number of books on the bookshelf and have a visible counter on the screen
TDD 2 Alternate: `reduce` is used to implement a counter on the page of the number of non-English books in the collection
TDD 3 Alternate: there is a DOM element that indicates the average number of subjects per Book in the Bookshelf.
TDD 4 Alternate: add two properties to the Book class: `numPages` and `category`. Randomly generate a number of pages for each book. If the book has more than 100 pages, its category is "novel". Otherwise, its category is "short story".
TDD 5 Alternate: use the `filter` method on search terms so that the word "THE" doesn't affect any search term outcomes

## Optional: Registration

Users should not be able to access the book data unless they have registered a new username and password combination.
After registering, users should be redirected to the Bookshelf Web App where they can see the book data, add books to the bookshelf, etc.
These credentials do not need to be stored in a database and encrypted for sign in later. This is just an exercise to get us closer to real world web applications.