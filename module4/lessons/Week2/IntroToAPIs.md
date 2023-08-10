---
layout: page
title: Intro to APIs
---

### Introduction

In this module, you will learn how to build your own high-quality APIs using .NET! But before building our own, we need to understand how APIs work and see examples of APIs built by others.

## Learning Goals

* Understand how an API works at a conceptual level
* Practice requests to an existing API - using Postman
* Practice reading API documentation
* Review query string and path parameters

### API Scavenger Hunt

<section class="call-to-action" markdown="1">
With your partner: Explore and see what APIs are out there. [Here](https://github.com/public-apis/public-apis) is a place to start looking. Or google for any topic you're interested in! <br> <br> Share one of the APIs you found on the Slack thread your instructor will create.
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br> Call on a couple of students to share out what API they found.</p>
</aside>

❓In Mod 3, what type of data did we return in our HTTP Responses? <br>
❓What type of data does it look like these APIs are returning?


### How can we call APIs?
❓What clients have we used so far?

Frontend applications call APIs all the time to get information to display to users. 

For example, when you see a weather widget on a website, that frontend is requesting data from a weather API.

![Weather Widget API call](/assets/images/module4/Week2/weather_example.png)

Or after searching for a location on the Papa Murphy's Website, the frontend is making an API request to the Papa Murphy's API to get nearby locations to display to the user.

![Papa Murphy's API call](/assets/images/module4/Week2/papamurphys_example.png)

Another common way to call an API is by using an application such as Postman. This is an excellent way to test our APIs.

### Postman Practice

We're going to use the [Github API](https://docs.github.com/en/rest?apiVersion=2022-11-28) for practice.

Let's start by practicing together:
1. What request would return the pull requests for the [ASP.NET Core](https://github.com/dotnet/aspnetcore/) repository?

<section class="answer" markdown="1">
### All Pull Requests
https://api.github.com/repos/dotnet/aspnetcore/pulls
[Pull Request Documentation](https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests)
</section>

1. What request would return the pull requests for the [ASP.NET Core](https://github.com/dotnet/aspnetcore/) repository that are currently open?

<section class="answer" markdown="1">
### All Open Pull Requests

https://api.github.com/repos/dotnet/aspnetcore/pulls?state=open

[Pull Request Documentation](https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests)
</section>

<section class="call-to-action" markdown="1">
Work through the following questions individually and write down your answers, then you will join a breakout room to talk through your answers and help each other.
</section>

1. What are two of the emojis you can use on github? What is the name of the emoji and the link to the image.
1. What request would return the three oldest forks of the [MVC Movies](https://github.com/turingschool-examples/MvcMovieStarter) repository?
    <aside class="instructor-notes" markdown="1">
        <p><strong>Instructor Note</strong><br>
        https://api.github.com/repos/turingschool-examples/MvcMovieStarter/forks?per_page=3&sort=oldest
        </p>
    </aside>
1. Who was the first person to fork the [MVC Movies](https://github.com/turingschool-examples/MvcMovieStarter) repository?
1. For the [.NET organization](https://github.com/dotnet), what request would return information about the first 5 repos alphebetically?
    <aside class="instructor-notes" markdown="1">
        <p><strong>Instructor Note</strong><br>https://api.github.com/orgs/dotnet/repos?sort=full_name</p>
    </aside>
1. What is the name of the repository in the .NET organization that is alphebetically first?
1. What is one request that returns the following error. What is the status code returned with this error?
    ```json
    {
        "message": "Requires authentication",
        "documentation_url": "https://docs.github.com/rest/reference/repos#create-an-organization-repository"
    }
    ```

### Sending API Requests from a .NET Console Application

To build our understanding of how to call an API from an application, we're going to practice calling the same Github API from a .NET Console Application.

Clone down [this](https://github.com/turingschool-examples/CallingAPIsPractice) repository.

The goal is not for you to understand all of the code, but to get practice calling APIs from an application and digging through the response object to access the data you want.

You should only need to change the lines that start with `CHANGE THIS:` while completing the practice.

```c#
using System.Runtime.InteropServices.ComTypes;
using System.Text.Json;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

class Program
{
    static async Task Main(string[] args)
    {
        // GitHub API endpoint
        string apiUrl = "https://api.github.com/orgs/dotnet/repos"; //CHANGE THIS: THE URL

        // Create an instance of HttpClient
        using (HttpClient httpClient = new HttpClient())
        {
            // Set the User-Agent header required by GitHub API
            // The header provides information about the client making the request and helps the server identify the type of client, its operating system, and version information.
            // Postman sets this header automatically as something like PostmanRuntime/7.32.3
            httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("CallingAPIsPractice/1.0");

            // Send the GET request to the API
            HttpResponseMessage response = await httpClient.GetAsync(apiUrl);

            // Read the response content as a string
            string responseBody = await response.Content.ReadAsStringAsync();

            // Use the Json library to turn the string into an array
            JArray jsonResponse = JsonConvert.DeserializeObject<JArray>(responseBody);
            Console.WriteLine(jsonResponse[0]["name"]); //CHANGE THIS: THE WAY YOU ACCESS THE RESPONSE DATA
        }
    }
}

```

Takes notes on what URL and what C# code you used to output this information! We will talk through these as a group!

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>I would walk through the first one together. I would start by making the request in postman and then go bit by bit to get to the desired output. https://api.github.com/repos/dotnet/aspnetcore/pulls?sort=created </p>
</aside>

Questions:
1. Output the username of the person who most recently created a pull request for the ASP.NET Core repository.
1. Output the third person to fork the [MVC Movies](https://github.com/turingschool-examples/MvcMovieStarter) repository.
1. What is the name of the repository in the .NET organization that is alphebetically last? What other information can you output about that repository formatted in the console as a useful summary?
1. 🌶️ What are the usernames of the 20 most recently created pull request for the ASP.NET Core repository.
1. 🌶️ What are the usernames of all of the users who forked the MVC Movies repository?

### Checks for Understanding

1. 
    To check our understanding of using an API, we will use the example of the [Creative API from Xandr](https://docs.xandr.com/bundle/xandr-api/page/creative-service.html). This is the API Zoe worked on in her first development job. Xandr is an advertising technology company and this is the API for working with a customer's advertisements (in add tech lingo a "creative" is an advertisement) currently in the company's system.

    * What request would return all of the creatives?
    * What are two examples of path parameters used in this API?
    * What are two examples of query string parameters used in this API?
    * What are the two requests to view a particular creative?
    * What's one way that this API doesn't match best practice for RESTful routes?

2. What are at least three different API clients?

3. What would be your response to the interview question, "How would you describe what an API is to a 10-year-old who knows nothing about coding?" (Zoe was actually asked this question in an interview!)