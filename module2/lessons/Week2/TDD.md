---
layout: page
title: Test Driven Development
---

## Learning Goals
* Describe the benefits of TDD
* Practice a TDD workflow
* Define the difference between Unit and Integration tests

## Warm Up

## Why Write Tests

Getting started on a new project, or a new feature in an existing project, can be difficult.  Sometimes it is hard to know where to start, or what functionality you should build.  This is where _design_ comes in; it is easier to start coding when you have an idea of the classes that will make up a project.  One tool we have to help us design our projects is testing.

Testing compels you to make hard decisions early, and upfront. This is scary because you are making decisions in a context you don’t understand.
Testing (especially in the context of Test Driven Development) is a discipline tool that forces you to:  
* be specific about what you are trying to do and   
* stay focused on that objective.  

Having a robust test suite is a way for us to be good to our future selves and our future teammates; and provides us with several advantages:
1. _Refactor with Confidence_: When we decide we want to make a change to how we’ve implemented our code, we can make that change while ensuring that we know the code as a whole still works.
2. _Add New Features with Confidence_: This also allows us to add new features with confidence. Sometimes it’s difficult to know how code we add may impact functionality that we’ve already provided. A test suite tells us when something new we’ve done has broken something else we did before.
3. _Roadmap to Future Collaborators_: It’s very rare that someone will work on code alone - and if they do, they may be doing it over time. Your test suite serves as a roadmap of the codebase; another developer or future-you should be able to skim through the codebase and get a feel for what the code does, and where to find certain things in it.

## What is TDD?

In module 1, we wrote tests for code that we had already written.  Test Driven Development flips that process and asks us to write tests first (for code that does not yet exist!).  In this process, we use our tests to drive how we design our code.  Before we start implementing classes or methods, we determine what we want those classes to look like by writing tests.

Sometimes it can feel a little bit difficult to come up with a test for something before we’ve decided exactly how it’s going to work. That’s fine. However, writing our tests first provides some additional advantages:

1. _Integrates writing tests into our process for creating new code_: This means we don’t have to go back and fill in our test suite later. Testing becomes an integral part of writing code and not a chore to be completed at some later date.
2. _Forces us to think about what we want_: Part of the reason testing is so hard is that we have to make decisions early. Programming is hard. It can be helpful to separate the process of determining what we want the program to do from how we’re going to accomplish it. In some ways, this also allows us to ask the question: 'in my dream world, how would this work?' It permits us to think about what we want rather than what we think will be easiest to implement.
3. _Breaking down problems_: Similar to the point above, making decisions about our code will help us to break a problem down into smaller problems. If we think first of the inputs and outputs for one method, we can then also think about the inputs and outputs for some of our helper methods.
4. _Only write the code you need_: It’s surprisingly easy to get distracted when you’re programming. We can start writing code that we think will help us at some point in the future without really knowing how. We can’t completely ignore this possibility when we have a test, but it can help to tell us when we’ve solved a problem. This also lets us know that we don’t need to write any more code.

## Practice
- review tables that we have in Customers and Orders
- Outline classes and methods we might want
- create project
- write tests for customers
- implement
- write tests for orders
- implement

### Designing

Let's practice some TDD by creating some classes and methods that might be useful for an online store. We want to build classes that will help us with the functionality described below:

```
Little Shop

Our store needs to be able to create Customers.  Each customer should have a name and an address.

Customers will have one or more Orders.  Each order is comprised of a list of Items, that item's price and the quantity ordered.

We want to be able to see the total cost of an order, as well as the total a customer has spent across all their orders.
```

> With a partner, review the requirements above.  Take 10 minutes to brainstorm the classes you would need.  For each class, brainstorm what attributes and methods should be included. 
>
>Designing software solutions is a practice that all developers are constantly working on.  There are many ways to approach the same problem, and design is one of the more difficult aspects of development, so it is normal to find this exercise challenging!  We do not expect you to be a design expert.
>
>After brainstorming, compare what you have to the class outline below.  

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Prompt students to start looking at the class outline after 10 minutes - they do not need to brainstorm a full solution.</p>
</aside>

<details><summary>Class Outline</summary><br/>
    <p align='center'>
        <img src='/assets/images/module2/Week2/littleshopclassoutline.png'>
    </p>
</details>

### Writing our First Test

We are going to start by creating tests for the Item class (because it is one of the simplest 🙂).

>Individually:
>1. Create a new Console Application in Visual Studio, called `LittleShop`.
>2. Add a test project called `LittleShop.Tests`.
>3. Create the tests for a future Item class.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>After giving them some time individually to create tests, put them into groups to review what they came up with.</p>
</aside>

>In small groups, review the tests you each created.  Take turns sharing your screens and asking questions.  Be ready to share out!

<details><summary>Item Tests</summary><br/>
    <p align='center'>
        <img src='/assets/images/module2/Week2/ItemTest.png'>
    </p>
</details>

With this test created, we can see that Visual Studio is already giving us some insight into what we should do first in our implementation.  We see that `Item` is underlined in red - meaning that we don't have an Item class in scope. We are going to use feedback from our tests to determine how to implement the class.

### Implement through Errors

Using TDD, we want to implement **only** the code required to clear a specific error or issue, then address the next issue as it arises.  So, at this point we are not going to implement the entire Item class, we are only going to implement the code needed to pull an Item class into scope.

> With a partner, take 5 minutes to determine the smallest amount of coding we need to do in order to resolve this first issue.

<details><summary>Solution</summary><br/>
<p>The only thing we need to do is create an Item class (and add the project reference).  Doing that will clear the first issue, and presents us with new errors!</p>

<p align='center'>
    <img src='/assets/images/module2/Week2/ItemClassCreated.png'>
</p>
</details>

One of the biggest benefits of TDD is that we _only create the code that we need_.  Following TDD should ensure that we are not creating unnecessary code.  But, to get this benefit, we need to make **small, incremental** changes.  You should repeat the following steps:

1. Identify a single issue
2. Make the smallest change possible to fix that issue
3. Repeat step 1

>With your partner, follow this incremental process to complete the Item class.  Keep track of how many errors/issues you come across and be ready to share out!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Be sure to ask them at what point they started running the test to see what to do next.  It is possible (likely) that students have not run the tests at all - they may rely only on the text editor's feedback to determine what to do next. Following the steps above, they _should_ get to a point where the properties are created but are not assigned to the constructor argument values.</p>
</aside>

<details><summary>Completed Item Class</summary><br/>
<p align='center'>
    <img src='/assets/images/module2/Week2/ItemClassComplete.png'>
</p>
</details>

### TDD the Customer Class

> With a partner:
> 1. Follow the same process as you did for the Item tests above to create the tests for our Customer class.
> 2. When finished, compare your tests to the Solution below.  
> 3. **AFTER** the tests are written, implement the Customer class.

<details><summary>Customer Tests</summary><br/>
    <p align='center'>
        <img src='/assets/images/module2/Week2/CustomerTest.png'>
    </p>
</details>

### TDD the Order Class

Using TDD often shows us how interdependent our classes can be. This forces us to imagine not only what the classes will look like, but also how they will work together.  

> With a partner, create the tests for the Order class.
> As you work, reach out with **any** questions!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>As you review groups' code, keep an eye on issues and bring the group back together to discuss common misunderstandings. When students are ready to move on to the Order, help them brainstorm what the Item List might look like.</p>
</aside>

<details><summary>Order Tests</summary><br/> 
    <p align='center'>
        <img src='/assets/images/module2/Week2/OrderTest.png'>
    </p>
</details>

> With a partner, use your tests to drive the implementation of the Order class.

### TDD the Shop Class

> With a partner, create the tests for the Shop class.
> As you work, reach out with **any** questions!
> The Total Revenue for the shop should be a sum of all order totals.

<details><summary>Shop Tests</summary><br/> 
    <p align='center'>
        <img src='/assets/images/module2/Week2/ShopTest.png'>
    </p>
</details>

> With a partner, use your tests to drive the implementation of the Shop class.


## Types of Tests

When writing a program, you will likely have smaller methods that support each other to create greater functionality.  Often, these might be wrapped in some kind of runner method, or chained together for a grand result.  The tests for these methods are different kinds of tests.  There are four commonly referred to types of tests that build upon each other:

* Programmer-centric:
    * **Unit Test** - tests one component (method) in isolation.
    * **Integration Test** - tests coordinating components (methods), interdependently.  An integration test confirms the function of a method that relies on other methods.
* User-centric:
    * **Feature Test** - a single feature as experienced by a user.
    * **Acceptance Test** - a collection of user functionalities that deliver business value.

When you move into web development projects in later modules, you will rely more on Feature and Acceptance testing.  During modules 1 and 2, we are only using Unit and Integration tests.

> With a partner, review the tests that we have created today.  Identify which are unit tests, and which are integration tests.  Be ready to share out!

## A Note About Testing on the Job

In this lesson, we really focused on writing tests **first**.  We enforced this practice by writing all of the tests for a class before implmenting _any_ code.  On the job, it is not likely that you will write **all** tests for a class prior to implementing anything.  It is more typical that you will write a single test, then implement the code to make that test pass, then write another test, and implement the code to make that new test pass.  You would continue in that pattern until the full functionality is complete.

## Check for Understanding
* In your own words, describe the process of TDD.
* What are the benefits of using TDD?
* How would you describe unit and integration tests to a Mod1 student?