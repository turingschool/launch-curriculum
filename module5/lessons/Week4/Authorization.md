---
layout: page
title: Authentication
---

## Learning Goals

## Roles and Claims

As we can see in the ERD of our MessageBoardIdentity application, our database is configured for **roles** and **claims**.  Both can be used for authorization, but what is the difference?

**Claims** - A claim is a piece of information about a user.  It represents attributes or characteristics of the user like their age, email, or other customer data. Claims are flexible because you can define custom claims that could change if the user's characteristics change.

**Roles** - Roles are a way to group users based on common responsibilities within an application. Roles simplify authorization management by allowing you to define permissions and access control at a higher level. For example, you can create roles like "Admin," "Editor," or "User," and then define what each role can or cannot do within the application. 

So... both roles and claims help us control **what a user can do**.  Seems pretty similar; let's take a look at a real-world example to help clarify.

<section class='notes' markdown='1'>
Suppose you're building a web application for a library, and you have two types of users: regular users and librarians. Here's how you might use claims and roles:

**Claims**
In this example, you might have claims like "Age: 25", "Subscription Type: Premium", "Can Borrow Books: Yes", "Can Reserve Books: No", and so on.
* User 1 might have claims like "Age: 30" and "Subscription Type: Basic".
* User 2 might have claims like "Age: 25" and "Subscription Type: Premium".

With claims, you can make authorization decisions based on specific attributes. For instance, you can allow users with the claim "Can Borrow Books: Yes" to access the borrowing feature, and if a user has too many over-due books, you can set the value of that attribute to 'claim' a different level of access.

**Roles**
Roles simplify access control by grouping users together and applying authorization rules to those groups.
In this example, you can define two roles: "User" and "Librarian".
* Users who are librarians are assigned the "Librarian" role.
* Regular users are assigned the "User" role.

With roles, you can control access at a broader level. For instance, you can grant all users with the "Librarian" role access to the administrative section of the library website, which allows them to manage book inventory and user accounts.

</section>
