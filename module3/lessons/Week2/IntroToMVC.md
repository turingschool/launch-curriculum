---
layout: page
title:  Introduction to MVC (Model, View, Controller)
---

## Learning Goals
* Identify the elements of the MVC design pattern
* Describe the single responsibility of each of the Model, View, and Controller
* Build our first ASP.NET MVP Application

<!-- Todo insert the plan for the day here.... -->
https://docs.google.com/presentation/d/1YKc7fF2SyeWJUmmw2Elw4HujCgkRUVbwuE9SXzimqdo/edit?usp=sharing

## Building and Running The Starter Project

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>This lesson is a modification of the Microsoft tutorial with only the essentials left. https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-6.0&tabs=visual-studio <br> Make sure students don't select the template just titled `asp.net core web app` without the MVC at the end, that uses Razor Pages
    </p>
</aside>

Our first step is the open up Visual Studio and follow the steps below.

![Creating a Web App](/assets/images/module3/Week2/MVC_1_Create_Web_App.png)

Visual Studio has now used the template to create a fully working app! We will build off of that starter project.

But first, let's run this starter project.

Click the outlined outlined "play" button to "Start Without Debugging". You will probably see the following confirmations

![Creating a Web App Confirmation Messages](/assets/images/module3/Week2/MVC_2_Create_Web_App_Confirmations.png)

When you click start, Visual Studio runs the app and opens it in the default browser. You should see a page that says "Welcome Learn about building Web apps with ASP.NET Core."

<!-- TODO, how much to talk about ports. Should that also come in http lesson? -->
The address bar shows `localhost:<port#>`. Localhost means the application is running on your local computer. When Visual Studio creates a web project, a random port is used for the web server.

## Adding a Controller

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>I encourage referencing back to the sides from the start of class to refresh what a controller is before diving into this section.
    </p>
</aside>

We're going to use the scaffolding tool in Visual Studio to create our controller.

![Creating a Controller](/assets/images/module3/Week2/MVC_3_Create_Controller.png)

Replace the contents of Controllers/HelloWorldController.cs with the following code:
```C#
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class HelloWorldController : Controller
    {
        // 
        // GET: /HelloWorld/
        public string Index()
        {
            return "This is my default action...";
        }

        // 
        // GET: /HelloWorld/Welcome/ 
        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }
}
```

Every public method in a controller is callable as an HTTP endpoint. In the sample above, both methods return a string.

An HTTP endpoint:
* Is a targetable URL in the web application, such as https://localhost:5001/HelloWorld.

Combines:
* The protocol used: HTTPS.
* The network location of the web server, including the port: localhost:5001.
* The path: HelloWorld.
<!-- TODO, does request response lesson use path or uri? -->
In your browser, navigate to https://localhost:{PORT}/HelloWorld.

![Navigate to a route in the browser](/assets/images/module3/Week2/MVC_4_Route_In_Browser.png)

❓How can we get "This is the Welcome action method..." to show up in our browser?

<!-- Start by making a controller with the same name -->

#### Controller Practice

> With your partner: Create create a new route in your controller so that when the user visits `https://localhost:{PORT}/cart` they see the string "Here are all of the items in your shopping cart"

<!-- TODO, Should we talk about path parameters here?? At some point want to talk about taking in data via a path parameter and then sending back that data in the string. Then students can have a lab section here to practice. Maybe split this lesson into CV day 1, M day 2 -->

## Adding a View

In this section, we will modify the HelloWorldController class to use Razor view files instead of just sending back a string.

<!-- TODO, open question, I'm thinking might be good to introduce Razor syntax the day before in addition to interfaces. Maybe we give them a full app and only have them edit a certain file that is using the Razor syntax?-->
View templates are created using Razor.

Razor-based view templates:
* Have a .cshtml file extension.
* Provide an elegant way to create HTML output with C#.

Currently, the Index method returns a string with a message in the controller class. In the HelloWorldController class, replace the Index method with the following code:

```C#
public IActionResult Index()
{
    return View();
}
```

This will use the view template that corresponds with this controller to generate an HTML response.

Next, we will use Visual Studio to create a new view.
![Adding a View](/assets/images/module3/Week2/MVC_5_Create_View.png)

Replace the contents of the `Views/HelloWorld/Index.cshtml` Razor view file with the following:

```C#
@{
    ViewData["Title"] = "Index";
}

<h2>Index</h2>

<p>Hello from our View Template!</p>
```

Navigate to `https://localhost:{PORT}/HelloWorld`:

The `Index` method in the `HelloWorldController` ran the statement `return View();`, which specified that the method should use a view template file to render a response to the browser.

A view template file name wasn't specified, so MVC defaulted to using the default view file. The default view has the same name as the action method, `Index` in this example. The view template `/Views/HelloWorld/Index.cshtml` is used.

![After Adding a View](/assets/images/module3/Week2/MVC_6_After_Adding_View.png)

<!-- TODO, how to get hot reloading??? I have to restart the app to get changes :( -->

> With your partner: 

Change the title and <h2> element as highlighted in the following:
<!-- Todo: make this a student challenge with a dropdown -->
```C#
@{
    ViewData["Title"] = "Movie List";
}

<h2>My Movie List</h2>

<p>Hello from our View Template!</p>
```


<!-- TODO, maybe student practice with putting in Razor view template stuff into their views? -->


<!-- TODO, changing the layout stuff could be lab time practice? Not necessary for the lesson: https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/adding-view?view=aspnetcore-6.0&tabs=visual-studio#change-views-and-layout-pages How does the title get onto the page, that's part of the layout you will look into that during lab time. -->


<!-- ### Passing Data from the Controller to the View

TODO, do we want to show passing data via ViewData or skip right to the model? -->

<!-- TODO, I'm thinking of breaking this lesson into 2 parts and stopping part 1 here. -->


## Adding a Model

These model classes are used with Entity Framework Core (EF Core) to work with a database.

Let's start by adding a new model class.
![Adding a model](/assets/images/module3/Week2/MVC_7_Adding_Model.png)

Update the Models/Movie.cs file with the following code:

<!-- TODO, this is what's in the tutorial but I vote for a much more simplified model with nothing new. Need to try this out and make sure it works. -->

<!-- ```C#
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string? Title { get; set; }

        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public string? Genre { get; set; }
        public decimal Price { get; set; }
    }
}
```
<!-- The Movie class contains an Id field, which is required by the database for the primary key.

The DataType attribute on ReleaseDate specifies the type of the data (Date). With this attribute:

The user isn't required to enter time information in the date field.
Only the date is displayed, not time information.
DataAnnotations are covered in a later tutorial.

The question mark after string indicates that the property is nullable. For more information, see Nullable reference types. --> -->

```C#
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
    }
}
```

### Add NuGet packages

`From the Tools menu, select NuGet Package Manager > Package Manager Console (PMC)`

```
Install-Package Npgsql.EntityFrameworkCore.PostgreSQL
<!-- Install-Package Microsoft.EntityFrameworkCore.Design -->
```
Make sure to install version 6 and not version 7!

<!-- Todo, why is it still connecting to SQL server DB? -->

#### Scaffold Movie Pages

![Scaffolding out Controller and Views](/assets/images/module3/Week2/MVC_8_Scaffolding_Controller_and_Views.png)

![Scaffolding Options](/assets/images/module3/Week2/MVC_9_Scaffolding_Part2.png)

<!-- TODO, when do we talk about dependency injection, it's key to understanding how the parts connect and how the DBContect gets into the controller, but is too much for this lesson. -->

### Creating our Database
```
Add-Migration InitialCreate
Update-Database
```

<!-- Scavenger hunt for familiar parts? Where is db connection string? Where is context? What routes exist?-->

## Zooming Back Out to MVC

Maybe we zoom in on the details page, easiest to understand??

```C#
// GET: Movies/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Movie == null)
            {
                return NotFound();
            }

            var movie = await _context.Movie
                .FirstOrDefaultAsync(m => m.Id == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }
```
1. What is the url to call this route, what data is passed in?
1. What data is passed to the View?
1. Can you figure out what View file will be rendered? How do you know?


`Views/Movies/Details.cshtml`
```C#
@model MvcMovie.Models.Movie

@{
    ViewData["Title"] = "Details";
}

<h1>Details</h1>

<div>
    <h4>Movie</h4>
    <hr />
    <dl class="row">
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.Title)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.Title)
        </dd>
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.ReleaseDate)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.ReleaseDate)
        </dd>
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.Genre)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.Genre)
        </dd>
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.Price)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.Price)
        </dd>
    </dl>
</div>
<div>
    <a asp-action="Edit" asp-route-id="@Model?.Id">Edit</a> |
    <a asp-action="Index">Back to List</a>
</div>
```


### How are The Model, View, and Controller Connected?

Controller is passing model data into the View.

Controller, tells what view to send back. Have students find where that happens.

View is using the data from the model in displaying content.



Back to the powerpoint, try to draw out what's going on with the file names in the picture.
