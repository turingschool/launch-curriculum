---
layout: page
title: Build an API
---

## Learning Goals
* Review and Reinforce the HTTP Request/Response Cycle
* Build a CRUD API in .NET
* Use Postman to interact with our API

## Review Starter Code
- start with a starter repo
    - Routing and database connections will be set up
    - required packages included
    - test project included (with in memory database)
- Make note of what has been previously configured
- Compare/contrast this application with our MVC apps

## CRUD API
### GET /books
- TDD
- Instructor Led

```c#
// GET: api/Books
[HttpGet]
public ActionResult GetBooks()
{
    if (_context.Books == null)
    {
        return NotFound();
    }
    return new JsonResult(_context.Books.ToList());
}
```

### GET /books/1
- TDD
- Self-guided
```c#
// GET: api/Books/5
[HttpGet("{id}")]
public ActionResult GetBook(long id)
{
    if (_context.Books == null)
    {
        return NotFound();
    }
    var Book = _context.Books.Find(id);

    if (Book == null)
    {
        return NotFound();
    }

    return new JsonResult(Book);
}
```

### POST /books
- TDD
- Postman
- Instructor Led

```c#
// POST: api/Books
[HttpPost]
public ActionResult PostBook(Book Book)
{
    if (_context.Books == null)
    {
        return Problem("Entity set 'TodoApiContext.Books'  is null.");
    }
    _context.Books.Add(Book);
    _context.SaveChanges();

    //return CreatedAtAction("GetBook", new { id = Book.Id }, Book);
    // Created At Action returns a 201 status code, and adds a location for the URI
    return CreatedAtAction(nameof(GetBook), new { id = Book.Id }, Book);
}
```


### PUT /books/1
- TDD
- Postman
- Group-guided

```c#
[HttpPut("{id}")]
public IActionResult PutBook(long id, Book Book)
{
    if (id != Book.Id)
    {
        return BadRequest();
    }

    _context.Entry(Book).State = EntityState.Modified;

    return NoContent();
}
```
### DELETE /books/1
- TDD
- Postman
- Self-guided

```c#
// DELETE: api/Books/5
[HttpDelete("{id}")]
public IActionResult DeleteBook(long id)
{
    if (_context.Books == null)
    {
        return NotFound();
    }
    var Book = _context.Books.Find(id);
    if (Book == null)
    {
        return NotFound();
    }

    _context.Books.Remove(Book);
    _context.SaveChanges();

    return NoContent();
}
```

## Using Return Value to Create JSON
- update our crud actions to use the implicit JSON return
```c#
ActionResult

// becomes

ActionResult<IEnumerable<Book>>

// to be able to

return _context.Books.ToList();
```

## Checks for Understanding