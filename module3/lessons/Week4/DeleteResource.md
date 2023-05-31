---
layout: page
title:  Delete Resources
---

## Learning Goals
* Practice deletion of single and related resources
* Test deletion of single and related resources
* Update an app for a more polished user experience

We will be continuing to build our MVC Movies application. Take a minute to make sure you have that project open and check out the branch your instructor will share in Slack.

## Warm Up
Let's start by reviewing the Request/Response diagrams for Delete that you worked on in preparation for today's lesson.

Share your diagram in the thread in your cohort's Slack channel.

Take 5 minutes to review each other's diagrams and reflect on the following questions:
* What's similar between most of the diagrams?
* What's something that differs between the diagrams?

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>We're going to go with the route as // DELETE (via Post): /Movies/Delete/:id. It's best practice to only use get if not modifying anything, and there are security risks with doing modifications to the DB as a result of a GET request. Would be good to have a discussion here about why we can't do POST /movies/:id, the reasoning is because that route is already used for the PUT request for the edit form.</p>
</aside>

## Delete a Single Resource

### View Changes - Delete a Single Resource

Let's work together to add a Delete button to the resources on our Index page for viewing all movies. 

Open the `Index.cshtml` in your `Movies` folder, and let's figure out together how to add that delete button!

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

Yes, our current user interface (UI), which is the way the user interacts with our application, makes it hard to read what record the delete button belongs to... but let's first get the functionality working, then we will come back and clean up the styling.

### Controller Changes - Delete a Single Resource

The code we need to add to our MoviesController.cs should look very similar to what we've done for our other endpoints.

The new tool we need here is the `.Remove()` method. Let's take a look at the documentation for this new method [here](https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1.remove?view=efcore-7.0). We can see from the documentation that Remove `Begins tracking the given entity in the Deleted state such that it will be removed from the database when SaveChanges() is called.` We can also see it takes the entity to remove as a parameter.

Here is what our finished route looks like:

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
<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>If students are asking about the warning under movie because it might be null. This is a good point to lead a discussion about why movie might be null, and say that we will talk more about error handling in Mod 5. This is also the syntax you will probably want to fix this error if you want to talk about the implementation with students.
    if (movie == null){ return HttpNotFound();}
   </p>
</aside>

### Testing - Delete a Single Resource

<section class='call-to-action' markdown='1'>

With your partner, write at least two tests to test our new delete functionality.

</section>

<section class="answer" markdown="1">
### One Solution

```c#
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
</section>

One question that may have come up while writing tests for deleting a movie is the following: What happens to the associated reviews if a movie is deleted?

<section class='call-to-action' markdown='1'>

With your partner, try to figure out what happens in this case. Be prepared to answer how you figured out what happens when we come back together. Once you figure out what happens, try to write a test for this functionality.
</section>


This concept is called cascading delete, you can learn more [here](https://learn.microsoft.com/en-us/ef/core/saving/cascade-delete).


## Improving our UI with CSS

Currently, our UI for deleting a movie is hard to read and could use a makeover.

Start by adding a `Index.cshtml.css` file in the same folder as the Index page for Movies. `Views` -> `Movies`.

<section class='call-to-action' markdown='1'>

With your partner, take 15 minutes and improve the ui. When we come back together I'll call on groups to share their CSS changes. If you're stuck on where to start here are some ideas.
</section>


<section class="answer" markdown="1">
### Some Ideas

* It might look nice if the title of the movie was more prominent than in a paragraph tag.
* It might look nice to use the border CSS property to create a line between the movies.
</section>

Before Picture:
![Before photo of the delete button on the movies index](/assets/images/module3/Week4/Delete_Button_Movies_Index.png)

## Delete a Related Resource

You have all the tools required to add a delete button for reviews. 

When I go to a page similar to `https://localhost:7052/movies/3/reviews` I should see all reviews and a button next to each review to delete. 

<section class='call-to-action' markdown='1'>

With your partner, implement delete for reviews. Once you have the functionality working, you can add some CSS to improve your UI.
</section>

When we come back together your instructor will call on groups to share what they worked on and the answer to the following questions:

❓What did you name your path? <br>
❓How was implementing delete for a review similar and how was it different to implementing delete for a movie?

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>Finished deleting related resources can be found on the branch `delete-resources` in MVCMovies.</p>
</aside>

## Checks for Understanding

1. What is the purpose of the `.Remove()` method in the controller code? What do we need to pass in as a parameter when calling `.Remove()`.
1. When creating a delete button, what is the purpose of adding `@movie.Id` in the path?
    ```html
    <form action="/Movies/Delete/@movie.Id" method="post">
        <button type="submit">Delete</button>
    </form>
    ```
1. Imaging that your coworker was writing tests to delete movies, she only included the following test. What feedback would you give your coworker about why she should add more tests and what other cases she might want to test?

```c#
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
```