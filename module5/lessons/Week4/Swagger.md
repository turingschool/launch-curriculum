---
layout: page
title: Swagger API Documentation
---

### Introduction

Let's start by sharing our responses to the questions from today's prep in two Slack waterfalls.

* Why would someone use Swagger API Documentation?
* What questions to you have about Swagger?

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    We want students to have the key takeaways that it's easily created documentation for someone new to understand your API endpoints without having to dig into the code. We also want them to understand it's an easy way to test calling the API, similarly to Postman but with less set up. </p>
</aside>

<section class="call-to-action" markdown="1">
With your partner, discuss the following question. Be prepared to share your thoughts when we come back together.

How do you think Swagger might be helpful for this week's this mini-project?
</section>

## Adding Swagger to an API project

Swagger is an incredibly popular tool, and luckily for us, it's already a part of the .NET framework!

To generate the swagger UI, when creating a new API project make sure that `Enable OpenAPI support` is checked.

![Creating a new API project](/assets/images/module5/week4/NewAPIProject.png)

![Enable Open API Support](/assets/images/module5/week4/EnableOpenAPISupport.png)

Once you've checked that box, when running your API application, your browser will automatically direct you to the Swagger UI page!

If you're curious about the details, these are the lines that are added to the Program.CS file when you check that box and enable swagger.

```c#
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); <--- Swagger setup line 1

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); <--- Swagger setup line 2
    app.UseSwaggerUI(); <--- Swagger setup line 3
} 

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```