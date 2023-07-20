---
layout: page
title:  Intro to APIs Lab
---

## Lab Objectives
* Practice reading API documentation and making requests in Postman
* Build an understanding of what makes good API documentation

## Pokemon API

We will start by using the [Pokemon API](https://pokeapi.co/) and make all requests using Postman.

1. What API request returns the information about the Pokemon Bulbasaur? 🌶️ What's a second API request that would return this same information?
1. What API request returns all of the fire type Pokemon?
1. What API request returns all of the green colored Pokemon?

### Pagination

Read [this](https://developer.digitalchalk.com/document/rest-api-v5/limit-and-offset/) overview of API Pagination. Then work on the following questions.

1. What API request returns the first 10 Pokemon?
1. What API request returns the Pokemon with ids 11-20?
1. How many Pokémon are there in total? What request returns this information?

## Cat Api

We will work with the [Cat Api](https://developers.thecatapi.com/) and make all requests using Postman.

1. What API request returns a cat image?
1. What API request returns 10 cat images?
1. What API request returns all of the available cat breeds?
1. What API request the cat image with id `7ok`?
1. What API request will return 5 images of Tonkenese cats? The breed_id for Tomkenese is `tonk`.

🌶️ Try [signing up for an API key](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW). An API key is a string of characters that uniquely identifies you, and it should be treated like a password and kept secret. When you include your API key as a header, you should be able to retrieve 100 images instead of 10 and make requests to the premium `jokes` endpoint.

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>Extra extension could be trying to post a vote, need API key first.</p>
</aside>

## What Makes Good API Documentation?

Today you have seen 4 examples of API documentation:
* [Github API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
* [Xandr Creative API](https://docs.xandr.com/bundle/xandr-api/page/creative-service.html)
* [Pokemon API](https://pokeapi.co/)
* [Cat API](https://developers.thecatapi.com/)

Take another look at these four examples of documentation and reflect on the following questions:

* What makes API documentation easy to understand?
* What makes API documentation hard to understand?
* What have you learned from these examples that you want to want to remember when you write your own API documentation?