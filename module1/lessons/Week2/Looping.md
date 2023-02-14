## Learning Goals
* Identify and implement code blocks.
* Use `while`, and `for` to repeat code blocks.
* Recognize potential infinite loops.

## Warm-Up

Imagine you are writing a program that will shuffle and deal a deck of cards to two players.  Each player should have 5 cards.  The program might have tasks such as: shuffle, and distribute a card.

* How many times will you shuffle the deck?
* How many times will you distribute cards?

What if we need to deal 5 cards to 5 players?  Will the answers to the questions above change?

**Instructor Note**: lead a discussion around the pros and cons of explicitly repeating actions.  You could even pull up [this repo](https://replit.com/@launch-team/M1W2-CardShuffle) to show the card example.

## Looping

A loop is a set of instructions that is executed repeatedly until some condition is met. This condition may be a certain number of times that the loop is executed, for example:

- After baking twenty four cookies on a sheetpan:
  1. you pull the cookie sheet out of the oven. 
  2. Take one cookie off the sheet.
  3. Put that cookie on the cooling rack.
  4. If there are still cookies on the sheetpan, repeat steps 2 and 3.
You will end up repeating steps 2 and 3 twenty four times (a set number).

or it may be a question that returns a true/false (boolean) answer. For example:

- While looking for a parking spot at a crowded sporting event, you will:
  1. Look for a spot
  2. If no spot is seen, continue driving
  3. Repeat steps 1 and 2 until a spot is found `(full == false)`(for an unknown number of times).


## `while` loop

A `while` loop will execute a block of code as long as a specific condition is `true`. 

![Diagram of while loop logic](/Mod1/Images/Week2/whileLoop.png)

```c#
while (condition)
{
  // code to execute as long as condition evaluates to true.
}
```

```c#
var parkingSpace = "full";

while (parkingSpace == "full")
{
  Console.WriteLine("Guess I'll keep driving");
}
```

> With a partner: What do you think will happen if we run the code above?

** Instructor Note **: discuss infinte loops.  In replit, you will need to `stop` the program to exit out.  

When we have a loop where the condition always evaluates to `true`, we have created an **infinite loop**.  The loop will continue running forever (or until our computers run out of processing power!).  Because of this danger, it is always good to consider early in the implementation process, how a loop will stop.

> How might we avoid the problem of an infinte loop in this parking space example?

> Practice: in a replit project, write a program that continuously asks a user for a random fact until the user enters 'exit'.

** Instructor Note **: this would be a great time to ask a few students to share out there code (implementations AND bugs!).

### Code Blocks
Now that we have worked with if statements and loops, you might have started to notice that we often group statements inside of two curly brackets `{}`.  We refer to this group of statements as a **block of code** or a **code block**.

```c#
if (isHungry == true)
{
  // Everything between the curly braces is the code block (even this comment).
  Eat();
}
```

```c#
while (isHungry == true)
{
  // this is a code block.
  if (foodExists == true)
  {
    // this is another code block nested INSIDE the while block.
    Eat();
  }
}
```
<!-- In the below, I think it might be worthwhile to explain in a few more words what "readability" means and why it is important. ✅-->
Code blocks can be nested inside other blocks; though we generally want to avoid too much nesting, for readability.  **Readability** refers to how easy or difficult it is for a human to read and understand a piece of code.  

If we have a file with too much code, too many nested blocks, or variable names that have no meaning, we would say that the code is not very **readable**.

It is important for us to start recognizing code blocks because these blocks are how are program knows to end one task, and move on to the next one.  For example, how does the program below know when to check the condition again?  When we get to the end of the while statement's code block!

```c#
Console.WriteLine("What is the best cookie?");
var userInput = Console.ReadLine();

while (userInput != "Snickerdoodle")
{
  Console.WriteLine("Wrong! What is the best cookie?");
} // <-- this is the end of the while statement's code block.

Console.WriteLine("Yes! You are so smart.");
```

Without the idea of a code block, this program might mistakenly encourage users to believe that chocolate chip, or peanut butter were the best cookie.  We need the code block to _contain_ the code that we want to repeat as along as the  condition is true.

## `for`

Often, we need to do a task a specific number of times; in these instances, a `for` loop can be helpful.

```c#
for (var i = 0; i < 5; i++ )
{
  Console.WriteLine(i);
}
```
<!-- I wonder if we should use int 1 = 0, instead of var. It feels more clear to me and from a quick scan what other online tutorials are doing. -->

A `for` loop is sometimes a bit difficult to understand at first.  To help us understand, let's take a look at the following `while` loop, that will result in the same outcome as the `for` loop above:

```c#
var i = 0;
while ( i < 5)
{
  Console.WriteLine(i);
  i = i + 1;
}
```

### For Loop Structure
Written out in english, the syntax of a **for** loop follows this structure:

```
for (Initial Expression; Condition; Increment Expression)
{
  Code Block
}
```

#### Initial Expression
We begin with the **initial expression**: `var i = 0`. Where do we want our loop to start? The first statement `var i = 0;` creates a variable that is assigned the value of 0. 

This variable is commonly named `i`, or `index`, and will act as a counter. It is created the first time the loop is run.

#### Condition
<!-- Wouldn't the below example stop when the index is at 4? Yes, this is unclear ✅-->
Then we set a **condition** that tells the loop when to stop running: `i < 5`;. In this case, the condition indicates that the loop will no longer execute the code block when `i` is 5.  In other words, in the last executed block:
  * `i` is 4
  * the condition is met (it returns `true`)
  * the code block is executed
  * `i` is incremented (`i` is now 5)
  * The condition is **not** met, and the loop stops.

** Instructor Note ** This would be a good opportunity to do some diagramming, keeping track of index values during iteration, and demostrating _explicit_ code annotation.

The condition _may_ use a variable that is assigned a value. for example:
```c#
var name = "Megan";

for (var i = 0; i < name.Length; i++)
{
  Console.WriteLine(name);
}
```
In this example, the for loop will run as many times as the number of characters in the variable `name`.

#### Increment Expression
Finally, with the statement `i++` we update the value of our counter, `i`. This adds 1 to the value of `i`. 

This syntax is using the increment operator `++`, which is a way of writing `i = i + 1`. It is also possible to decrement downwards using the decrement operator `--`, which is a way of writing `i = i - 1`.  While is is most common to increment or decrement by 1, you could update the value by any number (add 3 each time, subtract 10 each time, etc...).


**instructor note** discuss increment and decrement operator here!
<!-- In the below example, is declaring the initializer as "m" intentional? haha - nope. I also think that maybe we start with a more basic exampel first (such as only decrementing by 1/incrementing by 1) before launching right into a more fancy version that decrments by 3. Also, I imagine more loops generally will only incrrement/decrement by 1, so seems like a good place to start/something to call out -->
> With a partner, walk through the code below; at each point, indicate what the value of `i` is.  How many loops will be completed?
> ```c#
> for (var i = 15; i > 5; i -= 1)
> {
>    Console.WriteLine("The current value of i is: " + i);
> }
>```

### Iteration

In any looping statement, we refer to each *loop* as an **iteration**.  Each time the code block is executed, that counts as a single iteration.  If a loop repeats 5 times, we would describe that loop as **iterating 5 times** or **including 5 iterations**.

> With a partner, discuss how many iterations the following code will go through:
> ```c#
> var counter = 0;
> while counter < 5
> {
>   Console.WriteLine($"Counter is: {counter}");
> }


### Check for Understanding


* What might cause an infinite loop? What is a good way to avoid an infinite loop?
* Write a **for** loop that will output a countdown from 10 to 1.
* Write a **while** loop that will continually ask a user what the best animal is, until they provide the answer "Unicorn".
* Write, in your own words, what is happening on each line of the code below.  Then, without running the code first, write down what the output of the following code would be:
```c#
for (var i = 0; i < 3; i++)
{
  var m = 5;
  while (m > 0)
  {
    Console.WriteLine($"i: {i}, m: {m}");
    m--;
  }
}
```
After making a prediction, copy this code into a replit project and see if you were correct!  
* How many code blocks are in the example above?

