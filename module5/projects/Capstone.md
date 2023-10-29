---
layout: page
title: Capstone Project
---

Before you dive full force into the job-hunt, we want you to start work on a Capstone Project!  This project should highlight what you have learned during Mods 1 - 5, and will be a great way to differentiate your portfolio from your peers.

This will be an individual project, and the product is largely up to you!  We will give you some guidelines to make sure you are demonstrating your learning, but the topic and much of the functionality of your project is all your own.

The project will be split into 4 Phases:
* Ideation
* Inception
* Development
* Presentation/Documentation

### Project Requirements
Your application must include the following:
* Use of an external API
* A database that contains a minimum of 2 related tables (not including Identity tables, if you choose to use Identity)
* CRUD operations for the resources in your database
    * this could be accomplished either through user-facing forms, or API endpoints, or a combination.


## Ideation

### Project Template

Keeping in mind the project requirements; use the following template for your project idea

```
### [Project Name]

### Pitch
2 - 3 sentences that explains what the application will do.

### End User
* Who is this app target towards? Who is your user?

### Problem
* What problem is your app trying to solve? Why is your app different from any of the other 'similar' apps that are out there.

### Features
* What features will your app include?

### External API
* What external API will you use?
    * Make sure you are able to use postman to successfully return data
    * Include a screenshot of postman making a sussessful call - this is a ['proof of concept'](https://www.projectmanager.com/blog/proof-of-concept-definition)
```

✅ Your project pitch is due to your instructors by noon on Monday.

## Inception

### Determine MVP

Define the features that will make up your [**Minimum Viable Product**](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1)).  Your MVP may not be your full application as designed in your Project Pitch, but it should include enough features to meet the Project Requirements.

### Wireframes

* Create a high level [user flow diagram](https://bashooka.com/inspiration/33-excellent-user-flow-examples-for-inspiration/) that lists the steps a user will take when interacting with your application.
* Make a list of all of the pages required for your application along with what features will exist on each page.
* For each page, create a [wireframe](https://www.usability.gov/how-to-and-tools/methods/wireframing.html) by sketching out what that user will see when they navigate to that page. Include details such as header text, buttons, drop downs, forms with the specific fields, graphs etc.
* [Figma](https://www.figma.com/wireframe-tool/?utm_source=google&utm_medium=cpc&utm_campaign=17340391121&utm_term=free%20wireframe%20tools&utm_content=600487515776&gclid=CjwKCAjw5P2aBhAlEiwAAdY7dLtWlIVK0NWWHUXbjj8KMAaBN8P1lO16khOpesJ63utNI5b-cF1e2xoClmoQAvD_BwE) is a great tool for wireframing

✅Deliverable: Send a link to your instructors with your wireframes.

### User Stories

* Create User Stories based on your Wireframes
    * Each wireframe may have multiple user stories.
* An example user story is:
    - Feature: User can create a muffin
    - User story: "As a user, when I visit the muffins index page, I want to click the `new muffin` button so that I can create a new muffin in the application"
    - Wireframe: `<link to wireframe>`
    - Subtasks:
        1. Ensure muffins table is configured with required columns
        3. Route for muffins index is /muffins
        3. Route for new muffin form is /muffins/new
        4. User should be redirected to /muffins after successful muffin creation
        5. If user is not able to create a muffin, user should see a message that reads `Oops something went wrong!`

### Project Board

* Create a project board using Github Projects
* Translate each user story into a card on your project board

✅Deliverable: Send the link to your project board to your instructors.