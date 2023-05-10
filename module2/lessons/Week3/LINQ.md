---
layout: page
title: LINQ
---

## Learning Goals
* Understand why we use LINQ
* Practice basic LINQ methods
* Recognize LINQ Query Syntax

## Warm Up

```c#
var names = new List<string>() {
    "Connor",
    "Megan",
    "Charlie",
    "Molly"
};
```

For the `names` list above, use `for` or `foreach` to get the following:
* A list of names that start with "C"
* A list of names that are 5 letters long
* 🌶️The first name that contains an 'e'

## LINQ

When working with collections (lists, arrays, dictionaries), we often need to use `for` or `foreach` to manipulate that list to give us some infomration about it.  We might need to get a subset of the collection, find a specific element in the collection, or get some information _about_ a collection (like if the collection contains a specific object).  These kinds of functions come up so often that many languages create special methods to handle working with collections.

In C#, these additional methods are in the LINQ package.  Most C# developers use LINQ methods to accomplish what you just did in the warm-up.  LINQ makes these tasks easier.

We are going to use [this repo](https://github.com/turingschool-examples/Launch_LinqLesson) to learn some LINQ methods.  Fork and clone the repo, and take about 5 minutes to familiarize yourself with the current code.

### Where

When you are trying to get a **subset** of a collection, you can use the LINQ method `WHERE`.

Compare the two approaches for filtering a list below:

```c#
var names = new List<string>() {
    "Connor",
    "Megan",
    "Charlie",
    "Molly"
};

// Using `foreach`
var cNamesForeach = new List<string>();

foreach (var name in names)
{
    if (name[0] == 'C')
    {
        cNamesForeach.Add(name);
    }
}

// Using LINQ

var cNamesLinq = names.Where(name => name[0] == 'C');
```

`Where` is a method that takes a [lambda expression](/module2/preparation/Week3/LINQ) as an argument.  In this case, the lambda expression is telling `Where` _how_ to filter the collection.  We want to look at each `name` and filter to only those names where `name[0] == 'C'` is true.

> With a partner, in the starter repo, work through the exercises under `// Filtering Collections`.
> Be ready to share out!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>As students are sharing, we want them to describe how the lambda expression is being processed by the Where method.</p>
</aside>

### OrderBy

You can also use LINQ to order a collection by a specific characteristic.

```c#
var orderedNames = names.OrderBy(name => name.Length);
```

In the example above, we will get a list of the names ordered from shortest to longest.

> With a partner, in the starter repo, work through the exercises under `// Ordering Collections`
> Be ready to share out!

Fun fact:   You can reverse the order by using `OrderByDescending()`!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>We want to highlight for students that we should only order records by a 'comparable' object.  We shouldn't order songs by Artist, but we should order songs by Artist.Name.</p>
</aside>

### Count

LINQ methods do not always return a collection - some LINQ methods return an number!  For example, `Count` returns an int that represents the number of elements that match a certain criteria.

```c#
var numberOfCNames = names.Count(name => name[0] == 'C');
```

One thing that can be helpful when working with LINQ, is to verbalize what the method is doing.  For example, you might describe the method above as: `Count is taking a tally of each name that starts with the letter 'C'`.

> With a partner, in the starter repo, work through the exercises under `// Counting Records`
> Be ready to share out!


### Any and Contains

LINQ methods can also return boolean values that tell us something about a collection.  For example, `Any` tells us if any element matches a given criteria, and `Contains` tells us if the collection has a specific element.

```c#
var anyZNames = names.Any(name => name[0] == 'Z');

var containsMegan = names.Contains("Megan");
```

You'll see that `Contains` is slightly different than the other LINQ methods that we have seen so far - it does not take a lambda expression!  The input for `Contains` is the object that you are searching for.  Contains tells us if that exact object is in the collection.

> With a partner, in the starter repo, work through the exercises under `// Characteristics of the Collection`
> Be ready to share out!

### Combining Methods

As you work on more complex queries, you may get to a point where you need to combine multiple LINQ statemnts.  The good news is that LINQ is specifically designed to do this!

One of the more common use cases for combining LINQ methods is ordering a filtered list.  

> With a partner, review the code below and answer the following questions:
> 1. How many methods are being executed?
> 2. Why is this statement on multiple lines?
> 3. Could we re-order this statement?
> 4. 🌶️What does `Distinct()` do?
>
> Be ready to share out!

```c#
var orderedCNames = names.Where(name => name[0] == 'C')
    .OrderBy(name)
    .Distinct();
```

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Use the last question about `Distinct` to introduce the [LINQ method docs](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.distinct?view=net-7.0)</p>
</aside>

### Researching
There are too many LINQ methods to cover in one lesson.  LINQ is a tool that will encourage a lot of research as you learn about new (to you) methods.  Many tasks you need to complete with a collection of data can be done with a LINQ method, so it is good to familiarize yourself with some of the documentation.

> With a partner, research the following LINQ methods.  Try to use each method to answer the song-related questions included:
> 1. All - Do all of the songs have a playCount higher than 10?
> 2. Sum - If I made a playlist with all of the songs, how long would the playlist be?
> 2. First - What is the first song in the list by Talking Heads?
> 4. 🌶️ How long would a playlist just for Madonna songs be?


## Query Syntax

To this point, we have used **method syntax** for creating LINQ queries.  This is the preferred way to create LINQ queries, but it is not the _only_ way.  As you are researching LINQ, you may come across **query syntax**.  You do not need to be proficient at query syntax, but it is good to recognize it when you see it on documentation, or blog posts. 

Take a look at the code below:

```c#
class QueryVMethodSyntax
{
    static void Main()
    {
        int[] numbers = { 5, 10, 8, 3, 6, 12};

        //Query syntax:
        var orderedEvenNumsQuery =
            from num in numbers
            where num % 2 == 0
            orderby num
            select num;

        //Method syntax:
        var OrderedEvenNumsMethod = numbers.Where(num => num % 2 == 0).OrderBy(n => n);

        Console.Write("Query Syntax: ");
        foreach (int i in orderedEvenNumsQuery)
        {
            Console.Write(i + " ");
        }

        Console.WriteLine();
        Console.Write("Method Syntax: ");
        foreach (int i in orderedEvenNumsMethod)
        {
            Console.Write(i + " ");
        }
    }
}
/*
    Output:
    Query Syntax: 6 8 10 12
    Method Syntax: 6 8 10 12
 */
 ```

 Query and Method syntax both accomplish the same thing, but Method syntax is a bit easier to write and read.  So, we will be using Method syntax when using LINQ.

## Checks for Understanding
```c#
List<int> numbers = new() { 16, 44, 128, 164, 200, 98, 192, 175, 17, 65 }
```
* If we did not have the LINQ method `Where()`, how would you get a list of numbers greater than 50 from `numbers` above?
* Write the LINQ query to return a list of numbers greater than 20 ordered from largest to smallest.
* Write the LINQ query to return the sum of all odd numbers.
