# Debugging
<!-- Let's add some learning goals here - whoops! ✅-->

## Learning Goals
* Understand what a bug is
* Practice Debugging with Breakpoints

## Warmup

> In your notebook, write about a time when you tried something and it didn't go as planned.  How did you know things were going off course?  Were you able to make adjustments and get back on track?

As developers there will often be times when things are not working in just the way we want.  It is a completely normal part of the process of writing code to come across issues and errors as we are developing.

## What is a bug?

A **bug** refers to any bit of code that is not functional. A bug might be preventing your code from compiling - meaning it is giving us errors during the build attempt.  Or, a bug could be causing your program to behave in an unexpected/unwanted way - a bug in a calculator might mistakenly calculate 2 + 2 and get 10.

**Debugging** refers to the process of identifying where a bug in your code exists, and updating the code to remove that bug.

There are a lot of different approaches to debugging.  Today, we are going to focus on using the tools that we have in our Visual Studio IDE.

```markdown
Fun Fact: According to programming lore, the first computer bug was [an actual bug 🪲](https://education.nationalgeographic.org/resource/worlds-first-computer-bug)
```

## Using Breakpoints

Up to now, your debugging has probably looked like a lot of guess and check - you've made an educated guess on what might be going wrong in your program, made a change, and then run the program again.  With an IDE and breakpoints, debugging can be more precise.

A **breakpoint** is a line decoration that we can use to * pause * our progam at a certain point _while it is running_.  We can then explore the state of objects in that program - we can see the value of a specific variable, or the items in a list.

## Adding a Breakpoint

To place a **breakpoint**, we click in the 'gutter' on the line where we want to pause the program.

![](/Mod1/Images/Week4/AddBreakpoint.png)

Now that there is a breakpoint placed on line 6, when we run the program, it will pause at that point, allowing us to inspect the state of our program in the **Output** panel.

![](/Mod1/Images/Week4/OneBreakpointPause.png)

Here, we can see that we are **paused** on line 6 (indicated by the orange arrow).

When we look at the output panel, we can see our variable `dogs` and the value it holds.

> With a partner, discuss why we only see `"Sammy"` in the string.  Why are "Cutty" and "Nile" not in there?

** Instructor Note ** we want students to understand that the breakpoint will pause the program *before* the line its on is executed.

## Continuing or Stopping Program Execution

With a breakpoint, we have **paused** our program at a certain point in its execution.  Once we have gathered the information we need from this point, we can either **contintue** or **stop** the program. To continue running the rest of the program, use the green `Continue` button; to stop execution and exit the program, use the red `stop` icon.

![](/Mod1/Images/Week4/ContinueOrStop.png)

<!-- I think it would be helpful to also demonstrate "Step Into" here so that students can use that to move the debugger line by line through the code. Not a lot of detail, just letting students know that's a debugging option. -->

## Removing Breakpoints

When you are done debugging, you will want to remove the breakpoints you have placed; you do not want to keep breakpoints in any final project.  You can remove a breakpoint by clicking on it again.  Or, if you are unsure of where your breakpoint(s) is, you can use the `Delete All Breakpoints` option under the Debug menu.

![](/Mod1/Images/Week4/DeleteAllBreakpoints.png)

## Adding Multiple Breakpoints

Often, it will be useful to place multiple breakpoints.  You can do so by clicking in the gutter on as many lines as you like.

When multiple breakpoints exist, the program will pause at each breakpoint in the order of execution.  In the example below, we pause first on line 6.

![](/Mod1/Images/Week4/FirstOfTwoBreakpoints.png)

We can see that at this first breakpoint, the only variable that exists _at this moment_ is `dogs`.  The code below line 5 has not yet been executed.

To continue execution to the next breakpoint, we click on the `Continue` button.

In this example, part of the code before the next breakpoint includes a `ReadLine()`; so we will need to provide some user input, just like we would when running this program without breakpoints.  After providing that input, you will see that we are now at the second breakpoint, on line 12; note the difference between the breakpoint icons, the one with the orange arrow is where we are in the program execution.

![](/Mod1/Images/Week4/SecondOfTwoBreakpoints.png)


## Breakpoints in Loops

> With a partner, take a look at the code snippet below.  If we `Continue`d through the program, how many breakpoints would we hit?

![](/Mod1/Images/Week4/BreakpointsInLoop.png)

** Instructor Note ** Reiterate that breakpoints will cause a pause on a line _every_ time it is executed.  So, in a loop, we will have a break point on each iteration (not just the first one).

## Checks for Understanding
* In your own words, describe how we use breakpoints to debug.
* How do you add a breakpoint? How do you remove one or more breakpoints?
<!-- I think the question below is a little unclear - perhaps consider "confirm value of products after it has been reassigned? ✅-->
* If we wanted to confirm the value of `products` after it has been reassigned in the code below, on what line would we put a breakpoint?
```
1  string var products = "book, tv, iPad";
2
3  Console.WriteLine($"Current Inventory: {products}");
4
5  products = products + ", ear buds";
6
7  Console.WriteLine($"Current Inventory: {products});
```

<!-- I think this lesson is a really good length and benefits from having a lot of screenshots/visuals that students can refer to! Again, I am interested to see what the Lab time looks like for this since I imagine there are a lot of great opportunitites to get students comfortable working in an IDE as opposed to a REPL -->