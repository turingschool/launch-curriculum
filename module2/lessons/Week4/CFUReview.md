---
layout: page
title: Week 4 Check for Understanding
---

With your group, answer each question below.  Spend some time discussing each question _without_ using any resources; use your own recall of the topics covered this week.  If, after you have discussed without resources, your group needs assistance, use the raise hand feature and an instructor will come help!

1. True or False: An ORM is a type of Entity Framework.

1. In the context of Entity Framework, how would you describe what a Migration is?
1. What are some of the benefits of using an ORM?

1. This chunk of code isn't working! Can you find and fix the bug?

    ```C#
    var orderedCNames = names.Where(name => name[0] = 'C')
        .OrderBy(name.Length);
    ```

1. Write the two classes that could be used to create the following ERD. 

    <p align='center'>
    <img src='/assets/images/module2/Week4/artists_songs_ERD.png'>
    </p>

1. Your teammate has come to you for help! They created an application and set everything up using Entity Framework. They created the entity classes and the contexts and then started up the application. They then went to PGAdmin to look at the database tables, and to their surprise the tables are not there! Help your teammate figure out what step they missed and why their tables haven't been created.

1. Use [this](https://replit.com/@launch-team/M2W4-CFU#main.cs) REPL to get additional practice with LINQ queries. These are a bit spicy and will probably take some googling and teamwork!
