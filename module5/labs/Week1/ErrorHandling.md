
High level plan is to stick with MVCMovies and find many more places where they can add null checks and validation.

Thinking of three iterations

1. Find as many places as you can to add null checking, then code review

2. Find as many places as you can to add validation, then code review

3. Some quick research on sad path testing maybe I find a blog post for them to read, then add three more tests to your application that test when bad things happen your application handles the errors well.


Then I'm thinking they have some extensions that require independent learning.

Ideas currently on the table:
* Adding a global exception handler
* Custom error page
* Something about returning the most appropriate HTTP status codes.


It feels a bit off to only work in an MVC application for all of this, would be nice to fit in revisions to a API application but this is already feeling like a very full day.