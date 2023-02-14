# Object Oriented Programming

## Learning Goals
* Define OOP
* Discuss the benefits of OOP
* Identify different sytaxes for object instantiation

## What is OOP?

**OOP**, short for **Object Oriented Programming**, is one of the most popular programming models.  OOP relies on **objects** to organize programs into simple and reusable pieces of code.  In C#, these objects are created using **classes**.

> Discuss with a partner: what are some of the components of a class or the objects created from a class definition?  What kinds of objects have we worked with so far?

The **class** structure is fundamental to OOP, because it allows us to group related **attributes** and **behaviors** to be reused in individual objects.  So, how does that help us?

To see this in action, let's imagine that we are building a program that will manage a dog sitting service.  You might want to have access to an animal's name, breed, birthday, and number of walks required.  _Without_ OOP, you might model that information like this:

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

> With a partner - what are some drawbacks to this code?  How easy or difficult would it be to add a new dog to our pack?

There is quite a bit of repeated code here, as well as some extra manipulations we need to do to change the value of required walks.  Imagine we also wanted to list out the age of each dog?  We would need to convert their birthday to a date, and calculate their birthday each time that information was required.

Compare what we built above with an OOP version below:

```c#
// Dog.cs
    public class Dog
    {
        public string Name { get; }
        public string Breed { get; }
        public DateTime Birthdate { get; }
        public int WalksRequired { get; }

        public Dog(string name, string breed, DateTime birthdate, int walksRequired)
        {
            Name = name;
            Breed = breed;
            Birthdate = birthdate;
            WalksRequired = walksRequired;
        }

        public void GoOnWalk()
        {
            WalksRequired--;
        }
    }
```

```cs
// Program.cs
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

Here, we have a **class** that serves as a blue-print for any dog; instead of building a dictionary (or using some other method of storing dog information), we use the _idea_ of a dog.

> With a partner, talk through the code in these two files.  What is happening on each line? What are some benefits to this approach?  Are there any drawbacks?


With this OOP approach, it is much easier to update what a dog can do, or what information a dog stores.  We might want to be able to get a dog's age, for example. In the first version, we would need to calculate the age of each dog individually, but with OOP we can add a method to the Dog class.  Methods that exist on a class definition are availabe to be called on any instance of that object.

**Instructor Note**: we want to focus on the re-usability of code here.  Also make sure to discuss the different styles of instantiating obects `Dog variableName = new Dog()` vs `Dog variableName = new()` vs `var variableName = new Dog()`
<!-- I think for the note above it would be great to use an actual example of a class instantiation, like new Dog or new Cat, basically anything besides a one letter varaiable. That is one of my biggest gripes about some documentation (using stuff like "foo" and "bar", which I don't think is very accessible for a lot of learners). It looks like you cover it in the img below but figured it was worth calling out for our new instructors -->

### Creating Instances of Objects

The process of creating instances of objects from a class definition is often referred to as **instantiation**.  In the `Dog` example above, we could say that we `instantiated two Dog objects, nile and sammy`.  Any time you see the `new` keyword being used, some kind of object is being instantiated.

![Image of three examples of object instantiation](/Mod1/Images/Week4/object-instantiation-examples.png)

We can see in this example that there are three valid ways to create an instance of a Dog object - any of these instantiation patterns will work for any type of object!

When instantiating an object, you _must_ include 2 things:
* `new` this is the keyword that tells our program that we are going to create an instance of something.
* the _type_ of thing that we are creating - in this case `Dog`. 

When we are writing code, there are often multiple ways to accomplish the same thing.  This can be great, because it allows us some flexibility, but it can also be confusing.  It is tough to know _all_ of the ways you can accomplish something, and you will be continually learning a new way of doing things.  

A good developer can recognize different approaches (like knowing these three ways of creating objects), but sticks to one way of doing it throughout their program.  So, a good developer would choose **one** of these object creation styles and stick to it.  That way, their code is easier for others to read and understand.

## Benefits of using Classes in Programming

OOP is not the _only_ programming design strategy (or the only way to program), but there are some benefits that it provides that make it an excellent choice for almost any code-based application.  Among others, there are two key benefits to using classes as the basis for our programs:
* The ability to hold related information in a single place (inside a class), and 
* the ability to hide more complex functionality from users.

### Holding Related Information
When we declaring a class, we often look at the data that we need to capture, then group that data into related ideas.  Then, those 'groups' become classes.  

Let's imagine that we are going to build a program that holds information about a household that has one person, one dog, and two cats.  Each of these 4 entities probably has a name, and an age; but, they differ in the way that they communicate (humans speak, dogs bark, and cats meow).  We could store this data in strings, but as we saw in our 'Dog' example above, this is not a very sustainable solution:

<!-- Fun fact, cats only meow at humans! The thinking is that they learned that meowing sounds like the cries of a human child and cats learned to use that to manipulate humans to get what they want. -->

```c#
var ellie = "Ellie, 28 years old, speaks";
var millie = "Millie, 1 year old, barks";
var jack = "Jack, 2 years old, meows";
var jill = "Jill, 2 years old, meows";
```

All the information we need is here, but it is not stored in a meaningful way, and none of these properties are enforced.  We can describe this data as unenforced because we could create a new 'person' who didn't have a name or an age; or, we might accidentally create a 'dog' who could speak.  A **class** allows us to give more meaning to this data by naming attributes, and allows us to enforce what data is required, and how the object can behave.

```c#
public class Person
{
    public string Name;
    public int Age;

    public Person(string name, int yearsOld) // This constructor enforces a name and yearsOld to be provided; we can NOT create a Person without those things!
    {
        Name = name;
        Age = yearsOld;
    }

    public string SayHello()
    {
        return "Hello";
    }
}

public class Dog
{
    public string Name;
    public int Age;

    public Dog(string name, int yearsOld)
    {
        Name = name;
        Age = yearsOld;
    }

    public string sayHello()
    {
        return "WOOF"; // Now a dog will not accidentally be created with the ability to speak :)
    }
}

public class Cat
{
    public string Name;
    public int Age;

    public Dog(string name, int yearsOld)
    {
        Name = name;
        Age = yearsOld;
    }

    public string sayHello()
    {
        return "MEOW";
    }
}
```

With the class structure defined above, we have attributes and behaviors _grouped_ into their related objects.  We can enforce that all Dogs, Cats, and People must have a name and age; and we can make sure that only cats 'meow, only dogs 'bark', and only people 'speak'.

In an ideal OOP application, all attributes and behaviors are grouped into one or more classes.  Each class holds information about only one type of object.

### Hiding Complex Functionality
In addition to organizing related pieces of information, classes can also help us hide more complex parts of a program from users.  Most users do not need to know _exactly_ how an application is working, they just need to know what do to in order for the program to work.  Think about 'liking' a photo on instagram; users do not need to know what the application is doing in the background, users just need to know how to execute that process (by double tapping on a photo).

Think back to our lesson on [Methods](/Mod1/Lessons/Week3/Methods.md#abstraction).  In the section about **Abstraction**, we proposed that a user does not need to know exactly how a coffee machine works in order to make coffee.  They only need to know that they need to add water, add coffee grounds, and push start.  We might mimic that behavior in code like this:

```c#
var coffeeMaker = new CoffeeMachine();
coffeeMaker.AddWater();
coffeeMaker.AddCoffeeGrounds();
coffeeMaker.Start();
```

A user does not need to know what attributes the CoffeeMachine has, or what _exactly_ happens when they execute the Start() method.  The only necessary information is these three methods - the rest of what makes up a CoffeeMachine is hidden from the user.  Or, to use some programming vocabulary, the rest of what makes up a CoffeeMachine is **abstracted away from the user**.

## Check for Understanding

* Imagine you have a class `Button` which has a constructor that takes no arguments.  Use three different syntax patterns to create three instances of the Button class.
* Think of your favorite board game (or you can think of [Connect Four](https://en.wikipedia.org/wiki/Connect_Four)); what are the classes that you would create to implement that board game in code?
* Review the class definition and code below.  What is one thing that is **abstracted** away (hidden) from the user?

```c#
public class User
{
    public string Name;
    public string Email;
    public string UserName;
    private string Role;
    private string Password;

    public void Register(string name, string email, string password)
    {
        Name = name;
        Email = email;
        Password = password;
        UserName = CreateUserName();
    }

    private string CreateUserName()
    {
        var index = Email.IndexOf("@");
        return Email.Substring(0, index);
    }

}

var megan = new User("Megan", "mmcmahon@turing.edu", "test123");
var username = megan.UserName;
```

<!-- I like the way you've introduced some OOP pillars in a more specific way - by tying it into the examples you've been referencing, it feels more natural and I imagine students will be able to follow along a bit easier! I think this also lends to better understanding of the pillars when we cover those in more detail down the road!  -->