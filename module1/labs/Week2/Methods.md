## Lab Objectives
* Practice creating methods
* Reinforce the three common iteration patterns
* Introduce **Namespaces**

** Instructor Note ** Before the lab, create pairs and post the groups in slack.  Before kicking off the practice exercises, introduce the idea of driver/navigator programming - you don't need to go into too much detail, or even use those words specifically, but we are going to have students start modeling this type of behavior.

## Practice

In your pairs, you will work through the following exercises. As you work through the exercises, take turns being the person typing out code.  For example, Partner A will share their screen and typing code into their Repl for the first exercise; Person B will be helping direct Person A with what they should type.  Then, for the next exercise, switch roles.  Repeat until you work through all of the exercises. This should be a collaborative process!

<!-- In your pairs, you will work through the following exercises.  Both partners will create a Visual Studio Console Application, called 'MethodsLab'.  As you work through the exercises, take turns being the person typing out code.  For example, on the first exercise, Partner A will be sharing their screen and typing code into Visual Studio; Person B will be helping direct Person A with what they should type.  Then, for the next exercise, switch roles.  This should be a collaborative process! -->

For the first three exercises, both partners will [fork this REPL](https://replit.com/@launch-team/M1W2-MethodsLab).

**Exercise 1**
Create a method called `Downcase()` that takes a list of strings as an argument, and returns a list of those strings downcased.  The method should be able to be called like this:
```c#
var names = new List<string> {"Alice", "Bob", "Charlie"};
var lowerNames = Downcase(names);

Console.WriteLine(String.Join(", ", lowerNames));
//Output -> alice, bob, charlie
```

**Exercise 2**
Create a method called `GetTwoDigitNumbers()` that takes a list of integers as an argument, and returns a list of only the numbers that have 2 digits.  The method should be able to be called like this:

```c#
var numbers = new List<int> {1, 8, 19, 21, 29, 31, 99, 102, 145};
var twoDigitNums = GetTwoDigitNumbers(numbers);

Console.WriteLine(String.Join(", ", twoDigitNums));
//Output -> 19, 21, 29, 31, 99
```

**Exercise 3**
Create a method called `CountFourLetterWords()` that takes a list of words as an argument, and returns an integer that is the count of words in that list that have 4 characters.  The method should be able to be called like this:

```c#
var words = new List<string> {"bake", "bark", "corn", "apple", "wart", "bird", "umbrella", "fart"};
var countOfFourLetterWords = CountFourLetterWords(words);

Console.WriteLine(countOfFourLetterWords);
//Output -> 6
```

For the next three exercises, we only want you to **pseudo-code** what the method might look like.  You do not need to implement the code.  Really think about what needs to happen during each iteration, and what values you have access to at any given point.  We will revisit these three exercises later in the week!

**Exercise 4**
Pseudocode a method called `SumSecondNumbers()` that takes a multidementional array as an argument, where each element is an array of 2 integers, and sums the second integer of each sub-array.  You may want to take a look at [this resource](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/passing-arrays-as-arguments#passing-multidimensional-arrays-as-arguments) to help you get started.  If implemented (you don't need to do that today!), the method should be able to be called like this:

```c#
int[,] numberPairs = { { 1, 2 }, { 2, 3 }, { 3, 4 } };
int sumOfSecondNums = SumSecondNumbers(numberPairs);

Console.WriteLine(sumOfSecondNums);
//Output -> 9
```

**Exercise 5**
Pseudocode a method called `NormalizeZipCodes()` that takes an array of integers as an argument, and returns an array of stringified versions of those integers as zip codes.  
*A note on zip codes:  All zip codes are 5 characters long; if an integer zip code is fewer than 5 digits, we should add as many `0`s to the front of that number as we need to reach 5 characters.  So, a given integer zip of `525` would be normalized into `"00525"`.  If implemented (you don't need to do that today!), the method should be able to be called like this:
```c#
var zipCodes = new[] {80228, 5031, 2112, 52556, 515 };
string[] result = NormalizedZipCodes(zipCodes);

Console.WriteLine(result);
//Output -> 80228, 05031, 02112, 52556, 00515
```

**Exercise 6**
Pseudocode a method called `GetWordsByFirstLetter()` that takes two arguments: a character, and a list of strings.  The method should return a subset of the given list that contains all the words that start with the given character.  If implemented (you don't need to do that today!), the method should be able to be called like this:

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

**Keep an eye on slack** We will come back together as a group to share some of the code we have been working on!

** Instructor Note ** We want to highlight student solutions to the first 3 exercises, and discuss good examples of psuedo-code for the last 3 exercises.


## Preparation
### Namespaces

As our programs get more complex, we will start working with more built-in c# tools and we will start writing code in multiple files.  With the increased complexity, we will need to be intentional about how we organize the code that we write.  One way that c# helps us with this organization is with `namespaces`.  Read through the two resources listed below:

* [Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/namespaces)
* [Tutorials Point](https://www.tutorialspoint.com/csharp/csharp_namespaces.htm)

And, answer these questions in your notebook:
* Why do we use the line `using System;` at the top of our program.cs file?
* Is `using System;` required for our programs to execute?  Why, or why not?
* In your own words, what is a `namespace`?


<!-- I think these are all pretty good exercises and can see some of these being pretty spicy! I think perhaps for some (if not all of these exercises), it would be good to include some pseudocoding/gameplanning around how they want to implement the method before writing any code. I've found that even with "straightforward" prompts students will ofter overthink, or misinterpret, what the prompt is actually asking them to do. Also, by emphasizing pseudocoding we can have students improve their problem solving AND it would give them some nice concepts to google to actualyl implement their methods -->

<!-- Love the prelearning on namespaces too! -->