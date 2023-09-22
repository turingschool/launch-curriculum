---
layout: page
title: Calling Third Party APIs
---

## Learning Goals
* Understand how to make a GET request to a Third Party API
* Something about Async/await


OPEN QUESTION: Do we care about them making POST/PUT/DELETE. Is it worth the effort to make an api they can call for these. Is there an easy one out there? I think for their project we will only have them GET from an API?

I'm thinking at some point we should have them build their own API and then have a frontend call that API, or maybe it's two teams each working on one part? That would be the way to learn/practice PUT/POST/DELETE.

OPEN QUESTION: Is testing this a thing we should be thinking about? I realize we have had testing take a back seat this last modish. It would have to involve mocking and would be kind of a whole thing. Worth it?



Is this the lesson to talk about Async code and async/await? Maybe that's the prep and a discussion to start the lesson?




### Learning From a Tutorial
Follow [this](https://www.ezzylearning.net/tutorial/how-to-consume-third-party-web-apis-in-asp-net-core) tutorial individually up until the section **Managing HttpClient objects with IHttpClientFactory**. You will have roughly 1.5 hours, which should be enough time to thoughtfully work through it.

As you work through the tutorial, add comments to specify what each part of your code is doing. I also highly recommend that you type the code instead of copy/pasting.

Deliverable✅: Once you have finished the tutorial, send a message to your instructor with your answer to the following question.

What are some benefits and drawbacks of learning from a full tutorial like this?

#### Additional Research
Then move on to thinking about and researching the following additional questions:

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

I'm thinking would be good to build through at least part of the tutorial together so we are all on the same page and talk about the parts needed for an API request regardless of the language.

Maybe I already have the model, Interface, and service set up and we are adding to the service the actual API call. And maybe we add a bit to the view too.


### Checks For Understanding

Something about regardless of the language what will you always need to call an API from an application?
Imagine that you're working in an API instead of an MVC application, why might it make sense to call a Third Party API from your application?



### Lab

Partners or pair programming

There was a really fun lab I've done in the past where students called the Giphy API using a search string and the top X results were shown on the screen. I'd like to recreate that here.




