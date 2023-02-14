## Lab Objectives
* Practice common iteration patterns: transform, find, and build.
* Convert strings into a collection.
* Define **method** as it relates to programming.

** Instructor Note ** Before this lab, prep groups of 3-4 students.  The groups will be exploring some common iterative problems, and then they will break out individually to practice what they have discussed.  Plan on bringing the whole cohort back together after individual practice to review at least one of each of the three patterns (transform, find, build).

## Practice

<!-- In your small group, each person will review one of the three code blocks below.  Take 5 minutes to review your code block, then take turns describing what is happening in each example.  Be sure to describe things line by line - "On line 1 _______ happens, then on line 2 _____________...". And, discuss what each variable holds at each point during the code block. -->
Each student should [fork this REPL](https://replit.com/@launch-team/M1W2-CollectionsLab). In your small group, each person will review one of the three example code blocks.  Take 5 minutes to review your code block, then take turns describing what is happening in each example.  Be sure to describe things line by line - "On line 1 _______ happens, then on line 2 _____________...". And, discuss what each variable holds at each point during the code block.

After reviewing and sharing about your scenarios, Read the [Common Iterations Patterns](#common-iteration-patterns) section, and discussed the included questions.

<!-- 
Example One
```c#
var names = new List<string> {"alice", "bob", "charlie"};

var uppercaseNames = new List<string> ();

foreach (var name in names)
{
    uppercaseNames.Add(name.ToUpper());
}

Console.WriteLine(uppercaseNames);
```

Example Two
```c#
var nums = new List<int> {1, 2, 3, 4, 5, 6};

var evenNums = new List<int> ();

foreach (var num in nums)
{
    if (num % 2 == 0)
    {
        evenNums.Add(num);
    }
}

Console.WriteLine(evenNums);
```

Example Three
```c#
var nums = new List<int> {1, 3, 5, 7, 9};

var sum = 0;

foreach (var num in nums)
{
    sum += num;
}

Console.WriteLine(sum);
``` 
-->

### Common Iteration Patterns

Many of the tasks that involve collections of information fall into three patterns: Transform, Find, and Build.

We **transform** a collection by changing every element in a collection and storing those changed (transformed) elements in a new collection.  An example could be transforming a list of strings into their corresponding lengths: ```{"Minnesota", "Iowa", "Missouri", "Arkansas", "Louisiana"}``` becomes ```{9, 4, 8, 8, 9}```. When we transform a collection, we perform the same manipulation on each element, and end with the same number of elements that we started with.

Sometimes, we need to **find** elements in a collection that meet some criteria (we are trying to find a subset of the collection).  For example, we might want to identify usernames that include specific characters, like spaces.  When we use the find pattern, we typically end up with a collection that is smaller than the original collection; the resulting collection may also be empty.

There are also times when we want to use a collection to **build** a new thing.  For example, we might want to use a List that represents a grocery list, and turn it into a Dictionary: ```{"Milk", "Bread", "Egg", "Egg", "Egg"}``` becomes ```{ {"Milk", 1}, {"Bread", 1}, {"Egg", 3} }```

Questions to answer with your group:
* For each of the examples above, decide which pattern the example falls under.
* Brainstorm one or two similarities in the code for each pattern.
* Brainstorm a difference in the code for each pattern.

Choose one person in your group who will share out highlights from your discussion!

**Keep an Eye on Slack** We will be coming back together to discuss what you all have learned.

** Instructor Note ** Students will be working through the remainder of the lab individually, but they should be encouraged to discuss what they are learning with each other, and ask questions as they go.

### Manipulating Strings as Collections

As developers, we don't always get data in exactly the format we would like it to be in; in fact, we nearly always have to do some data manipulation in order to complete the task at hand.  The most common form of data on the web is String, and we often need to organize that string information into collections.  This is such a common operation, that most languages include methods to help with this task.

Read [this article](https://docs.microsoft.com/en-us/dotnet/csharp/how-to/parse-strings-using-split) about the String method, .Split().

In your notebook, answer the following:
* What is the length of the array `haiku` in the following example:
```c#
string[] haiku = "A world of dew, and within every dewdrop, a world of struggle".Split(", ");
```
* Describe the difference between the two examples below:
```c#
string[] users = "Mike, Alice, Bob".Split(',');
```
```c#
string[] users = "Mike, Alice, Bob".Split(", ");
```

## Preparation

Up to this point, we have used pre-built tools like `.Split()`,  `.ToLower()`, and `.Add()` to help us in our programming.  These tools are called **methods** - they are sets of instructions that can be _reused_ as needed.  We are going to learn more about methods in the next lesson, but to get you thinking about this topic, you could imagine that methods are like tools in a tool-box.  

Let's say you are building a piece of furniture that requires you to fasten pieces together with nails.  The hammer in your tool box is like a method - when you need to fasten a nail, you use the hammer.  You can reuse the hammer whenever you want, without having to build or buy a new hammer for each nail.

There are many pre-built methods that we can use in c# (or in any other language); but, the real power of programming is in building our own methods.   We can build specialized tools that can be reused in our programs to accomplish specific, repeated tasks.  These methods might be simple, like adding two numbers; or, complex, like building a user profile. Simple or complex, the goal of creating methods is to reduce any repeated instructions in our code.  where we see the same set of instructions being used over and over, we can clean up our code by organizing those instructions into **methods**.

In your notebook, create a list of the built-in methods you have used recently.  What is the name of the method, and what does it do?

**Keep an Eye on slack** we will be coming back together to do a quick oerview of .Split(), and the definition of **method**.


<!-- Another great lab! I think you do a good job of blending fun, exploratory work with "Real world" type exercises. I also love that this lab includes some pre-work for the next day that builds off of the learning students have already done! Not to keep repeating myself, but I am really excited for how you are building these labs - on the surface it seems like a great blend of exploration, practice, individual vs team work, opportunities for whole group. We will see how it all plays out in practice haha!  -->