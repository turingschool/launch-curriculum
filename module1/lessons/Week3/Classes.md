## Learning Goals

* Describe the difference between a class and an instance of that class
* Practice building classes with state and behavior
* Identify some best-practices for defining state and behavior

## Warm Up

In your notebook brainstorm a **type** of object and **specific** instances of that object. Then brainstorm 3 different **attributes** for those objects and 3 different **behaviors** of those objects.

For example:

* Type of object: Car
* Specific instances:
    * Megan's Suburu Outback, Madonna's Rolls Royce, that yellow Camaro for sale at Bob's Auto Mart.
* Attributes:
  * Make, Model, Color
* Behaviors:
  * Drive, Reverse, Open Trunk

## Classes

In programming, a **Class** is something that models:

1. State, and
2. Behavior

State is what something *is*. Behavior is what something *does*. In the warm up example, our *Class* was Car. We modeled the state of a Car by defining the attributes "make", "model, and "color". We modeled the behavior of a Car by defining the functionalities "Drive", "Reverse", and "Open Trunk".

An **Instance** or **Object** is a concrete representation of a Class. In the warmup example, "Megan's Suburu Outback" is a specific Instance of the Car Class. We can also say that "Madonna's Rolls Royce" is a Car Object. Do not get too caught up with the differnce in the terms Instance and Object; we are going to use these terms interchangeably.

You could think of a **Class** like a blueprint for a house and an **Instance** as an actual house. The blueprint is a just an idea of how the house should be built, and the house is the realization of that blueprint.

### Defining a Class

The syntax for defining a class is as follows:

```c#
public class ClassName
{
    // Fields, Properties, Methods go here...
}
```

So, for example, if we wanted to create a Dog class, we could do the following:


```c#
public class Dog
{

}
```

Notice the use of `UpperCamelCase` for the class name.

Generally we will want to put more information in our classes to make them useful to us, but those three lines (even with no other information) will create a class.

### Example - Class/Instance Syntax

Let's follow a class example with a Unicorn class. **Fork** [this repl](https://replit.com/@launch-team/M1W3-ClassesLesson#program.cs). This solution contains a `Unicorn` class with the following code. Note: you will follow this template for a different class later 😉.

```c#
internal class Unicorn
{
}
```

In the `program.cs` file, let's try the following:

```c#
// program.cs

Unicorn fred = new Unicorn();
Unicorn gloria = new Unicorn();

```

Will this program compile and run?

> With a partner, see if you can update the program.cs file so that it will compile and run.

```c#
class Program
{
    static void Main()
    {
        Unicorn fred = new Unicorn();
        Unicorn gloria = new Unicorn();
    }
}
```

*From here on, the code examples will only include the contents of the `Main()` method*

Now that we have some executing code, let's talk about what is happening. 

> With a partner: what is familiar about this code?  Where have you seen patterns like this before?  What is different?  Try to put some words to what is happening on each line.

**Instructor Note**: make comparisons back to variable assignment; discuss the difference between explicit type declaration and using `var`.

> Practice using the appropriate language to describe what is happening:
> We are creating 2 new instances of a Unicorn class and assigning those objects to the variables 'fred' and 'gloria'


## Properties in Classes

Above we created a Unicorn class and then also created specific instances of the unicorn class that we held in the variables `fred` and `gloria`. Generally the objects we create will come from the same template, but each will be a unique object.

Right now, these unicorns are **two different** objects.  You could imagine that you are walking through an enchanted forest when two unicorns appear.  One is `fred` and the other is `gloria` - but which is which?  Clearly, they are two different unicorns, but they don't yet have any distinguishing features.

### Constructor

When we run `new Unicorn()`, what actually happens? We can see from the last example that different Unicorn objects (or instances) are created. Other than that, nothing happens. If we want some specific code to run when we first create a new Unicorn, we need to tell our program what should happen when a new Unicorn instance (or object) is created. We do this with a class **constructor**.

```c#
internal class Unicorn
{
    public Unicorn()
    {
        // This code block will be executed when when a new unicorn is created.
    }
}
```

This code block is run once and only once during an Object's lifetime, when we call `new`.  Let's put something a bit silly in there just to see this in action:

```c#
internal class Unicorn
{
    public Unicorn()
    {
        Console.WriteLine("Unicorn being created...");
    }
}
```

### Modeling State with Attributes

The instances of the classes we've defined so far are basically useless. Aside from their being stored in a unique location in memory, there is nothing unique about these instances.

Remember, a class models *State* and *Behavior*. Let's give our unicorn some state.

### Example - Properties

Let's add some properties to the `Unicorn` class.

```c#
internal class Unicorn
{
    // Properties:
    public string Name;
    public string Color;

    public Unicorn(string name, string color)
    {
        Name = name;
        Color = color;
    }
}
```

Because attributes are something we want to persist throughout an object's lifetime, we typically define them inside the constructor because we want them to exist as soon as the object is created.

We have now created a class that will allow us to create many different instances of Unicorn, each one slightly different from the last.

Remember that a **class** is like the blueprint for specific **instances**.  As our program exists now, will our code compile?

> With a partner, try to run the program.  Use what you know about methods and arguments to get the code to compile and run.  Bonus: can you tell the program to introduce us to your new unicorns?

**Instructor Note** Make sure to touch on how we call property information out of an instance of a class: `fred.Name`.  Discuss the difference between calling this property, and calling a method - you could use the example of `"hello world".Length` vs `"hello world".ToUpper()"`

-----------------------------------------

When we include the arguments in our constructor, we will need to pass those arguments when we create an instance of an object. Note that the arguments that we pass to the constructor are order dependent. So, if we pass `"Fred"` as the first argument, we are saying that the name of the Unicorn we are creating is Fred (and Fred's color is Silver).

```c#
Unicorn fred = new Unicorn("Fred", "Silver");
```

![diagram of constructor attribute assignment](/Mod1/Images/Week3/ctor-attribute-assignment.png)

<!-- I think if possible it might be a good idea to have a diagram that shows the order dependantness of the arguments. Like some arrows pointing from the arguments to where the "fill in" in the class instance? Just a thought. ✅ -->
What we have just done is a very common pattern. We gave our constructor some arguments and we saved those arguments to **properties**. While this is a strong pattern, it is not a rule. For instance, you may want to set a property in your constructor that has a default value that isn't set using an argument:

```c#
internal class Unicorn
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
}
```
Note: you will need to add the following `using` statement near the top of the `Unicorn.cs` file to add the `MagicalPowers` property as a `List`: `using System.Collections.Generic;`

### Using an Initializer


### Partner Practice

With your pair, define a Dog class and create instances of that class in your `program.cs`.

Now, give your Dog class some properties that are set using arguments to initialize and some properties that have default values. Make some instances of your Dog class, and use `Console.WriteLine()` to verify that your dog objects are being created appropriately.

## Using and Updating Properties

Often, there will be classes that we build that will start with a property set to some value, and then later that property value might change.  Say, if unicorns mature into new colors.  For these very common cases, we could do something like this:

```c#
// Unicorn.cs
internal class Unicorn
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

    public void ChangeColor(string newColor)
    {
        Color = newColor;
    }
}
```

Now, our unicorns will have the ability to change their color!  This is an example of a **behavior** that we have given to the Unicorn class.  Now, any unicorn we create will have this ability:

```c#
Unicorn fred = new Unicorn("Fred", "Silver");
Unicorn gloria = new Unicorn("Gloria", "Silver");

Console.WriteLine($"{fred.Name} is {fred.Color}");
Console.WriteLine($"{gloria.Name} is {gloria.Color}");

fred.ChangeColor("bright white");
gloria.ChangeColor("pearlescent purple");

Console.WriteLine($"{fred.Name} is {fred.Color}");
Console.WriteLine($"{gloria.Name} is {gloria.Color}");
```


Because it is _so common_ for us to change the values of some properties, there is actually a shortcut for this functionality!

Take a look at the code below - what is _different_ about it than what we have previously seen?

```c#
internal class Unicorn
{
    public string Name;
    public string Color { get; set; }
    public List<string> MagicalPowers;

    public Unicorn(string name, string color)
    {
        Name = name;
        Color = color;
        MagicalPowers = new List<string>();
    }
}
```
<!-- In the above example, the get/set method might not stand out to a new programmer. Would a screenshot of this code block with that method circled/highlighted make it easier for students to recognize? Or do we think it might be better training to have students get used to looking at code without hints? -->
> With a partner, get our current program.cs to run with this new implmentation - don't be afraid to google to find the answer!

### Partner Practice

- With your pair, create properties for the attributes in your `Dog` class.
- Describe to each other, what is happening under the hood when we create an call these properties.

## Other Methods

We can also create other methods that will allow us to send other messages to our Unicorn class. For example, let's say we wanted to add a magical power to our unicorn. We currently have a way to see what magical powers our unicorn has, but we don't have any way to _add_ to it. Let's do that by creating a method called `AddPower()` that will add a power to the `magicalPowers` list.

```c#
internal class Unicorn
{
    public string Name;
    public string Color { get; set; }
    public List<string> MagicalPowers;

    public Unicorn(string name, string color)
    {
        Name = name;
        Color = color;
        MagicalPowers = new List<string>();
    }

    public void AddPower(string magicalPower)
    {
        MagicalPowers.Add(magicalPower);
    }
}
```

Let's update our `program.cs` so that you:

1. Create a new instance of Unicorn.
2. Print the magical powers of that Unicorn.
3. Add a power for that Unicorn, using the method you just created. You can represent a power as a String.
4. Print the new powers of the Unicorn.

### Partner Practice

- With your pair, create a `haveBirthday` method for your Dog class. This should increase the age of that dog by 1.
- Create a method on your Dog class that will return a string to introduce the dog - something like "Bork, my name is <name>.".


### Check for Understanding

On your own, answer the questions below.

* Classes, instances, objects
    * What is a Class?
    * What is an Instance?
    * What is an Object?
    * How are these three things alike/different?
    * What code do you have to write to create a Class? What code do you have to write to create an instance?
    * What happens when a new instance is created?
* Properties & Methods
    * What is a property? How can we recognize a property?
    * What is a method? How do we write methods?
    * What are arguments?
    * What is a return value? How do you know what the return value of a method is? Do all methods have return values?


    <!-- This seems like one of the "heavier" technical lessons so far - a lot of sytnax, building on previous skills, etc. Excited to see how it goes for students! I think that given there is a LOT going on here, adding some diagrams/code blocks with circles/highlights may be a way to help ease the burden on students. Not sure if it is necessary, but perhaps being mindful of small ways to reduce the mental overhead on students can really add up over a lesson, day, week, etc. -->