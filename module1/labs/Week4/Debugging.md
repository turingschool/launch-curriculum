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

## Choose Your Own Adventure!

When you have finished with the debugging lab above, you can choose your own next steps.  Your instructor will open additional breakout rooms for student collaboration.

<section class='answer' markdown='1'>
  
### Revisit the Library Lab

Revisit the [Library Lab](https://launch.turing.edu/module1/labs/Week3/ClassInteraction) - but this time, complete it in Visual Studio! Try to build these classes from the ground up without looking back at your code from last week.

</section>

<section class='answer' markdown='1'>

### 🌶️ Code Challenges

#### Exercise 1
Write a C# program that uses a while loop to calculate the sum of all odd numbers between 1 and 100 and prints the result to the console.

#### Exercise 2
Write a C# program that uses a for loop to iterate over a string and count the number of vowels it contains.

#### Exercise 3
Given an array of integers, write a method that returns the biggest number in this array.

```c#
int[] nums = { 190, 291, 145, 209, 280, 300 };
TheBiggestNumber(nums);
// output -> 291
```

```c#
int[] nums = {-9, -2, -7, -8, -4};
TheBiggestNumber(nums);
// output -> -2
```

</section>

<section class='answer' markdown='1'>
  
### 🌶️🌶️ More Spicy Code Challenges

#### Exercise 1
Implement a method called `SumSecondNumbers()` that takes a multidementional array as an argument, where each element is an array of 2 integers, and sums the second integer of each sub-array. You may want to take a look at [this resource](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/passing-arrays-as-arguments#passing-multidimensional-arrays-as-arguments) to help you get started. The method should be able to be called like this:
```c#
int[,] numberPairs = { { 1, 2 }, { 2, 3 }, { 3, 4 } };
int sumOfSecondNums = SumSecondNumbers(numberPairs);

Console.WriteLine(sumOfSecondNums);
//Output -> 9
```

#### Exercise 2 
Implement a method called `NormalizeZipCodes()` that takes an array of integers as an argument, and returns an array of stringified versions of those integers as zip codes.

_A note on zip codes: All zip codes are 5 characters long; if an integer zip code is fewer than 5 digits, we should add as many 0s to the front of that number as we need to reach 5 characters. So, a given integer zip of 525 would be normalized into "00525"._ 

The method should be able to be called like this:

```c#
var zipCodes = new[] {80228, 5031, 2112, 52556, 515 };
string[] result = NormalizedZipCodes(zipCodes);

Console.WriteLine(result);
//Output -> 80228, 05031, 02112, 52556, 00515
```

#### Exercise 3 
Implement a method called `GetWordsByFirstLetter()` that takes two arguments: a character, and a list of strings. The method should return a subset of the given list that contains all the words that start with the given character. The method should be able to be called like this:

```c#
var words = new List<string> {"weirdo", "quill", "fast", "krill", "quaint", "quieter", "koala"};
var qWords = GetWordsByFirstLetter('q', words);
var kWords = GetWordsByFirstLetter('k', words);
var jWords = GetWordsByFirstLetter('j', words);

Console.WriteLine(qWords);
//Output -> quill, quaint, quieter

Console.WriteLine(kWords);
//Output -> krill, koala

console.WriteLine(jwords);
//Output -> 
```

</section>
