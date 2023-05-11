---
layout: page
title:  Introduction to MVC (Model, View, Controller)
---

QueryStringParameters

## Learning Goals
* Discover real-world examples of query string parameters in action
* Understand how data is dynamically passed using query string parameters
* Use query string parameters to filter data on an Index page







// Revisit the role of route templates and placeholders in defining routes.

Maybe this time look at the route template in Program.cs?
app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");

Is there a way to list all routes in a .net application?

## Query Parameters in the Real-World

![Query Parameters Example Michaels](/assets/images/module3/Week4/Query_String_Params_Michaels.png)

https://www.michaels.com/search?pmin=0&pmax=10&category=yarn-needlework%2Fshop-all-yarn&q=purple&page=1&minRating=4

Write out the path and the query params and values. 

<!-- Search for examples of query string parameters in action -->
1. What query parameters did you find?
1. What values are getting passed in?
1. What is the route (is this the language we are using?)
1. Are there also path parameters?


## Using Query Parameters to Filter

### Frontend Changes

### Backend Changes

Filter based on genre

// Query string parameters, passing filter data? Then filtering on the back end and only returning what asked for?
// Maybe some different buttons on the index page to do certain filters? Maybe maybe a search bar?
// Along these lines? https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/sort-filter-page?view=aspnetcore-7.0


### Try it yourself!

Adding something very similar. Maybe start individual then move to pairs?

## Testing our Filters

Shouldn't be too much new here...




// I think this comes later, planning to add it to the list.
security considerations and input validation
adding try/catch around any DB interactions, like seen here: https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/crud?view=aspnetcore-7.0#update-the-create-page

How do we know which route will match?

Is this where we do things like `/artists/:artist_id/songs/new`


 





## Checks for Understanding


What type of request (GET/POST/POST/DELETE) do you think most commonly has query string parameters? Why?