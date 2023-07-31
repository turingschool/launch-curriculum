---
layout: page
title: Dependency Injection
---

## Introduction

After two days of self-guided learning in pairs, today you will have the opportunity to practice this skill individually. Of course, you can still reach out to teammates to talk through things, but you will be driving the research.

With that in mind, today's lesson on dependency injection is divided into 3 parts.

1. Part 1: An instructor-led lesson introducing the topic of dependency injection
2. Part 2: Individual research to deepen your understanding of dependency injection and how we have used it so far
3. Part 3: Writing a short Today I Learned write-up explaining your learnings
4. Part 4: Peer Feedback

## Learning Goals

* Understand the topic of dependency injection
* Build a deeper understanding of our MVC applications by understanding how they use dependency injection
* Improve the skill of independent technical research and writing about a technical topic

## Part 1: What is Dependency Injection?

Imagine you are building a house. To construct it, you need different types of materials like bricks, cement, wood, etc. These materials are dependencies for building the house. Without them, you cannot complete the construction.

In software development, we often have classes that rely on other classes or services to function correctly. These dependencies could be databases, logging systems, or other external resources. Dependency injection is a design pattern that helps us manage these dependencies effectively. We provide the required dependencies of a class from the outside, rather than letting the class create those dependencies itself. In other words, we inject the dependencies into the class, just like supplying building materials to construct a house.

### Time for an Example!

Imagine you're building an e-commerce website. In this website, you have a shopping cart that allows users to add products and checkout. To handle the data related to the shopping cart, you create a ShoppingCart class.

Now, the ShoppingCart class needs to interact with the database to store and retrieve cart items. To do this, you create a Database class that handles all the database operations.

Here's what the classes might look like:

```c#
// Database class to handle database operations
public class Database
{
    public void SaveToDatabase(string data)
    {
        // Code to save data to the database
    }

    public string GetDataFromDatabase()
    {
        // Code to retrieve data from the database
        return "data from the database";
    }
}

// ShoppingCart class that depends on the Database class
public class ShoppingCart
{
    private Database _database;

    public ShoppingCart()
    {
        _database = new Database(); // This creates a dependency directly in the ShoppingCart class
    }

    public void AddToCart(string product)
    {
        // Some shopping cart logic here
        _database.SaveToDatabase(product); // Using the Database class here directly
    }

    public string ViewCart()
    {
        // Some more shopping cart logic here
        return _database.GetDataFromDatabase(); // Using the Database class here directly
    }
}
```

In the above example, the ShoppingCart class directly creates an instance of the Database class using the new keyword. 

Now, let's see how this would work by using dependency injection to inject the database:

```c#
// ShoppingCart class with dependency injection
public class ShoppingCart
{
    private Database _database;

    // Dependency Injection via Constructor
    public ShoppingCart(Database database)
    {
        _database = database; // Now the Database class is provided as a dependency
    }

    public void AddToCart(string product)
    {
        // Some shopping cart logic here
        _database.SaveToDatabase(product); // Using the Database class here through dependency injection
    }

    public string ViewCart()
    {
        // Some more shopping cart logic here
        return _database.GetDataFromDatabase(); // Using the Database class here through dependency injection
    }
}
```

In this updated example, we modified the ShoppingCart class constructor to take a Database object as a parameter. Now, when you create a ShoppingCart object, you need to provide a Database object, and the dependency is injected from outside the ShoppingCart class.

Creating a shopping cart would look something like this:
```c#
// Create an instance of Database manually
Database database = new Database();

// Create an instance of ShoppingCart and pass the Database instance
ShoppingCart shoppingCart = new ShoppingCart(database);

// Now you can use the shoppingCart instance to perform shopping cart operations
shoppingCart.AddToCart("Product A");
string cartData = shoppingCart.ViewCart();
```

### Dependency Injection in an ASP.NET application

Dependency Injection is a key part of ASP.NET. It comes set-up when you create a new application and there is no need to learn how it's built, your job is to learn how to use it for writing high quality code. Just like with driving a car, you need to know how to use the gas and the break, but you don't need to learn the internals of how those pedals work.

The key part here is something called the IoC(Inversion of Control) container that will automatically inject the needed dependencies as long as we first register them with the IoC container.

#### Part 1: Declare What You Need

In your controller (or other classes), you declare what services or dependencies you need to perform specific actions. For example, our `CitiesController` needs a `TourismContext` to be injected.

```c#
 public class CitiesController : Controller
    {
        private readonly TourismContext _context;

        public CitiesController(TourismContext context)
        {
            _context = context;
        }
        ...
```

#### Part 2: Configure the IoC Container

The IoC container needs to know about `TourismContext`, so you need to add a configuration in your `Program.cs` file.

```c#
builder.Services.AddDbContext<TourismContext>(options =>
    options.UseNpgsql(connectionString)
    .UseSnakeCaseNamingConvention());
```

#### Part 3: Automatic Injection

When a request comes in and ASP.NET MVC creates an instance of your controller to handle it, the IoC container automatically injects the required services into your controller's constructor. It handles the creation and wiring of dependencies for you!

## Part 2: Independent Research on Dependency Injection

The basics of dependency injection in .NET are almost certainly still confusing. Start by using Google to find 2-3 more resources introducing .NET dependency injection, and dependency injection in general to read and deepen your understanding. Feel free to use the code help slack channel to ask questions or ask for a peer to join you in a break out room to talk through something.


✅ CHECKPOINT ✅: Before continuing, on your own, write a Slack message to your instructor explaining dependency injection in your own words. Imagine your audience was you from last week and isn't familiar with the topic. Create your own example to use in the explanation.

Once you get the go-ahead from your instructor, move on to thinking about and researching why this might be helpful.

1. What are some of the benefits of using dependency injection?
2. What might be some of the disadvantages of using dependency injection?

Next, look for past examples of where you have used dependency injection previously in this course. Try and find an example outside of injecting a database context into a controller, but don't worry about tracking down how exactly that dependency is configured to be part of the IoC Container. It's almost certainly done behind the scenes by .NET.

1. How is dependency injection used here?
1. Why is dependency injection used here?

✅ CHECKPOINT ✅: Before continuing, on your own, write a Slack message to your instructor explaining the example of dependency injection that you found. Be sure to include how and why dependency injection is used here.

Finally, move on to digging into a couple more advanced topics. Here are some ideas, or feel free to dig into your own questions!

1. What happens if you try to inject the TourismContext but haven't configured it to be available to the IoC container?
1. What is a Design Pattern in software development? Why is Dependency Injection a design pattern?
1. What is the idea of "Tight coupling" and "loose coupling" in software development? How does dependency injection help create loose coupling?
1. What is a dependency in software development?
1. What are other popular third-party dependency injection tools outside of the built-in IoC container in ASP.NET Core?
1. Sometimes the type of thing being injected via dependency injection is declared as an interface. Can you find an example of this situation in an MVC application? Why was the decision made to use an interface here?

## Part 3: Writing a "Today I Learned"

Your deliverable for today is to create a "Today I Learned" style write-up of what you learned today about Dependency Injection.

Start by forking this repo.

// TODO: Make a starter repo for students to fork

The Today I Learned structure is very common amongst developers, take a look at these two examples.

//TODO find examples!

<section class="call-to-action" markdown="1">
Why might you want to write Today-I-Learned style write-up?
</section>

<section class="answer" markdown="1">
### Some Reasons

* Helping Others: Your post may help others who are learning the same topic. Even if there are many articles out there on the topic, none come from your perspective. And maybe your perspective and way of explaining make sense to a fellow dev!
* Reinforcement Learning: Writing about what you've learned helps solidify your understanding of the topic.
* Archiving Your Progress: A TIL blog serves as a personal archive of your learning journey. You can look back and see how far you've come and review past topics whenever needed.
* Building a Portfolio: As a new developer, TIL blogs can showcase your technical skills and knowledge to potential employers. It demonstrates your willingness to learn and your ability to articulate technical concepts and is a great topic to bring up in interviews!
</section>

Writing can be stressful and is not something everyone enjoys. Something that sometimes helps is to write as if you are explaining the topic to a friend. Another Turing instructor likes to start by recording an audio clip and then transcribing that into text!

You also are not starting from nothing, feel free to start from the Slack messages you sent your instructors earlier.

Here is an example structure you can use:

1. Title
1. Explanation: Provide a concise explanation of the knowledge you've gained. Examples can be very helpful here!
1. Personal Insight: Share a personal insight or real-life example that highlights the importance or application of what you've learned.
1. Additional Resources (Optional): Any favorite resources you used while learning about this topic?

## Part 4: Peer Feedback

Once you join your breakout room, slack your partner a link to your  "Today I Learned" write-up about dependency injection.

Take 15 minutes to independently read your partner's writing.

Write down:
* One thing you particularly like about their write-up
* One idea that might make their write-up even better

After 15 minutes to read, take 5 minutes to share your feedback.