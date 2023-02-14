# Collections

## Learning Goals
* Define and use **arrays** and **lists**
* Identify key differences between **arrays** and **lists**
* Define and use a **dictionary**
* Iterate through collections with `foreach` and `for`

<!-- There are three common ways that c# manages groups or lists of data. The most common is to use an **Array**.  The other two are using a **List** and a **Dictionary**. -->
<!-- Generally, in programming, these lists are referred to as **Arrays**. -->
Up to this point, we have worked with single pieces of data: a string, a number, a date.  But, often we want to work with a list or group of many strings, numbers, or other datatypes.  There are three common ways that c# manages a collection of data. **Array**, **List** and **Dictionary**.

## Array

The most common method to manage a list of data is an **Array**. A C# array allows you to store a sequence of values in a single data structure. In other words, an array is a single variable that can hold many values. 

Work through [this arrays tutorial](
https://docs.microsoft.com/en-us/learn/modules/csharp-arrays/1-introduction) (including the Knowledge Check at the end!)

In your notebook, answer the following questions:
    * What is an array?
    * How is an array different from a string?
    * Given this array: `string[] users = { "John", "Paul", "George", "Pete" }`, how would you change `"Pete"` to `"Ringo`?

<!-- Where are they answering these questions?
From yesterday's lab work, in a notebook, answer the following questions.

1. What is an **array**?  How is it different from a string or integer?
1. What is at index 2 in this array: `string[] cars = { "Chevy", "Ford", "Toyota", "Tesla" }`
1. What are some drawbacks to using an array? -->

The idea of a list of elements organized in one place, like an array, is a common function of all modern programming languages.  We will see collections of data organized into lists all over our projects.  While the concept of a list of elements is common among languages, the way that each language works with those lists can be slightly different.

<!-- There are three common ways that c# manages groups or lists of data; one of which is an Array.  The other two most common ways are with **Lists** and **Dictionaries**. -->

## List
<!-- You ask for drawbacks of an array in the above question and then say it right below - consider formatting adjustment? ✅-->
One of the major drawbacks of an array is that we can not add or remove element positions in the array. In other words, an array that is created to store 5 strings, will always have 5 **elements** in it - no more, no fewer.  An array is always the same size - great for storing collections of information that never change (like days of the week, or suits in a deck of cards), but not so great at storing information that will change in size.

Luckily, there is a built-in object in c# called a [**collection**](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections) that helps with this problem.  There are different types of collections, but today we will be focusing on **lists** and **dictionaries**.

A list is very similar to an array - it is an **ordered** collection that can hold any number of related objects of the same type.  When creating a new list, you can use an **initializer**, or not.  An **initializer** allows us to create a list with elements already in it.

<!-- Might be worth calling out more explicitly the difference between using an initializer and not. For example, it appears that all Lists have an Add() method? Could be worth calling out that observation and quickly adding context for how it works? -->
```c#
// with initializer

var dogBreeds = new List<string> { "labrador", "golden retriever", "poodle" }

// without initializer
var dogBreeds = new List<string> ();
dogBreeds.Add("labrador");
dogBreeds.Add("golden retriever");
dogBreeds.Add("poodle");
```

All lists, regardless of how they are first created, can respond to some built-in methods, like `Add()`.  You can find a list of these methods on the [Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-6.0)

Just like arrays, a list can only contain **elements** of the same type - this is why we must declare what kind of object a List will contain.

### Accessing and Manipulating List Items
<!-- Where is this work happening? An already built REPL with some starter code might be a good scaffolded approaach here. -->

<!-- At this point do students have a way to validate if they successfully completed the task? I'm not seeing how. We might need to move the foreach console.writeline part up? -->
> With a partner, take a look at the resources linked below, and see if you can accomplish the following:  
> 1. Create a new Console Application in Visual Studio called 'Collections'
> 1. In 'Program.cs', create a variable `dogBreeds` that holds a `List<string>` of breeds (you can use the data from the example above)
> 1. [Resource](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections#BKMK_SimpleCollection): Add another dog breed to `dogBreeds`.
> 2. [Resource](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections#BKMK_SimpleCollection): Remove "poodle" from the list.
> 3. [Resource](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.sort?view=net-6.0): Use a method to sort the list alphabetically.
> 4. [Resource](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0): Use the list to print "GOLDEN RETRIEVER" to the console.
<!-- Love this inclusion of modeling how to search/utilize documentation -->
** Instructor Note**: walk throught these examples showing _how_ you would research what to do.

## `foreach`

One of the benefits of holding information in a collection is the ability to do the same action to/with each item in the collection without repeating much code.

Imagine you need to print each dog breed to the console.  You might do something like:

```c#
Console.WriteLine("Dog Breeds:");
Console.WriteLine(dogBreeds[0]);
Console.WriteLine(dogBreeds[1]);
Console.WriteLine(dogBreeds[2]);
```

This isn't too bad, but what if you needed to print a list of all 199 dog breeds recognized by the Westminster Kennel Club? This would be A LOT of repeated code.
<!-- I think having students sort using a For Loop is a great idea here!  -->
** Instructor Note ** Good place to get the students together to see if they can use a regular `for` loop to solve this problem.

When we need to do the same thing to/with an element in a collection, we can use a `foreach` loop:

```c#
foreach (var breed in dogBreeds)
{
    Console.WriteLine(breed);
}
```

> Take a moment to see if you can describe what might be happening in the code above - use what you know about a regular `for` loop!

A `foreach` is an **iterator**; it allows us to step through a collection element by element and do something with that element (in this case a single `breed`).  

## Dictionary

A list is great for singularly grouped collections.  But, we often need a little more organization for our collection.  For example, we might want to store a collection that represents a store inventory.  Consider the following list of items:

```
3 toasters
256 nails
1 mower
5 dog bowls
```

This _is_ a list, but it's not really made up of single elements - it is made up of **pairs** of information.  Each piece of information, or **element**, indicates an item AND the quantity on hand.  If we needed to store this idea in an array or list, it might look something like:

```c#
var inventory = new List<string> {
    "mower",
    "toaster",
    "toaster",
    "toaster",
    "dog bowl",
    "dog bowl",
    "dog bowl",
    "dog bowl",
    "dog bowl",
    "nail",
    "nail",
    "nail",
    "nail",
    // lots more nails.......
}
```

This `inventory` does technically hold the information we need, but not in a very understandable way.  Compare that to the **dictionary** below:

```c#
var inventory = new Dictionary<string, int> {
    {"mowers", 1},
    {"toasters", 3},
    {"dog bowls", 5},
    {"nails", 256}
}
```

Much more readable!  We now have a collection of **key/value** pairs.  The keys are the inventory item, and the values are the quantity of that item.  When working with an array or list, we access specific elements with it's **index**.  But, a dictionary is an **unordered** collection, so there is not the concept of an index.  Instead of accessing specific elements with an index, we will access specific **values** with their **key**.

In an Array or List, the index is a label for an element; similarly, in a Dictionary, a key is a label for a specific value. We use these labels (index or key) to access specific information (element or value).

```c#
Console.WriteLine( $"toasters: {inventory["toasters"]}" );
Console.WriteLine( $"dog bowls: {inventory["dog bowls"]}" );

/* Output:
toasters: 3
dog bowls: 5
*/
```

> With a partner: 
> * Try to add a new key/value pair for an existing key `inventory.Add("nails", 7234);`. What happens?  And why?
> * Access the value of "toasters".
> * Add 2 to the value of "dog bowls"
> * Try to access the value of a key that doesn't exist, like "cups"? Can you predict what will happen?
> In your own words, describe to each other what a key and value are.

<!-- Before moving on to iterating over a dictionary, I think it might be helpful to do some more explicit exploration and/or explanation of key/value pairs -->


#### Iterating Over a Dictionary

As with a list, you can also iterate over a dictionary collection.  Try running the code below; really think about what is happening on each line.

```c#
foreach (var (item, qty) in inventory)
{
	Console.WriteLine($"key: {item}, value: {qty}");
};
```

## Check for Understanding
* What is the index of the first element in an Array or List?
* Create an Array of the names of your favorite foods; let's call it `favoriteFoods`.
* Imagine that you know need to change the list of your favorite foods (you've found you absolutely love green olives).  Recreate your `favoriteFoods` to the most appropriate collection type.
* Write a program that will output a summary of your favorite foods.  Include the names of your favorite foods and the number of favorite foods that you have.  For example:
```
Megan has 5 Favorite Foods:
Popcorn
Pepperoni Pizza
Pears
Pecans
Praline
```
* Describe the differences and similarites between an Array, a List, and a Dictionary.  What are some pros and cons of each?
* Create a Dictionary of your favorite things.  The keys should be: "favorite food", "favorite movie", "favorite book", etc...

<!-- This CFU block is a little light on dictionary work - is this intentional? The learning goals call out being able to use a dictionary, which seems like we should have some CFU content around actually creating one. ✅ -->

<!-- I could see a situation where arrays, lists and dictionaries all being their own separate lesson, which could make it easier to chunk out content AND would make it easier for students to circle back to resources on the Launch site once live? -->

<!-- I am recognizing that it can be hard for me to truly see your vision for how a lesson and lab work together since your current workflow seems to be work on a bunch of lessons and then circle back on labs. Does adjusting workflow to 1) create lesson 2) build associated lab present any challenges that I am not considering? I also acknowledge that there is a "flow" you can get in where working on one type of task helps with productivity so feel free to push back here! -->
