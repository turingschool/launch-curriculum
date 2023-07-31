---
layout: page
title: Inheritance
---

## Introduction

The ability to independently learn a topic is a key skill for developers and one we will focus on this week. The world of technology is huge and constantly changing. In your future development roles, you will need to independently learn new technology and the best developers report back what they've learned to their team. With that in mind, today's lesson on inheritance is divided into 3 parts.

1. Part 1: An instructor-led lesson introducing the topic of inheritance
2. Part 2: Pair research to deepen your understanding of inheritance and how we have used it so far
3. Part 3: A pair presentation to your classmates about what you learned

## Learning Goals

* Understand the topic of inheritance
* Identify how and why we have already used inheritance in MVC applications
* Improve the skill of independent technical research and presenting on a technical topic

## Part 1: What is Inheritance?

"Inheritance is one of the fundamental attributes of object-oriented programming. It allows you to define a child class that reuses (inherits), extends, or modifies the behavior of a parent class. The class whose members are inherited is called the base class. The class that inherits the members of the base class is called the derived class." - [Microsoft Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/inheritance#background-what-is-inheritance)

Here's how inheritance works in C# and ASP.NET:

Defining a Base Class (Parent Class):
You start by defining a class that will serve as the base class, containing common properties and methods that you want to reuse in derived classes.

```c#
// Base class definition
public class Animal
{
    public string Species { get; set; }
    public int Age { get; set; }

    public void Move()
    {
        Console.WriteLine("Animal is moving.");
    }
}
```

Creating a Derived Class (Child Class):
To create a derived class, you use the `:` symbol and specify the base class from which you want to inherit. The derived class will have access to all the public and protected members of the base class.

```c#
// Derived class definition inheriting from Animal
public class Dog : Animal
{
    public string Breed { get; set; }

    public void Bark()
    {
        Console.WriteLine("Woof! Woof!");
    }
}
```

Using Inherited Properties and Methods:
With the inheritance relationship established, you can now create objects of the derived class and use both the properties and methods defined in the base class.

```c#
class Program
{
    static void Main()
    {
        Dog dog = new Dog
        {
            Species = "Canine",
            Age = 3,
            Breed = "Golden Retriever"
        };

        Console.WriteLine($"Species: {dog.Species}");
        Console.WriteLine($"Age: {dog.Age}");
        dog.Move(); // Inherited method from Animal class
        dog.Bark(); // Method from the Dog class
    }
}
```

Output:
```
Species: Canine
Age: 3
Animal is moving.
Woof! Woof!
```

In this example, the Dog class is a derived class inheriting from the Animal base class. The Dog class has its own property Breed and method Bark, while it also inherits the Species, Age, and MakeSound method from the Animal class.

## Part 2: Pair Research on Inheritance

The basics of inheritance in C# are almost certainly still confusing. Start by using Google to find 2-3 more resources introducing C# inheritance to read and deepen your understanding. Work together as a partnership, one of the best ways to learn a topic is by explaining. Try to explain what you are learning to each other!

✅ CHECKPOINT ✅: Before continuing, work together to write a Slack message to your instructor explaining inheritance in your own words. Imagine your audience was you from last week and isn't familiar with the topic. Create your own example to use in the explanation. I recommend using a repl to code your example and ry things out.

Once you get the go-ahead from your instructor, move on to thinking about and researching why this might be helpful.

1. What are some of the benefits of using inheritance?
2. What might be some of the disadvantages of using inheritance?

Next, look for past examples of where you have used inheritance previously in this course.
1. How is inheritance used here?
1. Why is inheritance used here?

✅ CHECKPOINT ✅: Before continuing, work together to write a Slack message to your instructor explaining the example of inheritance that you found. Be sure to include how and why inheritance is used here.

Finally, move on to digging into a couple more advanced topics. Here are some ideas, or feel free to dig into your own questions!

1. In C# can you inherit from multiple classes or just one?
1. How does C# handle constructors in inherited classes?
1. Can I prevent a class from being inherited by other classes?
1. What are access modifiers in inheritance (public, protected, private, etc.), and how do they affect inherited members?
1. What happens if you define the same method in the parent class and the child class?
1. What is method overriding?
1. What are abstract classes and when should I use them?

## Part 3: Presentation Requirements

Each pair will have 7 minutes to present, and each partner should present for roughly equal time. Classmates will then have a couple of minutes to ask questions.

1. Share at least one benefit of using inheritance and one potential disadvantage.
1. Share one example of inheritance from a past MVC project. Explain how and why inheritance is used here.
1. Explain one of the advanced parts of inheritance you learned about today that was not covered in this morning's lesson (Could be one of the questions above or something else!). Use an example in your explanation.
1. Share one resource you found useful while researching.