---
layout: page
title: Intro to Databases
---

## Learning Goals
- Describe a database and its uses in various applications
- Define relational data
- Create a Database with Postgresql and PgAdmin

## Warmup
Let's think about some differences between our Message Logger application, and an application like Instagram.  Instagram allows users to log in on multiple devices, see other user's posts, and track how many likes a post receives.  

With a partner, brainstorm how instagram is able to do this - how does instagram 'remember' users and their posts?  how does instagram keep track of who has liked a post?

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>We want to help guide students to think about the idea of storage as a specific feature of the application - not just an assumption of all applications.</p>
</aside>

## Data, Information, and Databases

Nearly all applications require some data and information to be useful to its users, and many applications need to store data for future use.

**Data** refers to a collection of facts: `"Kat", "Davis", 22, "Denver, CO"`.  Data on its own is not super useful to consumers - there is no context for a piece of data.

When we give context to data, we create **information**: `firstName: "Kat", lastName: "Davis", age: 22, birthCity: "Denver, CO"`.

![](/assets/images/module2/Week1/data_v_information.jpg)

As developers, what we focus on with data and information is how to store information in a **Database** so that it can be used later.  Databases allow us to Create, Read (review), Update and Destroy (delete) records.

There are two main types of databases - table (SQL), and non-table (noSQL).  At turing, we are going to focus mainly on SQL databases - our data will be organized into tables, and will be easy to scale.

<img src="/assets/images/module2/Week1/DatabaseDiagram.png" alt="Simple Diagram of data flow through a database" style="width: 90%">

## Data Tables and Relationships

<section class="call-to-action">
    <h3> With a partner, review the table of data below. </h3>
    <p>This table has all of the inforamation needed for a shop to fulfill orders.</p>
    <ul>
        <li>Identify any duplicated data - discuss why it must be duplicated in this table.</li>  
        <li>Brainstorm how you might reduce duplication without losing any data.  For this brainstorming, it might help to think about the _relationships_ that exist in the data.</li>
        <ul>
            <li>An example of a data relationship could be a person and their pets - the person has many pets, and each pet belongs to that person.</li>
        </ul>
    </ul>
</section> 

[![](/assets/images/module2/Week1/OrderDataSingleTable.png)](https://docs.google.com/spreadsheets/d/1KX3EhldBiQAVxXoQpQfzveHbhiNerxmmmkMufFe4ZrM/edit?usp=sharing)

----------------------------

As noted before, we have all of the data that we need to fulfill orders for this shop, but we have a lot of extra or duplicated information.  This makes it difficult to answer questions like:
* How many customers do we have?
* What is the total for each order?

A better way to organize this data would be to break it into separate tables.  Each table should contain data related to a single idea.  When we have split the tables, we can then add a relationship between the two tables.

First, let's split the data into two tables: Customers and Orders

[![](/assets/images/module2/Week1/OrdersandCustomers.png)](https://docs.google.com/spreadsheets/d/1KX3EhldBiQAVxXoQpQfzveHbhiNerxmmmkMufFe4ZrM/edit#gid=1681092286)


<section class="call-to-action">
    <p>With a partner, discuss the following questions about the tables above:</p>
    <ul>
        <li>Do we have all of the <strong>data</strong> that was in the original table?</li>
        <li>Do we have all of the <strong>information</strong> that was in the original table?</li>
    </ul>
</section>

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>We want students to recognize that we are missing the information that relates an order to a customer - even though we have all the same data.</p>
</aside>


-------------------------------------

Since we have split the data into two tables, we need a way to relate each table.  Specifically, we need a way to know which customer an order belongs to.  We will create this relationship by using **primary keys** and **foreign keys**:

[![](/assets/images/module2/Week1/RelatedCustomersandOrders.png)](https://docs.google.com/spreadsheets/d/1KX3EhldBiQAVxXoQpQfzveHbhiNerxmmmkMufFe4ZrM/edit#gid=1715070853)

To create these relationships, we need every table to have a **primary key**.  A primary key is typically an Id for a specific record, and it will always be unique - no two records will ever share the same primary key.

We link the two tables by using a **foreign key** on one or more tables.  In this case, we use `Customer Id` as a foreign key on the Orders, that refers back to the primary keys from Customers.  

<section class="call-to-action">
<p>With a partner, practice describing these two tables.  Use as many vocab words as you can: data, table, primary key and foreign key.</p>
</section>

## Create Database

So far, we have been working with representations of what data might look like inside of a database.  We have seen data organized into tables, using primary and foreign keys to relate to records in other tables.  Now, we are going to create a database.  This database will live on your computer (it will be accessible only by you, or someone with your laptop).

### Download PostgreSQL

There are [many different databases](https://appinventiv.com/blog/top-web-app-database-list/) that are available.  During your time at Turing, we will primarily work with [PostgreSQL](https://www.postgresql.org/).

1. Download the [Windows x86-64 PostgreSQL Installer](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
    * Choose the installer for the most current version (the highest number).
    * It will take a few minutes for the installer to download.
2. Open the installer file to start the setup Wizard.  
            ![](/assets/images/module2/Week1/postgresqlInstallerWizard.png)
3. Click 'Next' through the wizard, keeping all default settings. You will need to enter and confirm a password on the 4th or 5th step - this is the only customization you will do. Please use `password123` as your password because we will be working in groups so other people will see your password.
4. On the last step, before you click 'Finish', uncheck the box so that Stack Builder is **not** launched upon completion.
            ![](/assets/images/module2/Week1/postgresqlInstallerWizardLastStep.png)
5. Open PgAdmin in preparation for the next section
            ![](/assets/images/module2/Week1/OpenPGAdmin.png)

**If you have any issues during this installation, reach out to an instructor!**

### Create a Database with PgAdmin

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>You could walk the students through the database and table creation, or let them explore on their own.  We do not need them to be _experts_ in database administration.</p>
</aside>

Once in PgAdmin, we are going to create a database for our customer and order information.

<section class="call-to-action">
<p>In small groups, work through the following steps.  You should each complete the steps individually, but use your group-mates as resources if you get stuck.  And, if you need an instructor's help - reach out!</p>
</section>  

> 1. Right Click on `Databases` and `Create` a `Database`
> ![](/assets/images/module2/Week1/CreateDb1.png)
> 2. Give your database a name and `Save`
> ![](/assets/images/module2/Week1/CreateDb2.png)
> 3. If successful, your pgAdmin should look like: 
> ![](/assets/images/module2/Week1/CreateDb3.png)

Now that we have a database created, we need to add two tables to our database for `customers` and `orders`

### Create a table for Customers and Orders

> Continue working individually, using your small group for support!  
> 1. Click on your Database to highligh it, then click the icon for `Query Tool`
> ![](/assets/images/module2/Week1/CreateDb4.png)

The Query Tool is where we will interact with our database.  Today, you are going to be copying the commands that we give you; we are going to dig deeper into SQL commands in later lessons!

> 2. In the query window, recreate the command below - be very careful of spelling and semicolons!  When you have created the query, click the 'play' icon to run the query.  
> ![](/assets/images/module2/Week1/CreateDb5.png)
> 3. Again, In the query window, recreate the command below - be very careful of spelling and semicolons!  When you have created the query, click the 'play' icon to run the query.  
> ![](/assets/images/module2/Week1/CreateDb6.png)
> 4. To verify that you have created your tables appropriately, run this query: `SELECT * FROM orders JOIN customers ON orders.customer_id = customers.id;`.  Your output should look like this:  
> ![](/assets/images/module2/Week1/CreateDb7.png)

If you run into any error messages or issues - reach out to an instructor!

<section class="call-to-action">
<p>In small groups, discuss the following questions:</p>
<ul>
    <li>What do you think `CREATE TABLE` is doing?</li>
    <li>How are column headers created?</li>
    <li>What datatypes do you think are being used for each column?</li>
    <li>What words/commands don't make much sense yet?</li>
</ul>
</section>

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>We want students to be able to recreate these steps, but they do not need to know too much about the commands yet - we will cover SELECT and JOIN in later lessons.  CREATE TABLE will not be covered in detail because we are not preparing students for database administration - in their first jobs, they will most likely be working with pre-existing databases.</p>
</aside>

<section class="checks-for-understanding">

## Check for Understanding
* In your own words, what is a database?
* Imagine that you are creating a database of books.  How might you create a relationship between a book and its author?  

</section>
