---
layout: page
title: Calling Third Party APIs
---

## Learning Goals
* Build familiarity with asynchronous code and Async/Await
* Understand how to make a GET request to a Third Party API
* Learn how to make a POST request

### Overview

In Mod 4 you were introduced to Third Party APIs and got a ton of practice calling various APIs from Postman and reading documentation. Maybe you remember working with the Github API, The Pokemon API, and the Cat API.

Today we're going to take the exciting leap of calling APIs, such as those listed above, from your applications! You will learn how to retrieve data from the API and then display it to the user.


### Preparation Review

In your preparation you deepened your understanding of asynchronous code. 

<section class="call-to-action" markdown="1">
With your partner: Discuss your current understanding of asynchronous code and the keywords `Async` and `Await`. When we come back together you instructor will call on folks to share what they talked out.
</section>

<section class="call-to-action" markdown="1">
With your partner: Discuss why we might want to use asynchronous code when calling a third party API from our applications? When we come back together you instructor will call on folks to share what they talked out.
</section>

<section class="answer" markdown="1">
### Asynchronous Code Definitions

**Synchronous Code**: Synchronous code executes tasks sequentially, waiting for each to finish before proceeding, potentially causing resource inefficiencies during idle periods.

**Asynchronous Code**: Asynchronous code enables tasks to execute independently, improving resource utilization by allowing operations to progress without waiting for others to complete.

**Async Keyword**: In C#, the async keyword is used to mark a method as asynchronous. It indicates that the method contains asynchronous operations and may include one or more await expressions. Asynchronous methods can execute tasks concurrently without causing blocking.

**Await Keyword**: The await keyword is used within an asynchronous method to pause execution and asynchronously wait for the completion of an asynchronous operation. When await is used, it allows the method to temporarily yield control until the awaited task is finished executing. This non-blocking behavior enables efficient resource usage and helps maintain the application's responsiveness.

</section>


### Learning From a Tutorial
Follow [this](https://www.ezzylearning.net/tutorial/how-to-consume-third-party-web-apis-in-asp-net-core) tutorial individually up until the section **Managing HttpClient objects with IHttpClientFactory**. You will have roughly 1.5 hours, which should be enough time to thoughtfully work through it.

As you work through the tutorial, add comments to specify what each part of your code is doing. I also highly recommend that you type the code instead of copy/pasting for topics that feel new.

As with all tutorials, you have to expect it might not work perfectly and you might need to do some debugging to get your code to work! If you're stuck on something for more than 5 or 10 minutes reach out to your peers in code-help!

Deliverable✅: Once you have finished the tutorial, send a message to your instructor with your answer to the following question:

* When is learning from a tutorial helpful and when is it not helpful? (This can be both about a particular tutorial and about where you are with your coding experience!)

It might be helpful to think about why we had you learn from a tutorial this week instead of last week for the auth lessons.


<aside class="instructor-notes" markdown="1">
<p><strong>Instructor Note</strong><br>
When working through the tutorial myself, I noticed a couple of things that might trip students up. <br>
1. They don't say where to put the interface and the service and they don't give the necessary imports. <br>
2. They have you add to a Startup.cs but our application only has a Program.cs and has a different way of adding services. This is how you need to do it for our application: builder.Services.AddSingleton<IHolidaysApiService, HolidaysApiService>(); <br>
3. The Index action in the HomeController is already injecting a logger, so you will now inject two things, or not the logger because we are not using that. <br>
4. Even following the tutorial perfectly it won't work, The first time the user visits the index it will not have a date or a state and the API request will throw an error. Not sure how this worked for the creator of the tutorial. One way to fix is the following where you add default parameters: Index(string countryCode = "US", int year = 2023)
</p>
</aside>


#### Additional Research
Then move on to thinking about and researching the following advanced topics:

* Why do you think this tutorial had you create an interface in addition to a service class?
* In your own words, why do we want to create one HTTPClient instead of one for every call?
* What best practices for error handling do you see in this tutorial?
* Were there any pieces of code in this tutorial that were new to you and you did research to figure out how they work?

Your instructor will ask for volunteers to share out answers to these questions after we work through part of the tutorial as a class.

<aside class="instructor-notes" markdown="1">
<p><strong>Instructor Note</strong><br>
Make sure to talk about not getting stuck in tutorials and never moving to your own problem solving.</p>
</aside>

### Building It Together

We're going to build through the key API request portion of this tutorial as a class.

<aside class="instructor-notes" markdown="1">
<p><strong>Instructor Note</strong><br>
Here is the starter code that includes the Model, Interface, and View. That way you can add the service and controller code as a class.</p>
</aside>

### Stretch Questions

* Regardless of what language and framework you are using, there are some parts of calling a third party API from an application that are always the same. What can you think of that might always be the same?
* Imagine that you're working in an API instead of an MVC application, why might it make sense to call a Third Party API from your application?
* What would we need to change about our API request if we were going to make a POST request instead of GET?