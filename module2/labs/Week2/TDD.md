---
layout: page
title: TDD Lab
---

## Lab Objectives
- Practice class brainstorming
- Use TDD to implement Library classes

### Brainstorm Classes

In small groups, review the requirements below.  Brainstorm the classes and their attributes and methods that we would need to implement the functionality.

```
Library

We need to be able to create a library that has books and patrons.

A Patron should have a name and phone number.

A Book should have a title, author, and a patron (the patron will be null if the book is not checked out).

The library should be able to tell us which books are NOT checked out.

Stretch Goal: 
We would like the library to tell us which books a given patron has checked out.
```

Be ready to share your brainstorm!  As a cohort, we will develop one class diagram that we will use to build our tests.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Ideally, students will come up with classes for Library, Book, and Patron.</p>
</aside>

### Build Tests

**Individually**
1. Create a new Console Application called `Library`.
2. Create the tests for the class diagram we created above.

**In Small Groups**
3. Review the tests that each member created.  Ask questions, and reach out to your instructor for help, if needed!


### Implement Classes

Before we implement these classes, let's brainstorm some ideas for how to approach writing these classes. 


<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Ask what class they would build first. Suggest the idea of commenting out the tests besides the one you are working on.</p>
</aside>

**Individually**
1. Implement the classes, using your tests to guide the implementation.

**In Small Groups**
2. Review your implemented classes - remember that there are multiple ways to accomplish the same goals!