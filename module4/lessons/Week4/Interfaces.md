---
layout: page
title: Interfaces
---

## Introduction

Great job working on your research and presentation skills yesterday! Today we're going to get even more practice by following the same structure and diving into a different key topic: interfaces. 

Both interfaces and inheritance are key parts of well-organized object-oriented programs and are useful when working in any object-oriented language whether it's C#, Java, Python, or Ruby.

* Part 0: Reflection on how yesterday went
* Part 1: An instructor-led lesson introducing the topic of interfaces
* Part 2: Pair research to deepen your understanding of interfaces and how we have used them so far
* Part 3: A pair presentation to your classmates about what you learned

## Learning Goals

* Understand the topic of interfaces
* Identify how and why we have already used interfaces in MVC applications
* Improve the skill of independent technical research and presenting on a technical topic

## Part 0: Individual Reflection

We're going to start with a mini retrospective on how yesterday went. Individually, write down your thoughts on the following two questions. Then your instructor will call on folks to share out.

1. What went well about how you approached yesterday's research and presentation that you want to keep doing today? 
1. What do you want to do differently today?

## Part 1: What are Interfaces?

"An interface defines a contract. Any class or struct that implements that contract must provide an implementation of the members defined in the interface." 
-- [Microsoft Documentation on Interfaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface)

Let's take a look at an example. We'll create an interface `IEmployee` that defines the common behavior for all types of employees, and then implement this interface in two classes: `FullTimeEmployee` and `ContractEmployee`.

A repl with this example can be found [here](https://replit.com/@launch-team/Interfaces).

### Define the Interface
First, we define the IEmployee interface, which requires the property `Name` and methods `DisplayEmployeeInfo()` and `CalculateSalary()`. 

You'll see that the property(s) and method(s) are defined but not implemented. The convention is to start interface names with `I` to easily identify what is an interface.

```c#
using System;

// Step 1: Define the interface
public interface IEmployee
{
    string Name { get; set; }
    decimal CalculateSalary();
    void DisplayEmployeeInfo();
}
```

### Create Classes that Implement the Interface

We will now create two classes, FullTimeEmployee and ContractEmployee, that both implement the IEmployee interface. Each class provides its own implementation of the required members (properties and methods).

The syntax for a class implementing an interface is the same as a class using inheritance, we still use the `:` symbol. This is one reason why it's very helpful to start interface names with `I`.

```c#
// Step 2: Implement the interface in classes
public class FullTimeEmployee : IEmployee
{
    public string Name { get; set; }
    public decimal MonthlySalary { get; set; }

    public FullTimeEmployee(string name, decimal monthlySalary)
    {
        Name = name;
        MonthlySalary = monthlySalary;
    }

    public decimal CalculateSalary()
    {
        return MonthlySalary;
    }

    public void DisplayEmployeeInfo()
    {
        Console.WriteLine($"Full-Time Employee: {Name}, Monthly Salary: {MonthlySalary:C}");
    }
}

public class ContractEmployee : IEmployee
{
    public string Name { get; set; }
    public decimal HourlyRate { get; set; }
    public int HoursWorked { get; set; }

    public ContractEmployee(string name, decimal hourlyRate, int hoursWorked)
    {
        Name = name;
        HourlyRate = hourlyRate;
        HoursWorked = hoursWorked;
    }

    public decimal CalculateSalary()
    {
        return HourlyRate * HoursWorked;
    }

    public void DisplayEmployeeInfo()
    {
        Console.WriteLine($"Contract Employee: {Name}, Hours Worked: {HoursWorked}, Hourly Rate: {HourlyRate:C}, Salary: {CalculateSalary():C}");
    }
}
```


### Use The Interface to Work with Objects of Different Classes
```c#
// Step 3: Use the interface to work with objects of different classes
class Program
{
    static void Main()
    {
        IEmployee employee1 = new FullTimeEmployee("John Doe", 4000);
        IEmployee employee2 = new ContractEmployee("Jane Smith", 25, 160);

        employee1.DisplayEmployeeInfo();
        employee2.DisplayEmployeeInfo();

        
        //Or because of our use of an interface, you could also do the following!

        // Create a list of IEmployee to store the employees
        List<IEmployee> employeesList = new List<IEmployee>();

        // Add employees to the list
        employeesList.Add(employee1);
        employeesList.Add(employee2);

        // Display employee information from the list. 
        // This only works because we know both types of employees will have the same DisplayEmployeeInfo method because they implement the same interface!
        foreach (var employee in employeesList)
        {
            employee.DisplayEmployeeInfo();
        }
    }
}
```

The interface provides a common contract for both types, ensuring that each class has the required properties and methods. This allows us to interact with different types of employees in a unified and consistent way, promoting code reusability and flexibility.

### Another Example: IEnumarable

IEnumerable is one of the fundamental interfaces in C# that is widely used to work with collections of data. It is part of the System.Collections namespace and provides a contract for classes that represent sequences of elements. The primary purpose of IEnumerable is to enable iteration over a collection, such as arrays, lists, or custom data structures, using a foreach loop or LINQ methods.

Classes that implement the IEnumerable interface must implement certain methods that allow for moving to the next element, accessing the current element, and other key actions we associate with collections.

So when we write `@model IEnumerable<State>` we're saying that the data passed to our view can be of any class that implements the `IEnumerable` interface. This could be a list, a dictionary, a string, an array, or other classes. And we know that whatever gets passed in we can iterate over using loops or LINQ methods.

## Part 2: Pair Research on Interfaces

The basics of interfaces in C# are almost certainly still confusing. Start by using Google to find 2-3 more resources introducing C# interfaces to read and deepen your understanding. Work together as a partnership, one of the best ways to learn a topic is by explaining. Try to explain what you are learning to each other!

✅ CHECKPOINT ✅: Before continuing, work together to write a Slack message to your instructor explaining interfaces in your own words. Imagine your audience was you from last week and isn't familiar with the topic. Create your own example to use in the explanation. I recommend using a repl to code your example and try things out.

Once you get the go-ahead from your instructor, move on to thinking about and researching why this might be helpful.

1. What are some of the benefits of using interfaces?
2. What might be some of the disadvantages of using interfaces?

Next, look for examples of where you have used interfaces previously in this course. Because we already talked about `IEnumarable`, look for a different example. There are multiple!

*Hint: Interfaces usually start with the work `I` and in Visual Studio you can hover over something you think might be an interface to learn more.*

1. How is an interface used here?
1. Why is an interface used here?

✅ CHECKPOINT ✅: Before continuing, work together to write a Slack message to your instructor explaining the example of an interface that you found. Be sure to include how and why an interface is used here.

Finally, move on to digging into at least one more advanced topic. Here are some ideas, or feel free to dig into your own questions!

1. What happens if a class doesn't implement all the methods of an interface in C#?
1. What are some of the most commonly used interfaces in C# and .NET?
1. Can a class implement multiple interfaces? If yes, how can you do that?
1. How do you use an interface to achieve polymorphism in C#? (You will also need to google the term `polymorphism` for this one!)
1. Can you define properties in an interface with different access levels (e.g., public get and private set)?
1. Can you provide default implementations for interface methods in C#?
1. Does an interface have a constructor? Why or why not?
1. What is an abstract class? How is it different from an interface?

## Part 3: Presentation Requirements

Each pair will have 7 minutes to present, and each partner should present for roughly equal time. Classmates will then have a couple of minutes to ask questions.

1. Share at least one benefit of using interfaces and one potential disadvantage.
1. Share one example of an interface from a past MVC project. Explain how and why an interface is used here.
1. Explain one advanced part of interfaces you learned about today that was not covered in this morning's lesson (Could be one of the questions above or something else!). Use an example in your explanation.
1. Share one resource you found useful while researching.

<aside class="instructor-notes" markdown="1">
<p><strong>Instructor Note</strong><br>This final checkpoint is a pretty nuanced question so I recommend giving students time to think on this individually, then talk to a partner, then call on folks to contribute to a class discussion.</p>
</aside>
## Final Checkpoint
1. How would you describe the difference between `Inheritance` and `Interfaces`?
