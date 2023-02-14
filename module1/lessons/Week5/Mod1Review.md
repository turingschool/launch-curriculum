Week1
<!-- * Understand what makes something a computer -->
1. We write programs so that humans can better interact with computers.  Computers, at their most basic level, understand [binary inputs](https://www.youtube.com/watch?v=USCBCmwMCDA); so, why do we not write programs in binary?

<!-- * Practice researching built-in c# methods. -->
1. When you come across a Method that you are unfamiliar with, how do you figure out what that method does? (Let's assume your instructors are not available :) )

<!-- * Recognize each of the main c# datatypes. -->
1. For the `Unicorn` and `Power` classes below:
    * What C# datatypes are represented?
    * Are there any datatypes that are not represented?

    ```c#
    public class Unicorn
    {
        public string Name {get; private set;};
        public string Color { get; set; }
        public List<Power> MagicalPowers;
        public int Energy;

        public Unicorn(string name, string color)
        {
            Name = name;
            Color = color;
            MagicalPowers = new List<Power>();
            Energy = 100;
        }

        public void AddPower(Power magicalPower)
        {
            MagicalPowers.Add(magicalPower);
        }

        public void DisplayPowers()
        {
            foreach (var power in MagicalPowers)
            {
                Console.WriteLine($"*-*-*{power.Name}*.*.*");
            }
        }
    }

    public class Power
    {
        public string Name { get; }
        public int EnergyRequired {get; }

        public Power (string name, int energyRequired)
        {
            Name = name;
            EnergyRequired = energyRequired
        }
    }
    ```


<!-- * explain the flow of execution through code   -->
<!-- * use `if/else` statements to control execution -->
<!-- Week2
* Understand what a bug is
* Practice Debugging with Breakpoints
* Define and start using an IDE
* Identify the benefites of using an IDE
* Identify and implement code blocks.
* Use `while`, and `for` to repeat code blocks.
* Recognize potential infinite loops. -->

<!-- Week3
* Describe the difference between a class and an instance of that class
* Practice building classes with state and behavior
* Identify some best-practices for defining state and behavior
* Identify key differences between **arrays** and **lists**
* Define and use a **dictionary**
* Iterate through collections with `foreach` and `for`
* Define the terms Method, Argument, Return Value, and Object.
* Explain why we use methods
* Define methods in c#
* Understand how abstraction helps us program -->

<!-- Week4
* Implement appropriate class file structure
* Gain familiarity with passing around 'smart' objects
* Define OOP
* Discuss the benefits of OOP
* Identify different sytaxes for object instantiation
* Define Automated Testing.
* Understand why we use tests.
* Implement unit tests for a single class. -->

<!-- Week5
* Define 'Refactoring' in programming terms.
* Define and implement the Single Responsibility Principle
* Define the stages of a test
* Recognize difference in testing command and query methods -->