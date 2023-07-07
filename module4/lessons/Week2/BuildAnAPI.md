---
layout: page
title: Build an API
---

## Learning Goals
* Review and Reinforce the HTTP Request/Response Cycle
* Build a CRUD API in .NET
* Use Postman to interact with our API

## Prep Review

< TO-DO >

## Review Starter Code

In today's lesson we will be working of off [this starter repo](https://github.com/turingschool-examples/GoodBooksStarter). Follow the instructions in the Readme to get the project set up.

<section class='call-to-action' markdown='1'>

**Web App Scavenger Hunt**

All web applications have some common features that need to be set up in order for the application to work properly.  Answer the questions below to discover what these pieces are, and where they are configured!

1. What is the name of our database?
2. On what line, and in what file, are we creating the connection from our application to the database?
3. What differences can you spot between our development database and our test database?
4. What packages are required for our API?
5. What packages are required for our tests?
6. 🌶️ How are routes being handled? How is this different from an MVC application?
7. 🌶️🌶️ What is the default route our application will start up with?  Where is this defined?

</section>

## CRUD API

<section class='instructor-notes' markdown='1'>
Completed code for this lesson can be found on the CRUDBooksFinished branch of [the starter repo](https://github.com/turingschool-examples/GoodBooksStarter)
</section> 

During today's lesson, we are going to build RESTful endpoints that will allow us to CRUD Books in our database! We will be doing some instructor led code-along, and some individual exploration.  It will help your exploration if you have your MvcMovie application handy 😉.

### GET /books

<section class='note' markdown='1'>

**Implement an API Endpoint that satisfies these specifications**  
* Path/Method: GET /api/books
* Status Code: 200
* Content: JSON containing all books in our database

</section>

<section class='answer' markdown='1'>

### 1. Write a Test

Writing a test will require us to do the following:
* Implement a Book Model
* Add a Books table to our database context
* Learn a bit more about JSON


```c#
using GoodBooksAPI.DataAccess;
using GoodBooksAPI.Models;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Reflection;
using System.Runtime.Intrinsics.X86;

namespace GoodBooksEndpointTests
{
    public class BookCrudEndpointTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly WebApplicationFactory<Program> _factory;

        public BookCrudEndpointTests(WebApplicationFactory<Program> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async void GetBooks_ReturnsListOfBooks()
        {
            Book book1 = new Book { Title = "Dune", Description = "Sand Monsters" };
            Book book2 = new Book { Title = "Wool", Description = "Human Monsters" };
            List<Book> books = new() { book1, book2 };

            GoodBooksApiContext context = GetDbContext();
            HttpClient client = _factory.CreateClient();
            context.Books.AddRange(books);
            context.SaveChanges();

            HttpResponseMessage response = await client.GetAsync("/api/books");
            string content = await response.Content.ReadAsStringAsync();

            // The method ObjectToJson is defined below
            string expected = ObjectToJson(books);

            response.EnsureSuccessStatusCode();
            Assert.Equal(expected, content);

        }

        // This method helps us create an expected value. We can use the Newtonsoft JSON serializer to build the string that we expect.  Without this helper method, we would need to manually create the expected JSON string.
        private string ObjectToJson(object obj)
        {
            DefaultContractResolver contractResolver = new DefaultContractResolver
            {
                NamingStrategy = new SnakeCaseNamingStrategy()
            };

            string json = JsonConvert.SerializeObject(obj, new JsonSerializerSettings
            {
                ContractResolver = contractResolver
            });

            return json;
        }

        private GoodBooksApiContext GetDbContext()
        {
            var optionsBuilder = new DbContextOptionsBuilder<GoodBooksApiContext>();
            optionsBuilder.UseInMemoryDatabase("TestDatabase");

            var context = new GoodBooksApiContext(optionsBuilder.Options);
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            return context;
        }
    }
}
```

</section>

<section class='answer' markdown='1'>

### 2. Implement the Endpoint

```c#
using GoodBooksAPI.DataAccess;
using GoodBooksAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GoodBooksAPI.Controllers
{
    // This will be the default route - controller gets replaced with the name of the controller.
    // "/api/books"
    [Route("/api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private GoodBooksApiContext _context;

        public BooksController(GoodBooksApiContext context)
        {
            _context = context;
        }

        // GET "/api/books"
        [HttpGet]
        public ActionResult GetBooks()
        {
            List<Book> books = _context.Books.ToList();

            // We could manually set the response code like this:
            //Response.StatusCode = 200;

            // API endpoints should return JSON, we are creating a new JSON result with our list of books.
            return new JsonResult(books);
        }
    }
}

```

</section>

<section class='answer' markdown='1'>

### 3. Experiment with Postman

Now that our endpoing is tested and created, let's see it in action with Postman.

1. Open your GoodBooks database in pgAdmin, and use the following script to insert some records into your development database
```sql
INSERT INTO books (title, description)
VALUES
    ('The Enigma of Eternity', 'A young physicist embarks on a perilous journey to unravel the mysteries of eternal existence in a world where time stands still.'),
    ('Echoes of the Forgotten', 'In a post-apocalyptic world, a group of survivors must confront their inner demons and forge alliances to protect what remains of humanity'),
    ('The Art of Serendipity', 'Two strangers with contrasting lives discover the transformative power of embracing the unexpected in a bustling city known for its chaos and unpredictability.');
```
2. Start your application, and make note of the localhost port number when chrome opens
![local host port number](/assets/images/module4/week2/localhost_portnumber.png)
3. Open Postman
4. Send a GET request to the books route
![Postman GET books](/assets/images/module4/week2/postman_getbooks.png)

</section>

### GET /books/1

<section class='call-to-action' markdown='1'>
**With a partner: Implement an API Endpoint that satisfies these specifications**  

<section class='note' markdown='1'>
* Path/Method: GET /api/books/1
* Status Code: 200
* Content: JSON containing the book with the id '1' (or whatever id is sent in through the path)
</section>

Use any resources you can think of to help you along the way: google, .NET documentation, and prior projects are all good resources!

One important thing to know: you can add to the controller route by updating the HttpGet attribute for a specific action.  For example, in this application using `[HttpGet("{id}")]` will result in the following route `/api/books/:id`.

You **must** write a test for this new endpoint!

<section class='note' markdown='1'>
* 🌶️ If the book does not exist, return a status code of 404
</section>

</section>

### POST /books

<section class='note' markdown='1'>

**Implement an API Endpoint that satisfies these specifications**  
* Path/Method: GET /api/books/1
* Status Code: 200
* Response Content: JSON containing the book with the id '1' (or whatever id is sent in through the path)

</section>

<section class='answer' markdown='1'>

### 1. Write a Test

```c#
[Fact]
public async void PostBook_CreatesBookInDb()
{
    // Create fresh database
    GoodBooksApiContext context = GetDbContext();

    // Set up and send the request
    HttpClient client = _factory.CreateClient();
    var jsonString = "{\"Title\":\"Lamb's Wool\", \"Description\":\"Super Itchy\"}";
    var requestContent = new StringContent(jsonString, Encoding.UTF8, "application/json");
    var response = await client.PostAsync("/api/books", requestContent);

    // Get the first (and should be only) book from the db
    var newBook = context.Books.First();

    Assert.Equal("Created", response.StatusCode.ToString());
    Assert.Equal(201, (int)response.StatusCode);
    Assert.Equal("Lamb's Wool", newBook.Title);
}
```

A couple of things to note about this test!
- We need to `GetDbContext` _before_ sending the post request, if we send it after, that method will delete the record we tried to create!
- We can see two different ways to test the appropriate status code that is being returned.  This is because `response.StatusCode` returns and object which represents the status code and status phrase; `ToString()` returns the phrase associated with the code, and casting that object to an int reveals the integer code.

</section>

<section class='answer' markdown='1'>

### 2. Implement the Endpoint

```c#
[HttpPost]
public ActionResult CreateBook(Book book)
{
    if (!ModelState.IsValid)
    {
        Response.StatusCode = 400;
        return;
    }
    _context.Books.Add(book);
    _context.SaveChanges();

    var savedBook = _context.Books.Last();

    Response.StatusCode = 201;
    return new JsonResult(savedBook);
}
```

</section>

<section class='answer' markdown='1'>

### 3. Experiment with Postman

Let's experiment with this new functionality in Postman.

1. Open postman and create a post request
2. Add a JSON body to the request
3. Send the Request - you should receive a 201 response status!
![](/assets/images/module4/week2/postman_postbooks.png)
4. Verify the post by running a GetBooks request
![](/assets/images/module4/week2/postman_getnewbooks.png)

</section>

### PUT /books/1

<section class='call-to-action' markdown='1'>
**With a partner: Implement an API Endpoint that satisfies these specifications**  

<section class='note' markdown='1'>
* Path/Method: PUT /api/books/1
* Status Code: 204
* Request Content: JSON with the ID of a book to edit, and the field(s) to be edited.
</section>

Use any resources you can think of to help you along the way: google, .NET documentation, and prior projects are all good resources!

Testing for database updates is tough - try your best, and take a look one solution below, if you are stuck.

<section class='answer' markdown='1'>

### One way to test Update
```c#
[Fact]
public async void PutBook_UpdatesDatabaseRecord()
{
    Book book1 = new Book { Title = "Dune", Description = "Sand Monsters" };

    GoodBooksApiContext context = GetDbContext();
    context.Books.Add(book1);
    context.SaveChanges();

    HttpClient client = _factory.CreateClient();
    var jsonString = "{ \"Id\":\"1\", \"Title\":\"Beetlejuice\", \"Description\":\"Sand Monsters\" }";
    var requestContent = new StringContent(jsonString, Encoding.UTF8, "application/json");
    var response = await client.PutAsync("/api/books/1", requestContent);

    // Clear all previously tracked DB objects to get a new copy of the updated book
    context.ChangeTracker.Clear();

    Assert.Equal(204, (int)response.StatusCode);
    Assert.Equal("Beetlejuice", context.Books.Find(1).Title);
}
```

</section>

<section class='note' markdown='1'>
* 🌶️ If the action creates a NEW book, return a status code 201.
</section>

</section>


### DELETE /books/1

<section class='call-to-action' markdown='1'>

**Individually: Implement an API Endpoint that satisfies these specifications**  
<section class='note' markdown='1'>
* Path/Method: DELETE /api/books/1
* Status Code: 204
</section>

Use any resources you can think of to help you along the way: google, .NET documentation, and prior projects are all good resources!

</section>

## Using Return Value to Create JSON

Today we have built a small API that has two endpoints that return content: `api/books` and `api/books/:id`.  We have returned the content of those endpoints as JSON because that is the standard throughout the industry.

Most APIs do much more returning of information than we have done today, and it can be very repetitive to be continually creating new JSON objects to return out of our Actions.  Because JSON is so widely used, .NET has some built in functionality to help cut down on repetitive code.

Take a look at an alternative implementation of the `/api/books` endpoint below:

```c#
// GET "/api/books"
[HttpGet]
public ActionResult<IEnumerable<Book>> GetBooks()
{
    return _context.Books.ToList();
}
```

In this implementation, the JSON creation is abstracted away - it is created _behind the scenes_.

<section class='call-to-action' markdown='1'>

Take a few minutes to update your GET actions to use this structure.  Tell your methods what to return with a more specific return value.  You will know it is working when you don't see any `JsonResult` objects, and your tests still pass!

</section>

## Checks for Understanding

< TO-DO >