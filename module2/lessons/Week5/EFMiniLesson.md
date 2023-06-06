---
layout: page
title: Entity Framework Concepts
---

## Learning Goals
* Use user-input to create database records
* Implement eager loading to replicate JOIN queries in Entity Framework
* Define Eager and Lazy loading

### Setup
* Open your plant tracker appliction.
    * You should have Plant, Room, Tag, and PlantTags classes.
* If you need (or want) a fresh copy, clone the `EFCoreSTarter` branch of the [starter repo](https://github.com/turingschool-examples/PlantAppStarter).
    * In pg-Admin, drop your PlantTracker database.
    * In Package Manager Console, run update-database.

## User Generated Records
<section class='call-to-action' markdown='1'>

Take 5 minutes to review the following code.  In your notebook describe what is happening in the code in as much detail as possible.  Then, you will share your notes with a partner - discuss any differences in your understandings!

```c#
using PlantApp;

Console.WriteLine("Welcome to Plant Tracker!");
Console.WriteLine();

using (var context = new PlantTrackerContext())
{
    for (var i = 0; i < 2; i++)
    {
        Console.Write("Enter the name of a room: ");
        string nameInput = Console.ReadLine();
        Console.Write($"Does the {nameInput} have sunlight? Y / N : ");
        string sunlightInput = Console.ReadLine().ToLower();
        bool hasSunlight = false;
        if (sunlightInput == "y")
        {
            hasSunlight = true;
        }

        Room newRoom = new Room() { Name = nameInput, HasSunlight = hasSunlight };
        context.Rooms.Add(newRoom);
        Console.WriteLine();
    }
    context.SaveChanges();

    foreach (var room in context.Rooms)
    {
        Console.Write($"How many plants are in the {room.Name}? ");
        Console.WriteLine();
        int numPlants = Convert.ToInt32(Console.ReadLine());

        for (var i = 1; i <= numPlants; i++)
        {
            Console.WriteLine($"Enter the information for plant #{i}");
            Console.Write("Type: ");
            string typeInput = Console.ReadLine();
            Console.Write("Date Purchased (mm/dd/yyyy): ");
            DateTime dateInput = DateTime.Parse(Console.ReadLine()).ToUniversalTime();
            Plant newPlant = new Plant() { Type = typeInput, PurchaseDate = dateInput, Room = room };
            context.Plants.Add(newPlant);
            Console.WriteLine();
        }
    }
    context.SaveChanges();
}
```

</section>

## Querying for Related Records

### Querying with SQL

<section class='call-to-action' markdown='1'>

**With a Partner**  
In pgAdmin, write queries that will return
* all plants with the room they belong to.
* a count of plants in each room.

</section>

<section class='answer' markdown='1'>

### One Solution
```sql
SELECT * FROM rooms
JOIN plants ON plants.room_id = rooms.id;

SELECT rooms.name, COUNT(plants.id) AS plant_count FROM rooms
LEFT JOIN plants ON plants.room_id = rooms.id
GROUP BY rooms.id;
```

</section>

### Querying with Entity Framework

<section class='call-to-action' markdown='1'>

**With a Partner**  
In your PlantTracker Apps, print a summary of rooms and their plants, similar to:  

```
Welcome to Plant Tracker!

Living Room: 2 plants
Bedroom: 0 plants
```

</section>

When we want to recreate the same type of query's in Entity Framework, we will need to implement the concept of joining two tables. We can do this by using the [.Include()](https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager) method.

<section class='answer' markdown='1'>

### An example of .Include()
```c#
using (var context = new PlantTrackerContext())
{
    var rooms = context.Rooms.Include(room => room.Plants);

    foreach (var room in rooms)
    {
        var numPlants = room.Plants.Count();
        Console.WriteLine($"{room.Name}: {numPlants} plants");
    }

}
```

</section>


## Loading Related Data

There are many strategies for loading related data for queries in Entity Framework.  We will typically use `.Include()` while you are at Turing, but it is good to have an understanding of the common strategies.  

<section class='call-to-action' markdown='1'>

Explore the [Microsoft documentation on Loading Related Data](https://learn.microsoft.com/en-us/ef/core/querying/related-data/).  
* Determine which type of loading we are using with `.Include()`.
* Take note of any pros and cons of using `.Include()`

</section>

## Using an Auto-Include

When you are working on an application that is focused on querying multiple tables, it can be a little overwhelming to have to `.Include()` on every query.  You can set up your context object with a specific model configuration so that the eager loading happens automatically.

Take a look at the [Eager Loading Docs](https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager#model-configuration-for-auto-including-navigations) for details.

<section class='answer' markdown='1'>

### Auto-loading Related Tables
```c#
public class PlantTrackerContext : DbContext
{

    ...

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Room>().Navigation(e => e.Plants).AutoInclude();
    }
}
```

</section>

