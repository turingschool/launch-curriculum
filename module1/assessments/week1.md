---
layout: page
title: Week 1 Assessment
---

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Would be a good idea to show what we want them to do with the comments in the assessment exercises before letting them start.  Also make sure to put your REPLit usernames in slack for submission!</p>
</aside>

This weekly assessment is an opportunity for you to explore the main learning goals from the week.  If there are any topics that are unclear, now is the time to reach out for additional information and assistance!

During this assessment, you may use any resource other than fellow students.  Feel free to google, look back at your notes, lessons, labs, etc...

## Questions and Exercises (10 Points Total)

**Fork** [this repl](https://replit.com/@launch-team/M1W1-Week1Assessment) and complete the questions and exercises it contains.  Each question or exercise is indicated by a single line comment prompt like this: `// This is a single line comment that gives instructions` followed by a multiline comment where you will complete the exercise: `/* < these are the multiline comment indicators > */`.  For the exercises, you can verify they are working by removing the multiline comments and running the program.

### Submission and Feedback
When completed, click the `Invite` button in the upper right corner and `Generate a join link`.  Copy and DM that link to all your instructors.

![](/assets/images/module1/Week1/GenerateJoinLink.png)

## Build a Guessing Game (10 Points Total)

**Fork** [this repl](https://replit.com/@launch-team/M1W1-GuessingGame) as the starting point to build a guessing game program. Complete the following steps in order:

1. Ask a user for their name, and then greet them by name.

![](/assets/images/module1/Week1/week1_1.png)

2. Ask the user if they would like to play a guessing game.  If they enter 'yes', have them guess a number between 1 and 10; at this point, you can set the answer to be any number you like (in the example below, I've used '7').  Give feedback to user based on the guess provided.  If a user answers anything other than 'yes' to the prompt asking if they want to play a guessing game, the program should end.

![](/assets/images/module1/Week1/week1_3.png)

3. Update the program to only greet user's whose names include the letter 'a' (or 'A'). If the user's name does not include the letter 'a', we should let them know that we don't recognize their name. Hint: You can use the string method [Contains()](https://www.programiz.com/csharp-programming/library/string/contains) to see if a letter exists in a string.  For example, in `bool containsZ = "Zoe".Contains('Z');` the variable `containsZ` will be `True`.

![](/assets/images/module1/Week1/week1_2.png)



### Submission
When completed, click the `Invite` button in the upper right corner and `Generate a join link`.  Copy and DM that link to all your instructors.

### Rubric

This assessment has a total of **20 Points**.  Earning **10 or more** points is a **pass** and will indicate that you are progressing well with the material.

As a reminder, this assessment is for students and instructors to determine if there are any areas that need additional reinforcement!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br> For Scoring: On the questions, full points only.  We will give points based on logic over syntax errors.  If a program would run but do something unexpected, that is NOT a point.

For the Guessing game: 3 Points for part1, 2 points for one of the if statements working with user input, 3 points for the guessing game, 2 points for excluding non-'a' names.
    
    </p>
</aside>


## Stretch Goals (0 Points, just for some fun 😊)
These can be done in any order, and should only be completed if you have completed the **Questions and Exercises** and **Build a Guessing Game** portions

* If a user opts to play the guessing game, loop through asking for guesses until the correct answer is given.

![](/assets/images/module1/Week1/week1_4.png)

* If a user guesses something that is not a number, the program should exit gracefully (without an error!)

![](/assets/images/module1/Week1/week1_5.png)

* Update the guessing game to use a random number (between 1 and 10)
