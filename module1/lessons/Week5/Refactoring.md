# Refactoring

## Learning Goals
* Define 'Refactoring' in programming terms.
* Define and implement the Single Responsibility Principle

## What is Refactoring?

Refactoring refers to the process we use to improve the way our code is written.  Though we have not discussed refactoring in detail, we have seen it during some of our lessons!  For instance, we can see a good example of refactoring in our [OOP lesson](/Mod1/Lessons/Week4/OOP.md):

First, we start with some code to help organize Dog Sitting clients.  

```c#
namespace DogSitter
{
    internal class Program
    {
        static void Main()
        {
            var nile = new Dictionary<string, string>
            {
                { "name", "Nile" },
                { "breed", "Golden Mix"},
                { "birthday", "2018-07-04"},
                { "walks required", "3" }
            };

            var sammy = new Dictionary<string, string>
            {
                { "name", "Sammy" },
                { "breed", "Wirehaired Pointing Griffon" },
                { "birthday", "2012-10-13" },
                { "walks required", "1" }
            };

            var dogs = new List<Dictionary<string, string>> { nile, sammy };

            // Take dogs on a walk
            foreach (var dog in dogs)
            {
                var currentWalksRequired = int.Parse(dog["walks required"]);
                Console.WriteLine($"Taking {dog["name"]} for a walk...");
                dog["walks required"] = (currentWalksRequired - 1).ToString();
            }

            Console.WriteLine($"{nile["name"]} now needs {nile["walks required"]} walks");
            Console.WriteLine($"{sammy["name"]} now needs {sammy["walks required"]} walks");
        }
    }
}
```

This code _works_, but it's not an ideal way to organize or implement the functionality we want.  Below is what the Program looks like _after_ we have **refactored** to include a `Dog` class:

```c#
public class Program
{
    static void Main()
    {
        Dog nile = new("Nile", "Golden Mix", new DateTime(2018, 07, 04), 3);
        Dog sammy = new("Sammy", "Wirehaired Pointing Griffon", new DateTime(2012, 10, 13), 1);

        var dogs = new List<Dog> { nile, sammy };

        // Take dogs on a walk
        foreach (var dog in dogs)
        {
            Console.WriteLine($"Taking {dog.Name} for a walk...");
            dog.GoOnWalk();
        }

        Console.WriteLine($"{nile.Name} now needs {nile.WalksRequired} walks");
        Console.WriteLine($"{sammy.Name} now needs {sammy.WalksRequired} walks");
    }
}
```

This refactored code results in the **same functionality** that has been implemented in a more readable and reusable way.  We have refactored (changed) the way that a dog is created by making it a class with properties and behaviors.

> With a partner, come up with your own definition for refactoring.  List some ways you would know if a change to your code is or is not a refactor. Be ready to share out your ideas!

** Instructor Note ** We want students to put their own words to the idea that refactoring does not change the functionality of the program - there is a difference between refactoring and improving functionality/adding features.

Based on the definition of refactoring as an activity that does not change the functionality of a program, you might wonder why refactoring is done at all.  

> With a partner, come up with 2-5 ideas of when or why code would be refactored.  Your instructor with start a thread in slack where you will share these ideas.

** Instructor Note **  As students are brainstorming, post a thread starter in slack to gather their ideas - remind groups to be posting as they finish their list. 

## Responsibilities

There are many reasons why you might refactor some code - we can't cover every single case, but we do want to talk about one of the more common reasons - a method or class might have too many responsibilities.

When writing code, there is a commonly used strategy called the **Single Responsibility Principle (SRP)**.  Code that adheres to SRP has classes and methods that each have a **single** responsibility.  When you are writing code, you want to strive to write the best code possible, but often we find that after the program is finished, there are some opportunities to clean things up (especially when it comes to SRP).

Let's take a look at an example below where the code _works_ but may not adhere to SRP as well as we would like:

```c#
namespace ListCalculations
{
    public class Program
    {
        // Get the sum of the 4 smallest values in a user-submitted list
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a list of numbers, separated by a comma:");
            var input = Console.ReadLine();

            string[] splitInput = input.Split(',');

            List<int> nums = new List<int>();

            foreach (var item in splitInput)
            {
                nums.Add(Convert.ToInt32(item));
            }

            nums.Sort();

            var smallNums = nums.GetRange(0, 4);

            Console.WriteLine(smallNums.Sum());
        }
    }
}
```

> In small groups, annotate what is happening in this program.  Take a look at each line and write down what is happening. For example: On line 3, a class called 'Program' is being declared.  When you have a good idea of what the code is doing on each line, see if you can list all of the **responsiblitities** (or steps) that happen as the program runs.  Be prepared to share out!
<!-- I suggest having students reference the actual line number in their description of "what is happening" - this will help them be more clear and is good practice for technical articulation. -->

** Instructor Note ** When bringing students back together to share out, guide them to identify some key words that indicate the end of one responsiblity and the beginning of the next.  For example, "First we get a user input **and then** we split that input into a list **and then** we ...

Once we have a list of responsibilities, a good refactor would be to create methods out of each responsibility.

> Back in your groups, create methods to refactor this program into a cleaner version. You can use [this repo](https://github.com/turingschool-examples/ListCalculations_Launch) as a starting point - fork and clone to create your own copy.  Use [breakpoints](/Mod1/Lessons/week2/Debugging.md), and run the code often to make sure you are maintaining the functionality!

** Instructor Note **  As students are working, and during share-out, keep an eye on daisy-chaining methods.  We want students to get in the habit of creating methods that are self-contained - so the Main method might execute multiple methods in sequence instead of one method that executes the next method, that executes the next method, etc...  After the lesson, you _could_ share a possible solution in slack.

## Check for Understanding
* Imagine you are in an interview.  The interviewer asks you to explain SRP; write down your explanation, making sure to use examples to demonstrate your understanding.
* Imagine you are working as a developer.  You have just finished a coding task with 2 hours until the product is delivered to the client.  
    - What are some reasons that you **would** refactor your code?  
    - What are some reasons why you **would not** refactor? ('my code is perfect' is not an acceptable answer 😆)
<!-- Really like the connections to GETTING THE JOB (interview) and DOING THE JOB (working with client) - when we do the review of the CFUs, we want to ensure that instructors are hammering home HOW this prepares students for the challenges they will face! -->