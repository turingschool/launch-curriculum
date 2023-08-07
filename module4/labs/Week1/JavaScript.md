---
layout: page
title: Intro to JavaScript Lab
---

## Lab Objectives
* Practice using data types, variables, operators, and conditionals in JavaScript
* Practice writing and calling JavaScript functions

## Gradebook

Your task is to create a gradebook in JavaScript. 

### Setup

Fork [this repl]() in Replit. 
All of your code should be written in the `script.js` file. 
To run your code, open the Shell (similar to the console) and type `node script.js`.
  * If you receive an error / prompt to select a version of node to install, press Enter to select the first option. Then type `node script.js` again.

### Iteration 1

Create two local variables: `firstName` and `lastName`.
Write a function that returns the student's initials with the `.` character after each initial. For example:

  * firstName: `Zoe`, lastName: `Ferrell`
  * output: `Z.F.`

The program should display the initials from the `main` function using `console.log()`.

### Iteration 2

Create a local array variable: `scores`.
Write a function that returns the average of the scores in the array.

* grades: `85`, `92`, `84`, `88`
* output: `87.25`

The program should display the average score from the `main` function using `console.log()`. The average should display with exactly two decimal places.

### Iteration 3

Write a function that returns the letter grade based on the average score from Iteration 2.
* The grading scale is based on a 10-point scale:
  * `A` => `90` and above
  * `B` => `80` and above but less than `90`
  * `C` => `70` and above but less than `80`
  * `D` => `60` and above but less than `70`
  * `F` => less than `60`

* average: `87.25`
* output: `B`

The program should display the letter grade from the `main` function using `console.log()`.

### Iteration 4

Refactor the function from Iteration 2 to meet the following criteria:
* The minimum score is `0`.
* The maximum score is `100`.
* Invalid scores should not be included in the calculation for the average score.

* grades: `85`, `-20`, `92`, `135`, `84`, `88`, `40`
* scores excluded: `-20`, `135`
* average: `77.80`
* letter: `C`

The program should display the average score from the `main` function using `console.log()`. The average should display with exactly two decimal places.

### Spicy Challenges

#### Challenge 1

Refactor the function from Iteration 4 to meet the following criteria:
* If the student has 5 or more valid scores, the minimum score should be dropped and the remaining scores are used to calculate the average score and determine the letter grade.

* grades: `85`, `92`, `65`, `84`, `88`
* dropped score: `65`
* average: `87.25`

* grades: `85`, `92`, `65`, `84`
* dropped score: n/a (less than 5 scores)
* average: `82.5`

The program should display the average score from the `main` function using `console.log()`. The average should display with exactly two decimal places.

#### Challenge 2

Write a function that meets the following criteria:
* If the student has earned a grade other than an `A`, return the minimum score (as an integer) the student would have to earn on the next assignment that would bring their average to the next higher letter grade.
* The new score may be above `100`, the highest valid score. Return it anyway.
* If the student already has an `A`, return any number that keeps the student at an `A`.

* grades: `85`, `92`, `84`, `88`
* average: `87.25`
* new score: `101`
