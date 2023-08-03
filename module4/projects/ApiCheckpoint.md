---
layout: page
title: API Checkpoint
---

# Take Home Challenge

A **Take-Home Challenge** is a common part of the interview process for applicants, especially beginner developers, applying for their first job in programming or software development. It is a practical task or project that will help the employer assess a candidate's technical skills, problem-solving abilities, and coding proficiency.

Typically, the take-home challenge involves a specific assignment related to the position or the company's domain. The candidate is given a set of instructions, requirements, and sometimes sample data to work with. They are expected to complete the task within a specified time frame, which could range from a few days to a week, depending on the complexity of the challenge.

Once the employer reviews the submission, they typically schedule a follow-up interview to discuss the candidate's solution, reasoning, and design choices.

## The Challenge

### Objective:
The purpose of this take-home challenge is to assess your ability to design, implement, and test a RESTful API in C#/.NET that manages a collection of products associated with a "Merchant" resource.

### Task Description:
You are provided with an existing REST API for a **Merchant** resource, and your task is to build a C#/.NET API to manage a **Products** resource, where each product belongs to a specific merchant. The API should support basic CRUD operations (Create, Read, Update, Delete) for Products. Additionally, you need to implement XXXX statistics endpoints that provide valuable insights into the product collection as a whole, and for each merchant.

### Setup

< to-do: starter repo >

### Requirements

<section class='call-to-action' markdown='1'>

**1. Product Model**

The Product model should have the following properties: 
* ProductId
* Name, Description
* Category
* Price 
* StockQuantity
* ReleaseDate
* MerchantId (foreign key).

</section>

<section class='call-to-action' markdown='1'>

**2. CRUD Endpoints**

Implement API endpoints for the following CRUD operations:
* Create a new product associated with a specific merchant
* Retrieve a specific product by its primary key
* Update an existing product
* Delete a product by its primary key

</section>

<section class='call-to-action' markdown='1'>

**3. Statistics Endpoints**

Implement API endpoints for the following statistics:
* Count of Products by Category (regardless of Merchant)
* Average Price of Products for each merchant
* Newest Product Release Date for each Merchant

</section>

<section class='instructor-note' markdown='1'>

The next task will be difficult for most students to complete.  We want them to have the experience of going in to an interview with not a _whole_ challenge done.  This way we can see how they handle that situation.  Do they reach out? Do they clam up? We can then coach them on this scenario.

</section>

<section class='call-to-action' markdown='1'>

**4. Error Handling**

Properly handle and return appropriate HTTP status codes and error messages for various scenarios, such as invalid inputs or non-existing resources.

</section>

### Deadline and Submission

<section class='instructor-note' markdown='1'>

Depending on the calendar, the deadline may vary, but it should be before student's scheduled interviews!

</section>

You instructors will post a deadline for submissions in slack.

Submit your challenge by:
* Creating a PR from your main branch to the turingschool-examples main branch.
* Include your Name in your PR title.
* Include an overview of what you were able accomplish in the PR description.

### Interview Time!

The final step of a take-home challenge is an interview!  You will have an interview scheduled with an instructor and during that interview you will be asked questions related to APIs, Coding, and your work on the Takehome Challenge.  You *will* be asked the following questions, and you *may* be asked additional questions.

1. What is a REST API, and how does it differ from other types of APIs?
2. How did you handle different HTTP methods (GET, POST, PUT, DELETE) in your C#/.NET API, and why is this important for RESTful design?
5. Explain the role of HTTP request bodies in REST APIs, and mention any specific C#/.NET libraries or methods you used to work with request bodies in your project.

<section class='instructor-note' markdown='1'>

<!-- Day 2 - Interview -->

We would not all these questions with students, but my thought is that as part of this exercise, we can do a mock interview. Maybe we can make the rubric a bit more flexible - like would they have made it to the next round of the interview.  I think we can internally set a metric of completeness and their ability to answer or gracefully exit the question portion.


1. What is a REST API, and how does it differ from other types of APIs?
2. How did you handle different HTTP methods (GET, POST, PUT, DELETE) in your C#/.NET API, and why is this important for RESTful design?
3. How did you utilize the built-in features of the .NET framework to return common status codes and handle success or failure responses in your implementation?
4. How did you handle input validation and error handling in your C#/.NET API? Can you provide an example of how an invalid request is handled using built-in mechanisms or custom logic?
5. Explain the role of HTTP request bodies in REST APIs, and mention any specific C#/.NET libraries or methods you used to work with request bodies in your project.
6. More code review!

</section>