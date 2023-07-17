---
layout: page
title: Build an API - Lab
---

## Lab Objectives
* Practice building a RESTful CRUD API
* Use our knowledge of MVC and APIs to add a related resource

Today, we will be working individually to reinforce our own understanding of the components of an API.  You _should_ reach out to other students and instructors with questions - we can all help each other learn!

By the end of this Lab, you will have a RESTful API that will allow us to CRUD resources for a database with the following ERD:

![Adoptiverse ERD](/assets/images/module4/week2/adoptdontshop_ERD.png)

## Setup

* Fork and clone this [Starter Repo](https://github.com/turingschool-examples/AdoptiverseStarter).
* Open your forked repository in Visual Studio.
* Build the Solution
    * let an instructor know if you run into any issues!

## CRUD a Single Resource

<section class='call-to-action' markdown='1'>

Create the API endpoints necessary to CRUD a `Shelter` object from the ERD above. Make sure to tests your endpoints!!

| Verb | Path | Outcome | Status Code |
|---|---|---|---|
| GET | api/shelters | Returns JSON list of all shelters | 200 |
| GET | api/shelters/:id | Returns JSON representations of a shelter | 200 |
| POST | api/shelters | Creates a new shelter, and returns JSON of the created shelter | 201 |
| PUT | api/shelters/:id | Updates the shelter | 204 |
| DELETE | api/shelters/:id | Removes the shelter | 204 |

✅ When you have these endpoints created, do a code-review with at least one other student.  Send a message to your instructor with one interesting thing you discovered during your code review, and who you reviewed with.

</section>

## 🌶️ CRUD a Related Resource

<section class='call-to-action' markdown='1'>

Now, you will create the API endpoints necessary to CRUD a `Pet` object from the ERD above.

1. Determine the endpoints you will create, make sure to think about the verb, path, and status code for each outcome!

✅ Send a slack message to your instructors with the endpoints you determine - they will give you the ok to move forward, and/or provide some updates to the endpoints.

2. Create the endpoints, being sure to write tests and verify with Postman! It will be helpful to look back at your MVC applications for a refresher 😉

✅ Make sure all your code is committed and pushed to github, then send a link to your forked repository to your instructors!

</section>
