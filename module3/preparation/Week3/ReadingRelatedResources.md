---
layout: page
title: Reading Related Resources Preparation
---

## Pre-Work for [Reading Related Resources](/module3/lessons/Week3/ReadingRelatedResources)

In our [RESTful Routes](/module3/lessons/Week2/RestfulRoutes.md) lesson, we learned that in order to indicate which resource we are trying to include on a specic show page we need to include that resource's id.  As in `/movies/12` which will return the show page for the movie with an id of 12.

Now, we need to expand our understanding of routing to access _related_ resources. 

Let's imagine we are creating an application for managing pet adoptions.  When a pet is adopted, it belongs to its owner, and an owner can have many pets. Using the table below, brainstorm what the routes might look like for owner and pet index and show pages.

| Path | HTTP Method | Purpose |
|--|--|--|
| /owners | GET | Return all owners |
| /owners/:id | GET | Return a single owner |
| | GET | Return all pets of an owner |
| | GET | Return a single pet of an owner |

**After** you have brainstormed the routes above, read [this post](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/).  

<section class='call-to-action' markdown='1'>

Send a slack message to your instructors answering the following questions:
1. What routes did you come up with during our initial brainstorm?
2. After reading the blog post, what changes would you make to those routes?

</section>