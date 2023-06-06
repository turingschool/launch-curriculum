---
layout: page
title:  RESTful Routes
---

## Learning Objectives
* Review CRUD functionality
* Understand REST as it relates to CRUD
* Learn the 7 RESTful routes
* Understand the different between RESTful and non-RESTful routes

## But first...

<section class="answer" markdown="1">
### What is CRUD again?

Thus far, we've used CRUD functionality to **C**reate, **R**ead, **U**pdate, and **D**elete from a database.
</section>

<section class="answer" markdown="1">
### What is an HTTP route?

An HTTP route is the code responsible for receiving and responding to an HTTP request.
</section>

<section class="answer" markdown="1">
### What is a RESTful route?

* A RESTful route follows a common pattern to map between HTTP routes/methods and CRUD functionality.
* By the way, REST stands for **RE**presentation **S**tate **T**ransfer. This may be an interview question; remember it, just in case.
</section>

<section class="answer" markdown="1">
### What are the parts of a URL?

A URL can be split into distinct parts:

* Protocol: http:// - Tells us the application protocol we will be using to interact on the web.
* Domain: task-manager.herokuapp.com - Tells us where the resources we are trying to access are located (tied to an IP address using DNS).
* Path: /task/new - The specific path for the resources that we are trying to access at that location.
* Query String: ?title=New&task=Task - Params that give our server additional information about what we would like to access.

</section>

## The List of RESTful Routes

Here is a table of the list of RESTful routes. The given path is based on the context from our `MvcMovies` application.

| Route Name | Path | HTTP Method | CRUD | Return Type | Purpose |
|--|--|--|--|--|--|
| **Index** | `/movies` | GET | Read | View | Display list of all movies |
| **New** | `/movies/new` | GET | Create | View | Display form to create new movie |
| **Create** | `/movies` | POST | Create | Redirect | Create new movie in database |
| **Show** | `/movies/:id` | GET | Read | View | Display details for one specific movie |
| **Edit** | `/movies/:id/edit` | GET | Update | View | Display form to edit existing movie |
| **Update** | `/movies/:id` | PUT* | Update | Redirect | Update existing movie in database |
| **Destroy** | `/movies/:id` | DELETE | Delete | Redirect | Delete existing movie |

* The **Update** route can also use the *PATCH* method. PUT updates an entire resource; PATCH updates a portion of the resource.

## RESTful Routes
We will focus on two methods in our controller as it pertains to REST.

### Index() method

```c#
// GET: /Movies
public IActionResult Index()
{
    var movies = _context.Movies;
    return View(movies);
}
```

This is the existing method in our controller from the MVC lesson. As we witnessed previously, this method returns a View that displays all the movies in our database.

### Show(int id)

The Show() method takes an integer and returns the Movie record with that ID number from the database. 
To accomplish this, we need to do the following:
* Create a local variable that stores the movie from the `context` object.
* Return a View to display the details of that movie.

Add this code to `MoviesController.cs` file, preferably after the `Index()` method:

```c#
// GET: /Movies/<id>
public IActionResult Show(int id)
{
    var movie = _context.Movies.Find(id);
    return View(movie);
}
```

### Show View

We have a View for our Index route that displays all the movies in our database: `Index.cshtml`. 
We will create a View for our Show route that displays a single movie.

From Solution Explorer:
* Expand the Views folder
* Right-click the Movies folder
* Add > New File
* Name the new file `Show.cshtml`

Add the following code to the `Show.cshtml` file:

```html
@model Movie

<h1>Movie Details</h1>

<p>Title: @Model.Title</p>

<p>Genre: @Model.Genre</p>
```

<section class="answer" markdown="1">
### What does <code>@model</code> mean?

The <code>@</code> symbol is Razor syntax that allows us to write C# code within this file. In this case, it stores the Movie object to the <code>@model</code> variable and renders the values of <code>@model.Title</code> and <code>@model.Genre</code> to the browser.
</section>

We have just created a View for our Show route. However...

### RESTful Annotation

We are ALMOST done. Here's our problem: if we visit `/movies/1` to see the movie with the ID `1`, we get an error. To see the `1` movie, we would have to go to `/movies/show/1`. But this does not match the RESTful pattern from our table above. Instead, we need to add an annotation to make our route RESTful.

Add `[Route("Movies/{id:int}")]` above the Show() method declaration. The final method should look like this:

```c#
// GET: /Movies/<id>
[Route("Movies/{id:int}")]
public IActionResult Show(int id)
{
    var movie = _context.Movies.Find(id);
    return View(movie);
}
```

Our Show view should now display the `1` movie correctly.

## Later Lessons

In later lessons, we will continue to build out the remaining routes from the RESTful table.

* **New**: This method offers a form for the user to create a new movie object.
* **Create**: This method creates a new movie object to add to our database, often in conjunction with the `New()` method.
* **Edit**: This method offers a form for the user to edit an existing movie object.
* **Update**: This method updates an existing movie object, often in conjunction with the `Edit()` method.
* **Destroy**: This method deletes an existing movie object from our database.

## Check for Understanding

1. Which HTTP method(s) map to the following CRUD functions?
	* Create
	* Read
	* Update
	* Delete
1. If you had an application for `vehicles`, what are the paths for the 7 RESTful routes that need to be created?
1. What is the annotation you will need to add for the `Show()` method in the `vehicles` application?

## Additional Resources

* [Medium: The 7 RESTful routes!](https://medium.com/@shubhangirajagrawal/the-7-restful-routes-a8e84201f206)
* [Medium: RESTful Routing: Mapping REST to CRUD](https://medium.com/@atharvakulkarniamk/restful-routing-mapping-rest-to-crud-dbb2f32f748c)
* [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) aka **URI** 
* [If you're feeling really adventurous today](https://en.wikipedia.org/wiki/Representational_state_transfer)