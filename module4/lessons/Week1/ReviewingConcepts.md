---
layout: page
title: Oregon Trail Mini Project
---

Let's build a small application to practice what we've learned in Mods 1 and 2. Read throught the entire spec below before starting!

## The Oregon Trail

1. Fork and Clone [this starter repo](https://github.com/turingschool-examples/CaravanMVC)
2. Open your forked repository in visual studio
3. Build the solution - let you instructor know if you get any errors!


### Building our Models

1. Create a branch called `models`
2. In your Caravan project, add classes outlined below.
3. Commit after each class is complete - you should have 3 commits!
4. When all three classes have been built, merge your `models` branch into your `main` branch.
5. Push your main branch to GitHub.

<section class='call-to-action' markdown='1'>
**Passenger**  
A passenger has a Name, an Age, a Destination, and a Wagon

**Wagon**  
A Wagon has a Name (like 'Old Faithful'), NumWheels, Covered (true/false), and Passengers.

</section>

### Creating our Database

1. Checkout a new branch called `migrations`
3. Update the CaravanContext class to make sure our tables for wagons and passengers get created.
4. Add a migration to create your database.
5. Run your migration!
6. Commit your work, and merge your `migrations` branch into your `main` branch.

### User Stories

Update your MVC application to fulfill the following user stories:

```
As a User
When I visit "/wagons"
Then I see a list of all wagon names
  Each wagon name is a link to that wagon's show page
```

```
As a User
When I visit "/wagons/2"
Then I see the details of the wagon with id 2
Then I see all of the passengers riding in that wagon
Then I see a link to add a passenger to that wagon
```

```
As a User
When I visit "/wagons/2/passengers/new"
And I fill in the form with a passenger's name, age and destination
And I click 'Add Passenger'
Then I am redirected to that wagon's show page
  And I see the new passenger
```

```
As a User
When I visit "/wagons"
Then I see a count of passengers for each wagon
```

```
As a User
When I visit "/overview"
Then I see a distinct list of destinations
```

```
As a User
When I visit "/overview"
Then I see the average age of all passengers
```

```
As a User
When I visit "/wagons"
Then I see the average age of passengers in each wagon
```

```
As a User
When I visit "/passengerlist"
Then I see a list of all passenger names and the wagon they are riding in
```





