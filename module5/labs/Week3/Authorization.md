---
layout: page
title: Authentication Lab
---

## Adding Roles to MessageBoard

During the lesson, we added an Admin role to our MessageBoard application.  Now, we are going to add 'Super Users'.  'Super Users should be able to:
* Delete messages that they created.
* Edit messages that they created.
* See a list of all of their messages (active and inactive).

### Plan and Wireframe

In small groups, discuss how we could update our application to include 'Super Users'.  Be sure to touch on the following:
* What updates need to be made to our database?  Will we create new tables? new data?
* What additional views are necessary?
* What updates will be made to our controllers?  Will we need new controllers? new actions?

<section class='instructor-notes' markdown='1'>

You will want to circulate through the rooms to make sure students are on the right track!  At a high level students will need to:
* Add a super user role to the database
* Assign super user to one or more users
* Add the actions and views required for the functionality
* Use the [Authorize] attribute to control who can access those actions
* Use current user information to control who can see the edit and delete links (or some other way to hide that behavior from non-super users)

</section>

Individually, create wireframes that show what a 'Super User' should see and do within the application.

✅Send your wireframes to your instructors!

### Implement

Checkout a new branch and implement the plan you determined in the previous step!

Be sure to reach out for help when you get stuck!

✅Create a PR with your progress or completed code and send a link to that PR to your instructors!

## TIL - Today I Learned

When/If you finish your 'Super User' functionality, put together a [Today I Learned](/module4/lessons/Week4/DependencyInjection#part-3-writing-a-today-i-learned) post about your experience with ASP.NET Core Identity.

✅Send a link to your post to your instructors!