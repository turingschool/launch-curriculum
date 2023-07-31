---
layout: page
title: Intro to JavaScript Lab
---

## Lab Objectives
* Practice using data types, variables, operators, and conditionals in JavaScript
* Practice writing and calling JavaScript functions

## Gradebook

Your task is to create a gradebook in JavaScript 

* Fork [this repl]() in Replit.
* Ask the user to enter the number of students in the class
  * Set a reasonable range of students (e.g. 1-10)
* After the number of students and assignments has been set:
  * Ask the user to enter a student's first and last name
  * Ask the user to enter a grade one at a time, within a reasonable range. The program should stop accepting grades after the user enters a sentinel value (e.g. `-1`).
  * The program should gracefully reject invalid values (i.e. outside the range 0-100).
* Repeat for the entered number of students.
* After all students and grades are entered, the program should display each student's initials, the average grade, and the letter grade
  * The grading scale is based on a 10-point scale (`A` = `90`, `B` = `80`, etc.)
  * e.g. 
    * input: `Zoe Farrell`, `85`, `92`, `84`, `88`, `-1`
    * output: `Z.F. - 87.25 - B`

Make sure to make sure of JavaScript functions that follow the Single Responsibility Principle (SRP).

### Challenge 1

Alter your program to read from an input text file. Each data point is on its own line. An example input file is included in the repl.

### Challenge 2

Alter your program to write to an output text file. Each student should display on its own line.

### Challenge 3

Alter your program to write to an output HTML file. Each student should display on its own line.

### Challenge 4

Alter your program to write to a table in an HTML file. The table should have appropriate column headings. Each student should display on its own row.
