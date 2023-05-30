---
layout: page
title:  Introduction to Filtering with Query String Parameters
---

## Learning Goals
* Discover real-world examples of query string parameters in action
* Understand how data is dynamically passed using query string parameters
* Use query string parameters to filter data on an Index page


## Setting up MVCMovies

We will be continuing to build our MVC Movies application. Take a minute to make sure you have that project open and check out the branch your instructor will share in Slack.

We also want to create some movies to use for testing. Create at least two movies with the genre "Kids" and at least 2 movies with the genre "Horror". Make sure to capitalize the genre.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Ask students how they created their movies. Want to make the point that they can use the create form or use pgAdmin. Might also be useful to ask when/why you might use one approach vs the other. Using the form doesn't require opening up another tool, but if you're adding many many movies that would be a pain and PGadmin would be easier. </p>
</aside>

## Query Parameters in the Real-World

If you take a look at the URLs used by websites, you will see query parameters used all over the place. Here is one example!

![Query Parameters Example Michaels](/assets/images/module3/Week4/MichaelsQueryStringFilters.png)

https://www.michaels.com/search?pmin=0&pmax=10&category=yarn-needlework%2Fshop-all-yarn&q=purple&page=1&minRating=4

In this example `pmin`, `pmax`, `category`, `q`, `page`, and `minRating` are all query parameters. Notice the `?` that falls before the query parameters and the `&` that separates the different query parameters and their values. 

Now it's your turn to find some query string parameters in the real world! Find a website that does some sort of filtering and see if you can find some query parameters. Once you find them, write down the answers to the following questions
Write out the path and the query params and values. 

1. What query parameters did you find?
1. What values are getting passed in?
1. What is the path?
1. Are there also path parameters?

Be prepared to share with the class when we come back together!

## Using Query Parameters to Filter

Our goal for today is to use query parameters to filter the movies on our `/movies` page to only show movies of a certain genre.

Your instructor will now demonstrate what this will look like once it's fully working.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>The finished code for this lesson is on branch query-string-parameters: https://github.com/turingschool-examples/MvcMovieStarter/tree/query-string-parameters </p>
</aside>

## Filtering for Kids and Horror Genres
### View Changes - Filtering for Kids and Horror Genres

Before we figure out how to include links for all genres, let's figure out how to filter for one genre.

Which file should we be working in to add a filter to all our movies?

<section class="answer" markdown="1">
### Which File

Open the file `Views` -> `Movies` -> `Index`
</section>



At the top of that file, right under `<h1>Movies</h1>` add the following:

```html
<h2>Genre Filter</h2>

<h3>Genres:</h3>
<a href="/movies?genre=Kids">Kids</a>
```

No filtering happens yet, but take a look at your URL when you click the the `Kids` link. You should see it change to include the genre query string parameter!

> With your partner, add two more links. One to filter by the horror genre, and one to remove the genre filter.

<section class="answer" markdown="1">
### One Solution

```html
<a href="/movies?genre=Kids">Kids</a>
<a href="/movies?genre=Horror">Horror</a>
<a href="/movies">Clear Filter</a>
```
</section>


### Controller Changes - Filtering for Kids and Horror Genres

In order to use the query string parameter `genre`, we're going to need to make some backend changes in our controller. 

Open the file `Controllers` -> `MoviesController`

Let's replace our old Index method with this new version.
```c#
// GET: /Movies
public IActionResult Index(string? genre)
{
    var movies = _context.Movies.AsEnumerable();
    if (genre != null)
    {
        movies = movies.Where(m => m.Genre == genre);
    }

    return View(movies);
}
```

Try clicking the `Kids` link you created earlier, it should now filter to only return the movies with the Kids genre!


With your partner, go line by line through this new method and try to figure out what's going on. After you go line by line, talk through the following questions:

❓We haven't seen a question mark when declaring a parameter before. Why might we have that here? (Google will probably be helpful with this question!)

❓How would you explain what this line is doing? `movies = movies.Where(m => m.Genre == genre);`

❓What would happen if we remove this condition? 
```c#
if (genre != null)
    {
    }
```

## Showing the Selected Genre

Wouldn't it be nice to show the user what genre they are currently filtering by? 

To implement this feature, we're going to use a .NET tool called `ViewData`.  `ViewData` allows you to pass data from a controller to a view. It only works in that one direction, you can't use it to pass data from the view to the controller. 

### Controller Changes - Showing the Selected Genre

If we want to use ViewData to pass the genre selected from the controller to the view we can add the following line of code.

```c#
// GET: /Movies
public IActionResult Index(string? genre)
{
    var movies = _context.Movies.AsEnumerable();
    if (genre != null)
    {
        movies = movies.Where(m => m.Genre == genre);
        ViewData["SearchGenre"] = genre; // This line is new!
    }

    return View(movies);
}
```

❓Thinking back to C# collections, What type of object do you think ViewData is?

<section class="answer" markdown="1">
### Solution

`ViewData` is a dictionary where the keys are strings and the values can be of any type.
</section>

### View Changes - Showing the Selected Genre
In our View we can pull data out of the `ViewData` dictionary the same way we could for any other dictionary. The only difference is we add the Razor syntax @ to transition to writing C# code in our Razor page.

Let's add the following right after our h2 that says "Genre Filter".

```html
<p>Filtering by: <strong>@ViewData["SearchGenre"]</strong> </p>
```

However, this looks a bit odd if we don't have a genre filter selected, and we know that genre is optional. Let's add a condition to only show this message if there is a genre filter applied. 

```html
@if (ViewData["SearchGenre"] != null)
{
    <p>Filtering by: <strong>@ViewData["SearchGenre"]</strong> </p>
}
```

## Dynamic Genre Filters

In the demo from the beginning of class, we saw that there were links for all genres currently in the database.

### Controller Changes - Dynamic Genre Filters

Let's start with the backend changes.

We want to pass a list of all genres in the database from our controller to our view.

> With your partner: Start by writing pseudocode for how we might make this happen. Then try to implement it! This is a spicy challenge, so get as far as you can and then we'll work together as a class to figure it out!

Hint: Trying to figure out how to test your code? One option is to save your genres to a variable and use the debugging tool to see if the values are as you expect.

![One way to test all genres](/assets/images/module3/Week4/OneWayToCheckAllGenres.png)


<section class="answer" markdown="1">
### One Solution

```c#
// GET: /Movies
public IActionResult Index(string? genre)
{
    var movies = _context.Movies.AsEnumerable();
    if (genre != null)
    {
        movies = movies.Where(m => m.Genre == genre);
        ViewData["SearchGenre"] = genre;
    }

    ViewData["AllGenres"] = _context.Movies.Select(m => m.Genre).Distinct().ToList(); //This line is new!

    return View(movies);
}
```
</section>

### View Changes - Dynamic Genre Filters

Now we want to pull out AllGenres from our `ViewData` and use the genres to create links!

The first thing we will add is right at the top of the file, right after `@model IEnumerable<Movie>`

```html
@{
    List<string> allGenres = ViewData["AllGenres"] as List<string>;
}
```

By default, the values stored in `ViewData` are of type object, which allows flexibility in storing various types of data.

So when we passed a list of AllGenres, that list got stored as an object. Therefore, when we retrieve it using `ViewData["AllGenres"]`, the type of the value is object, not specifically List<string>.

To work with the list as a List<string>, you need to explicitly cast the value to the desired type.

<aside class="instructor-notes">
<p><strong>Instructor Note</strong><br>If students ask about the possibly null problem, here is one solution. <img width="100%" alt="Screenshot 2023-05-17 174344" src="https://github.com/modelmapper/modelmapper/assets/11747682/e83f4b3e-c67b-4232-9e3a-0815174ac6db"> </p>
</aside>


> With your partner, try to figure out how to use allGenres to filter links for each genre! You will be replacing these hardcoded links from earlier.

```c#
<a href="/movies?genre=Kids">Kids</a>
<a href="/movies?genre=Horror">Horror</a>
```

🌶️If you finish, go back to the backend and try to figure out how to ignore capitalization in your genre filter. You want `kids`, `Kids` and `KIDS` to all match.

<section class="answer" markdown="1">
### One Solution

```c#
@if (allGenres.Count > 0)
{
    foreach (var genre in allGenres)
    {
        <a href="/movies?genre=@genre">@genre</a>
    }
} else
{
    <p>No genres available.</p>
}
```
</section>

## Multiple Filters

Currently, we can only apply one filter, genre. Oftentimes, as we saw during our scavenger hunt at the start of class, we want to apply multiple filters at the same time. The most common approach to adding multiple query string parameters is to use a form.


## Testing our Filters

We can write tests for our genre filter without learning any new tools than those already covered earlier in the mod!

> With your partner: Write at least two tests to test our genre filter. I recommend brainstorming what needs testing before you dive into the code.

<section class="answer" markdown="1">
### One Solution

```c#
[Fact]
public async Task Index_ContainsFilterForEachGenres()
{
    var context = GetDbContext();
    context.Movies.Add(new Movie { Genre = "Comedy", Title = "Spaceballs" });
    context.Movies.Add(new Movie { Genre = "Comedy", Title = "Young Frankenstein" });
    context.Movies.Add(new Movie { Genre = "Kids", Title = "Mulan" });
    context.SaveChanges();

    var client = _factory.CreateClient();
    var response = await client.GetAsync("/Movies");
    var html = await response.Content.ReadAsStringAsync();

    Assert.Contains("<a href=\"/movies?genre=Comedy\">Comedy</a>", html);
    Assert.Contains("<a href=\"/movies?genre=Kids\">Kids</a>", html);
    Assert.DoesNotContain("<a href=\"/movies?genre=Spaceballs\">Spaceballs</a>", html);
}

[Fact]
public async Task Index_UsesGenreQueryStringParamToFilter()
{
    var context = GetDbContext();
    context.Movies.Add(new Movie { Genre = "Comedy", Title = "Spaceballs" });
    context.Movies.Add(new Movie { Genre = "Comedy", Title = "Young Frankenstein" });
    context.Movies.Add(new Movie { Genre = "Kids", Title = "Mulan" });
    context.SaveChanges();

    var client = _factory.CreateClient();
    var response = await client.GetAsync("/Movies?genre=Comedy");
    var html = await response.Content.ReadAsStringAsync();

    Assert.Contains("Spaceballs", html);
    Assert.Contains("Young Frankenstein", html);
    Assert.DoesNotContain("Mulan", html);
}
```
</section>

## Checks for Understanding

* What is the purpose of `ViewData`?
* What type of request (GET/POST/POST/DELETE) do you think most commonly has query string parameters? Why?
* What URL would I use if I want to filter for movies with the genre comedy? What might the url be if want to filter for both the genre of comedy and the release year of 1990?