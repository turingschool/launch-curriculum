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
* Preventing SQL Injection

</section>

## Implementing Security Measures

In addition to the topics you all just researched, developers also must consider the sensative data we _need_ in our applications: sensitive data that make our application work, and sensitive user data.

Data that makes are application work are things like our database user and password.  Up to now, we have used a generic user and password so that when we push our code to github we are not exposing a personal password (like the one you use for your email, instagram, etc*). We can use **environment variables and secrets management** to prevent pushing this information to remote repositories.

If our application has users, we may need to store _their_ passwords or other sensitive data. We can use **data hashing** to store sensitive data more securely. 

*You should probably use different, randomized passwords for every account 😬

### Environment Variables

Let's assume we are working on an application that has a database connection.  When we are developing the application, we are connecting to the database on our local machine; but, when we deploy the application to the web, we will connect to a database stored somewhere else (a different computer).  This means there are two **environments** that our application can work in: development and production (deployed). Each environment will have its own database connection string, as in the code below:

```
"ConnectionStrings": {
  "GoodBooksMvcDb": "Server=localhost;Database=GoodBooksMvc;Port=5432;Username=postgres;Password=password123"
}
```

We _could_ keep track of all of our connection strings in the application, but that opens us up to security risks.  Because our application is deployed on the web, we do not want to record the database configuration anywhere public (like github).  So, we can use **environment variables** instead.

Environment Variables are stored globally on our machines.  Once an environment variable is created, it is available from nearly anywhere on our computer; this means that multiple programs could use the same environment variables.

With an [environment variable set up](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3), we can remove the connection string configuration in our appsettings.json, and get the connection string directly from the environment.

```c#
builder.Services.AddDbContext<GoodBooksMvcContext>(options =>
    options.UseNpgsql(Environment.GetEnvironmentVariable("GOODBOOKS_DBCONNECTIONSTRING")).UseSnakeCaseNamingConvention());
```

**Warning** After creating environment variables, you will want to re-start visual studio before running any database commands!

### Secrets Management

Another solution to the problem of needing sensitive data for our applications to run is **Secrets Management**.  Similar to environment variables, this strategy allows us to move the storage of sensitive data _outside_ of our solution; outside of the range of our git tracking!

In Visual Studio, managing secrets is fairly straightforward.  You can add project specific secrets in the project menu:

<img src="/assets/images/module4/week4/ManageUserSecrets.png" style="width: 80%;">

This will open a new file - secrets.json.  Here, you can create key/value pairs for data that you need to keep ... secret ...

```json
// secrets.json
{
  "GOODBOOKS_DBCONNECTIONSTRING": "Server=localhost;Database=GoodBooksMvc;Port=5432;Username=postgres;Password=password123"
}
```

Using the Secrets Manager, you can call keys directly from `builder.Configuration`.

```c#
builder.Services.AddDbContext<GoodBooksMvcContext>(options =>
  options
    .UseNpgsql(builder.Configuration["GOODBOOKS_DBCONNECTIONSTRING"]
    .UseSnakeCaseNamingConvention());
```

The secrets.json file is stored on your local machine, outside of the project file structure.  In your .csproj file, there will now be a unique identifier that the project uses to locate the file.

```
// GoodBooksMvc.csproj

  <PropertyGroup>
    ...
    <UserSecretsId>e20e7f2a-cb30-4dd4-8139-ed66697eb566</UserSecretsId>
  </PropertyGroup>
```

<section class='instructor-notes' markdown='1'>

For the next discussion, we want to make sure students understand that storing these variables on your computer (either in secrets, or in env variables) still has risks - you might need to send this information via slack/email/post-it.  They should leave the lesson knowing that there are cloud-based services that will perform similar functions, but in a way that teams can access the _same_ variables: AWSSecrets, AzureKey, etc...

</section>

<section class='call-to-action' markdown='1'>

In small groups, discuss some pros and cons of using:
* Environment Variables
* Secrets Management
* Keeping all necessary data _in_ your project

</section>

### Hashing Data for Storage

We sometimes need to store sensitive user data in our database.  For example, we might need to store passwords.  It would be too much of a security risk to store those passwords exactly as a user enters them; we can use a strategy called **Hashing** to transform meaningful data into a meaningless string of characters.

<img src="/assets/images/module4/week4/hashImage.png" style="width: 80%;">

[From Wikipedia](https://en.wikipedia.org/wiki/Hash_function): “A hash function is any function that can be used to map data of arbitrary size onto data of a fixed size”.

In the image above, each name is mapped to a number.  Where two names are assigned to the same number we have a **collision** (this is bad).  In this example, every name is matched to a two digit number; there are only so many two digit numbers, so it is highly likely that we will have a collision.  In production-level hash functions, data is assigned to a much longer sequence of numbers and letters.

There are a number of [common hash function types](https://en.wikipedia.org/wiki/List_of_hash_functions) that are used in modern web development.  The one we will use today is SHA256.

<section class='call-to-action' markdown='1'>

Create a new console application and put this code in the `program.cs` file.  Run it a few times, and then annotate what each line of code. You will likely need to do some research in order to figure out what each line is doing!

```c#
HashAlgorithm sha = SHA256.Create();

string firstInput = "Hello, World!";
Console.WriteLine("Input: " + firstInput);
byte[] firstInputBytes = Encoding.ASCII.GetBytes(firstInput);
byte[] firstInputDigested = sha.ComputeHash(firstInputBytes);
StringBuilder firstInputBuilder = new StringBuilder();
foreach (byte b in firstInputDigested)
{
    Console.Write(b + ", ");
    firstInputBuilder.Append(b.ToString("x2"));
}
Console.WriteLine();
Console.WriteLine("Digest: " + firstInputBuilder);

Console.WriteLine("\n\n");

var secondInput = "Howdy";
Console.WriteLine("Input: " + secondInput);
byte[] secondInputBytes = Encoding.ASCII.GetBytes(secondInput);
byte[] secondInputDigested = sha.ComputeHash(secondInputBytes);
StringBuilder secondInputBuilder = new StringBuilder();
foreach (byte b in secondInputDigested)
{
    Console.Write(b + ", ");
    secondInputBuilder.Append(b.ToString("x2"));
}
Console.WriteLine();
Console.WriteLine("Digest: " + secondInputBuilder);
```

Be ready to share your annotations!

🌶️If you have time, are there ways that we could clean up this code?

</section>

Hashing data is a good way to securely store data, but it is not fool-proof.  Let's imagine hack into my application and are able to retrieve all my users’ hashed passwords. You find that the account with username `boss@example.com`` has this hashed password:

```
16e6b8af370f0d6b6e67c65bb6f4499c01a974f1dcd14a5f9429c6931531e6c4
```

Based on the length of the digest you guess it’s a SHA256. You know that some users, particularly bosses, are lazy and they do dumb things like re-use their 4-digit ATM pin for their password. But the application required a password of eight digits, so they might have repeated the pin.

If these assumptions are correct, you are _very_ close to cracking into this user's account - it might only take you a few minutes of coding to find their password.

To protect against this kind of bad data entry (people using easily guess-able password patterns).  Developers use a technique called **salting**.  A salt is an extra set of characters appended to any sensitive data before hashing.  It gives us longer, less predictable data. Check out [this blog post](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) for more info!



### White Hat and Ethical Hacking

Security is a major concern for all technical platforms.  If security is a topic that interests you, you could make an entire career out of it.  You might here this career path referred to as White Hat, or Ethical Hacking.  Ethical Hackers help companies understand the vulnerabilities that they have, and help them strategize better security.

For more information on current security risks and strategies, explore:
* [OWASP](https://owasp.org/) - an organization that regularly posts about current security threats.  They also have some great language-specific cheat sheets!
* [HackTheBox](https://www.hackthebox.com/) - a training space for cyber-security.