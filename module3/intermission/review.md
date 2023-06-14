---
layout: page
title: Oregon Trail Mini Project
---

Let's build a small application to practice what we've learned in Mod2. Read throught the entire spec below before starting!

## The Oregon Trail

1. Create a Console Application in Visual Studio.
    * You can call the project and solution `Caravan`
2. Initialize a git repository in your solution.
    * Add a remote repository on GitHub

### Building our Classes

1. Create a branch called `classes`
2. In your Caravan project, add classes outlined below.
    * Make sure to test your classes!
3. Commit after each class is complete - you should have 3 commits!
4. When all three classes have been built, merge your `classes` branch into your `main` branch.
5. Push your main branch to GitHub.

<section class='call-to-action' markdown='1'>
**Passenger**  
A passenger has a Name, an Age, a Destination, and a Wagon

**Wagon**  
A Wagon has a Name (like 'Old Faithful'), NumWheels, Covered (true/false), and Passengers.

</section>

### Connecting a Database

1. Checkout a new branch called `migrations`
2. Install the following packages:
    * Npgsql.EntityFrameworkCore.PostgreSQL
    * Microsoft.EntityFrameworkCore.Tools
    * EFCore.NamingConventions
3. Add a CaravanContext class
    * It will be helpful to review the [Intro to ORM lesson](/module2/lessons/Week4/IntroToORM) for this!
4. Add a migration to create your database.
5. Run your migration!
6. Commit your work, and merge your `migrations` branch into your `main` branch.

### EF Queries

In your `program.cs` create a caravan summary that will output the following information:

* Count of passengers in each wagon
* A distinct list of destinations
* The average age of all passengers
* The average age of each wagon's passengers
* A list of all passengers and the name of the wagon they are riding in




