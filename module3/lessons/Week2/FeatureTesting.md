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

### Setting Up a Test Server Environment

1. Add a new Project to your Solution - call the project `MvcMovie.FeatureTests`.
2. Create a Project Reference from your test project to the `MvcMovie` project.
3. Install the following packages:
    * Microsoft.Extentions.Hosting
    * Microsoft.AspNetCore.Hosting
    * Microsoft.AspNetCore.Mvc.Testing (version 6.0.16)
    * Microsoft.EntityFrameworkCore
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

### Testing Our Welcome Page

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

## Setting up our Database Environment

## Writing an Index test

## Checks for Understanding