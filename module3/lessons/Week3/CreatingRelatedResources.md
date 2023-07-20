---
layout: page
title: Creating Related Resources
---

<section class='instructor-notes' markdown='1'>

The completed code for this lesson is on the create-related-resource branch of the [MvcMovieStarter](https://github.com/turingschool-examples/MvcMovieStarter/tree/create-related-resource)

</section>

## Learning Goals
- Use a form to create a one-to-many relationship

### Demo

Your instructor will demonstrate what our MvcMovie application will look like after today's lesson.  Our goal today is to:
* Use a form to create new reviews for a movie

## Using a Form to Create Reviews

Similar to the form we use to create movies, we are going to use a form to create reviews. 

<section class='call-to-action' markdown='1'>

**In Small Groups**
Outline the components we will need in place to make the user stories below.  Be sure to consider:
* What controller actions do we need?
* What views do we need?
* What data needs to be passed to and from the views?

Be Ready to Share out!

**In Small Groups**
* What tests will we add?
* Will we need to make any adjustments to our current implementation or tests?

Be Ready to Share out!

```
As a User
When I visit /movies/1/reviews
Then I see a link to 'Add a Review'

When I click on the link
Then I am on page /movies/1/reviews/new
```

```
As a User
When I visit /movies/1/reviews/new
Then I see a form to create a review with
    A number Rating
    A textfield Content
    A button to 'Create Review'
```

```
As a User
When I fill in the New Review form
    And click 'Create Review'
Then I am redirected to /movie/1/reviews
Then I see the review I created
```

</section>

### Test the New View

<section class='call-to-action' markdown='1'>

**Individually**  
Using the tests we created to verify the new movie page, write the tests for the first two user stories above.

</section>

<section class='answer' markdown='1'>

### One Solution

```c#
[Fact]
public async Task Index_ReturnsViewWithLinkToNewForm()
{
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie spaceballs = new Movie { Genre = "Comedy", Title = "Spaceballs" };
    context.Movies.Add(spaceballs);
    context.SaveChanges();

    var response = await client.GetAsync($"/Movies/{spaceballs.Id}/Reviews");
    var html = await response.Content.ReadAsStringAsync();

    Assert.Contains($"<a href='/movies/{spaceballs.Id}/reviews/new'>", html);
}

[Fact]
public async Task New_ReturnsViewWithForm()
{
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie spaceballs = new Movie { Genre = "Comedy", Title = "Spaceballs" };
    context.Movies.Add(spaceballs);
    context.SaveChanges();

    var response = await client.GetAsync($"/Movies/{spaceballs.Id}/Reviews/New");
    var html = await response.Content.ReadAsStringAsync();

    Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    Assert.Contains($"<form method='post' action='/movies/{spaceballs.Id}/reviews'", html);
}
```

</section>

<section class='instructor-notes' markdown='1'>
This is a good opportunity to ask students to navigate through the implementation while you drive!
</section>

Now that we have some tests created, we can use them to guide our implementation!

One main difference between this `new` view and the one we created for our Movie form is the information that needs to be passed in to the action, and then on to the view:

```c#
// GET: /movies/:movieId/reviews/new
[Route("Movies/{movieId:int}/reviews/new")]
public IActionResult New(int movieId)
{
    var movie = _context.Movies
        .Where(m => m.Id == movieId)
        .Include(m => m.Reviews)
        .First();

    return View(movie);
}
```

### Test the Create Action

<section class='call-to-action' markdown='1'>

**In Small Groups**  
Using the tests we created to verify the new movie create action, write the tests for the third user story above.

</section>

<section class='answer' markdown='1'>

### One Solution

```C#
[Fact]
public async Task Create_AddsReview_RedirectsToMovieReviewsIndex()
{
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie spaceballs = new Movie { Genre = "Comedy", Title = "Spaceballs" };
    context.Movies.Add(spaceballs);
    context.SaveChanges();

    var formData = new Dictionary<string, string>
    {
        { "Rating", "5" },
        { "Content", "Better than Star Wars" }
    };

    var response = await client.PostAsync($"/movies/{spaceballs.Id}/reviews", new FormUrlEncodedContent(formData));
    var html = await response.Content.ReadAsStringAsync();

    Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    Assert.Contains($"/Movies/{spaceballs.Id}/reviews", response.RequestMessage.RequestUri.ToString());
    Assert.Contains("5: Better than Star Wars", html);
    Assert.DoesNotContain("4: Good. But, when will then be now?", html);
}
```

</section>

<section class='call-to-action' markdown='1'>

**In Small Groups**  
Using the tests we created to verify the new movie create action, write the tests for the third user story above.

</section>

<section class='answer' markdown='1'>

### One Solution

```c#
[HttpPost]
[Route("/Movies/{movieId:int}/reviews")]
public IActionResult Create(int movieId, Review review)
{
    var movie = _context.Movies
        .Where(m => m.Id == movieId)
        .Include(m => m.Reviews)
        .First();
    movie.Reviews.Add(review);
    _context.SaveChanges();

    return RedirectToAction("index", new { movieId = movie.Id });
}
```

</section>

## Checks for Understanding
* Imagine we are building an application for a Library, where Books can have many Authors (a book must have at least one author), and Authors may have many books.
    * What might the routes look like for creating a new book?
    * What might the routes look like for creating a new Author?
