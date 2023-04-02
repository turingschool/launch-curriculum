## Pre-Work for [Intro To MVC](/Mod3/Lessons/Week1/?????????.md)

### Review: Path Parameters and Query String Parameters
Will they learn about path and query string params in the how the web works lesson? I think they should. Then review before this lesson.

### Independent Research: What is MVC?
https://docs.google.com/presentation/d/19iyOaSs2Ssi23KWflWR88zaCAPpRgRPAPcJFFKTkdjs/edit#slide=id.g20ea0665d67_0_38


You will definitely want to read the ASP.NET official MVC documentation: https://learn.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-6.0

https://www.codecademy.com/article/mvc

https://www.youtube.com/watch?v=DUg2SWWK18I

* In your own words, what is a Controller?
* In your own words, what is a View?
* In your own words, what is a Model?


<!-- TODO, when should we have them learn about validation on their models? Mod 4 topic? -->

Question: Do we even want to teach about using ViewData to pass from controller to view? Or just a model? For now, I'm thinking no, but might be worth asking if folks use ViewData in real world.


The lab: Changing certain things within this movies app. For example, adding a new field. What changes in the Model, View, and Controller?

When to talk about the Razor markup syntax? https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-6.0

```C#
<ul>
    @for (int i = 0; i < 5; i++) {
        <li>List item @i</li>
    }
</ul>
```

https://learn.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-6.0#strongly-typed-views

