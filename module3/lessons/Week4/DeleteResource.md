---
layout: page
title:  Delete Resources
---

## Learning Goals
* Practice destruction of single and related resources
* Test deletion of single and related resources
* Update an app for a more polished user experience

We will be continuing to build our MVC Movies application. Take a minute to make sure you have that project open and check out the branch your instructor will share in Slack.

## Warm Up
Let's start by reviewing the Request/Response diagrams for Delete that you worked on in preparation for today's lesson.

Share your diagram in the thread in your cohort's Slack channel.

Take 5 minutes to review each other's diagrams and reflect on the following questions:
* What's similar between most of the diagrams?
* What's something that differs between the diagrams?

<!-- Instructor Note -->
We're going to go with the route as // DELETE (via Post): /Movies/Delete/:id. It's best practice to only use get if not modifying anything, and there are security risks with doing modifications to the DB as a result of a GET request. Would be good to have a discussion here about why we can't do POST /movies/:id, the reasoning is because that route is already used for the PUT request for the edit form.

## Delete a Single Resource

### View Changes - Delete a Single Resource

TODO: Add words here......

```html
@model IEnumerable<Movie>

<h1>Movies</h1>

@foreach (var movie in Model)
{
    <div class="movie-info">
        <p>Title: @movie.Title, Genre: @movie.Genre, Id: @movie.Id</p>

        <form action="/Movies/Delete/@movie.Id" method="post">
            <button type="submit">Delete</button>
        </form>
    </div>
}
```

Yes, it's hard to read what record the Delete button belongs to! First let's get the functionality working, then we will come back and clean up the UI.

### Controller Changes - Delete a Single Resource

```c#
// DELETE (via Post): /Movies/Delete/:id
[HttpPost]
public IActionResult Delete(int id)
{
    var movie = _context.Movies.Find(id);

    _context.Movies.Remove(movie);
    _context.SaveChanges();

    return RedirectToAction("Index");
}
``` 

<!-- Instructor Note -->
If students are asking about the warning under movie because it might be null. This is a good point to lead a discussion about why movie might be null, and say that we will talk more about error handling in Mod 5. This is also the syntax you will probably want to fix this error if you want to talk about the implementation with students.

if (movie == null)
{
    return HttpNotFound();
}


The new tool we need here is the `.Remove()` method. Let's take a look at the documentation for this new method [here](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1.remove?view=efcore-7.0). We can see from the documentation that Remove `Begins tracking the given entity in the Deleted state such that it will be removed from the database when SaveChanges() is called.` We can also see it takes the entity to remove as a parameter.

### Testing - Delete a Single Resource

> With your partner, write at least two tests to test our new delete functionality.

<!-- Dropdown -->
One solution:

```C#
[Fact]
public async Task Delete_RemovesMovieFromIndexPage()
{
    // Arrange
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie movie = new Movie { Title = "Goofy", Genre = "Comedy" };
    context.Movies.Add(movie);
    context.SaveChanges();

    // Act
    var response = await client.PostAsync($"/movies/delete/{movie.Id}", null);
    var html = await response.Content.ReadAsStringAsync();

    // Assert
    response.EnsureSuccessStatusCode();
    Assert.DoesNotContain("Goofy", html);
}

[Fact]
public async Task Delete_OnlyDeletesOneMovie()
{
    // Arrange
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie movieGoofy = new Movie { Title = "Goofy", Genre = "Comedy" };
    context.Movies.Add(movieGoofy);
    Movie movieElf = new Movie { Title = "Elf", Genre = "Holiday" };
    context.Movies.Add(movieElf);
    context.SaveChanges();

    // Act
    var response = await client.PostAsync($"/movies/delete/{movieGoofy.Id}", null);
    var html = await response.Content.ReadAsStringAsync();

    // Assert
    response.EnsureSuccessStatusCode();
    Assert.Contains("Elf", html);
}

[Fact]
public async Task Delete_RemovesAllDeletedMoviesReviews()
{
    // Arrange
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie spaceballs = new Movie { Genre = "Comedy", Title = "Spaceballs" };
    Review review = new Review
    {
        Content = "Great",
        Rating = 4,
        Movie = spaceballs
    };
    Review review2 = new Review
    {
        Content = "Just ok",
        Rating = 2,
        Movie = spaceballs
    };
    context.Movies.Add(spaceballs);
    context.Reviews.Add(review);
    context.Reviews.Add(review2);
    context.SaveChanges();

    // Act
    var response = await client.PostAsync($"/movies/delete/{spaceballs.Id}", null);

    // Assert
    var savedMovie = context.Reviews.FirstOrDefault(r => r.Movie == spaceballs);
    Assert.Null(savedMovie);
}
```

One question that arose for me while writing tests for deleting a movie is the following: What happens to the associated reviews if a movie is deleted?

> With your partner, try to figure out what happens in this case. Be prepared to answer how you figured out what happens when we come back together. Once you figure out what happens, try to write a test for this functionality.

<!-- More info -->
https://learn.microsoft.com/en-us/ef/core/saving/cascade-delete

## Improving our UI with CSS

Currently, our UI for deleting a movie is hard to read and could use a makeover.

Start by adding your `Index.cshtml.css` file in the same folder as the Index page for Movies. `Views` -> `Movies`.

> With your partner, take 15 minutes and try to improve the ui. If you're stuck on where to start here are some ideas.



<!-- Dropdown -->
* It might look nice if the title of the movie was more prominent than in a paragraph tag.
* It might look nice to use the border CSS property to create a line between the movies.

Before Picture:
![Before photo of the delete button on the movies index](/assets/images/module3/Week4/Delete_Button_Movies_Index.png)

## Delete a Related Resource

In pairs, students work to implement deletion for multiple resources. 


<!-- Instructor note -->
Finished deleting related resources can be found on the branch `delete-resources` in MVCMovies.

❓What did you name your path?




## Checks for Understanding

1. 
1. 
1. 