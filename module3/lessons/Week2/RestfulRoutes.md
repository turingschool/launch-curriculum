---
layout: page
title:  RESTful Routes
---

## Learning Objectives
*
*


## The List


Here is a table of the list of RESTful routes. The given URL based on the context from our `MvcMovie` application.


| Route Name | URL | HTTP Method | Purpose |
|--|--|--|--|
| **Index** | `/movies` | GET | Display list of all movies |
| **New** | `/movies/new` | GET | Use form to create new movie |
| **Create** | `/movies` | POST | Create new movie in database |
| **Show** | `/movies/:id` | GET | Display details for one specific movie |
| **Edit** | `/movies/:id/edit` | GET | Use form to edit existing movie |
| **Update** | `/movies/:id` | PATCH | Update existing movie in database |
| **Destroy** | `/movies/:id` | DELETE | Delete existing movie |

## RESTful Routes
Let's breakdown each method in our controller as it pertains to REST.

## Index() method


```c#
// GET: /Movies
public IActionResult Index()
{
    var movies = _context.Movies;
    return View(movies);
}
```


This was the existing method in our controller from the MVC lesson. As we witnessed previously, this method returns all the movies in our database.


### New()


```c#
// GET: /Movies/New
public IActionResult New()
{
    return View();
}
```


This method offers a form for the user to create a new movie object.


### Create()
```c#
// POST: /Movies/Create
```


This method creates a new movie object to add to our database, often in conjunction with the `New()` method.


### Show(int id)


```c#
// GET: /Movies/<id>
[Route("Movies/{id:int}")]
public IActionResult Show(int id)
{
    var movie = _context.Movies.Find(id);
    return View(movie);
}
```


This method returns the movie object that matches the given ID number. If the ID does not exist in the database, the app should fail gracefully (i.e. display an error message instead of an error page). Occasionally, this method is named `Details()`.


*Note:* the annotation makes the route `/Movies/<id>` instead of `/Movies/Show/<id>`


### Edit(int id)
```c#
// GET: /Movies/<id>/edit
```


This method offers a form for the user to edit an existing movie object.


### Update(int id)
```c#
// PATCH: /Movies/<id>
```


This method updates an existing movie object, often in conjunction with the `Edit()` method.


### Destroy(int id)
```c#
// DELETE: /Movies/<id>
```


This method deletes an existing movie object from our database. Occasionally, this method is named `Delete()`.

