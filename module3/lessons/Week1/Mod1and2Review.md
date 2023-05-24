---
layout: page
title: Mod 1 and 2 Review Session
---

Before we get too far into our Mod3 content, let's take a moment to look back on all we have learned in Mods 1 and 2.

In Mod1, we learned the basics of programming, using C#; we jumped into OOP, and learned how to use classes to model objects.  Then, in Mod2, we dove into the world of databases; we learned about database relationships, SQL, and ORMs. In Mod2 we also learned more about version control with git!

Today, we are going to build a small application to practice these concepts!

## Coffee Shop

1. Create a Console Application in Visual Studio.
    * You can call the project and solution `CoffeeShop`
2. Initialize a git repository in your solution.

### Building our Classes

1. Create a branch called `classes`
2. In your CoffeeShop project, add classes based on the interaction patterns below.
    * Make sure to test your classes!
3. Commit after each class is complete - you should have 3 commits!
4. When all three classes have been built, merge your `classes` branch into your `main` branch.

```c#
// Item Class
Item item = new Item("Cappuccino", 400);
// An item is created with a Name, and a Price in Cents

item.Name;
// returns "Cappuccino"

item.PriceInCents;
// returns 400

item.PriceInDollars();
// returns 4.00
```

```c#
// Order Class
Item item1 = new Item("Latte", 375);
Item item2 = new Item("Cappuccino", 400);
Item item3 = new Item("Mocha", 450);

Order order = new Order();
// An order is created with no arguments

order.Items;
// By default, an order has an empty list of Items

order.AddItem(item1);
Order.AddItem(item2);
order.AddItem(item3);
// AddItem should add items to the orders list of Items

order.Items;
// returns { item1, item2, item3 }

order.Total();
// returns 12.25
```

```c#
// Customer Class
Item item1 = new Item("Latte", 375);
Item item2 = new Item("Cappuccino", 400);
Item item3 = new Item("Mocha", 450);
Item item4 = new Item("Caramel Macchiato", 500);
Item item5 = new Item("Espresso", 250);
Item item6 = new Item("Cappuccino", 400);
Order order1 = new Order();
Order order2 = new Order();

Customer customer = new Customer("Taylor");
// A customer is created with a name

customer.Orders;
// By default, a customer has an empty list of Orders

order1.AddItem(item1);
order1.AddItem(item2);
order1.AddItem(item3);
order2.AddItem(item4);
order2.AddItem(item5);
order2.AddItem(item6);

customer.AddOrder(order1);
customer.AddOrder(order2);
// AddOrder should add orders to the customers list of Orders

customer.Orders;
// returns { order1, order2 }

customer.TotalSpent();
// returns 23.75

customer.ItemsOrdered();
// returns { "Latte", "Cappuccino", "Mocha", "Caramel Macchiato", "Espresso" }
// this is a list of distinct items that were ordered - note that "Cappuccino" only appears once.
```

### Connecting a Database

1. Create an ERD for our three classes
    * How does each class relate to each other?
    * Where should Primary and Foreign keys be assigned?
2. Checkout a new branch called `migrations`
3. Install the following packages:
    * Npgsql.EntityFrameworkCore.PostgreSQL
    * EFCore.NamingConventions
4. Add a CoffeeShopContext class
    * It will be helpful to review the [Intro to ORM lesson](/module2/lessons/Week4/IntroToORM) for this!
5. Review your classes, and compare them to your ERD
    * Make any changes necessary to prep your classes to become Models.
6. Add a migration to create your database.
7. Run your migration!
8. Commit your work, and merge your `migrations` branch into your `main` branch.

<section class='instructor-notes' markdown='1'>

This is probably as much as we can get done in this session, but if there is additional time, you can ask students to use EF to create records in their database.  They could build a user interface that mimics a point of sale system, or create seed data.  They could then use LINQ or SQL to query the database.

</section>




