---
layout: page
title: Error Handling
---

## Introduction

As you started thinking about in today's preparation, when an application is running, there are all kinds of unexpected things that can and will happen.

It's our job as developers to identify, manage, and respond to these situations. We want to handle these cases gracefully and make sure the application doesn't crash and we give useful messages to the user about what went wrong.

## Learning Goals

* Understand types of errors and their impact on user experience
* Practice the following error handling strategies:
    * Null Checking
    * Validation
    * Try/Catch

## Set-Up

Today we're going to revisit the MVC Movies Application from Mod 3. Find the repo locally or re-clone it [here](https://github.com/turingschool-examples/MvcMovieStarter). Then check out the branch `read-related-resources`. Start the application up and make sure it runs successfully!

## Ways Applications Can Break!

There are so things that might cause an application to throw an error! 

Let's fill in [this](https://jamboard.google.com/d/1ggm_xNZFJJ1P4qQQ5PngRbSMsobha4cCvZuXHQh0XmY/edit?usp=sharing) Jamboard with some of these ways.

<section class="call-to-action" markdown="1">
With your partner, take 10 minutes and add to the Jamboard as many ideas as you can for what might cause the application to throw error. Think about both MVC applications and APIs. Feel free to google or experiment with MVC Movies and try to break it!

The 400 error codes here are good place to start for API errors! [HTTP Cats](https://http.cat/)
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    Examples of things students might say:
    Server:
    * If an API you are calling is down
    * If the API changes so the request now gives an error instead of data
    * If the database is down
    * If the database changes the password
    * Missing necessary environmental variable
    * Package changes version and the old version you are using doesn't work anymore
    Client:
    * Syntax errors like missing an equals in an API request.
    * If you try to write something of the wrong type to the database
    * If you try to write something to the database without a required field
    * If you try to loop through something that is null
    * If you try to go to a route that doesn't exist
    * If you are not authorized to access a page</p>
</aside>


### What happens when an error occurs?

Without proper error handling, if your .NET app breaks this is what happens. 

![.NET Error](/assets/images/module5/week1/Error.png)

Can I get a show of hands, who has seen something like this before?

<section class="call-to-action" markdown="1">
With your partner discuss the following questions: 

* Is a good user experience? Why or why Not? 
* What would make this user experience better?
</section>

## Error Handling Techniques

## Checking for Null

One of the most common edge cases that can cause your app to crash is when something expects a value but instead is given null.

#### In the View

What happens if what's passed in for the Movie is Null? Currently, our code doesn't have any error handling and we get this messy looking error we just discussed.

![.Unhandled Exception](/assets/images/module5/week1/UnhandledException.png)

If some value could possibly be null (even if you don't think it will be), it's best to add a check and specify what you want to happen in that null case.

For example, we could add a null check to our view like this:
```c#
@model Movie

@if (Model == null)
{
    <p>No movie details available.</p>
}
else
{
    <h1>Movie Details</h1>

    <p>Title: @Model.Title</p>

    <p>Genre: @Model.Genre</p>
}
```

#### In The Controller

Take a look at this action from the `MoviesController.cs`.

```c#
 // GET: /Movies/<id>
[Route("Movies/{id:int}")]
public IActionResult Show(int id)
{
    var movie = _context.Movies.Find(id);
    return View(movie);
}
```

<section class="call-to-action" markdown="1">
With your partner: Discuss what might be null here? What might happen if those values are null?
</section>

Let's add some checks to make sure those values are not null.

```c#
[Route("Movies/{id:int}")]
public IActionResult Show(int id)
{
    
    if (id == null)
    {
        return NotFound();
    }

    var movie = _context.Movies.Find(id);
    if (movie == null)
    {
        return NotFound();
    }

    return View(movie);
}
```

This is much less likely to break, you will also hear this referred to as more "robust code".

<section class="call-to-action" markdown="1">
With your partner: Discuss if you think it's better to have null checks in the controller, in the view, or both?
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    My opinion is it's best to have error handling in both, it doesn't hurt to defend against all the weird cases. But it feels more important to have error handling in the controller. Ideally then you wouldn't even send some unexpected data to the view. This goes back to the error handling principle of handling the error as close to the cause of the weirdness as possible.</p>
</aside>

## Data Validations

What would happen if I put an incredibly long title in for a movie? At some very very very large point it might be to large for our SQL database and throw an error, and even before that a massive title has the potential to mess up the usability of our website.

Or what would happen if someone input a string for a field that can only store an integer? Unless we have some error handling, that would cause an error when we try to write to the database.

The way around these and many other potential problems is to add **Data Validations**. Data validations are checks and rules that are applied to data to ensure its accuracy, integrity, and consistency. The purpose of data validations is to prevent bad data from entering a system, database, or application.

The goal of our data validation is to prevent writing invalid data to the database and instead show users a helpful error message.

![.NET Error](/assets/images/module5/week1/CannotExceed100Chars.png)


### Data Validation Step 1: The Model
Let's start by adding attributes to our model for the validations we want, there are TONS of [available validations](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-7.0#built-in-attributes), today we will use a couple common ones.
```c#
 public class Movie
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]  // This is new
        [StringLength(100, ErrorMessage = "Title cannot exceed 100 characters")]  // This is new
        public string Title { get; set; }

        [Required(ErrorMessage = "Genre is required")]  // This is new
        public string Genre { get; set; }
        public List<Review> Reviews { get; set; } = new List<Review>();
    }
```

### Data Validation Step 2: The Controller
Now we need to add a check to see if the incoming data meets these validations in our `MoviesController.cs`.

```c#
[HttpPost]
public IActionResult Index(Movie movie)
{
    //ModelState.IsValid is a built in .NET tool we can use that will check all of the validations on our models and then attach any error messages to the object. 
    if (ModelState.IsValid) // This is new
    {
        //Take the movie sent in the request and save it to the database
        _context.Movies.Add(movie);
        _context.SaveChanges();

        // The id generated by the database is now on the object we added to the context
        var newMovieId = movie.Id;

        // Redirect to our route /movies/show and pass in the newMovieId for the id parameter
        return RedirectToAction("show", new { id = newMovieId });
    }
    else // This is new
    {
        // WHAT DO WE WANT TO DO IF VALIDATION FAILS?
    }
}
```

<section class="call-to-action" markdown="1">
With your partner: Discuss what you think we want to happen if the validation fails on the movie passed in.
</section>

<section class="answer" markdown="1">
### What we want to do

We want to send the user to the New page and pass in the error information to display for the user. The error info is all on the model so we will pass the model to the view.
```c#
//Render the New view and pass in the movie so that we have the validation information
return View("New", movie);
```
</section>


### Data Validation Step 3: The View
We need to allow a movie to get passed into our view and display any available validation messages.

```html
@model Movie <----This is new

<h1>Add a Movie</h1>

<form method="post" action="/movies">
    <div class="form-group">
        <label for="Title">Title:</label>
        <input type="text" id="Title" name="Title" />
        <span asp-validation-for="Title" class="text-danger"></span> <--- This is new
    </div>
    <div class="form-group">
        <label for="Genre">Genre:</label>
        <input type="text" id="Genre" name="Genre" />
        <span asp-validation-for="Genre" class="text-danger"></span>  <--- This is new
    </div>
    <button type="submit">Create Movie</button>
</form>
```

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    This code will hook up to the model and display the current value if there is one.
    <label asp-for="Title">Title:</label>
    <input asp-for="Title" class="form-control" />
    </p>
</aside>

It's out of scope of this lesson, but if you want to display what the user previous input I recommend looking into 
.NET tag helpers, specifically [asp-for](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/working-with-forms?view=aspnetcore-5.0#the-input-tag-helper).


## Try/Catch Blocks

A try-catch block is a programming concept that allows you to handle potential errors or exceptions that might occur during the execution of your code. 

The "try" section contains the code you want to execute, and if an exception occurs within it, the "catch" section is run, letting you handle the exception gracefully by providing appropriate error-handling code.

Let's take a look at an example:

```c#
var filePath = "c:/example.txt";
try
{
    using (StreamReader sr = new StreamReader(filePath)) {
        string line;

        // Read and display lines from the file until 
        // the end of the file is reached. 
        while ((line = sr.ReadLine()) != null) {
            Console.WriteLine(line);
        }
    }
}
catch (Exception ex)
{
    Console.WriteLine($"Error: The file '{filePath}' was not found.");
}
```

Because we are "catching" the error that occurred in the try block, the program will not crash it will just log the error!

#### Don't Swallow Errors

Take a look at this second example of a try/catch block. This is an example of what in the software engineering industry gets referred to as "Swallowing an error"
```c#
try
{
    int dividend = 10;
    int divisor = 0;

    int result = dividend / divisor; // This will cause a divide by zero exception

    Console.WriteLine("Result: " + result);
}
catch (Exception ex)
{
}

Console.WriteLine("Program continues on with whatever else it was supposed to do.");
```

<section class="call-to-action" markdown="1">
With your partner: Discuss what you think "Swallowing an error" means? Start by thinking on your own based on this example then feel free to google. Then discuss why it's bad practice to swallow errors.
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    "Swallowing an error" in software development means catching an exception that occurs during program execution but not taking any meaningful action to handle or address the error. This practice is problematic because it leads to loss of crucial information, undetected issues, unpredictable behavior, security risks, and maintenance challenges. Instead of swallowing errors, it's better to log errors, notify users, take corrective action, implement retry logic, or rethrow exceptions for proper handling and improved application reliability.</p>
</aside>

In our current applications we don't have any places we really need a try/catch block, but soon when we are calling external APIs from our applications this tool will be very useful.

## Check for Understanding

<section class="call-to-action" markdown="1">
With your partner: Discuss how you would answer the following interview question. <br> <br> *What do you know about error handling in a .NET application? What are best practices for error handling that you prioritize, and how have you implemented these practices in the applications you've developed?* <br> <br> You might find it helpful to look back on the four error handling rules that you learned about in today's preparation.
</section>