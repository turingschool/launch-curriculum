## Learning Goals

* explain the flow of execution through code  
* use `if/else` statements to control execution


# Conditions

In programming, we refer to something that is either `true` or `false` as a **Boolean**.

A **condition** is something that evaluates to a Boolean. This can be as simple as a variable that holds a Boolean value:

```c#
bool playAgain = false
```

We can also use **comparison operators** to create a condition by comparing two values. The important comparison operators are:

* `==` equal to
  * Be careful not to mix this up with `=` which is used for **variable assignment**
* `>` greater than
* `>=` greater than or equal to
* `<` less than
* `<=` less than or equal to
* `!=` not equal

We can use them like so:

![Image of Comparison Operators in action](/Mod1/Images/Week1/ComparisonOperators.png)

## Using `!` 

You can also use the negation operator `!` (also known as a "bang") to reverse something from true to false. The "bang" will always return the opposite boolean of the boolean that is returned from a method or variable. I use the word `not` in my head in conjunction with the negation operator.

![Image of Not Operator](/Mod1/Images/Week1/NotOperator.png)

## `||` and `&&`

We can use the "or" operator `||` and the "and" operator `&&` to combine two conditions into a single condition. `||` evaluates to true if at least one of the conditions is true. `&&` evaluates to true if both are true:

![Image of And and Or Operators](/Mod1/Images/Week1/AndOrOperators.png)

<!-- I think the note below would also be a good time to do an example w/ code that shows this common error and hopefully produces an error message? or at least we can have students get in the habit of looking at code AND predicting what might happen when it executes -->

> Now, you need to determine if the dog is mid-aged (older than 3 and younger than 9).  How would you write this condition?

**Instructor Note** Discuss the importance of putting a condition on either side of the operators - c# will not compile code unless you do this, but it is a common error!

# Conditional Branching

In programming, branching refers to a choice that is made depending on whether or not a condition is true or false. Think of branching as "choose your own adventure".

Examples:

- If a person is 16 or older, they can apply for a driver's license. (One branch)

```c#
if (age >= 16)
{
  Console.WriteLine("Head on down to the DMV!");
}
```

<!-- Could we also include a version of this diagram that has the specific situation written out? -->
![inline](/Mod1/Images/Week1/IfStatementFlowChart.png)


- If you want to spend a lot of money for dinner, go to a fancy restaurant. Otherwise, cook at home. (Two branches)

```c#
if (spendThatMoney == true)
{
  Console.WriteLine("Go get a fancy dinner!");
}
else
{
  Console.WriteLine("Eat at home.");
}
```
<!-- Could we also include a version of this diagram that has the specific situation written out? -->
![inline](/Mod1/Images/Week1/IfElseStatementFlowChart.png)

> What are other real world examples of conditional branching?

<!-- For the below examples, I think it could be useful to also include an example that is filled in - more like psuedocode, but somethign that can highlight the different options and how only one option can be "chosen"  -->
## `if`

All of our conditional branches will begin with an `if`. The code following the `if` will run if the condition is true.

```c#
if (userLoggedIn == True)
{
  DisplayProfilePicture();
}
```

## `else if`

Use an `else if` to create more branches. Keep in mind that only **one** branch will ever be executed.
<!-- Do you think the below should be more explicit - specifically for the condition 2, should the comment incorproate that if condition 1 in NOT true AND condition 2 is true? I feel like we may want to be super clear that only one condition will ever trigger, not multiple. We could also include some exercises that focus on how ordering the conditions is really important and can lead to unexpected outputs if you switch them around ✅-->
```c#
var age = 30;

if (age > 40)
{
  Console.WriteLine("You are 'over the hill'");
}
else if (age > 18)
{
  Console.WriteLine("You are a young adult");
}
else if (age > 12 )
{
  Console.WriteLine("You are a teenager");
}
```

> With a partner, review the code above, and determine what will be printed to the console.  
> What happens if you rearrange the order of the conditions (for example, check that `age > 12` first)?

## `else`

Code inside an `else` will run when none of the previous conditions are true.

```c#
if (age > 40)
{
  Console.WriteLine("You are 'over the hill'");
}
else if (age > 18)
{
  Console.WriteLine("You are a young adult");
}
else if (age > 12 )
{
  Console.WriteLine("You are a teenager");
}
else
{
  Console.WriteLine("You are still a kid");
}
```

> Draw a flow chart that models the if-statement above.

## Other rules

* Conditional branches have exactly one `if`
* The `if` can be following by any number of `else if`s
* A conditional branch will have either zero or one `else`
* The `else` comes after the `if`/`else if`s
* Conditions are evaluated in order.
* Only one branch can be taken.

## Check for Understanding

* In your own words, how does the order of conditions impact an if statement?
* What will the following code print to the screen?

```c#
var playAgain = true;
var lives = 3;
if (lives == 0)
{
    Console.WriteLine("You Lose!");
}
else if (!playAgain)
{
    Console.WriteLine("Game Over!");
}
else if (playAgain && lives > 0)
{
    Console.WriteLine("Welcome back!");
}
else
{
    Console.WriteLine("Invalid input.");
}
```

* What values would we need to assign the variables `playAgain` and `lives` in order to print each of the following to the console:
  * "You Lose!"
  * "Game Over!"
  * "Welcome back!"
  * "Invalid input."