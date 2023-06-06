---
layout: page
title: Mod 2 Review
---

Today, we are going to build a small application to practice what we've learned in Mod2! Read throught the entire spec below before starting!

## The Daily Planet

1. Create a Console Application in Visual Studio.
    * You can call the project and solution `Newspaper`
2. Initialize a git repository in your solution.
    * Add a remote repository on GitHub
3. ✅ Send a link to your repository to your instructors!

### Building our Classes

1. Create a branch called `classes`
2. In your Newspaper project, add classes outlined below.
    * Make sure to test your classes!
3. Commit after each class is complete - you should have 3 commits!
4. When all three classes have been built, merge your `classes` branch into your `main` branch.
5. ✅Push your main branch to GitHub, and send a note to your instructors that you have finished the classes!

<section class='call-to-action' markdown='1'>
**Reporter**  
A reporter has a Name, a Speciality (like Politics, Sports, or Arts) and Articles.

**Article**  
An Article has a Title, Content, a Reporter and an Issue.

**Issue**  
An Issue has a Date, and Articles.
</section>

### Connecting a Database

1. Create an ERD for our three classes
    * How does each class relate to each other?
    * Where should Primary and Foreign keys be assigned?
2. Checkout a new branch called `migrations`
3. Install the following packages:
    * Npgsql.EntityFrameworkCore.PostgreSQL
    * Microsoft.EntityFrameworkCore.Tools
    * EFCore.NamingConventions
4. Add a NewspaperContext class
    * It will be helpful to review the [Intro to ORM lesson](/module2/lessons/Week4/IntroToORM) for this!
6. Add a migration to create your database.
7. Run your migration!
8. Commit your work, and merge your `migrations` branch into your `main` branch.
9. ✅Push your main branch to GitHub, and send a note to your instructors that you have finished the database setup!

### Update Classes

1. Create a branch called `statistics`
2. In your Newspaper project, update your classes to include the methods below.
4. When all three methods have been built, merge your `statistics` branch into your `main` branch.
5. ✅Push your main branch to GitHub, and send a note to your instructors that you have finished the statistics!

<section class='call-to-action' markdown='1'>
Add the following methods to your Issue class:
* ArticleCount() - returns the number of articles in the issue
* ReporterCount() - returns the number of reporters who wrote articles for the issue (unique!)
* ReporterNames() - returns a list of reporter names represented in the issue (unique!)
</section>

### 🌶️ SQL Queries

<section class='call-to-action' markdown='1'>
Open pgAdmin and write queries for the following:
* Return all issues and their articles
* Return the average number of issues per article
* Return the average number of issues per article for a specific reporter
</section>


✅Send a slack message to your instructors with each of the three queries above.


