---
layout: page
title:  Pre-Work for Creating a Single Resource
---

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>This is a longer prep because it requires independent learning. Try to provide at least 30 minutes.</p>
</aside>


## Independent Learning: HTML Forms

The way that we create resources is with forms! So to prepare for the next lesson, you will do some independent learning about HTML forms.

![Examples of Forms](/assets/images/module3/Week3/Example_Form.png)

**The challenge**: Recreate the above HTML form. We haven't covered forms yet in this course, so you will need to use your Googling skills! The user should be able to input their information, but the submit button shouldn't do anything. If you enter unproductive struggle while implementing one of the input types, skip it and move on to the next!

As you're creating your form, look for answers to the following questions:

1. What HTML elements are useful for building forms?
1. What is the purpose of the `label` HTML element?
1. What are some best practices for form accessibility?


🌶️If you finish early and are looking for an additional challenge, try to update the form to make Name and Email required.


<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Here is one implementation of this form: 
    <h2>Student Registration Form</h2>

<form method="post" action="/testing">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required><br><br>

    <label for="current">Current Student:</label>
    <input type="radio" id="yes" name="current" value="yes" required>
    <label for="yes">Yes</label>
    <input type="radio" id="no" name="current" value="no">
    <label for="no">No</label><br><br>

    <label for="course">Course:</label>
    <select id="course" name="course" required>
        <option value="math">Mathematics</option>
        <option value="science">Science</option>
        <option value="english">English</option>
        <option value="history">History</option>
    </select><br><br>

    <button type="submit">Submit</button>
</form></p>
</aside>


