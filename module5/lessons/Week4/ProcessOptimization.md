---
layout: page
title: Process Optimization
---
* BigO and Process Optimization (Time/space trade-offs)
We want this lesson in Mod5, we still need to decide exactly what goes into it.
    - nested for-loops is bad
    - Understand the impact of poor optimization
    - Introduce the problem of over-iteration and optimization
    - Gain a familiarity with Big0 terminology (I've heard of this thing, but may not be an expert)

## Learning Goals

## Warm Up

Today, we are going to discuss the impact of data structures and algorithms on the programs that we write.  It will be helpful to have a basic understanding of what those words mean.

<section class='call-to-action' markdown='1'>

Spend 5 minutes to research `data structures` and `algorithms` as they relate to programming.  Be ready to share your own definition of these two concepts!

</section>

<section class='instructor-notes' markdown='1'>

For the purpose of this lesson, we want students to know that:
* data structure is any kind of special format for storing data.  This could be: string, array, dictionary, linked list, class, etc...
* algorithm is any process for accomplishing a goal, typically related to iterative actions, or repeatable processes.

</section>

## The Time/Space Tradeoff

Data structures and algorithms are essential tools for software development - they help you organize, manipulate, and optimize your data and code. However, choosing the right data structure and algorithm for a given problem is not always straightforward, as you may have to consider the trade-offs between **time and space complexity**. 
* **Time Complexity** - A measure of the amount of time needed to complete an operation or algorithm.
* **Space Complexity** - A measure of how much memory is needed to complete an operation or algorithm.

Time and Space are both scarce resources.  If developers do not consider time/space complexity, they can inadvertently develop applications that are difficult, or impossible, to use.

Time is important because our users will refuse to use applications that take an overly long time to process data.  Think about when you visit a website and it takes more than a few seconds to load; how likely are you to wait, and for how long?

Space is important because there is just only so much of it - our computers have a set amount of memory, and we can't exceed it.  Similarly, the servers that host our web applications have a set amount of memory and only a portion of that may be allocated to our application!  Increasing the memory that our applications have access to costs money - a good developer keeps this in mind!  Also, we need to consider space limitations that our _users_ may have; users of web applications operate on a wide variety of hardware and software configurations that can impact the amount of space we can rely on. This means that we need to be very careful about the amount of processing we are pushing to a client.

Generally, time and space complexity have an inverse impact on each other - the better your time complexity is, the worse your space complexity, and vice-versa. So, how do we decide what to focus on?  Generally, we want to focus on what we can most control, which is the **time complexity** of our algorithms.  Though, you should always check in with your team and managers to make sure your priorities are in line with the organization!

## Nested Iteration and OverIteration

Generally, when we are talking about time/space complexity, we are trying to solve some problem that involves **iteration**.  When we need to do the same thing with or to many different records, there can be good and less-good approaches. Let's dive in to the example below:

<section class="call-to-action" markdown='1'>

Let's practice solving a problem at a high level.  Just focus on writing out pseudo code, **NOT** actual code.

**Problem:**
- You have an array which contains all numbers from 1 to 1 million.
- The numbers are randomly ordered/shuffled in the array.
- One number is in the array twice, also at some random location.
- How might you find the duplicate value?

    <section class="note" markdown='1'>
    ### Note

    There are a couple of solutions to the problem above that have various pros and cons.  Don't worry about trying to get the perfect solution.  Instead, practice breaking down the problem and thinking about the approach you could take.
    </section>
</section>

<section class="answer" markdown='1'>
### Potential Solution A  

**Sort/Compare**
```
// sort numbers in ascending order
// iterate over numbers
  // look at neighbor.  If they are the same, return the value
```

One potential solution is to sort the array of numbers and then iterate over the numbers again, comparing each value to it's neighbor to see if they are the same.
</section>

<section class="answer" markdown='1'>
### Potential Solution B  

**Nested Lookup**
```
// iterate over array of numbers
  // iterate over the array again and compare it to the rest of the array
    // If a match is found, return the value
```

Another potential solution is to iterate over the array of numbers, and for each iteration, compare it to the rest of the array to see if a duplicate is found.
</section>

<section class="answer" markdown='1'>
### Potential Solution C  

**Hash/Obj Tracker**
```
// iterate over the array and add each value to a hash
  // As soon as the value of a key is 2, you've found the duplicate
```

A third solution might include iterating over an array and adding it as a key to an object/hash, counting the number of instances in the value.  As soon as a key already exists and is increased to 2, you've found your duplicate.
</section>

### Choosing an Algorithm
All of the options above will work to solve the problem, so how do we know which is 'best'?  We need some way of calculating or describing the time-complexity of an algorithm.  Typically, we describe time complexity in terms of how many steps it will take to complete in relation to an increasing number of elements.

<section class='call-to-action' markdown='1'>

In small groups, determine how many 'steps' are completed for the two code snippets below.
* How many steps are represented by the current code?
    * What if num[1] is a duplicate of num[0]?
    * What if num[9] is a duplicate of num[5]?
* How many steps would there be if `nums` had 25 elements?
* How many steps would there be if `nums` had 50 elements?

**Option 1**  
```c#
// find the duplicate
int[] nums = { 36, 84, 75, 20, 30, 44, 17, 98, 44, 92, 27 };
int? duplicate = null; // Initialize duplicate as null

for (int i = 0; i < nums.Length; i++)
{
    for (int j = i + 1; j < nums.Length; j++)
    {
        if (nums[i] == nums[j])
        {
            duplicate = nums[i];
        }
    }
}
Console.WriteLine(duplicate);
```
**Option 2**
```c#
int[] nums = { 36, 84, 75, 20, 92, 44, 17, 98, 92, 27 };
Dictionary<int, int> countOfNums = new Dictionary<int, int>();

foreach (var num in nums)
{
    if (countOfNums.ContainsKey(num))
    {
        Console.WriteLine(num);
        break;
    }
    countOfNums.Add(num, 1);
}
```
</section>

<>

## Big O

It's not very useful to have to describe algorithms in *exact* number of steps for every possible number of elements.  So, developers describe time complexity using mathematic expressions.  We call these expressions **Big O Notation** (big 'oh').  The BigO of an algorithm describes the _worst-case scenario_: what is the maximum number of steps an algorithm will take in relation to how the dataset grows.

When describing BigO, we use `"n"` to signify the amount of data. The most common examples you might see include:

- O(1)
- O(log n)
- O(n)
- O(n log n)
- O(n^2) (aka, n-squared)

We'll discuss each of these in order from least complex (best performance) to most complex (worst performance).

<section class="answer" markdown='1'>
### Constant Time - O(1)

**Description:**
- No matter how much data there is, it takes the same number of operations

**Examples:**
- Simple math operations and assignment operators
- Invoking a function
- Accessing an array by index position
- Accessing a property in an object/hash by its attribute/key
</section>

<section class="answer" markdown='1'>
### Logarithmic Time - O(log n)

**Description:**
- Every step/action you take, you cut out half of the work.

**Examples:**
- "Binary search" using a binary tree.  An example of doing this might include looking up a word in a dictionary.
</section>

<section class="answer" markdown='1'>
### Linear Time - O(n)

**Description:**
- Complexity grows in direct proportion to the size of the input data.

**Examples:**
- Iteration over an array or the keys of an object/hash with a `for` loop or `while` loop
- Using array prototype methods/enumerables such as `map` or `reduce`
- Anything that looks at, or processes, every element in a data structure.
</section>

<section class="answer" markdown='1'>
### Linearithmic Time - O(n log n)

**Description:**
- Often is a nested iteration where within each operation done in linear time, there are actions being done in logarithmic time over the same size of data

**Examples:**
- The most efficient algorithms for sorting a list (quicksort and mergesort are the names of two very efficient sorting algorithms!)
</section>

<section class="answer" markdown='1'>
### Quadratic Time - O(n^2)

**Description:**
- Nested loops over the same or similarly sized dataset

**Examples:**
- Some inefficient sorting algorithms such as `bubble sort`
- Anytime you have nested loops or iteration methods
</section>

<section class="note" markdown='1'>

Some Key Considerations

Usually when calculating Big O notation, an algorithm doesn't fall nicely into one of the categories above. It's more likely that an algorithm combines some of the given strategies. Here are some key things to keep in mind:

* When operations are sequential, their complexities add together
* When operations are nested (within loops for example), their complexities multiply
* When calculating Big O, we don't care about *constants* or *coefficients*. For example `O(2n + 1)` is simplified to `O(n)`
* When calculating Big O, if your algorithm requires several sequential steps, your Big O notation would only list the worst of those complexities. For example, `O(n + n^2)` would be simplified to `O(n^2)`.

</section>

<section class="call-to-action" markdown='1'>

With a partner, identify the BigO notation for each of the following code snippets.  Be ready to share out why you believe this is the correct identification!

<section class='answer' markdown='1'>

### Algorithm A

Imagine you’re a librarian who needs to go through each book on a shelf to find the one requested by a patron.
```c#
public bool ContainsBook(Book[] shelf, Book target)
{
    foreach (Book book in shelf)
    {
        if (book == target)
            return true;
    }
    return false;
}
```
</section>

<section class='answer' markdown='1'>

### Algorithm B
Imagine you’re hosting a party and want to introduce each person to every other person in the room.
```c#
public void IntroduceEveryone(string[] people)
{
    foreach (string personA in people)
    {
        foreach (string personB in people)
        {
            if (personA == personB)
            {
                continue;
            }
            Console.WriteLine($"{personA} says hello to {personB}");
        }
    }
}
```
</section>

<section class='instructor-notes' markdown='1'>

Algorithm A is O(n). Algorithm B is O(n^2)

</section>

</section>

## Checks for Understanding
* Why do we want to avoid Nested Iteration?
* What is Big O?  What does it describing?
* Explain the differences between "time complexity" and "space complexity".


#### Resources
- [Big-O Cheat Sheet](http://bigocheatsheet.com/)
- [Beginners Guide to Big-O](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
- [Big-O Misconceptions](http://ssp.impulsetrain.com/big-o.html)