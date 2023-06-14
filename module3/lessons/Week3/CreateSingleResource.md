---
layout: page
title:  Creating a Single Resource 
---

## Learning Goals
* Diagram the Request/Response cycle for a form submission
* Use a form to create single resources
* Create tests for our new page and form

We will be continuing to build our MVC Movies application. Take a minute to make sure you have that project open and check out the branch your instructor will share in slack.

## Intro

Forms are everywhere!

![Examples of Forms](/assets/images/module3/Week3/Forms_Are_Everywhere.png)

> Think about your most-used websites or apps…  What examples of types/implementations of forms can you find?

## Diagramming the Request/Response Cycle

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Now would be a good time to demo the fully built out form we will be building today. It can be found on on the create-resource branch. https://github.com/turingschool-examples/MvcMovieStarter/tree/create-resource </p>
</aside>

### Demo

Let's start by taking a look at the fully built version of the form we will build today. During this demo write down your answers to the following questions. After the demo, you will join a breakout room and draw a diagram of what's happening.

1. What route(s) are we navigating to in the browser?  (keep a close eye on the URL in Chrome to see this)
2. Can you find a request being sent from something that is not the browser?
3. What type of requests do you think are being sent? (GET/PUT/POST/DELETE)

Take 10 minutes with your group to try and draw the requests and responses you saw in the demo. [Here](https://excalidraw.com/#json=u-S_QQJUrqiet94Podij1,wdPdKR8x8IsWnraWJIYk0A
) is an Excalidraw template to build off of.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Share your screen and call on folks to add more and more to a group diagram you will share with the group. Here is an example of what the finished diagram might look like this: https://user-images.githubusercontent.com/11747682/236914831-2e22cd4c-52c6-4d47-a8dc-99676754a6b4.png I also recommend referencing back to this diagram throughout the lesson. </p>
</aside>

## Accessing a Form

### Building our /Movies/New Page

What steps do we need to take so that when I navigate to /Movies/New I see the form?

1. Create a new route in the controller for /Movies/New
2. Create the view

### Creating the Route

Open your `MoviesController.cs` file. On your own, try to create a GET route for the path `/Movies/New`

<section class="answer">
<h3>Solution</h3>

<pre>
// GET: /Movies/New
public IActionResult New()
{
    return View();
}
</pre>

</section>

If you run your application now, you will get an error. This is because we haven't created the View yet. On your own, try to create a View for this route. For now, make your view include an h1 that says "Add a Movie".


<section class="answer">
<h3>Solution</h3>

<pre>
The file should be Views -> Movies -> New.cshtml`.

New.cshtml should include 

&lt;h1&gt;Add a Movie&lt;/h1&gt;
</pre>
</section>

### Building the Form

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>You will need to build two slack threads for this share out on forms. </p>
</aside>

In the Slack thread, share the form you created as part of the preparation for this lesson. 

What's similar between all of the forms?
What's different between the forms?

In the second Slack thread, share what you learned about accessibility best practices for forms.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Some examples of good accessibility practices with forms: always include a label not just placeholder text, use a button for submit. This website has a great checklist and more resources: https://www.a11yproject.com/checklist/#forms </p>
</aside>


Let's work together to build the form for creating a new movie.

![Create Movie Form](/assets/images/module3/Week3/Create_Movie_Form.png)


<section class="answer">
<h3>One Solution</h3>

<pre>
&lt;h1&gt;Add a Movie&lt;/h1&gt;

&lt;form method="post" action="/movies"&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="Title"&gt;Title:&lt;/label&gt;
        &lt;input type="text" id="Title" name="Title"/&gt;
    &lt;/div&gt;
    &lt;div class="form-group"&gt;
        &lt;label for="Genre"&gt;Genre:&lt;/label&gt;
        &lt;input type="text" id="Genre" name="Genre" /&gt;
    &lt;/div&gt;
    &lt;button type="submit"&gt;Create Movie&lt;/button&gt;
&lt;/form&gt;
</pre>

</section>

Take a close look at how we have added the method and action attributes to our form element. 

The `method="post"` attribute specifies that the form data should be submitted using the HTTP POST method. When a user submits the form, the data entered in the form fields will be sent to the server in the request body.

The `action="/movies"` attribute specifies the route where the form data will be submitted. In this case, it specifies that the form data should be submitted to the /movies route.

## Submitting a Form

### Our First POST Route

Our form is now sending a POST request to the `/movies` endpoint and it is sending the movie data from the form as the request body. 

We can see this by opening up the dev tools in our browser and looking at the request.

![Create Movie Request](/assets/images/module3/Week3/Create_Movie_Request.png)

❓Does this route already exist - why or why not?

Let's build the route to handle this request! In our `MoviesController.cs` file, let's add the following:

```c#
// POST: /Movies
[HttpPost]
public IActionResult Index(Movie movie)
{
    //Take the movie sent in the request and save it to the database
    _context.Movies.Add(movie);
    _context.SaveChanges();

    // The id generated by the database is now on the object we added to the context
    var newMovieId = movie.Id;

    // Redirect to our route /movies/show and pass in the newMovieId for the id parameter
    return RedirectToAction("show", new { id = newMovieId });
}
```

We're using the [RedirectToAction](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase.redirecttoaction?view=aspnetcore-7.0#microsoft-aspnetcore-mvc-controllerbase-redirecttoaction(system-string-system-object)) method to direct the user to the show page for the movie they just created.

## Testing a From

> With your partner: Brainstorm what tests we should write for the code we wrote today.


### Testing /movies/new

On your own: Write a test to make sure that when a user visits `/movies/new` they are directed to the create a movie form.

<section class="answer">
<h3>One Solution</h3>

<pre>
[Fact]
public async Task New_ReturnsFormView()
{
    // Arrange
    var client = _factory.CreateClient();

    // Act
    var response = await client.GetAsync("/movies/new");
    var html = await response.Content.ReadAsStringAsync();

    // Assert
    response.EnsureSuccessStatusCode();
    Assert.Contains("Add a Movie", html);
    Assert.Contains("<form method=\"post\" action=\"/movies\">", html);
}
</pre>
</section>



### Testing Create Movie Form

```c#
[Fact]
public async Task AddMovie_ReturnsRedirectToShow()
{
    // Arrange
    var formData = new Dictionary<string, string>
    {
        { "Title", "Back to the Future" },
        { "Genre", "Science Fiction" }
    };
    var client = _factory.CreateClient();

    // Act
    var response = await client.PostAsync("/movies", new FormUrlEncodedContent(formData));
    var html = await response.Content.ReadAsStringAsync();

    // Assert

    // Assert that we are redirected to a details page for the movie just created
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    Assert.Contains("Movie Details", html);
    Assert.Contains("Title: Back to the Future", html);
    Assert.Contains("Genre: Science Fiction", html);

    // Assert that the movie was added to the database. This test isn't mandatory, but testing against what's in the database is a useful testing tool to add to your toolbox.
    var context = GetDbContext();
    var savedMovie = await context.Movies.FirstOrDefaultAsync(
        m => m.Title == "Back to the Future"
    );
    Assert.NotNull(savedMovie);
    Assert.Equal("Science Fiction", savedMovie.Genre);
}
```

### The Order of Our Tests

We need to address one aspect of testing - the order and timing of each of our tests.  By default, xUnit will run our tests randomly, and as quickly as possible (some tests even run at the same time!).  Generally, this is a good thing - we want our tests to be individually robust, and not rely on any _other_ test to run successfully. In this case, though, we need to control our test runs a bit more.

If left to their default settings, we could have two tests running at the same time (concurrently) that would put conflicting data into our test database.  xUnit provides a simple way to group tests that need to be run strictly one at a time.  We will use an attribute to group all of our Controller tests into one collection:

```c#
// MoviesControllerTests.cs
namespace MvcMovie.FeatureTests
{
    [Collection("Movies Controller Tests")]
    public class MovieControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        ...
```

Any test class in this collection will be run one at a time, reducing the chance for a database conflict.

## Checks for Understanding

1. In your own words, what happens when a user clicks submit on a form?
1. Imagine that you have created an HTML form for creating employees, but currently, when you click the submit button nothing happens. What code would you add and where to make it so that on submit your form sends a POST request to the /employees endpoint?
1. What error do you think we would get if we didn't include the following lines in the POST /movies route in our controller? 

    ```c#
    _context.Movies.Add(movie);
    _context.SaveChanges();
    ```

## Additional Resources

* This is an excellent site for learning more about accessibility: [https://www.a11yproject.com](https://www.a11yproject.com)