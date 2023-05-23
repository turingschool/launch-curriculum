---
layout: page
title:  Creating a Single Resource 
---

## Learning Goals
* Practice destruction of single and related resources
* Test deletion of single and related resources
* Update an app for a more polished user experience


Start by drawing a picture of what Delete would look like. Maybe this is the prep?


Adding to the controller

Adding to the model

Students work in their pair to write tests, plural should be at least two.


// Making the movies look nicer with CSS, 


<!-- Instructor note -->
if (movie == null)
    {
        return HttpNotFound();
    }





In pairs, students work to implement deletion for multiple resources. 

Question to talk over as a class:
* What did you name your path?
* When you delete a movie what happens to its associated reviews?
* How do you test that is what happens?





Then talk about cascading deletion and how to test it and how to check that it works in pg admin: https://learn.microsoft.com/en-us/ef/core/saving/cascade-delete







For the lab: Brainstorm ways to make MVC movies more user friendy and then implement a link from this main table to the details and edit pages. And maybe a link to New somewhere on the main page. And maybe we figure out what to do with the nav bar at the top?

* No typing in URLs, and no typing the back button

Maybe we make a list of things in slack and instructor can put spicy peppers next to the most complicated level ups. 

Spicy: In the title it says - MVC Movies. It's supposed to have the page before that. For example, Reviews - MVCMovie. Can you figure out what is setting that?
Spicy: 

Presentations:

Maybe call on each group to give a short demo/presentation of one thing they improved. 

What is the feature request? (draw it out!)
What was your process for figuring out how to fix it? Were there any things you tried along the way?
What was your final result?

Everyone push their code to github, have they cloned MVC movies? I think yes.
