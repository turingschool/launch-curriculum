---
layout: page
title: Updating Resources in MVC
---

## Learning Goals
- Use a form to update single resources
- Use a form to create a one-to-many relationship

During today's lesson, we are going to be adding the ability to edit our Movie and Song records using forms.

## Warm Up

<section class='call-to-action' markdown='1'>

Before we jump into coding, let's brainstorm what the HTTP Request/Response Cycle will look like for editing a Movie.  In small groups, create a diagram that outlines the requests and responses that will allow us to edit an existing resource.  Below are some resources that will help you create this diagram!
* [How the Web Works](/module3/lessons/week1/HowTheWebWorks)
* [ReSTful Routes]() TODO: Get ReSTful routes Lesson link
* [Creating a Resource]() TODO: Get Creating a Resource Lesson link

Be ready to share out!

</section>

## TDD Updating single resource

Updating a resource will look a lot like creating a resource.  We will need an action that returns a view with a form, and an action that makes database changes based on the form submission.  The biggest difference is that we are going to be associating an _existing_ record with the form; so our form-view will need additional information.

<section class='call-to-action' markdown='1'>

**With a Partner**  
Add a test to our MoviesControllerTests that satisfies this user-story
```
As a User
When I visit '/movies/1/edit'
Than I see a form to edit the movie
    And I see that the Title and Genre for that movie are pre-populated in the form.
```

</section>

<section class='answer' markdown='1'>

### One Solution

```c#
[Fact]
public async Task Edit_ReturnsFormViewPrePopulated()
{
    // Arrange
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie movie = new Movie { Title = "Spaceballs", Genre = "Comedy" };
    context.Movies.Add(movie);
    context.SaveChanges();

    // Act
    var response = await client.GetAsync($"/movies/{movie.Id}/edit");
    var html = await response.Content.ReadAsStringAsync();

    // Assert
    Assert.Contains("Edit Movie", html);
    Assert.Contains(movie.Title, html);
    Assert.Contains(movie.Genre, html);
}
```

</section>

**Code-Along**  
Now let's build the action that will make this test pass!

### HTTP and REsTful Routes

You will note in our walkthrough that even though the most **ReST**ful way to send an update request is with a `PUT` method; but, we are using `POST` in our form - why?

Because technology is changing all the time, we often have to work around differences in legacy or foundational structures (like HTML), and newer design strategies (like ReST).  

HTML has been used since the early 1990s.  At that time, the internet was a much simpler place.  The form tags we still use are designed to work with only two Http methods: Get and Post.

ReST was defined in the early 2000's as a way to standardized http requests.  As the internet became more complex, we started to see requests being made by applications and not just by users.  Applications could more easily create ReSTful routes and requests without using a user interface (we will learn more about this in Mod4!).  

<section class='instructor-notes' markdown='1'>
Walk through the implementation together - this would be a good opportunity to let students help drive the implementation!
</section>


<section class='call-to-action' markdown='1'>

**With a Partner**  
Add a test to our MoviesControllerTests that satisfies this user-story
```
As a User
When I visit '/movies/1/edit'
When I update the Title and/or Genre
    And click 'Update Movie'
Then I am redirected to the Movie Show Page
    And I see the updated movie information
```

</section>


<section class='answer' markdown='1'>

### One Solution
```c#
[Fact]
public async Task Update_SavesChangesToMovie()
{
    // Arrange
    var context = GetDbContext();
    var client = _factory.CreateClient();

    Movie movie = new Movie { Title = "Goofy", Genre = "Comedy" };
    context.Movies.Add(movie);
    context.SaveChanges();

    var formData = new Dictionary<string, string>
    {
        { "Title", "Goofy" },
        { "Genre", "Documentary" }
    };

    // Act
    var response = await client.PostAsync($"/movies/{movie.Id}", new FormUrlEncodedContent(formData));
    var html = await response.Content.ReadAsStringAsync();

    // Assert
    response.EnsureSuccessStatusCode();
    Assert.Contains("Goofy", html);
    Assert.Contains("Documentary", html);
    Assert.DoesNotContain("Comedy", html);
}
```

</section>

### the Order of Our Tests

Before we implement our controller action, we need to address one aspect of testing - the order and timing of each of our tests.  By default, xUnit will run our tests randomly, and as quickly as possible (some tests even run at the same time!).  Generally, this is a good thing - we want our tests to be individually robust, and not rely on any _other_ test to run successfully. In this case, though, we need to control our test runs a bit more.

If left to their default settings, we could have two tests running at the same time (concurrently) that would put conflicting data into our test database.  xUnit provides a simple way to group tests that need to be run strictly one at a time.  We will use an attribute to group all of our Controller tests into one collection:

```c#
// MoviesControllerTests.cs

namespace MvcMovie.FeatureTests
{
    [Collection("Controller Tests")]
    public class MovieControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        ...
```

Any test class in this collection will be run one at a time, reducing the chance for a database conflict.

<section class='call-to-action' markdown='1'>

**With a Partner**  
Implement the controller action that we need to update records in our database.

</section>

<section class='answer' markdown='1'>

### One Solution
```c#
[HttpPost]
[Route("/Movies/{id:int}")]
public IActionResult Update(Movie movie)
{
    _context.Movies.Update(movie);
    _context.SaveChanges();

    return RedirectToAction("show", new { id = movie.Id });
}
```

</section>

## TDD Updating related resource
**Code-Along**  
As a class, we are going to write tests, and implement code to satisfy these user-stories:

```
As a User
When I visit a Movie Show page
Then I see links to edit each review
```

```
As a User
When I visit 'Movies/1/Reviews/1/edit'
Then I see the name of the Movie and,
Then I see a form to edit the review
    And the review fields are pre-populated with their current value
```

```
As a User
When I Submit the review-edit form
Then I am redirected to the Movie Show Page
    And I see my updated review
```


<section class='instructor-notes' markdown='1'>

Completed code can be found on the update-resources branch of the [MvcMovieStarter](https://github.com/turingschool-examples/MvcMovieStarter)

</section>


## Checks for Understanding
* Our path to get the 'edit' form includes the resource id.  Why do we _not_ need an id in our path to get the 'new' form?
* What are the similarities between creating a new record, and editing an existing one?
* What is the difference between 'POST' and 'PUT'?