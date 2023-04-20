---
layout: page
title: Feature Testing
---

## Learning Goals
* Define Feature Testing
* Create a Feature Test
* Set up a Test Database

## Feature Testing

### What are Feature Tests?

* Feature tests mimic the behavior of the user: In the case of web apps, this behavior will be clicking, filling in forms, visiting new pages, etc. 
* Just like a user, the feature test should not need to know about underlying code.
* Based on user stories

### What are User Stories?
* A tool used to communicate user needs to software developers.
* They are used in Agile Development, and it was first introduced in 1998 by proponents of Extreme Programming.
* They describe what a user needs to do in order to fulfill a function.
* They are part of our "top-down" design.

```txt
As a user
When I visit the home page
And I click on the link New Task
Then I see a form to create a task

And I fill in title
And I fill in description
And I click submit
Then my task is saved
```

We can generalize this pattern as follows:

```
As a [user/user-type]
When I [action]
And I [action]
And I [action]
...
Then [expected result]
```

Depending on how encompassing a user story is, you may want to break a single user story into multiple, smaller user stories.

## Creating a Test Project

### The Components of a Web Application
In order to create an environment where our test project has everything we need to create feature tests; we first need to identify what exists in our MVC application that allow us to interact with it via a client (the browser). 

Any web application has two main features that need to exist in order to function:
* **Server** - the server is the engine that allows the application to respond to requests.  The server starts up and _listens_ for requests.  When a request is received, the server sends back the appropriate response.
* **Database** - the database allows user to interact with dynamic data.

These components exist in our MVC application, and we need to create test versions of these two components in our test project.

<section class="call-to-action">
    <p>With a Partner - Review the <code>Program.cs</code> file in your starter project.</p>
    <ul>
        <li>Can you identify the code that sets up the server?</li>
        <li>Can you identify the code that sets up the database?</li>
        <li>Are there other files in the project that contribute to creating the server and database?</li>
    </ul>
</section>

## Setting Up a Test Server Environment

1. Add a new Project to your Solution - call the project `MvcMovie.FeatureTests`.
2. Create a Project Reference from your test project to the `MvcMovie` project.
3. Install the following packages:
    * Microsoft.Extentions.Hosting
    * Microsoft.AspNetCore.Hosting
    * Microsoft.AspNetCore.Mvc.Testing (version 6.0.16)
4. Add a class called `Program.cs` - this is where we are going to create our test server! Add the code below to this file:

```c#
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MvcMovie.Controllers;

namespace MvcMovie.FeatureTests
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.ConfigureServices(services =>
                    {
                        services.AddControllersWithViews()
                            .AddApplicationPart(typeof(HomeController).Assembly);
                    });

                    webBuilder.Configure(app =>
                    {
                        app.UseRouting();
                        app.UseEndpoints(endpoints =>
                        {
                            endpoints.MapControllerRoute(
                                name: "default",
                                pattern: "{controller=Home}/{action=Index}/{id?}");
                        });
                    });
                });
    }
}
```

5. Right-click on the test project and select `Properties`
6. Scroll Down to `Startup object` and select `McvMovie.FeatureTests.Program`

<section class="call-to-action">
    <p>With a Partner - What similarities and differences do you see between this <code>Program.cs</code> and the <code>Program.cs</code> in the MvcMovie project?</p>
</section>

## Testing Our Welcome Page

<section class="note">
    <p>In this section, we are going to write a test for the following user story:</p>
    <span style="white-space: pre-line">As a user
    When I visith the home page
    Then I see the message "Welcome"</span>
</section>

1. Update the `UnitTest1.cs` class to be `HomeControllerTests`
2. Update the file to match the code below:

```c#
using Microsoft.AspNetCore.Mvc.Testing;

namespace MvcMovie.FeatureTests
{
    public class HomeControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public HomeControllerTests(WebApplicationFactory<Program> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task Index_ShowsTheWelcomePage()
        {
            var client = _factory.CreateClient();

            var response = await client.GetAsync("/");
            var html = await response.Content.ReadAsStringAsync();

            response.EnsureSuccessStatusCode();
            Assert.Contains("Welcome", html);
        }
    }
}
```

3. Run the tests!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Show students what a non-passing test looks like.  Update the asser to expect something that is *not* on the page. Hover over the failure to see a preview of the HTML doc.  Use breakpoints and debugging to see the full HTML view.</p>
</aside>

<section class="call-to-action">
    <strong>Practice</strong>
    <p>In the MvcMovie projects, create a test, and the Controller and Views to satisfy this user story:</p>
    <span style="white-space: pre-line">As a user
    When I visith "/Home/FunFacts"
    Then I see "The Bumble Bee Bat is the smallest mammal."</span>
</section>

## Setting up our Database Environment

1. Install these packages:
    * Microsoft.EntityFrameworkCore.InMemory
2. Add a file to your test project called `appsettings.json`
3. Update that file to contain the following code:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=:memory:"
  }
}

```

4. In your test project's `Program.cs` file, update the code with this database connection:
```c#
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
// You need to add one more using statement:
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MvcMovie.Controllers;
using MvcMovie.DataAccess;

namespace MvcMovie.FeatureTests
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.ConfigureServices(services =>
                    {
                        //THIS IS THE CODE TO ADD:
                        services.AddDbContext<MvcMovieContext>(options =>
                            options.UseInMemoryDatabase("TestDatabase"));

                        services.AddControllersWithViews()
                            .AddApplicationPart(typeof(HomeController).Assembly);
                    });

                    webBuilder.Configure(app =>
                    {
                        app.UseRouting();
                        app.UseEndpoints(endpoints =>
                        {
                            endpoints.MapControllerRoute(
                                name: "default",
                                pattern: "{controller=Home}/{action=Index}/{id?}");
                        });
                    });
                });
    }
}
```

<section class="call-to-action">
    <p>With a Partner - What similarities and differences do you see between this <code>Program.cs</code> and the <code>Program.cs</code> in the MvcMovie project?</p>
</section>

## Writing an Index test

<section class="note">
    <p>In this section, we are going to write a test for the following user story:</p>
    <span style="white-space: pre-line">As a user
    When I visith the home page
    Then I see the message "Welcome"</span>
</section>

1. Create a new test file called `MovieControllerTests.cs`
2. In that test file, add the following code:

```c#
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using MvcMovie.DataAccess;
using MvcMovie.Models;


namespace MvcMovie.FeatureTests
{
    public class MovieControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public MovieControllerTests(WebApplicationFactory<Program> factory)
        {
            _factory = factory;
        }

        private MvcMovieContext GetDbContext()
        {
            var optionsBuilder = new DbContextOptionsBuilder<MvcMovieContext>();
            optionsBuilder.UseInMemoryDatabase("TestDatabase");

            var context = new MvcMovieContext(optionsBuilder.Options);
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            return context;
        }

        [Fact]
        public async Task Index_ReturnsViewWithMovies()
        {

        }
    }
}
```

<section class="call-to-action">
    <p>With a Partner - Brainstorm what you think our test is going to look like?  What kinds of things need to happen in the <code>Arrange</code>, <code>Act</code>, and <code>Assert</code>?</p>
</section>

<section class="answer">
    <h3>Index Test</h3>
    <img src="/assets/images/module3/week2/MovieControllerIndexTest.png">
</section>

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>As you walk through this test, make sure to explain why we need the context and client in this test - because xunit runs test at the same time, and we need fresh environments for each test.</p>
</aside>

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>There is a branch with finished code at: https://github.com/turingschool-examples/MvcMovieStarter</p>
</aside>

## Checks for Understanding
* What are two components of our project that need to be recreated in our test project?
* What do we need to do in the Arrange step of a feature test?
* In your own words, describe the `response` object that we get when we call `client.GetAsync("somepath");`