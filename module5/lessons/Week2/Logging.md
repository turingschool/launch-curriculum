---
layout: page
title: Logging
---

## Learning Goals
* Understand the benefits of logging
* Be able to implement logging to the console and a file in a .NET application
* Practice the skill of self-directed learning and building

## Collecting Questions

In preparation for today's lesson, you were asked to imagine that you are assigned the task "Add logging to our MVC Movies application.". Then you were asked to brainstorm questions you would want to figure out answers to before you even think about how to write the code for this task.

<section class="call-to-action" markdown="1">
In your group of 3-4, share the questions each of you came up with. Then narrow down to the three questions that seem most important. <br> <br> When we come back together your instructor will call on groups and compile a list of top questions in Slack, each as a separate post.
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    Other possible questions could be: Why do we use logging? What should I log? Where do we want these logs go? Is logging already a part of .NET or is it some other tool I'll need to learn? <br>
    We want to direct students to write to a file and the console.</p>
</aside>

❓If you were really on a dev team, how might you go about figuring out the answers to these questions?

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    I want students to consider that they don't have to do all of the research on their own!! I want them to think about the fact that they could ask a fellow dev to sit down and talk about logging for 30 minutes. They could do some preliminary research and then ask to chat live with other Dev when they have some context and more detailed questions. They could also ask if there is another application where logging has already been implemented that they could look at.</p>
</aside>

## Research

For today, we're going to focus on the research approach. 

<section class="call-to-action" markdown="1">
Your instructor will assign each questions to pairs by putting your names on the Slack message. You will have 20 minutes to research and write up your answer in a thread on that post. Feel free to also add favorite resources you found related to that question! <br> <br> When we come back together each pair will share out what they found.
</section>

## Set Up

Today we will again be working in MvcMovies, building off of the code written in the error handling lesson. You will also be using traditional driver/navigator pair programming. Before we dive into building, we need to do some set up.

With your partner do the following four things:
* Choose whose code you're going to build off of today
* That person will commit their error handling code (you won't be able to push, but we still want to commit so that you have your error handling as a separate version)
* Set up a Visual Studio Pair programming session. [Here](https://www.loom.com/share/Using-Visual-Studio-for-Pair-Programming-ca4bbbcf96bc43f8ad9eeb8205c208cc) is a video on how to do that.
* Start the app and make sure it runs successfully

Emoji react in Slack once you have finished these four steps.

## The Task

Your task is to "Add logging to our MVC Movies application." You will be working with a partner and working in the traditional pair programming style, switching at least every 30 minutes between driver and navigator.

This is a very open-ended task!

Here are two guide posts:
* You should log both to a file and to the console

* Everyone should use the logging library [Serilog](https://serilog.net/).  It's highly recommended in the .NET community and while there are many options out there it will be easier to help each other debug if we stick to the same tech stack. There is a built in logger in .NET you can also look into but ["ASP.NET Core doesn't include a logging provider for writing logs to files."](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/logging/?view=aspnetcore-7.0#built-in-logging-providers) so for that goal we need another tool.

If other questions come up as you are working, post them in the codehelp Slack channel!

**✅Deliverable✅:** With your partner write up the steps required to log to a file and the console in a .NET application. Include screenshots of what the log file and console log should look like when it's working. A teammate should be able to follow your guide and get an initial message to log. Include any bugs/problems you ran into during set-up so that your teammate can avoid making the same mistake. Send these instructions in a slack message to your instructor.
<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>These getting started instructions are all it takes, it's only about 3 steps! https://github.com/serilog/serilog/wiki/Getting-Started </p>
</aside>

Once you complete this deliverable, dive deeper into the world of .NET logging! You want to build the highest quality logging you can in the time block provided. 

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>I think it would helpful to put a goal time for when students finish this deliverable. I'm thinking about half way through the alloted time for this lesson. To set the expectation that this is just the bare bones, they should definitely keep improving their logging from here. I'd also probably share lal of the guides with the class once ever group has finished.</p>
</aside>

**At some point your instructor will call the class back together to talk through some questions as a group and discuss tradeoffs you have run into.**

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    Here are the questions:
    * When should we use a console.log and when should we use logging?
    * Who is using Seralog and who is using the built-in logger?
    * What's one other tradeoff you and your partner have run into so far? What options did you consider? (then group discussion about what others think on this topic)
    </p>
</aside>

## Tiny Next Goal

Because this is such an open-ended challenge, it can be overwhelming to figure out where to start and how to move forward. To help us stay focused, I want us to use the "Tiny Next Goal" structure. 

At every point, you and your partner should have a "Tiny Next Goal" that you're working towards. This is the smallest goal you can think of that gets you closer to a high-quality logging implementation. Some examples of Tiny Next Goals for someone building their first HTML page might be, "Get the page to load with one H1 header on it", "Add a list to the page", "Link a CSS style sheet to the page that I know works because it changes the page background color", "Add spacing around items in the list". Notice how we focus on getting something working, and then update the goal to more closer to the ideal.

Periodically throughout worktime, I will post a Slack Thread for each group to share the "Tiny Next Goal" they are currently working towards. If your goal feels large, your instructor will encourage you to break it down into an even smaller part. If you're ever stuck on what to have as your next goal, reach out, your instructor will be happy to help.

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    * The Seralog getting started page is a good resource: https://github.com/serilog/serilog/wiki/Getting-Started
    * You can also have students look into the different logging levels and when you would use information, error, etc. https://github.com/serilog/serilog/wiki/Writing-Log-Events#log-event-levels
    * You can have students look into where else the logs can go besides the console and a file. There are tons of different sinks to go to other databases and such. https://github.com/serilog/serilog/wiki/Provided-Sinks
    * You can have students look into the idea of structured data and how you would write an object to the log, for example. https://github.com/serilog/serilog/wiki/Structured-Data#preserving-object-structure</p>
</aside>

<section class="call-to-action" markdown="1">
Your instructor will now drop the pairs into breakout rooms where you will decide on your first Tiny Next Goal and post it to the a thread in Slack. Then get started working towards that goal!
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>I would also run an end of day shareout where students share their screen and share something else interesting they learned about logging.</p>
</aside>


TODO: I have Seralog logging working in MVC movies, it's quite quick set up! The tricky part is there are two big approaches to logging, there are zero-shared-state logger objects that use dependency injection, this is the approach currently in MVC movies. I haven't tried doing this with Seralog yet, I think it's prefered but it's more in depth.

```c#
private readonly ILogger<HomeController> _logger;

public HomeController(ILogger<HomeController> logger)
{
    _logger = logger;
}
```

The second option is to make a global static log class.

```c#
// In Program.cs
Log.Logger = new LoggerConfiguration().MinimumLevel
    .Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/myapp.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

Log.Information("Hello, world!");

//And in any other file you can put the following. The Log is globally accessible.
Log.Information("Hello, world!");
Log.Error("Bad thing happened");
```

I think most students will stick with the second option because it's simpler, and totally works for our purposes. And that's ok with me! More advanced students we can push to look at the existing logger and these two different patterns.

Open question: How important is calling `Log.CloseAndFlush();`s. I think it works without it until you are sending the logs to a more fancy sink. Not sure yet where it should go anyways.