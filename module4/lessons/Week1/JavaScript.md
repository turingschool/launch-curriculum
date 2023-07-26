---
layout: page
title: Intro to JavaScript
---

## Learning Goals

In this lesson we'll cover:

* The basic JavaScript data types
* What a variable is and how to use it
* Operators and how to use them
* Conditionals and when to use them
* How to declare and call functions with or without parameters

## History of JavaScript

Way back in the early days of the web, Brendan Eich created JavaScript. Legend has it that he wrote it in 10 days in 1995 while he was working as an engineer at Netscape. The language was first released with Netscape 2 in 1996. The name 'JavaScript' was a oh-so-clever marketing push to try to pick up on the momentum of Sun Microsystem's popular language Java, but instead it led to years of confusion about the names of these two mostly unrelated programming languages.

## What is JavaScript and Why?

JavaScript was created to make the web more dynamic. It is an object-oriented scripting language that can also be written functionally and is made to run inside a host environment like a web browser and provide programatic control over the objects of that environment. For example, when you click a button and you want something about the webpage to change, you will use JavaScript.

JavaScript can be _client-side_ and _server-side_, meaning that it can be used to control user-facing interfaces as well as handle the server-side extensions that connect with a database.

It's a highly versatile and flexible language, and has become the most commonly used language of the web.

Now that we know a little bit about JavaScript, let's talk about how to actually use it!

# Data Types

There are different data types in JavaScript. It's important to understand what type of data you're dealing with as you're writing code, and knowing the types of data are available to you is the first step.

There are three basic data types: numeric, string, and boolean. Let's go over what each of these is.

## Numeric Data Type

This data type handles numbers. In JavaScript, numbers are written without commas so three thousand four hundred and seventy five would be written like this:

`3475`

Numbers can also be negative and/or decimals (also called "floats"), so we can write `-3475` and `0.5`

Note that we _do not_ enclose a number data type in quotes.

## String Data Type

The string data type handles letters and other characters. It is always enclosed in quotes, and looks like this:

`"I am a string!"`

You can use either single or double quotes to wrap a string, but the opening and closing quotes need to match. A good rule of thumb is to pick a type of quote to use and then be consistent in it's use throughout a project.

Strings can be used for any kind of text. We use them regularly to add text to a page.

## Boolean Data Type

A boolean has one of two values: `true` or `false`. Think of it like a light switch: it's either on or off.

Booleans can be very useful to help determine which part of a script should be run (as in conditionals, which we will talk about later).

# ES5 vs. ES6

ES6 is the most current version of the ECMA Script Spec. We will be using the ES6 syntax.

# Variables in JavaScript

As we're writing code, there are many times when we want to be able to store a value so we have ability to reuse it in multiple places. Writing the same thing over and over is a pain, and it's common that we need to have access to the same information more than once. A variable lets us do just that!

## What is a variable?

A variable is a place to store values. When we write scripts (a set of instructions for a computer to follow), we need to temporarily store small pieces of data. We store that data in variables. "Variable" is a good name for this concept because it indicates the stored data can change (or _vary_) each time a script is run.

A variable is, at its most simple, a declaration. It's made up of two parts: the variable keyword, `let`, and the variable name, which can be whatever you choose. Let's see what that looks like in the console:

```javascript
let myVariableName = "This is my variable";
```

We see that we have the variable keyword, and we've set the variable name to `myVariableName`.

When we write a very simple variable like this, it's called _declaring_ the variable.

After our `let` keyword (a special word that the JavaScript interpreter knows is used to create a variable) and our variable name, we have an equals sign, `=`. That's called the _assignment operator_, because we use it to _assign_ a value to our variable declaration.

Until you've added the assignment operator and the variable value, the variable is considered _undefined_.

## Rules for Naming Variables
- Names must begin with a letter, dollar sign, or an underscore. They cannot begin with a number.
- Names can contain any of the above characters plus a number, but you cannot use a dash (-) or a period (.) within the name.
- You cannot use keywords or reserved words (such as `var` or `for`).
- All variables are case sensitive.
- Use names that describe the kind of information you plan to assign the variable.
- If your variable is made up of more than one word, then use camel case for every word AFTER the first word, which should be lower case (thisIsMyVariableName).

### Your Turn (in the console)

* Declare 2 variables, one named "quantity" and one named "mythicalCreature"

* Create three more variables, and give them each different data types (numbers, strings, booleans)

## Using Variables Together

Now that we know about different data types and have values assigned to both of our variables, let's dive into using them together!

So far, we have:

```javascript
let quantity = 3;
let mythicalCreature = " unicorns";
```

Let's make a new variable called "creatureCount" and assign the value as our quantity and our mythicalCreature.

```javascript
let quantity = 3;
let mythicalCreature = " unicorns";
let creatureCount = quantity + mythicalCreature;
```

Open up the console in your browser, enter these in, and see what you get!
Now change the value of your quantity variable and ask the console for the creatureCount value again.

## Concatenating Variable Values

In the example above, we used a `+` as a string operator to combine the values of two different variables. This is called _concatenation_, which is a series of values linked together.

We can concatenate html tags, text, numbers, and variable values. Let's revisit our example above to concatenate a more readable phrase as the value of our creatureCount variable:

```javascript
let quantity = 3;
let mythicalCreature = " unicorns";
let creatureCount = "<p>I have " + quantity + " very fancy" + mythicalCreature + "</p>"
```
This is very useful when we want to append data to our webpage, because it means we can write out an entire HTML tag and concatenate the data from our variable.

# Operators

Expressions rely on operators to calculate their single value. There are 5 basic types of operators to get you started:

1. [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators) assign a value to a variable. (hint: you've got these down already) `var color = 'magenta';`
2. [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) perform basic math. `var addTwo = 2 + 2;`
3. [String operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators) combine strings. `var greeting = 'Hello! ' + 'Nice to meet you.';`
4. [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators) compare two values and return a __true__ or __false__. `var buy = 3 > 5; // Value of buy is false`
5. [Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators) combines __expressions__ and return a Boolean value of true or false. `var buy = (5 > 3) && (2 < 4);`

# Statements

A script is a series of instructions that a computer can follow one by one. Each individual instruction is known as a statement. Each statement in JavaScript is followed by a semicolon.

Example statements:

```javascript
console.log('BOOM');
alert('POW');
```

### Debugging in Javascript

Debugging client-side and server-side JavaScript is a different beast than debugging Ruby.

Because client-side JS is run entirely in the browser, the technique for troubleshooting broken code is more complicated than `binding.pry`. Luckily, modern browsers are aware of this and give us a collection of options for digging into your code.

#### 1. Developer Tools
One of the first things you should familiarize yourself with when working with JavaScript (or HTML...or CSS...) are the dev tools. You can find a cool tutorial to dive deeper with  [Code School's Discover-DevTools Tutorial.](http://discover-devtools.codeschool.com/) (Chapters 3 & 4 are particularly helpful)

To open developer tools in Chrome:
-   Mac: `Cmd` + `Opt` + `i` (or `Cmd` + `Opt` + `j`)
-   (or) Right click on the browser window and select `inspect`
-   (or) Select `View` in the navbar, then `Developer`, then `Developer Tools`

When working with JavaScript, it is useful to keep your console open at all times to watch for errors and anything you've told your code to print out. Bringing us to...

#### 2. console.log()
`console.log()` is to JS what `puts` is to Ruby. This line of code will print whatever is provided as an argument to the console.

Given the following function called `printStuff()`, adding console.log() will print the value of `myVariable` to the console.

```
const printStuff = function(){
  var myVariable = 5 + 5
  console.log(myVariable);
}

printStuff()
=> 10
```

If you're confused about what a variable or function is returning, throw `console.log()` into your code or directly into the `console` in your browser to confirm/deny suspicions.

#### 3. Debugging In the Console

`debugger` is the `pry` of JS. Stick `debugger;` within a function to pause the browser from running the script when it hits a particular part of your code.

```javascript
// index.js
let var1 = 5
let var2 = "Ilana"
const myMath = (var1, var2) => {
  var1 * var2
  debugger;
}
```

***Warning***: **A `debugger` statement will not trigger unless your inspector tools in the browser are open.** This is meant to not interrupt a users experience if a developer accidentally commits and deploys a `debugger` statement.

In the browser, if we open up the dev tools, navigate to the console and try to search for something.  The program will freeze on the line `debugger`. This lets us type stuff into our `console` to see what's going on. The console is similar to a pry session in this context.

For a more in-depth lesson on working with DevTools - check out [advanced debugging](https://github.com/turingschool-examples/intro-to-debugging) or the [Chrome Documentation](https://developer.chrome.com/devtools/docs/javascript-debugging).

---

# Functions
Functions are a way to group statements together to perform a specific task. Functions are reusable blocks of code. To create a function, you must give it a name and then write the statements required for the function to achieve its task inside the function's curly braces. Let's work through the pieces and parts of a function.

## Anatomy of a Function:
```javascript
function myRadFunction() {
  let myFirstStatement = "Assigning a string to a variable called 'myFirstStatement'";
  alert('This is my second statement!');
  console.log(myFirstStatement);
}
// because definition of method will not change
const myFirstStatement = () => {
  let myFirstStatement = "Assigning a string to a variable called 'myFirstStatement'";
  alert('This is my second statement!');
  console.log(myFirstStatement);
}
```

- You declare a function using the keyword `function`.
- You can name the function anything you want, but it must include a set of parentheses after the name, which can be empty or accept parameters.
- You must follow the name of the function with a set of curly braces, which act as bookends to hold the set of statements you want the function to run when it is called.
- Calling the function is quite easy. Simply type the function name with it's parenthesis and any associated parameters.

## Call a Function:
```javascript
// Calling a function w/out arguments
myRadFunction();

// Calling a function with arguments
myRadFunction(arg1, arg2);
```

When this code is read, `myRadFunction()` is "called", all three statements within the function's body (those curly braces) get run.

### Your Turn
Let's go ahead and declare myRadFunction in the console together and then call it. What do you notice about the code as it is being run? What do you notice about the code being run if you swap the 2nd and 3rd statements?

Create your own functions in the console:

- Write a function that declares a `firstName` variable and a `lastName` variable, then alerts the user with a message that incorporates the full name, and then logs a random number to the console.

- Write a function that assigns three different math equations to three different variables, then log the sum of the values of all three variables

- Write a function that alerts the user with a message of "YO!", and then logs to the console a sum of eight different integers.

## Pass Information to a Function:
Sometimes you need to give a function some information in order for it to do its job. You can give that function the information it needs by providing _parameters_. These are bits of information that you identify with appropriately named labels (you get to decide the notation) inside the parentheses of your named function. The words you use for your parameters act like variables INSIDE the function, which means they serve as means to pass values.

### Parameters vs. Arguments
Its a subtle difference. Basically, when you declare a function, and you stipulate the function will accept some bits of information, those are parameters. Then, when you pass the values of the parameters, those are called arguments. Like this:

```javascript
// parameters named on declaration of function
function myDreamCar(make, model) {
  return "Buy me " + make + " " + model;
}

const myDreamCar = (make, model) => {
  return "Buy me " + make + " " + model;
}

// arguments "Audi" and "R8" passed into a called function
myDreamCar("Audi", "R8");
```

## Getting A Value from Functions:
Some functions return information to the code that called them. Wait - what? When a function performs a calculation, like 2 + 2, it will return the "answer" of 4, right? Yes, AND, you still have to tell it to do so. Let's work with some return statements in functions with parameters in the console:

```javascript
function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log('Boom');
}

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
  console.log('Boom');
}
```

The return statement ends function execution and specifies a value to be returned to the function caller. It looks like this:

```javascript
return [[expression]]
// The expression to return. If omitted, undefined is returned instead.
```

When a `return` statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, undefined is returned instead. The following return statements all break the function execution:

```javascript
return;
return true;
return false;
return x;
return x + y / 3;
```

# Conditionals

Sometimes we want to perform an action based on some kind of condition. In English, we can say "If this thing is true, then do that." To do this in JavaScript, we can write conditionals to take a certain path in our program.

To use conditionals, we first need to use expressions, operators, and statements.

## Basic Conditional Structure

Let's now look at the basic structure of a conditional:

```javascript
if (expression) {
  statement;
} else {
  statement;
}
```

If the expression evaluates to `true`, then the statement(s) for that condition will run. Otherwise, if the expression is `false`, then the statement(s) will not run at all. The expression will usually contain an operator to make a comparison (that evaluates to true or false).

Some examples of expressions we could use for a conditional are:

* `myNum < 5`
* `userCity === "Denver"`
* `isTired === true`

Now for some real conditional examples.

```javascript
let cookie = "chocolate chip";

if (cookie === "chocolate chip") {
  alert("This cookie is a chocolate chip cookie!");
} else if (cookie === "oatmeal raisin") {
  alert("This is not a cookie :(");
} else {
  alert("I bet you wish you had a chocolate chip cookie");
}
```

```javascript
let hoursOfSleep = 8;

if (hoursOfSleep < 6) {
  console.log('I am groggy.');
} else {
  console.log('I feel fantastic!');
}
```

### Your Turn

Write a conditional that gives a different alert message based on your favorite kind of animal.

### Challenge 1
Write a function to convert a name into initials. This function strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
It should look like this:

`Sam Harris => S.H`
`patrick Feeney => P.F`

### Challenge 2
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function `likes([String1, String2,...]) => String`, which must take in a single parameter of an array, containing the names of people who like an item. It must return the display text as shown in the examples:
```
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
```
For 4 or more names, the number in `and 2 others` simply increases.