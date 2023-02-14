# Class Interaction

** Instructor Note ** For this lesson, you will want to have a repo with some finished code that you can use if needed to supplement student examples.  Either create your own completed Unicorn & Power classes, or you can [fork this example](https://replit.com/@launch-team/M1W3-ClassInteractionLesson)

## Learning Goals
* Implement appropriate class file structure
* Gain familiarity with passing around 'smart' objects

## Warm Up
Outline the classes you might need to create a city-wide library system (multiple locations with physical books).  How do these classes relate to each other?

## Building Necessary Objects

To understand how objects can interact with each other, let's continue building on our Unicorn class from the [Classes Lesson](/Mod1/Lessons/Week3/Classes.md).  Right now, our Unicorn has a list of Magical powers that are simple strings.

```c#
public class Unicorn
{
    public string Name;
    public string Color;
    public List<string> MagicalPowers;

    public Unicorn(string name, string color)
    {
        Name = name;
        Color = color;
        MagicalPowers = new List<string>();
    }

    public void AddPower(string power)
    {
        MagicalPowers.Add(power);
    }
}
```

Let's expand this idea of a magical power to indicate how much energy that power takes to perform.  We could imagine an interaction like this:

```c#
var fred = new Unicorn("Fred", "Silver");
// Unicorns start with 100 power points.

fred.AddPower("Fly: 13");
fred.AddPower("Be Invisible: 28");

fred.Perform("Fly");
// Now fred has 87 power points 
// (13 points have been deducted from fred's original 100 points).

fred.Perform("Be Invisible");
// Now fred has 59 power points.
```

This string version of a Magical Power now holds a lot of information: the name of the power, and the energy needed to perform it.  We _could_ work with these strings to accomplish the storage and performance of these powers, but we would need to do a lot of string manipulation anytime we want to perform one of the powers (we would need to constantly be separating the idea of the name of the power, from its energy usage).

A better way would be to create a `Power` Class that will hold these attributes.

> With a partner, build a class that will represent a Power.  Update your Unicorn to expect instances of that Power class, instead of strings.  If you have some additional time: how might we implement the idea of energy usage?

When complete, we should be able to execute the following program:

![Image of crude Unicorn with powers added](/Mod1/Images/Week3/UnicornPowers.png)

When we think about creating new classes, one of the first questions we need to answer is: Where should this class live?  (As in, what file should it be in).  Almost always, a class will live in its own file - there should be a one-to-one relationship between classes and files.  So, my file structure for this new class might look like:

![Image of Solution with multiple classes](/Mod1/Images/Week3/SolutionExplorerMultipleClasses.png)
<!-- New image needed? -->

---------------------------------------

You can take a look at how I might create this additional class, and how it interacts with our Unicorn class.  You and your partner might have come up with something slightly different, and that's ok!

<!-- Before going into the actual implementation, it might be nice to have one of those diagrams w/ color coding that "shows" a bit more about how a Unicorn class can consume/interact with a Power class - in the code below I can see the Power interaction being a little hard to catch for a newer student -->

```c#
// Power.cs
public class Power
{
    public string Name;
    public int EnergyRequired;

    public Power(string name, int energyRequired)
    {
        Name = name;
        EnergyRequired = energyRequired;
    }
}

// Unicorn.cs
public class Unicorn
{
    public string Name;
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
}
```

For many new developers, it can feel a bit odd to think about objects **holding** or **containing** objects of another self-defined class type (as in Unicorns having a list of Powers).  It's ok if this concept feels a bit weird now, but it is an important programming pattern that we are going to be seeing over and over.  One benefit of this pattern is that when we pass around **objects**, we have access to all of the Properties and Methods of that object.  So, our Unicorn class could contain a method like this:

```c#
public void DisplayPowers()
{
    foreach (var power in MagicalPowers)
    {
        Console.WriteLine($"*-*-*{power.Name}*.*.*");
    }
}
```

> With a partner, discuss what this method does.  Discuss where `MagicalPowers` is defined.  Discuss where power.`Name` is defined. Be ready to share out what you discussed!

** Instructor Note **  We want to make sure that students start to think about the encapsulation of properties and methods within an object.  You do not need to use the word encapsulation (in fact, you might try to explain this in more layman's terms).  You can discuss the powers in MagicalPowers as 'smart' objects - objects move around with all the 'tools' necessary to run the Properties and Methods defined within the class.

----------------------------------------

When an object is instantiated (created), it contains all of information necessary to perform the methods defined in it's class definition.  An object could be described as 'smart' - it does not simply * exist *, it knows how to do things.  In the previous example, the power knows how to get its `.Name` even when we are asking for that information from inside a method in a different class!  The instantiated power has the ability to perform its Properties and Methods from anywhere.

> With a partner, update your Unicorn class so that:
> * A unicorn starts with 100 power points.
> * A unicorn can perform a power
> * And, when a power is performed, the unicorn's power points are reduced
>
> There are many ways to complete this task!  Focus on completing the task, rather than perfecting the task.  We will ask a few groups to share out to demostrate different approaches.

** Instructor Note ** Try to find a few different approaches to the task to share out, using your starter repo only if necessary.  If you use your own code to demonstrate the task, ask students to explain what is happening (instead of you walking through the code).

## Check for Understanding

Take a look at the (poorly constructed 😆) code below.
* If you were to re-organize this code into proper file structure, what files would you create?
* How many total methods are defined?
* How many methods does an instance of `Person` have?
* How many methods does an instance of `Pet` have?

```c#
Person stevie = new Person("Stevie");
Pet marcel = new Pet("Marcel", "A very tiny snail");
Pet jojo = new Pet("JoJo", "A shockingly large shrimp");
stevie.AddPet(marcel);
stevie.AddPet(jojo);
PrintSummary(stevie);

static void PrintSummary(Person person)
{
    Console.WriteLine($"{ person.Name } has { person.Pets.Count } pets:");
    foreach (var pet in person.Pets)
    {
        Console.WriteLine($"{ pet.Name }");
    }
}

class Pet
{
    public string Name { get; }
    public string Description { get; }

    public Pet(string name, string description)
    {
        Name = name;
        Description = description;  
    }
}

class Person
{
    public string Name { get; }
    public List<Pet> Pets { get; }

    public Person(string name)
    {
        Name = name;
        Pets = new List<Pet>();
    }

    public void AddPet(Pet pet)
    {
        Pets.Add(pet);
    }

    public List<string> ListPetsNames()
    {
        var petNames = new List<string>();

        foreach (var pet in Pets)
        {
            petNames.Add(pet.Name);
        }

        return petNames;
    }
}
```

<!-- Overall, I like where this lesson is going! I'm excited to see how it progresses in the lab you have built! -->