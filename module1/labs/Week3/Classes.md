---
layout: page
title:  Classes Lab
---

## Lab Objectives
* Practice brainstorming the classes that might exist in an application
* Reinforce the syntax and structure of classes

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Before the lab, set up groups of 3/4 students and post in slack.</p>
</aside>

## Practice
### Brainstorming Classes

One of the most important practices you will have as a developer is the determination of what Classes are necessary for any application.  This is a difficult task that is not mastered, but constantly improved upon.  The first part of today's lab will ask you only to brainstorm what classes might exist in a program (without writing any code!).

With your groups, discuss the two applications described below: Go Fish, and Instagram.  Come up with at least three classes that could make up all or part of these programs; include any properties and/or behaviors you believe these classes should have. Here are some thoughts to get you started:
* It can help to imagine the physical objects that would exist for a physical version of the application (this is especially helpful when working on games).
* Don't forget about the people that interact with your program, and how they might need to be represented in code.
* No idea is too 'out there'; there is no one right way, but through practice and discussion, we can make a choice that will work for the program and our team.

**Go Fish**

If you are unfamiliar with the card game, Go Fish, watch [this video](https://www.youtube.com/watch?v=hRpXLSMdve0) to get familiar with it.  Now, let's imagine you are going to write an application to play this game - what classes do you think you will need? Can you think of any properties or behaviors that those classes will model?

Spend up to 10 minutes brainstorming, before moving on to the next application.

**Instagram**

Take a look at the screenshots of the Instagram app below - what Classes might exist in the source code for the Instagram application.  What properties and behaviors might exist on those classes?

![Instagram Profile Pages](/assets/images/module1/Week3/instagram-profile.jpeg)

![Instagram Post](/assets/images/module1/Week3/instagram-post.png)

Spend up to 10 minutes brainstorming, before moving on to the next section of the lab.

### Building on our Order-Taking Application

With your group, take 15 minutes to review the order-taking application below.  Discuss what classes could exist in this application and decide on at least two classes to implement.

When looking at existing code as a starting point for building classes, it can be helpful to start by thinking about what methods might exist, and then see if you can group those methods into related ideas (classes).

```c#
var restaurantName = "Margo's Restaurant";
var menu = new Dictionary<string, int> {
		{"pizza", 5},
		{"tacos", 10},
		{"popcorn", 3},
		{"ice cream", 5}
	};

Console.WriteLine($"Welcome to {restaurantName}!");
Console.Write("How many people are in your group?");
var guestCount = Convert.ToInt16(Console.ReadLine());

Console.WriteLine("Our Menu:");
foreach (var (item, cost) in menu)
{
	Console.WriteLine($"{item} ${cost}");
}

var combinedOrder = "";
var orderTotal = 0;

for (var i = 0; i < guestCount; i++)
{
	Console.Write($"Person {i + 1}, what would you like? ");
	var order = Console.ReadLine().ToLower();
	while (menu.ContainsKey(order) is false)
    {
		Console.Write($"We don't have{order}, what would you like? ");
		order = Console.ReadLine().ToLower();
    }
	combinedOrder += $"{order}, ";
	orderTotal += menu[order];
}

var orderSummary = combinedOrder.Trim().Trim(',');
Console.WriteLine();
Console.WriteLine($"Order Summary\n{orderSummary}\nTotal: ${orderTotal}");
```

When your group has determined at least 2 classes, individually create a Console Application and implement those classes.  Then, implement the order-taking application using the classes that you created.

**Keep and eye on slack** We will be coming together to discuss the brainstorming process, and hear from groups on what classes they came up with for the three scenarios above: Go Fish, Instagram, and OrderTaking.
