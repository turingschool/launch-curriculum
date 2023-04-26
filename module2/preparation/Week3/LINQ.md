---
layout: page
title: LINQ Preparation
---

## Pre-work for [LINQ](/module2/lessons/Week3/LINQ)

Before our lesson on LINQ, we need to get familiar with some additional C# syntax - `Lambda Expressions`.  Also referred to as `anonymous functions`, lambda expressions are a tool used in many different programming languages.  The goal of this preparation is for you to **see** and **execute** some Lambda expressions - we do not expect you to be a master of Lambda expressions!

Before we define what a lambda expression **is**, let's look at some code examples to see what a lambda expression **does**.

To follow along with the examples below, you can clone [this GitHub Repo](https://github.com/turingschool-examples/Launch_LambdaExpressions)

### Reviewing the Existing Functionality

In the program, we have two methods that are fairly simple - they each perform a caluclation on a number, and return the integer result of that calculation.

```c#
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(Square(5));
        Console.WriteLine(Double(5));
    }

    static int Square(int number)
    {
        return number * number;
    }

    static int Double(int number)
    {
        return number * 2;
    }
}
```

This code works just fine, but there are other ways we could accomplish the same goal.  In C# (and many other programming languages), we can refactor very simple methods into `Lambda Expressions`

### Refactored into Lambda

```c#
    class Program
    {
        static void Main(string[] args)
        {
            Func<int, int> Square = number => number * number;
            Func<int, int> Double = number => number * 2;

            Console.WriteLine(Square(5));
            Console.WriteLine(Double(5));

            Console.WriteLine(Square(3));
            Console.WriteLine(Double(3));
        }
    }
```

This probably looks a little weird, but if we dig into what's happening, we can draw some similarities between the `Square` and `Double` lambda expressions and methods.  Like methods, lambda expressions:
* Take input that must be of a specified type.
* Output a return value that must be of a specified type.
* Have a name that we use to execute the expression.

![](/assets/images/module2/Week3/LambdaExpressionDiagram.png)

### The Power of Lambda

One benefit of a lambda expression is that they can be used like objects in our programs.  Specifically, they can be passed as arguments into certain methods.

Consider an alternative refactor to our program.  Both `Square` and `Double` take an int as an argument, and perform some operation on that number, and return an int.  Because lambda expressions are a type of object, we could create a method that can process a given operation on a given number:

```c#
    class Program
    {
        static void Main(string[] args)
        {
            var squared = Calculate(5, number => number * number);
            var doubled = Calculate(5, number => number * 2);
            var tripled = Calculate(5, number => number * 3);

            Console.WriteLine($"Square: {squared}");
            Console.WriteLine($"Double: {doubled}");
            Console.WriteLine($"Triple: {tripled}");
        }

        static int Calculate(int number, Func<int, int> operation)
        {
            return operation(number);
        }
    }
```

Try running the code above with different input (something other than 5).  How does that change the result?

### Lambdas in the Wild

As you will see in our upcoming lessons, lambda expressions are very useful for working with data sets.  Over the next few days, you will become comfortable using lambda expressions as inputs to built-in methods.  

While lambda expressions are very useful and common in built-in methods; it is very unlikely that you will be regularly (if at all) creating methods that take a `Func` type input.  We created one today just to show you a bit more about how lambda expressions can be used.

**A Reminder**: This preparation work is meant to get you _familiar_ with the structure of a lambda expression.  At this point, you are not expected to be an expert!



