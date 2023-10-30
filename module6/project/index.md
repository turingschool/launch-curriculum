---
layout: page
title: Capstone Extension Project
---

During Mod6 you will (for the most part) be splitting your time between Job Hunt activities and this project!  This project should highlight your ability to research and implement a new technology.

This will be an individual project, and will build off of your Mod 5 Capstone Project.  We will provide you with some general guidelines, but the functionality of your project will be largely up to you!

The project will be split into 5 phases:
* Ideation
* Proof of Concept
* Inception
* Development
* Presentation/Documentation

### Project Requirements
Your project must implement a new technology.  You may choose from the following list:
* Create a Backend API using GraphQL
* Use websockets rather than traditional HTTP/HTTPS
* Deploy your application
* Build a new feature using a new-to-you language or framework
* Other (please discuss with an instructor)

Throughout the project, you will have small group standups.  Your small group will be your project accountabilibuddies.  During each standup you should:
* Review your current project board
* Discuss what you accomplished the previous day
* Outline what you want to accomplish this day
* Discuss any blockers you are experiencing, and help each other form strategies for moving past the blockers
  * These strategies could be additional research, posting in code-help, and/or reaching out to an instructor

## Ideation

During this phase, you should determine which new technology you will be using, and how it will improve your application.

Complete the New Feature Template below - we will discuss your proposal during your **first project checkin**.  If you are planning to use a technology other than one of the list above, reach out to an instructor _before_ your first checkin.

```
## [Feature Name]
### Description
2 - 3 sentences that explains what the new feature will do, or how it will improve your application

### New Technology
* What new technology will you be using?
* List 3 resources that will help you learn this new technology (include links)

### Anticipated Challenges
* What challenges do you forsee in implementing this feature?
* When will you know that you are in unproductive struggle?
* What strategies will you use to move forward?
```

## Proof of Concept

The first 2 weeks of the project will be dedicated to 'Proof of Concept'.  During this time, you will learn as much as you can about your new technology, AND implement it outside of your project.  Only after successful implementation of your proof of concept will you be invited to move forward.

You must demonstrate progress toward this goal at your **second project checkin**.  At that time, your instructor may advise you to choose a new technology, and start the ideation process over.

#### An Example
Let's say you choose to Deploy Your Application as your new technology.  During the 2 week proof-of-concept period, you will need to demonstrate that you can deploy a database-connected .NET web application.  If at your 2nd project checkin you have not demonstrated that you can deploy a single-endpoint web application (without a database), you may be asked to reconsider your new technology.

#### TIL
As part of your project documentation, you will be expected to include a TIL type write-up on your new technology.  This can be added to your TIL repo on GitHub.

## Inception

### Determine MVP

Define the features that will make up your [**Minimum Viable Product**](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1)).  Your MVP may not be your full application as designed in your Project Pitch, but it should include enough features to meet the Project Requirements.

### Wireframes

* Create a high level [user flow diagram](https://bashooka.com/inspiration/33-excellent-user-flow-examples-for-inspiration/) that lists the steps a user will take when interacting with your application.
* Make a list of all of the pages required for your application along with what features will exist on each page.
* For each page, create a [wireframe](https://www.usability.gov/how-to-and-tools/methods/wireframing.html) by sketching out what that user will see when they navigate to that page. Include details such as header text, buttons, drop downs, forms with the specific fields, graphs etc.
* [Figma](https://www.figma.com/wireframe-tool/?utm_source=google&utm_medium=cpc&utm_campaign=17340391121&utm_term=free%20wireframe%20tools&utm_content=600487515776&gclid=CjwKCAjw5P2aBhAlEiwAAdY7dLtWlIVK0NWWHUXbjj8KMAaBN8P1lO16khOpesJ63utNI5b-cF1e2xoClmoQAvD_BwE) is a great tool for wireframing

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

At your **third project checkin** you will present your project board and wireframes.

## Development

During the development phase, you will have a few checkins with an instructor. During these checkins be ready to share:
* The current state of your project board
* A walkthrough of your project in it's current state
* Any blockers you are experiencing.

## Presentation/Documentation

The last full day of the project will be dedicated to documentation, and preparing a presentation for your project.

Your project should include a README that follows [Good Documentation](../lessons/Week2/WritingGoodDocumentation) practices.

You will prepare a project demonstration that should follow this [Demo Guide](./DemoGuide).  A great presentation can be a good addition to the documentation of your project, so we will be recording these presentations for you to use as you see fit!
