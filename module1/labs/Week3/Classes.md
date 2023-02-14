## Lab Objectives
* Practice brainstorming the classes that might exist in an application
* Reinforce the syntax and structure of classes
* Introduce the `Date` object: create and manipulate dates

** Instructor Note ** Before the lab, set up groups of 3/4 students and post in slack.

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

![Instagram Profile Pages](/Mod1/Images/Week3/instagram-profile.jpeg)

![Instagram Post](/Mod1/Images/Week3/instagram-post.png)

Spend up to 10 minutes brainstorming, before moving on to the next section of the lab.

### Building on our Order-Taking Application

With your group, take 15 minutes to review a version of the order taking application we have been building upon.  Discuss what classes could exist in this application and decide on at least two classes to implement.

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

### Code Snippets
Now that we have been working with Visual Studio for a few days, you should be feeling more familiar with the intellisense code suggestions and (semi)auto-complete of some started code.  In addition to the auto-complete, Visual Studio also uses **code snippets** that help speed up the typing part of coding.  One of the most useful snippets is `ctor`.

If you are inside of a class and type `ctor`, the intellisense will give you a suggestion for creating the class constructor!

![screenshot of ctor shortcut](/Mod1/Images/Week3/ctor-shortcut.png)

Using code snippets is not required to write code, but they can be helpful.  If you are interested in learning about more code snippets, take a look at the [Microsoft Docs](https://docs.microsoft.com/en-us/visualstudio/ide/code-snippets?view=vs-2022)!

## Preparation
### Working with `Date`
Imagine that you are creating a Patient class for a doctor's office.  The Patient class might have attributes like name, height, weight, and birthdate.  When creating the class, name is probably going to be a `string`, height and weight will probably be `double` or `float`.  But what about birthdate?  You might be tempted to make it a string so that we could enter `"12/2/2002"`.  This _could_ work, but its not the best solution.  If birthdate is a string, we might have different patients with birthdays like: `"January 2 1990"`, `"Jan 2 1990"`, `"1/2/1990"`, `"01/02/1990"`, `"2/1/1990"`.  All of these versions could be interpreted the same way, but they do not all follow the same format - so you _have_ to do some interpreting when reading the data.  It would be much better to constrain our birthdate attribute into a specific format.  C# (and many other languages), implement this kind of formatting with `Date` and `DateTime` objects.

Watch [this video](https://docs.microsoft.com/en-us/shows/csharp-fundamentals-for-absolute-beginners/working-with-dates-and-times) about DateTime, and then in your notebook, answer the following questions:
* How would you create a DateTime variable that holds your birthdate?
* Given the two birthdates called `megansBirthdate` and `andysBirthdate`, how would you determine the age difference between them?
* Let's think about the possible `Patient` class that has an attribute of `Birthdate`.  Write a method that would live in this class called `Age()`; it should return an integer that represents the Patient's age in years.

<!-- I LOVE the brainstorming aspects of this lab - having students get more comfortable with just thinking about code concepts. I think this lab also lends itself well to having opportunities to come back together whole group to share ideas and spur more ways of thinking! -->

<!-- Love that you gave students some starting code w. a familiar app (Order Taker App) - I think this should save some time and allow students to feel more confident jumping in to implement their new learning -->

<!-- Also a big fan of the Date work - it's definitely important but likely not worth it's own lesson + a good thing for students to wade into on the self-teaching front! Will be interesting to see how the lab timing plays out - could easily make this section HW or something if students don't get to this part -->
