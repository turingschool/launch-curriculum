# How Humans Keep Track of Information and What That Means for Programming

Like yesterday, this is an introduction designed to get you looking at code, getting familiar with syntax, and starting to think like a developer.  The expectation is that you will NOT master any topics today! We will be covering these topics in much more detail in Mod1.

### Warm Up

In small groups, take a look at the code below.  Identify as many pieces as you can from [yesterday's technical session](/Mod0/TechnicalDay1.md).  It is ok if not all of this code makes sense or is familiar!

```c#
var name = "Megan";

Console.WriteLine($"Hello {name}");
```

Be ready to share out some of your observations.

** Instructor Note ** We want to use this warmup as a review of variables.  Just to remind them generally what a variable is, and how to identify one.

### What is a Thing?

As humans, we often interact with physical objects in the world; let's call them `things`.  We use ourknowledge and experience to work with many different types of things with no issue.  We know to sit on a chair, and lay on a bed; even though these things are both furniture, we know that they have different uses.

We also use non-tangible objects like vocabulary, numbers, and dates which allow us to communicate with each other; let's call these objects `data`.  We can use data to communicate our needs, perform math and statistics, and relate spans of time (and many other tasks!). Using data, we can understand sentences like: On Tuesday, my son will be 12 years old. He is getting 2 lego sets for his birthday.

With objects and data, we have everything we need to accomplish our daily tasks.  But there is one more concept that humans rely on: lists. Lists help us accomplish similar tasks more efficiently.  Let's say I need groceries.  I _could_ go to the grocery store, pick up milk, come home, put the milk away, go to the grocery store, pick up bread, come home, put the bread away, go to the gocery store, pick up coffee, come home, put the coffee away, etc...  While this method would work, it is not very efficient; it is much better to create a list of all the items I need from the grocery store, then use that list at the store to pick up everything I need.


### Things and Computers

** Instructor Note **  Organize students into groups of 3/4 to work through these sections together in breakout rooms.

Unlike humans, computers don't know about very many things or data; but, they do know a few types of things and a few types of data. And, they can store lists!

Work through the tutorial linked below to learn about the things and data that c# knows.  Make sure to walk through each `Try it yourself` section.
* [Built in Types](https://www.w3schools.com/cs/cs_data_types.php)

Work through the tutorials below to learn about how c# manages lists, and uses lists to accomplish specific tasks. Make sure to walk through each `Try it yourself` section.
* [Arrays](https://www.w3schools.com/cs/cs_arrays.php)
* [Looping](https://www.w3schools.com/cs/cs_arrays_loop.php)

## Putting it all together

Open [this repl](https://replit.com/@MeganMcMahon1/WorkingWithLists#main.cs) and complete the following:
1. Fork the repl so that you have your own copy.
2. Run the program by clicking on the green play button!
3. Identify as many of the tools you learned about above as you can.  Make a [comment](https://www.w3schools.com/cs/cs_comments.php) above each line where you see something you recognize. You may not recognize everything in this code - that's ok!

** Instructor Note ** Check in with students and ask for volunteers to share their annotated code!

## Reflection Questions
Your instructor will create a chat thread for each of the questions below; when you're ready, add your reflection to the thread!
1. Look around you and see if you can group the objects that you see into one or more lists.  Ex: games, books.
2. What questions do you have about lists so far?
3. Imagine you are going to create an application like Instagram; what types of objects will you program need to know about? Take a look at the screenshot below for inspiration!

![](/Mod0/instagram.png)
