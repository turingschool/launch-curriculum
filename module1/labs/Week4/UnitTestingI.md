---
layout: page
title:  Unit Testing I Lab
---

## Lab Objectives
* Practice creating tests for class Properties and Methods.
* Introduce Code Refactoring.

<aside class="instructor-notes">
  <p><strong>Instructor Note</strong><br>Before the lab, prepare groups of 2/3 students and post them in slack.  There will be 3 group discussions (one after each Practice section).</p>
</aside>

## Practice

To reinforce our testing lesson, you are going to implement tests for the [Library System](/module1/labs/Week3/ClassInteraction) that we worked on earlier.  Now that we are using the Visual Studio IDE, we will want to re-create this project as a Visual Studio solution.

1. Create a new Visual Studio Console Application - let's call it `DenverPublicLibrary`
2. Create classes for Book, Branch, and Library:

![DenverLibraryBook](/assets/images/module1/Week4/DenverLibrary_Book.png)

![DenverLibraryBranch](/assets/images/module1/Week4/DenverLibrary_Branch.png)

![DenverLibraryLibrary](/assets/images/module1/Week4/DenverLibrary_Library.png)


**Keep an eye on Slack - we will be re-grouping frequently to discuss our progress**

### Create a Test Project and First Tests

In small groups, spend 20 minutes to create an xUnit test project, called `DenverLibrary.UnitTests`.

Write tests for the methods and properties of the `Book` class.  You should end up with at least **1** test.  

Be prepared to share your test(s).

<aside class="instructor-notes">
  <p><strong>Instructor Note</strong><br>At this point, we want to try to identify any groups or individuals that are having trouble with the procedure of creating a test project.</p>
</aside>

### Create Tests for the Branch Class

Back in your small groups, spend 20 minutes writing tests for the `Branch` class.  Keep in mind that each class should have its own test file!

When finished, you should have a minimum of **3** new tests.  

Be prepared to share your tests, and how you determined what should be tested.

<aside class="instructor-notes">
  <p><strong>Instructor Note</strong><br>During this check-in, we will want to discuss the necessity for creating some setup for certain tests.  For example, some of the Branch tests require some books to be created.</p>
</aside>

### Create Tests for the Library Class

Individually, spend 20 minutes writing tests for the `Library` class.  When finished you should have a minimum of **4** new tests.

Be prepared to share one or more of your tests, and how you decided what tests to write.

<aside class="instructor-notes">
  <p><strong>Instructor Note</strong><br>While this should be an activity that builds on group work, we may see some students struggling to complete this on their own - we want to take note of those students for additional support.</p>
</aside>

## Preparation

As an introduction to our Refactoring lesson next week, take a few minutes to read this [blog post on Refactoring](https://www.bmc.com/blogs/code-refactoring-explained/).  This is meant to be an _introduction_, don't worry if not everything in the post makes total sense - there are some references to other code practices that we haven't touched on yet, but you will still get a good intro to Refactoring.

After reading the post, in your journal reflect on the following questions:
1. What is refactoring?
1. Why is refactoring necessary?
