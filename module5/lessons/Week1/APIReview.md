---
layout: page
title: API Review
---

Before we start in on new topics for Mod5, let's review something we learned in Mod4 - implementing API endpoints!

We will be building on a application based on the database you worked with during intermission.

For this exercise, you can assume that your instructors are the client. Any question that you would want to ask your client should be directed to the instructors!

<section class='instructor-notes' markdown='1'>

During this exercise, send out 'client requests' for data that students will need to complete using SQL.  For example:
* List all Bookings for that day (include facility name and member name)
* All bookings for a particular member (provide only the member name, not their id)
* Number of previous bookings for a member
    * broken out by facility.

</section>

## Setup
* Fork and Clone [this starter repo](https://github.com/turingschool-examples/CountryClub)
* `update-database` <- this will take a while! There is a lot of seed data.
* Run the application and make sure you are seeing a list of members when you `GET http://localhost:5295/api/members` in postman

## CRUD Members

One endpoint exists to return a list of all members:
`GET api/members`

<section class='call-to-action' markdown='1'>

Check out a new branch, and create the following endpoints:

* `GET api/members/:id` This should return a single member.
* `POST api/members` This should create a new member.  You will need to send some information in the request body for this one!
* `PUT api/members/:id` This should update a member. You will need to send some information in the request body for this one!
* `DELETE api/members/:id` This should remove a member from the database.
    * 🌶️optional: you could set the member as 'inactive' to preserve data history.  This will require more than an endpoint 😉  


✅Create a Pull Request, and ask one of your cohort-mates to review it before merging.
✅Send a link to your PR to your instructors!

</section>


## Create a Booking

<section class='call-to-action'>

Check out a new branch, and implement the following client request:

"We need an endpoint that will create a new booking."  

✅Create a Pull Request, and ask one of your cohort-mates to review it before merging.  
✅Send a link to your PR to your instructors!  

</section>

## 🌶️ List Daily Bookings

<section class='call-to-action'>

Check out a new branch, and implement the following client request:

"We need endpoints that will list the bookings schedule for today, and all those in the upcoming week."  

✅Create a Pull Request, and ask one of your cohort-mates to review it before merging.  
✅Send a link to your PR to your instructors!  

</section>

## 🌶️🌶️ Member Landing Page

<section class='call-to-action'>

Check out a new branch, and implement the following client request:

"We want our members to be able to create their own bookings with a user-friendly form"

**Important** This request will take much more than creating an endpoint.  We strongly encourage you to outline your design of this feature _before_ starting.  Be sure to consider the following:
* What controller should handle this responsibility?
* Are there database implications to allowing users to create bookings?
* Are there any security risks?

✅Create a Pull Request, and ask one of your cohort-mates to review it before merging.  
✅Send a link to your PR to your instructors!  

</section>