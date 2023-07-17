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
With your partner: Explore and see what APIs are out there. [here](https://github.com/public-apis/public-apis) is a place to start looking. Or google for any topic you're interested in! Share one of the APIs you found on the Slack thread your instructor will create.
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br> Call on a couple of students to share out what API they found.</p>
</aside>

❓In Mod 3, what type of data did we return in our HTTP Responses?
❓What type of data does it look like these APIs are returning?


### How can we call APIs?
❓What clients have we used so far?

Frontend applications call APIs all the time to get information to display to users. 

For example, when you see a weather widget on a website, that frontend is requesting data from a weather API.

![Weather Widget API call](/assets/images/module4/Week2/weather_example.png)

Another example, after searching for a location on the Papa Murphy's Website the frontend is making an API request to the Papa Murphy's API to get nearby locations. Then the frontend displays the locations returned to the user.

![Papa Murphy's API call](/assets/images/module4/Week2/papamurphys_example.png)

Another common way to call an API is by using an application such as Postman. This is an excellent way to test our APIs.

Take a minute to install [postman](https://www.postman.com/downloads/). When prompted, you don't need to create an account.

### Postman Practice

We're going to use the [Github API](https://docs.github.com/en/rest?apiVersion=2022-11-28) for practice.

Let's start by practicing together:
1. What request would return the pull requests for the ASP.NET Core repository?

    <section class="answer" markdown="1">
    ### All Pull Requests

    https://api.github.com/repos/dotnet/aspnetcore/pulls

    [Pull Request Documentation](https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests)
    </section>

1. What request would return the pull requests for the ASP.NET Core repository that are currently open?

    <section class="answer" markdown="1">
    ### All Pull Requests

    hhttps://api.github.com/repos/dotnet/aspnetcore/pulls?state=open

    [Pull Request Documentation](https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests)
    </section>


For this practice, start working individually, then you will join a breakout room to talk through your answers and help each other.

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
    ```
    {
        "message": "Requires authentication",
        "documentation_url": "https://docs.github.com/rest/reference/repos#create-an-organization-repository"
    }
    ```



### Sending Requests With Authentication

//Trying to decide if I want requests with Auth and POST requests to be part of this lesson. The lesson feels light and mostly review, trying to think what other learning goals to focus on...


### Checks for Understanding

1. 
    To check our understanding of using an API, we will use the example of the [Creative API from Xandr](https://docs.xandr.com/bundle/xandr-api/page/creative-service.html). This is the API Zoe worked on in her first development job. Xandr is an advertising technology company and this is the API for working with a customer's advertisements (in add tech lingo a "creative" is an advertisement) currently in the company's system.

    * What request would return all of the creatives?
    * What are two examples of path parameters used in this API?
    * What are two examples of query string parameters used in this API?
    * What are the two requests to view a particular creative?
    * What's one way that this API doesn't match best practice for RESTful routes?

2. What are at least three different ways to send an API request?

3. What would be your response to the interview question, "How would you describe what an API is to a 10-year-old who knows nothing about coding?"(Zoe was actually asked this question in an interview!)