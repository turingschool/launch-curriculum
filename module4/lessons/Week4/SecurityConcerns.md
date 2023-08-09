---
layout: page
title: Security Concerns
---

## Learning Goals
* Understand some security concerns of web development 
* Implement hashed data storage
* Implement secrets management

## Data Security on the Web

The bad news: the internet is a dangerous place.  Fortunately, we have some tools that developers can use to help lessen the danger of security breaches.  Today we are going to discuss some of the most common strategies developers use to protect data - this is not a complete list, but will get you thinking about the kinds of questions we need to answer when securing our applications!

<section class='call-to-action' markdown='1'>

### Gallery Walk

We are going to create a Gallery of Security.  You will be assigned one of the topics listed below, and have 10 minutes to research on your own.  Then we will organize into groups, and your groups will have 20 minutes to create a slide (one single slide) that introduces this topic to the rest of the cohort.

* Authentication/Authorization and API keys
* API Rate Limiting
* Overpost Prevention using Data Transfer Objects (DTOs)

</section>

## Implementing Security Measures

In addition to the topics you all just researched, developers also must consider the sensative data we _need_ in our applications: sensitive data that make our application work, and sensitive user data.

Data that makes are application work are things like our database user and password.  Up to now, we have used a generic user and password so that when we push our code to github we are not exposing a personal password (like the one you use for your email, instagram, etc*). We can use **environment variables and secrets management** to prevent pushing this information to remote repositories.

If our application has users, we may need to store _their_ passwords or other sensitive data. We can use **data hashing** to store sensitive data more securely. 

*You should probably use different, randomized passwords for every account 😬

### Secrets Management

Let's assume we are working on an application that has a database connection.  When we are developing the application, we are connecting to the database on our local machine; but, when we deploy the application to the web, we will connect to a database stored somewhere else (a different computer).  This means there are two **environments** that our application can work in: development and production (deployed). Each environment will have its own database connection string, as in the code below:

```
"ConnectionStrings": {
  "GoodBooksMvcDb": "Server=localhost;Database=GoodBooksMvc;Port=5432;Username=postgres;Password=password123"
}
```

We _could_ keep track of all of our connection strings in the application, but that opens us up to security risks.  Because our application is deployed on the web, we do not want to record the database configuration anywhere public (like github).  So, we can use **environment variables** instead.

With an [environment variable set up](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3), we can remove the connection string configuration in our appsettings.json, and get the connection string directly from the environment.

```c#
builder.Services.AddDbContext<GoodBooksMvcContext>(options =>
    options.UseNpgsql(Environment.GetEnvironmentVariable("GOODBOOKS_DBCONNECTIONSTRING")).UseSnakeCaseNamingConvention());
```

**Warning** After creating environment variables, you will want to re-start visual studio before running any database commands!

### Hashing Data for Storage



## If you're interested
* OWASP - .NET 'cheatsheet'
* White Hat Hackers


## Lab
hackthissite
* find something super basic for trying to find vulnerabilities