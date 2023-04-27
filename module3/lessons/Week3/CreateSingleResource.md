---
layout: page
title:  Creating a Single Resource 
---

## Learning Goals
* Diagram the Request/Response cycle with a form submission
* Use a form to create single resources
* Create Tests for #New and #Create actions.

Pull up MVC movies, have everyone check out same branch to get to same page.

## Intro

Forms are everywhere!

Form scavenger hunt.
https://docs.google.com/presentation/d/13uACSxQYbQKuBAfqFiXeWuZVTaEUAdekyPrHOuQnE20/edit?usp=sharing


## Diagramming the Request/Response Cycle

// Maybe demo the fully built out form for the day, have students take note of what routes we navigate to in the browser. Are there requests being sent from something not in the browser?

Breakout groups to try and draw what's happening. 

Then maybe as a group we build a big diagram. I can draw out an example for instructor leading to reference.

## Accessing a Form

### Building our /Movies/New Page

What steps do we need to take so that when I navigate to /Movies/New I see the form?

1. Create a new route in the controller for /Movies/New
2. Create the view


### Building the Form
Ask students to share the code for the form they created in a slack thread. What's similar, what do all forms have? What's Different? Small accessibility chat.

Work in breakout rooms to create the form in their view.

Add here the code required to create the view. 

### Bootstrap

Maybe here introduce a tiny bit of bootstrap to make it look like my nice version.

## Submitting a Form

### Our First POST Route

Based on the diagram, we know our form will send a post request containing the movie we want to create. In our controller let's build that route.

Code here for what gets added to controller. 

### Making a Post Request on Submit

Here we will add the code required for the form to make a POST.

### How will our user know the form worked?

Redirecting to the details page

## Testing a From

What do we need to test here?


### Testing #New

Hopefully this feels familiar, and maybe students can work on this in breakout rooms?

### Testing #Create
This will probably be more difficult. Probably will build this out as a class.




LAB

This will be in the Record Collection application. Maybe start with groups drawing out the diagrams for this application, deciding what fields the form should keep track of. 

Then implementing.