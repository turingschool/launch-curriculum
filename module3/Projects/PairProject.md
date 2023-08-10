---
layout: page
title: Mod3 Pair Project
---

# Coffee Shop

Before we dive into our final project, we wanted to give you a little challenge 🌶️

This project will be more difficult than the project coming up next week for two main reasons:
* This project will be started from scratch
* This will be your first opportunity to dive into coding with a partner!

## Kick Off

[Learning to Pair](https://docs.google.com/presentation/d/1iSdA31sgik4ejeB95R4t2kvmh1p0rANC7VAfjc2Wgmo/edit#slide=id.gc6f90357f_0_0)

### Objectives
* Practice what we have learned about MVC applications
* Work with a partner
    * DTR
    * Collaborative Git

This project will help you practice the MVC skills we have learned, and push you to grow your collaborative skills. Each section of the project builds on the previous section; so, you will need to [pair program](https://www.geeksforgeeks.org/pair-programming/) with your partner.

Before starting the project, read through the requirements (ask an instructor if you need any clarification).  

As you work, it will be helpful to review the [Git for Pairs Lesson](/module2/lessons/Week2/GitForPairs).

## DTR
Before diving in to code, take 30 minutes to complete a [Define the Relationship](https://docs.google.com/document/d/1XZ48E9wjBKLHuSO_9mnJ5hYkfLfirfiycThwWgntHjY/edit) document with your partner.

✅Send a copy of your DTR to your instructors!

## Set Up your MVC Application

In order to get started with the project

1. One partner will fork this [starter repo](https://github.com/turingschool-examples/Launch_CoffeeShop)
2. Add your partner as a collaborator
3. The other partner will accept the collaboration invitation
4. Both partners will clone the forked repository
5. ✅Send a link to your github repository to your instructors

From here on, you should not work on the `main` branch directly. Keep an eye on the notes to ensure you are creating and working on the appropriate branches!

## CRUD for an Item

Our coffeeshop is going to sell 'Items'.  

We want to use migrations to create and update our database (instead of creating an updating tables directly in pgAdmin); this is often referred to as a code-first approach. 

1. In the database, we should store the following information about an Item:
    * Name
    * Price in Cents
2. The Coffeeshop application should satisfy the following user stories. Each user story should be tested.
    * Make note of the route structure - this is different than what we have seen before, but we know you can handle it!

For the first three user stories, use driver/navigator programming;  Switch roles for each user story (driver becomes navigator, navigator becomes driver).

Each user story should have it's own branch.  Use PRs to merge branches into `main`.

```
As a User
When I visit "/items"
Then I see a list of all items in the database
```

```
As a User
When I visit "/items/details/5"
Then I see the details of the item with ID 5
    Name of the Item
    Price in Dollars
```

```
As a User
When I visit "/items/details/5"
Then I see a button to delete the item
    And the item is removed from the database when the button is clicked
    And I am redirected to "/items"
```

✅Send a note to your project manager to give them a status update!

Split the following 2 user stories.  Each partner will work on one of the stories and each story should have it's own branch.  Make sure that you are using Pull Requests to merge your branches into the `main` branch.

```
As a User
When I visit "/items/new"
Then I see a form to create a new item
    And a new Item is created when I submit the form
    And I am redirected to "/items" 
```

```
As a User
When I visit "/items/edit/5"
Then I see a form pre-populated with the item's current state
    And the Item details are updated when I submit the form
    And I am redirected to "items/details/5"
```

✅Send a note to your project manager to give them a status update!

## Customers and Orders

For this section, you and your partner can choose how you would like to work - pair programming, or splitting the user stories.

Items will be sold to Customers in an Order.
* An order has many Items
* A Customer has many Orders
* An Order belongs to a Customer

In the database:  
1. Store the following data about a Customer:
    * Name
    * Email Address
2. Store the following data about an Order:
    * CustomerID
    * Date Created
3. Update an item to include:
    * OrderID

Again, we want to make these changes with **migrations** and not directly from pgAdmin.

##  CRUD for a Customer

```
As a User
When I visit "/customers"
Then I see a list of all customers in the database
```

```
As a User
When I visit "/customers/new"
Then I see a form to create a new customer
    And a new customer is created when I submit the form
    And I am redirected to "/customers" 
```

✅Send a note to your project manager to give them a status update!

```
🌶️ As a User
When I visit "/customers/details/5"
Then I see the details of the customer with ID 5
    Name of the customer
    Total dollars spent by the customer
    List of all items the customer has ordered
```

```
🌶️ As a User
When I visit "/customers/edit/5"
Then I see a form pre-populated with the customer's current state
    And the customer details are updated when I submit the form
    And I am redirected to "customers/5"
```

```
🌶️ As a User
When I visit "/customers/details/5"
If the customer has no orders
    Then I see a button to delete the customer
        And the customer is removed from the database when the button is clicked
        And I am redirected to "/customers"
If the customer has orders
    Then I do not see a button to delete the customer
```

✅Send a note to your project manager to give them a status update!

## 🌶️🌶️ CRUD for an Order

1. Create User Stories for the CRUD actions for Orders.
    * An order can only be created for an existing user.
    * When an item is added to an order, the item should be removed from the item index page (it is no longer available for sale)
    * If an order is deleted, the items it contained should now be back on the index page (they are again available)
2. ✅Send your user stories to your project manager for approval.
3. Implement your user stories.

✅Send a note to your project manager to give them a status update!
