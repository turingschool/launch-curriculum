---
layout: page
title: Error Handling
---

## Introduction

??????????????

## Learning Goals

* Understand types of errors and their impact on user experience
* Practice the following strategies for handling when something goes unexpectedly:
    * Try/Catch
    * Validation
    * Null Checking


MVC movies will be the example for today. Can we use the lab from Mod 3 for the lab?

## Ways Applications Can Break!

Two categories of breaking, client side (user) error, server side (application) error. Based on who's fault it is.

Make a jam board and in pairs have students think of all the things that could go wrong that might cause an application to crash, separated by client side errors and server side errors. Thinking about both MVC and API. Feel free to google or to try and break your applications.

10 minutes time to brainstorm.

The 400 error codes may be helpful when brainstorming Client side errors! https://http.cat/

Examples of things students might say:

Server:
* If an API you are calling is down
* If the API changes so the request now gives an error instead of data
* If the database is down
* If the database changes the password
* Missing necessary environmental variable
* Package changes version and the old version you are using doesn't work anymore

Client:
* Syntax errors like missing an equals in an API request.
* If you try to write something of the wrong type to the database
* If you try to write something to the database without a required field
* If you try to loop through something that is null
* If you try to go to a route that doesn't exist
* If you are not authorized to access a page


### What happens when the app breaks?

Without proper error handling, if your app breaks this is what you'll see. Can I get a show of hands, who has seen something like this before?

Screenshot of what happens when our .NET MVC app crashes unexpectedly, 

<section class="call-to-action" markdown="1">
With your partner discuss the following questions: 

* Is a good user experience? Why or why Not? 
* What would make this user experience better?
</section>

## Error Handling Techniques

### Try/Catch Blocks

Add try catch to controller for when DB errors.

#### Swallowing errors is bad, do something in the catch!

Show swallowing an error and ask students to say why this might be bad.


### Data Validations

Users should not be able to add a type of data in an input that doesn't match the DB. Don't want to try to write to the DB and then get the error, catch it early.

Handle Validation Errors: Use data annotations and ModelState for input validation. Handle validation errors by checking the ModelState and returning appropriate error responses to users.


Implement input validation to ensure that the data you're receiving is valid before saving it to the database.
Use data annotations to add validation rules to your model properties. This helps ensure that the data entered by users is valid before it is saved to the database.


### Checking for Null

#### In The Controller
```
 var student = await _context.Students
                .FirstOrDefaultAsync(m => m.ID == id);
            if (student == null)
            {
                return NotFound();
            }

            return View(student);
```

❓What error could happen here? Which status code feels most fitting?

#### In the View

What happens when no data is in the database and then you try to loop through it. Add some sort of conditional check whenever looping through things. Be defensive, doesn't matter what's in the db.







With your partner: Brainstorm some principles of error handling? (needs rewording)


Maybe we look back on the four and answer

What can you do in a .NET application to follow the principle "Don't Fail Silently"?


* [Don't Fail Silently](https://developers.google.com/tech-writing/error-messages/error-handling#dont_fail_silently)
* [Avoid Swallowing the Root Cause](https://developers.google.com/tech-writing/error-messages/error-handling#avoid_swallowing_the_root_cause)
* [Log The Error Codes](https://developers.google.com/tech-writing/error-messages/error-handling#log_the_error_codes)
* [Raise Errors Immediately](https://developers.google.com/tech-writing/error-messages/error-handling#raise_errors_immediately)




Handle exceptions as close to the source of the error as possible. This provides better context and helps you respond appropriately.




Use HTTP Status Codes: Return appropriate HTTP status codes with your error responses. For example, return a 400 Bad Request for invalid input and a 404 Not Found for resource not found errors.


Random ideas: Keep Error Messages User-Friendly