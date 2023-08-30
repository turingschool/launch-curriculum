---
layout: page
title: Inception
---

An Inception is a process used by many companies in the Software Industry to design a solution to a problem. It is tempting to take a problem and immediately start coding, however this will often result in an incoherent solution, or even worse, a solution to the _wrong_ problem.

Usually this process takes several days, weeks, or even months, involving many stakeholders such as the client(s), team leads, CEOs, operations, etc. We will be doing a simplified version of this process in a few hours between your team and your project manager.

### Process

Each of the following meetings has a purpose: Brainstorm, Decide, or Solve. Everyone should try hard to stick to that purpose.

* Brainstorm - Explore who the end user(s) is(are) (personas), what is possible (ideas), what can go wrong (risks), what is not possible, debate, share counterpoints etc.
* Decide - Follows brainstorming and requires the team to put aside their pride and make decisions for the sake of the team.
* Solve - Follows deciding. This is the execution of what was decided.

Conflict and tension tends to arise in groups when there are differing expectations of these meetings. Some want to debate and explore different outcomes while others see that as a waste of time and want to make a decision. The reality is both are important for making sound decisions and the following is a template to do both and get your project off to a strong start.

#### Tools

* [Miro](https://miro.com/) is an online team collaboration board. It will be a space where your team can brainstorm using sticky notes, take notes, wireframe, etc. _Note: There is a Slack integration, but please do NOT attempt to add it to Slack. Staff will deny your request._

### Problem Definition and Idea Sharing (Brainstorm)
* **Objectives:**
    * Define the problem you are solving in 2-3 sentences. The solution you come up with later should solve the problem directly.
    * Discuss and debate the technical solution to the problem, thinking through the most important features this application would need in order to solve the problem.
* **Instructions**
    * The format of this meeting is an open discussion about the objectives defined above.
    * Don’t spend more than 5 minutes defining the problem.
    * Don’t spend more than 5 minutes on any one feature. Remember, this is just a brainstorming session.
    * Do not eliminate any ideas during this meeting.
    * No decisions are made during this meeting
    * Allow everyone’s voice to be heard and make sure no one is dominating the discussion.
    * Be creative. Share bad ideas as well as good. Sometimes bad ideas lead to good ones.
    * Use the guiding questions below if you get stuck.
* Guiding Questions
    * What would set you apart from the other groups?
    * What intimidates you but would be amazing to pull off?
    * What feature choices would spark interesting discussions during job interviews?
    * Would you use this product? If not, what is it missing?

### Feature Dump (Brainstorm)
* **Objectives**
    * Write out as many potential features as possible
* **Instructions**
    * This is an **individual** activity
    * Each person should write out features on Sticky Notes
    * Only 1 feature per sticky note
    * Features should describe user interaction in 3-5 words max.
    * **If you cannot fit a feature on a single sticky note you are doing it wrong. You are probably providing implementation details. These feature descriptions should describe user interaction and should not be tied to implementing the feature in a specific way**
    * All potential features of the app should be included (we will define the MVP later in the  process)
    * Get creative with potential features. There are no wrong answers.

### Feature Sharing/Elimination of Duplicates (Decide)

* **Objectives**
    * Share what came out of the feature dump
    * Group related ideas into broad categories (EPICs)
    * Eliminate duplicate ideas
* **Instructions**
  * You will be organizing these thoughts as a group in the project's Miro board
  * Each person should present their features one at a time, giving a *brief* description of what that feature is, so it is clear for the whole group.
  * After you have described the feature move the sticky note into a category. If it doesn't fit in an existing category, make one.
  * As each person takes a turn you will notice that some of the features will be duplicates of previously shared features. If this is the case, simple delete that sticky note. _Don't spend time describing a feature if it is a duplicate._
  * Come up with a name for each of the categories. These will be referred to as [EPICs](https://www.yodiz.com/blog/what-is-epic-in-agile-methodology-definition-and-template-of-epic/) and will be a way to organize your features in your project management tool.

### Feature Prioritization and MVP Definition (Decide)

* **Objectives**
    * Define the features that will make up your [**Minimum Viable Product**](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1))
* **Instructions (recommended)**
    * Use labels/colors in your miro board to determine MVP/extension/unsure stories.
    * If you are unsure about a feature, table the feature and come back to it at the end.
    * Repeat this process until you have gone through all of the stories.
    * Once you are finished, you have your MVP definition.
    * Whatever you think your MVP is... you can probably cut it in half
    ✅ Check in with your project manager to confirm your MVP!


### Wireframing (Solve)

* **Objectives**
    * Decide how users will interact with your application
* **Instructions (required)**
    * Create a high level [user flow diagram](https://bashooka.com/inspiration/33-excellent-user-flow-examples-for-inspiration/) that lists the steps a user will take when interacting with your application.
    * Make a list of all of the pages required for your application along with what features will exist on each page.
    * For each page, create a [wireframe](https://www.usability.gov/how-to-and-tools/methods/wireframing.html) by sketching out what that user will see when they navigate to that page. Include details such as header text, buttons, drop downs, forms with the specific fields, graphs etc.
    * Do a few pages together as a group, then divide and conquer the remaining pages.
    * [Figma](https://www.figma.com/wireframe-tool/?utm_source=google&utm_medium=cpc&utm_campaign=17340391121&utm_term=free%20wireframe%20tools&utm_content=600487515776&gclid=CjwKCAjw5P2aBhAlEiwAAdY7dLtWlIVK0NWWHUXbjj8KMAaBN8P1lO16khOpesJ63utNI5b-cF1e2xoClmoQAvD_BwE) is a great tool for wireframing

✅Deliverable: Send a link to your project manager with your wireframes.

### Story Writing (Solve)

* **Objectives**
    * Document technical requirements for the development team
* **Instructions (required)**
    * Create a project board using Github Projects
    * Translate each of the features that were written on sticky notes during the feature dump exercise into a [user story](https://www.atlassian.com/agile/project-management/user-stories) in your project management tool.
    * Every user story should be written from the perspective of the end user and should follow this format:  
        * `As a User, when I visit ___, I want to ____ so that I can ____.`
    * For every user story include a list of subtasks required to complete the user story. This includes developer chores such as database migrations to add tables and columns, creating mock data, etc.
    * For every user story, include the wire frame(s) from the associate page(s)
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

✅Deliverable: send a link to your project manager with all your user stories.