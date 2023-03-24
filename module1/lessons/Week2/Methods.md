---
layout: page
title:  Methods
---

## Learning Goals
* Define the terms Method, Argument, Return Value, and Object.
* Explain why we use methods
* Define methods in c#
* Understand how abstraction helps us program

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>
    <a href="https://replit.com/@launch-team/MethodsLessonFinished#main.cs">Here</a> is an example finished notes REPL.  Fork the starter code REPL yourself before beginning to keep it nice for future cohorts.</p>
</aside>


## Warm Up

```c#
string hello = "Hello World";
List<int> nums = new () { 1, 3, 5, 7 };

hello.ToUpper();
nums.Add(9);

Console.WriteLine(hello);
Console.WriteLine(nums);
Console.WriteLine(hello.ToUpper());
```

With a partner, try to identify all of the `methods` used in the code snippet above.

## What is a Method?

A **method** is a group of related instructions that achieve some purpose or responsibility.  In the warm up, `Add()` is a method that instructs the `nums` array to append something to the end of the list; `ToUpper()` is a method that **returns** a string in all uppercase.

> In a group, imagine that `ToUpper()` doesn't exist.  How might you achieve the same goal?

One huge benefit of methods is the reusability of code.  We _could_ recreate the functionality of `ToUpper()` adhoc, or whenever we need it in our program, but that would be very tedious and repetitive.  The method exists to cut down on repetition of repeated instructions.

In the warm-up example, we call methods on **objects** - we give the `ToUpper()` instructions to a specific string, and the `Add()` instructions to a specific list.

All methods _do_ something, they have some instructions.  Some methods have a **return value**.

Let's fork [this](https://replit.com/@launch-team/MethodsLessonStarter#main.cs) repl to use throughout this lesson.
![Image of assigning method calls to variables](/assets/images/module1/Week2/AssigningReturnValues.png)

In the image above, we can see that it is _sometimes_ possible to assign a variable based on a method call.  The method `ToUpper` has a **return value** that we can store in a variable; its job is to return an up-cased version of the string.  But, `Add()` has no return value; its job is to change the list in some way.

## Method Signature

Let's take a look at how we can define our own methods.

```c#
void Main()
{
	static void SayHello()
	{
		Console.WriteLine("Hello World");
	}
}
```

Here, we have **defined** the method `SayHello()` and indicated that it will have _no return value_. When we run this code, does anything happen?  Not yet!  A method definition is only telling our program that we now have a method that we can call at a later time.  To actually see "Hello World" printed to the console, we need to call the method:

```c#
void Main()
{
    // define the method
    static void SayHello()
    {
        Console.WriteLine("Hello World");
    }

    // call the method
    SayHello();
}
```

Another example:

```c#
void Main()
{
    static void Greet(string name)
    {
        Console.WriteLine($"Hello {name}");
    }

    Greet("Megan");
    Greet("Eric");
}
```

> With a partner: run the code above and describe what is happening on each line.  Compare it to `SayHello()` - what is similar? what is different?

`Greet` is a method that can take an **argument**.  Arguments are input to methods that allow them to complete their instructions appropriately.  In this case, we need to give the method a string that represents a person's name.

> With a partner: what do you think would happen if you try to call `Greet(13)`?

When we define a method that takes a string argument, that is the only datatype that the method will accept.

> Create a method that takes 2 arguments.

Let's look at one more example:

```c#
void Main()
{
    static int Add(int num1, int num2)
    {
        return num1 + num2;
    }

    Console.WriteLine($"1 + 1 = {Add(1, 1)}");
    Console.WriteLine($"1 + 2 = {Add(1, 2)}");

    int sum = Add(24, 67);
    Console.WriteLine($"24 + 67 = {sum}");
}
```

> with a partner, walk through this code explaining what is happening on each line.  What makes this method different from those above?

When a method has a **return value**, we must indicate what type of object will be returned, and explicitly `return` something from the method.

When we define new methods, we are creating a **method signature**

![Diagram of Method Signature](/assets/images/module1/Week2/MethodSignature.png)

A method signature includes the return type of the method (or `void` if there is no value returned), the name of the method, and any arguments necessary for the method to execute. We will discuss **static** in a later lesson 😊.

## Abstraction

One of the advantages of using methods is that we can build methods that rely on _other methods_ to complete their task. This means that we don't have to know about every single method in an application in order to use that application.

For example, if we are building a program for a business manager to process payroll.  There are a number of steps that need to happen for payroll to be processed:
1. Verify which employees are still employed
2. Calculate how much each employee should be paid in that period
3. Make Payments
4. Email notification of payment to each employee

If this was a manual process, each of these tasks is likely performed by a different person (not the business manager); so, we could think of these tasks as different methods.  The business manager does not need to know how to do all of these tasks, they only need to know how to start the process going.  In code this might look something like:

```c#
public void ProcessPayroll()
{
    EmploymentVerification(); //this method, and those below are defined somewhere else in the program. The manager doesn't care what this method look like, only that it is completed.
    CompensationCalculation();
    MakePayments();
    EmailNotifications();
}

ProcessPayroll();
```

This process of *hiding* some parts of the program from a user is referred to as **Abstraction**.  Abstraction is a practice where less complex functionality is exposed and more complex functionality is suppressed. In some ways, this is like a pyramid where higher level methods rely on lower level methods to take care of the details.

Think about how you might make a pot of coffee.  You need to know something about how coffee is made, but not everything.  You must add beans, and water, and then press a button to start the brewing process.  You do not need to know how the machine is accomplishing the actual brewing.

Abstraction is an object-oriented programming concept that means that complexity is being hidden from the user.  We will continue to build on this idea as we learn more about programming.

## Checks for Understanding
What will be the output of the following program:

```c#
void Main()
{
    static void Print(string content)
    {
        Console.WriteLine(content);
    }

    static int Add(int num1, int num2)
    {
        return num1 + num2;
    }

    static int Subtract(int num1, int num2)
    {
        return num1 - num2;
    }

    int num1 = Add(5, 10);
    int num2 = Subtract(100, num1);
    Print(num2.ToString());
}
```

What would happen if we didn't call `ToString()` on `num2`?