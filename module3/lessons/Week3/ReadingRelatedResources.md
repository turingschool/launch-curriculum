---
layout: page
title: Reading Related Resources
---

<section class='instructor-notes' markdown='1'>

The completed code for this lesson (and the creating related resources) is on the create-related-resource branch of the [MvcMovieStarter](https://github.com/turingschool-examples/MvcMovieStarter/tree/create-related-resource)

</section>

## Learning Goals
- Create Index Page for a Resource with related data

### Demo

Your instructor will demonstrate what our MvcMovie application will look like after today's lesson.  Our goal today is to:
* Add Movie Reviews to our database
* Include a Movie's reviews on that Movie's show page

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

<section class="instructor-note" markdown="1">

Might be good to do a quick waterfall of check for understanding here to make sure everyone is on the same page about what wisiting the page artists/2/paintings/10 would show you. E.g. The painting with id 10 that belongs to artist with id 2.

</section>

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

<section class="instructor-note" markdown="1">
This exercise may be fairly difficult.  You will want to walk through this solution, asking for questions, and clarifying any tricky parts.
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
    Review review3 = new Review { Rating = 3, Content = "Not as good as Spaceballs" };
    context.Movies.Add(spaceballs);
    context.Movies.Add(youngFrankenstein);
    context.SaveChanges();

    var response = await client.GetAsync($"/Movies/{spaceballs.Id}/Reviews");
    //Make sure the route exists!
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);

    var html = await response.Content.ReadAsStringAsync();

    //Make sure the page contains the correct info
    Assert.Contains(spaceballs.Title, html);
    Assert.Contains(review1.Content, html);
    Assert.Contains(review2.Content, html);
    //Make sure the page does not contain info for other movies, or reviews!
    Assert.DoesNotContain(youngFrankenstein.Title, html);
    Assert.DoesNotContain(review3.Content, html);
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

There are a few ways to get the correct information into the views.  Two common approaches are to:
* use information from the route to find the correct resources
* use ViewData to send static information to the view

Using these strategies will result in a controller action that could look like this:

```c#
// GET: /movies/:movieId/reviews
[Route("Movies/{movieId:int}/reviews")]
public IActionResult Index(int movieId)
{
    var movie = _context.Movies
        .Where(m => m.Id == movieId)
        .Include(m => m.Reviews)
        .First(); 

    return View(movie);
}
```

In this action, we are pulling the movie record, and **including** all associated reviews.

## Checks for Understanding
* Why do we need to include the movie id in our route for reviews?
* What would happen if we did not `.Include()` the reviews for a movie in our Reviews Index action?
* Let's imagine we are going to add Directors to our application.  What would the RESTful routes look like for Directors?