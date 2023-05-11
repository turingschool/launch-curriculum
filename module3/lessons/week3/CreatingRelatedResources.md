---
layout: page
title: Creating and Reading Related Resources
---

<section class='instructor-notes' markdown='1'>

The completed code for this lesson is on the create-related-resource branch of the [MvcMovieStarter](https://github.com/turingschool-examples/MvcMovieStarter/tree/create-related-resource)

</section>

## Learning Goals
- Use a form to create a one-to-many relationship
- Create Index Page for a Resource with related data

### Demo

Your instructor will demonstrate what our MvcMovie application will look like after today's lesson.  Our goal today is to:
* Add Movie Reviews to our database
* Include a Movie's reviews on it's show page
* Use a form to create new reviews for a movie

## Nested Resources

So far, we have been working with a single resource - Movie.  This makes our routes relatively straight forward. We learned about RESTful routes and implemented them into our project.

<section class='call-to-action'>
<strong>To Review</strong>: List all the RESTful routes for Movie in your notebook.
</section>

RESTful routes can also be used for more complex data relationships.  

We are going to be updating our application so that we have a database similar to the diagram below:
![](/assets/images/module3/Week3/MovieReviewERD.png)

<section class='answer' markdown="1">

### Restful Routes for a Nested Resource
If we imagine we have an application that tracks artists and their paintings.  An artist has many paintings, and a painting belongs to an artist.  The 14 restful routes we would create (7 for each resource) could look like:

| path                                  | method     | Controller#Action |  
| ------------------------------------- | ---------: | ----------------: |  
| /artists                              | GET        | Artists#Index     |  
| /artists/:id                          | GET        | Artists#Show      |  
| /artists/new                          | GET        | Artists#New       |  
| /artists                              | POST       | Artists#Create    |  
| /artists/:id/edit                     | GET        | Artists#Edit      |  
| /artists/:id                          | PUT        | Artists#Update    |  
| /artists/:id                          | DELETE     | Artists#Destroy   |  
| /artists/:artistId/paintings          | GET        | Paintings#Index   |  
| /artists/:artistId/paintings/:id      | GET        | Paintings#Show    |  
| /artists/:artistId/paintings/new      | GET        | Paintings#New     |  
| /artists/:artistsId/paintings         | POST       | Paintings#Create  |  
| /artists/:artistId/paintings/:id/edit | GET        | Paintings#Edit    |  
| /artists/:artistId/paintings/:id      | PUT        | Paintings#Update  |  
| /artists/:artistId/paintings/:id      | DELETE     | Artists#Destroy   |  

Note that the routes are _nested_ to reflect the database relationships that exists, but the controllers are not nested.

</section>

## Use TDD to Create a Movie's Review Page

Today, we are going to use TDD to help us drive the development of our new feature!

<section class='call-to-action' markdown='1'>

With a partner, work on creating a test for the User Story below.  Make sure to consider:
* What objects need to exist in the Arrange section?
* How will you confirm what should be on the page?

```
As a user
When I visit /movies/1/reviews
Then I see
    The title of the movie
    All of that movie's reviews (with a rating and review content)
```

</section>

<section class='answer' markdown='1'>

### One Solution

```c#
[Fact]
public async Task Index_ReturnsViewWithReviews()
{
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie spaceballs = new Movie { Genre = "Comedy", Title = "Spaceballs" };
    Review review1 = new Review { Rating = 5, Content = "Better than Star Wars" };
    Review review2 = new Review { Rating = 4, Content = "Good. But, when will then be now?" };
    spaceballs.Reviews.Add(review1);
    spaceballs.Reviews.Add(review2);
    Movie youngFrankenstein = new Movie { Genre = "Comedy", Title = "Young Frankenstein" };
    context.Movies.Add(spaceballs);
    context.Movies.Add(youngFrankenstein);
    context.SaveChanges();

    var response = await client.GetAsync($"/Movies/{spaceballs.Id}/Reviews");
    //Make sure the route exists!
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);

    var html = await response.Content.ReadAsStringAsync();

    //Make sure the page contains the correct info
    Assert.Contains(spaceballs.Title, html);
    Assert.DoesNotContain(youngFrankenstein.Title, html);
}
```

</section>

### To make these tests pass, we must:
1. Create a Review Model
2. Update our Movie Model
3. Update our Context
4. Update our Database
    * Create a Migration
    * Update the Database
5. Add a controller action
6. Add the view

<section class='instructor-notes' markdown='1'>
Walk through these steps as a group; gather steps from students as you go!

We want students to understand how we can send the information we need to show information from two resources on a single view
</section>

### Multiple Resources In One Controller Action

We often need to send information to a view that is related to multiple resources.  In our MvcMovie application, we need information about a movie, and information about reviews to satisfy our user story.

There are a few ways to get the correct information into the views.  Two simple ways are to:
* use information from the route to find the correct resources
* use ViewData to send static information to the view

Using these strategies will result in a controller action that looks like this:

```c#
// GET: /movies/:movieId/reviews
[Route("Movies/{movieId:int}/reviews")]
public IActionResult Index(int movieId)
{
    var movie = _context.Movies
        .Where(m => m.Id == movieId)
        .Include(m => m.Reviews)
        .First(); 
    var reviews = movie.Reviews;
    
    ViewData["MovieTitle"] = movie.Title;
    return View(reviews);
}
```

## Using a Form to Create Reviews

Similar to the form we use to create movies, we are going to use a form to create reviews.  

<section class='call-to-action' markdown='1'>

**In Small Groups**
Outline the components we will need in place to make the user stories below.  Be sure to consider:
* What controller actions do we need?
* What views do we need?
* What data needs to be passed to and from the views?
* What tests will we add?
* Will we need to make any adjustments to our current implementation or tests?

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

    ViewData["MovieTitle"] = movie.Title;
    ViewData["MovieId"] = movie.Id;
    return View();
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
* Why do we need to include the movie id in our route for reviews?
* What would happen if we did not `.Include()` the reviews for a movie in our Reviews Index action?
* Let's imagine we are going to add Directors to our application.  What would the RESTful routes look like for Directors?