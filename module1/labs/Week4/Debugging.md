---
layout: page
title:  Debugging Lab
---

# Lab
Lab time is designed for you to prepare for upcoming lessons, and practice what you have learned so far.  Both aspects are important for your success.  During this time, you are encouraged to collaborate with fellow students, and reach out to instructors with any and all questions!

<aside class="instructor-notes">
  <p><strong>Instructor Note</strong><br>Before this lab, set up groups of 2-3 students.  They will be working through a broken order taking application, similar to the one they completed during week1.  The app has 4 bugs (outlined below).  Initially, keep an eye on how students are approaching the exercise - we may need to nudge them to describe how they believe the application is or should be running before jumping into fixing the bugs.</p>
</aside>

## Lab Objectives
* Practice placing and using breakpoints to debug an application.
* Read errors and use that information to make changes.
* Create and manipulate Arrays.

## Practice

In your small groups, you are going to work through the debugging exercise below.

1. Create a new Console Application in Visual Studio; you can name your solution 'DebuggingLab'.

2. Copy the code below into `Program.cs` in your new solution.

```cs
var margosMenu = "Menu:\nPizza\nPopcorn\nPears\nPistachio Ice Cream\nPeach Pie\nPupusas";

Console.WriteLine("Welcome to Margo's Restaurant\n\n" + margosMenu);
Console.Write("How many guests are in your party? ");

var numGuests = Convert.ToString(Console.ReadLine());
var combinedOrder;

for (int i = 0; i < numGuests++; i++)
{
    Console.Write($"Order {i + 1}: ");
    var order = Console.ReadLine();
    if (margosMenu.ToLower().Contains(order))
    {
        combinedOrder += order;
    }
    if (i + 1 < numGuests)
    {
        combinedOrder += "\n";
    }
}

var summary = $"Order Summary\n{combinedOrder}\n\nTotal: ${combinedOrder.Replace(" ", "").Replace(", ", "").Length * 2.12}";
Console.WriteLine(summary);
```

3. There are are 5 bugs in this code that need to be fixed in order for the application to run as expected.  Use breakpoints and your knowledge of C# to clear out these bugs! Work one by one through each issue you encounter.  Fix ONE thing, and then try to run the program.

4. As you work, take notes on each bug you find.
    * What line is that bug on?
    * Did you use a breakpoint to determine the issue?
    * Was the bug preventing the program from building? Or causing unexpected behavior?
    * How did you 'fix' the issue, and how did you know when it was fixed?

When fixed, the application should be able to be used to process this order:
```
Welcome to Margo's Restaurant

Menu:
Pizza
Popcorn
Pears
Pistachio Ice Cream
Peach Pie
Pupusas
How many guests are in your party? 2
Order 1: PIZZA
Order 2: pistachio ice cream

Order Summary
PIZZA
pistachio ice cream

Total: $46.64
```

**Keep an eye on slack** We will be coming back together and asking groups to share out their findings on specific issues, so be ready to share some notes!

<aside class="instructor-notes">
  <p><strong>Instructor Note</strong><br>The 4 bugs that we want to identify are on lines:</p>
  <ul>
    <li>6> We should convert .ToInt16() or .ToInt32().</li>
    <li>7> combinedOrder needs to either be initialized as an empty string.</li>
    <li>9> numGuesses should not be incremented.</li>
    <li>13> We need to call .ToLower() on the order.</li>
    <li>23> Instead of replacing `", "`, they should repleace `"\n"` to get the correct price calculation.</li>
  </ul>
</aside>

## Preparation

Individually, spend 10-15 minutes reflecting on the following questions. Take notes on your reflection to share out in tomorrow's lesson warm-up.

* Up to now, how have you known if your code was functioning?
* Imagine you are a developer working at Google; what might be some drawbacks to your current approach?
