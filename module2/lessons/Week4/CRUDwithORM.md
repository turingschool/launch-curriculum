---
layout: page
title: CRUD with ORM
---

## Intro

Up to this point, you've created a database using PostgreSQL and pgAdmin. You've used CRUD operations to manipulate your database:

-   (C)reate new data using the INSERT statement
-   (R)ead existing data using the SELECT statement
-   (U)pdate data using the UPDATE statement
-   (D)elete data using the DELETE statement

You've also used a `WHERE` clause to filter data, the `JOIN` keyword to combine data from multiple tables, and `ORDER BY` and `GROUP BY` to sort and arrange data for better analysis.

In addition, you've used Entity Framework to create a database in PostgreSQL within a C# application. The next logical step is to CRUD-ify your database through your ORM. Is that a word? Do we have too many acronyms? Don't know yet, stay tuned.

## Setup

We will use the application and database from the Intro to ORM lesson and build from there.

-   If you need a refresher, revisit [this lesson](/module2/lessons/Week4/IntroToORM) to build the application and database.    
-   If you want a clean version of the application, [clone this repo]() and follow the instructions in the README.
-   Review [this lesson](/module2/lessons/Week3/LINQ) to the basics of LINQ methods.

## Create

In the previous lesson, we created the PlantTracker database with two tables: `plants` and `rooms`. There is a one-to-many relationship between rooms and plants: each plant is located in one room, and each room can have many plants. 

Let's add a record to the room table. A room has an ID number (integer) as its primary key, along with a name field (text) and if the room has sunlight (boolean). Our first room is the kitchen that has ample sunlight.

### Room

Let's add a record to the room table. A room has an ID number as its primary key, along with a name field and if the room has sunlight. Our first room is the kitchen that has ample sunlight.

> How would you add this room to your database using SQL statements?
> `INSERT INTO rooms (name, has_sunlight)`
> `VALUES ('Kitchen', 'true');`

Let's use Entity Framework to perform this task for us. In `Program.cs`, add the following code in the `Main` method:

```c#
// CREATE operation
using (var context = new PlantTrackerContext())
{
	var kitchen = new Room
	{
		Name = "Kitchen",
		HasSunlight = "true"
	};

	context.Rooms.Add(kitchen);
	context.SaveChanges();
}
```

This code does four things:
1.  Creates a local `context` object from the `PlantTrackerContext` class. The context object is doing the heavy lifting in terms of connecting the C# objects (Plants and Rooms) to the database.    
1.  Creates a new Room object in C# called `kitchen`.    
1.  Adds the `kitchen` to the context object. This step creates an SQL statement to insert the record into the Rooms table.    
1.  Saves the change to the database.    

In your breakout room, add another room to our application. This time, we need a bedroom that has adequate sunlight. Hint: you can reuse an existing context (i.e. you do not need to make a new context object to add another room).  

### Plant

We now have two rooms. Let's now add a plant. A plant has an ID number as its primary key, a type, a purchase date, and a room. Now it makes sense that we added rooms before adding plants. It also means that we need to select a room for the plant. After much shopping, we purchased a pothos plant on Valentine's Day (February 14, 2023) to add to the kitchen.

> How would you add this plant to your database using SQL statements?
> `INSERT INTO plants (type, purchase_date, room_id)`
> `VALUES ('Pothos', '2023-02-14 12:00:00', 1);`

Using Entity Framework, add the following code to the using block in the `Main` method in `Program.cs`:
  
```c#
// CREATE operation
var pothos = new Plant
{
	Type = "Pothos"
	PurchaseDate = "2023-02-14 12:00:00",
	Room = kitchen
};

context.Plants.Add(pothos);
context.SaveChanges();
```

Adding a plant isn't much different than adding a room, except for two major differences.
1.  In the database, a Plant record has a room ID field, which serves as a foreign key to the Room table. On the other hand, we attach a plant to a Room object.    
1.  Additionally, a Room contains a list of the Plants it houses. When we create a Plant, we also update the corresponding Room object.     

In your breakout room, add a new plant to the bedroom in our application. It is a snake plant purchased on January 15, 2023. 

## Read

We have records in our database; specifically two rooms with a plant in each room. We can verify that by logging into pgAdmin and querying the PlantTracker database.
  
> What SQL statement would show all the rooms in your database? What about the plants?
> `SELECT * FROM rooms;`
> `SELECT * FROM plants;` 

But what fun is that? We can read from the database using our application. Let's get information about the rooms using Entity Framework. Add the following code to the using block in the `Main` method in `Program.cs`:
  
```c#
// READ operation
foreach (var room in context.Rooms)
{
	Console.WriteLine($"Room {room.Id}, Name: {room.Name}, Has Sunlight? {room.HasSunlight}");
}
```

This code accomplishes the following:
1.  Iterates through each room using a foreach loop.    
1.  For each room, display the ID, name, and if it has sunlight to the console.    

In your breakout room, read and display all the information for each plant in the Plants table to the console. Use the previous Room example to give your output some "context".

## Update

We have tables and records in our database, and we can access them from our application. What if something changes? For example, we've installed blackout curtains in the bedroom and it no longer gets adequate sunlight. We need to update this information in our Rooms table.  

> How would you update this room in your database using SQL statements?

Let's do the same using Entity Framework. Add the following code to the `Main` method to in `Program.cs`, :
  
```c#
// UPDATE operation
bedroom.HasSunlight = "false";
context.SaveChanges();
```

This code updates the value of `HasSunlight` to false in the bedroom object, then saves that change in the database. Add another foreach loop to see the change in the bedroom.

```c#
// READ operation
foreach (var room in context.Rooms)
{
	Console.WriteLine($"Room {room.Id}, Name: {room.Name}, Has Sunlight? {room.HasSunlight}");
}
```

But wait, this object exists in our application because we created it first. What happens if we don't already have the object in our application? The answer is we need to find it in our database first using a LINQ method, then we can modify is as described above.

```c#
// FIND using LINQ method
var updateRoom = context.Rooms.Single(room => room.Name == "Bedroom")

// UPDATE operation
updateRoom.HasSunlight = "false";
context.SaveChanges();

// READ operation
foreach (var room in context.Rooms)
{
	Console.WriteLine($"Room {room.Id}, Name: {room.Name}, Has Sunlight? {room.HasSunlight}");
}
```

> `Single` is similar to `Where` with one key difference; `Where` returns a list, while `Single` returns one value that fits the criteria. In this case, it works because we know there is (or should be) exactly one "Bedroom" in our Rooms table. If there are multiple rooms named "Bedroom" (or none), we would need a different solution.

In your breakout room, perform the following tasks using LINQ methods:
	* update the type of your snake plant to a peace lily
	* display all information for each plant in the Plants table to the console

Note: Don't be concerned if you named your variable SnakePlant or some other identifier that no longer makes sense.

## Delete

We have tables and records in our database, we can access them from our application, and we can update data as needed. What if we no longer need a record in our database? For example, we've decided that we will no longer keep plants in our kitchen.  

> How would you delete this room in your database using an SQL statement?

In our application, add the following code to the `Main` method to in `Program.cs`, : 

```c#
// FIND using LINQ
var deleteRoom = context.Rooms.First(room => room.Name == "Kitchen")

// DELETE operation
context.Rooms.Remove(deleteRoom);
context.SaveChanges();
```

> `First` is similar to `Single` as they both return one record. If there are multiple rooms that fit the criteria, the `First` method returns the first "Kitchen" in the Rooms table.

This code deletes the kitchen object from the context and saves that change in the database. Let's loop through the rooms one last time to witness the change. 

```c#
foreach (var room in context.Rooms)
{
	Console.WriteLine($"Room {room.Id}, Name: {room.Name}, Has Sunlight? {room.HasSunlight}");
}
```

In your breakout room, delete your pothos plant then display all the information for each plant in the Plants table to the console. 

> Note: If there were any plants left in the kitchen after it was deleted, we will need to update the room for those plants.

## Checks for Understanding

1. What is the purpose of creating a local context object?
1. What does this code do in a CREATE, UPDATE, or DELETE operation? `context.SaveChanges();`
1. Follow-up from the previous question: why is that code not needed for a READ operation?
  
**