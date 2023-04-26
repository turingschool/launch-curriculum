---
layout: page
title: Week 5 Checks for Understanding
---

1. How would you describe a "breaking change" that occurs in a software version?

1. Can you think of a reason why you would want to use an older version as opposed to the most recent version?

1. How would you describe the process of adding a new table to your database using Entity Framework?

1. Which of the following database changes do you find easiest, adding a table, adding a column, or removing a column?

1. Would you want to create seed data every time your app starts up? Why or why not?

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>The following goat question is an example of many-to-many. I like that it's a bit less intuitive so you have to read the code closely. I'm imagining it could be explained as these are all of the goats allowed to be in that pen. </p>
</aside>

1. Based on this snippet of code from some seed data. How would you describe the relationship between goats and pens? What lets you know that this is the relationship?

    ```C#
    var vincent_van_goat = new Goat {Name = "Vincent Van Goat", Birthday = DateTime.Parse("2008-06-15T13:45:30-07:00").ToUniversalTime()};
    var billy = new Goat {Name = "Billy", Birthday = DateTime.Parse("2021-01-15T11:45:02-07:00").ToUniversalTime()};
    var ramsy = new Goat {Name = "Ramsy", Birthday = DateTime.Parse("2010-01-15T11:45:02-07:00").ToUniversalTime()};

    var zoes_pens = new List<Pen>
        {
            new Pen
        {
            Name = "Green Pen",
            Goats = new List<Goat> {vincent_van_goat, billy}
        },
        new Pen
        {
            Name = "Purple Pen",
            Goats = new List<Goat> {vincent_van_goat, ramsy}
        }
    ```

1. What are some strategies you have found helpful when learning from documentation?

The following two questions we have not covered in class and are meant for you to practice learning on your own!

1. When creating a column to store a string using SQL we would do something like the following where we define the field as a VARCHAR and pass in the max length for that field. There is a way to similarly define the max length of a string using EF. Can you figure out how one does this?

    ```SQL
    CREATE TABLE airlines (
        id INT PRIMARY KEY, 
        airline_name VARCHAR(20), 
        base_city VARCHAR(40));

    ```

1. How would you create a one-to-one relationship using Entity Framework?