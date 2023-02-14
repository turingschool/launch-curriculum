# Lab
Lab time is designed for you to prepare for upcoming lessons, and practice what you have learned so far.  Both aspects are important for your success.  During this time, you are encouraged to collaborate with fellow students, and reach out to instructors with any and all questions!

** Instructor Note ** Plan to have two full group checkins to go over the Practice and Preparation.  For this lab, you will want to cover the 'String Methods' portion of the Practice section, and the UserInput portion of the Preparation section.

## Practice

** Instructor Note ** set up the practice repo together and walk through with students the first or first couple exercises so that they understand what they need to focus on, and how to get feedback on if they are completing the exercises correctly.

Fork [this repl](https://replit.com/@launch-team/M1W1-DataTypesVariablesLab#datatypes.cs) and complete the exercises in the `datatypes.cs` file.

To complete the exercises, you will first remove the lines that say `/* REMOVE THIS LINE` and `AND REMOVE THIS LINE */`.  After removing these lines, you will either complete some code by replacing the blank lines (______), or insert code where indicated (`Your Code Here`).  Once you have completed an exercise, run the program, and you will see a confirmation output to the console if the exercise is correct.

See the images below for clarification, and ask an instructor if you have any confusion!

An unstarted exercise looks like this:
![](/Mod1/Images/Week1/Exercise1.png)

Before starting the exercise, remove the indicated lines:
![](/Mod1/Images/Week1/Exercise2.png)

In this example,  you would replace `// Your code here` with the code that creates a string variable called `words`.  Then, when you run the program, you should see:
![](/Mod1/Images/Week1/Exercise3.png)

Complete each of the exercises in this file - you are encouraged to work with others in your cohort!

**Keep an eye on Slack.  Your instructor will call the group together to review the String Method and Property exercises**


## Preparation
### Math Operations

It is often necessary to do simple math equations.  Watch the video below to get an introduction to Math in C#:

[![Image of Video 'How to do Math'](/Mod1/Images/Week1/HowToMath.png)](https://www.youtube.com/watch?v=d84ci6tg9lk)

When performing math, and other sequential operations, it is important to understand any default order by which our programs might perform operations.  Watch this video to learn more:

[![Image of Video 'Order of Operations'](/Mod1/Images/Week1/OrderOfOperations.png)](https://www.youtube.com/watch?v=-Wh9FYJDgiA)

After watching these videos, in the repl that you forked during the Practice segment, work through the exercises in the `math.cs` file.  These exercises are formatted similarly to the practice exercises, and you are encouraged to continue to work with each other and ask questions as you go!

### String Interpolation and Concatenation

It is common in programming to interpolate (or, bring together) multiple pieces of data into one string.  Work through Sections [1](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/exploration/interpolated-strings?tutorial-step=1) and [2](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/exploration/interpolated-strings?tutorial-step=2) of [this tutorial](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/exploration/interpolated-strings) to get an introduction.

We have already seen another common string manipulation strategy: concatenation.  Concatenation appends or prepends additional information onto an existing string; in other words, it adds something to the end or beginning of an existing string.  Read through the [Microsoft Concatenate Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/how-to/concatenate-multiple-strings).  There is a lot of information here (as with most documentation!); not all of it is absolutely necessary to know.  The most important things will be the information that helps you answer the questions below.

After working through the tutorial, answer the following questions in a notebook:
1. Are there any differences between the following code statements? If yes, how are they different?  A good sentence starter might be: When I run this code, this is what happens...
    * `var age = "3" + "2";`
    * `var age = 3 + 2;`
2. Brainstorm one or more reasons why we might use string interpolation.
3. In your own words, define 'interpolation'.

### User Input

In our [Intro to Programming](/Mod1/Lessons/Week1/introToProgramming.md) lesson, we learned that one of the key components of a computer is `input`.  We will be leveraging input from users from here on.  To explore this idea:

1. Work through [this tutorial](https://riptutorial.com/csharp/learn/100006/user-input)
2. Read through [this resource](https://www.w3schools.com/cs/cs_user_input.php)
    * note that on the W3 site, you can 'Try It Yourself' to play around with the examples!

Put what you have just learned into practice, by completing the exercise in the `userInput.cs` file for the repl that you forked earlier.  Remember to reach out to instructors and other students if you have any questions or want to collaborate!

**Keep an eye on Slack.  Your instructor will call the group together to review the User Input exercise**

<!-- Lab Feedback
- Great work finding some decent resources to prevent "reinventing the wheel" and getting students used to consulting different resources
- It would be great if we had an overall activity/REPL that students work working through for each lab. I envision a scenario where students work through some resources/tutorials/research and then have to do some combination of writing, coding, annotation, etc., all of which could be handled in a REPL (and eventually in a repo in later mods)
- In addition to using a REPL to solidy learning + give more opportunity for scaffolded practice, I think it also highlights the need to be super explicit with instructions with students, especially in the early mods. The way this lab is currently set up, I think there could be some confusion for students about what the intended outcome of this work actually is.  -->