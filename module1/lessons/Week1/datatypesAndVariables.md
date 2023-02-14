## Learning Goals

* Recognize each of the main c# datatypes.
* Speak to a few common methods for each data type.
* Practice researching built-in c# methods.

## Warm Up

With a partner, group the following items into two or more categories (you get to determine appropriate categories!)

> * horse
> * 3
> * run
> * jump
> * fourteen
> * dog
> * true
> * rock
> * apple
> * 525600
> * nothingness
> * 3.14

# Variables

One of the most important concepts in programming is assigning information to a variable.  Let's take a look at [this replit project](https://replit.com/@launch-team/M1W1-VariablesLesson1) to get a better understanding.

![Screenshot showing two variables being assigned and used](/Mod1/Images/Week1/VariableAssignment1.png)

> With a partner discuss what this program is doing - what is happening on each line?  What is printed to the console when the program is run, and why?

Admittedly, this is a somewhat silly example, but it illustrates an important programming problem.  We often need to re-use the same piece of information over and over again throughout out our application (as in the need for "Megan McMahon" in three different places).  And/Or, we need to use information that might change periodically (as in a person's job title).  It would be time consuming and allows for more data-entry errors. **Variables** give us a way to put a label on a piece of information, and then use that label throughout our program.  That way, if we need to update the information, we only have to make the change in one place.  For example, if we want to change `"Megan McMahon"` to `"Megan"`, we only need to change the value on line 7 and we will see the change throughout our program.

![Screenshot showing variable values changed](/Mod1/Images/Week1/VariableAssignment2.png)

## Declaration and Assignment
<!-- Rather than having this written out in a large block of text, I wonder if breaking things out into smaller steps/recipes helps make processes more clear? ✅-->
When creating a variable, we need to think about two things: 

1) Declaring the variable
    * We need to tell our program to set aside some memory (a spot where the information will live while the program is running).
2) Assigning a value to it 
    * We need to indicate precisely *what* information should be stored.

These two operations can be performed separately, or at the same time.

<!-- Similar thought on the below, are there ways we can use formatting to our advantage to make the content easier to digest? ✅ --> 
**2 Step Declaration and Assignment**

![Exaple of variable declaration and assignment](/Mod1/Images/Week1/2StepDeclarationAndAssignment.png)

**1 Step Declaration and Assignment**
![Example of combined declaration and assignment](/Mod1/Images/Week1/1StepDeclarationAndAssigment.png)

There is no limit to the number of times we can assign a new value to a variable.

```c#
int score = 0;
score = 1;
score = 11;
```

> Time to create your own variables!  Create at least 5 new variables, give them values, and print those variables to the console with `Console.WriteLine(variableName)`.  Be creative with your variable names; there are rules for what you can name a variable - see if you can break those rules!

# Datatypes

We've played around with some text, but that's not the only type of data we will work with.

> Other than text, what other datatypes can you imagine?

Any piece of information can be grouped into one of three categories:
* Text
* Number
* Bool

Let's look at some examples of each category and the **datatypes** that make up those categories.

------------------------

## Text
### String

A **string** is any combination of characters surrounded by double quotes `""`
<!-- Thoughts on making these variable names more semantic/less contrived? Even something like userInput or badJoke or phoneNumber ✅-->
```c#
string bookReview = "This book had excellent character development, but a predictable plot. 2 stars";
string badJoke = "32 horses walk into a bar";
string minutesInYear = "525600";
```

### Char

A **char** is a single alpha character surounded by single quotes `''`
<!-- Is this place the time to give some explanation as to why/when a char will be used? Is there a better naming convention for these variables rather than a or b? ✅-->

```c#
char letter = 'z';
```

You may not often see a `char` variable declared, but it is an important datatype to be aware of when working with strings.  There will be times when you need to know if a string contains a certain letter; in those cases, we will use a `char` to help determine that.

---------------------------
## Numbers
### Int

**Int**s are whole numbers.  the **int** datatype can hold 4 bytes of data (numbers from -2,147,483,648 to 2,147,483,647)

```c#
int number = 525600;
int age = 45;
int year = 2022;
```

### Long

There may be some cases when you need to store a number that is larger than 2.1 Billion.  For these situations, you can use **long** instead of int.

```c#
long anUncommonlyLargeNumber = 3462790410255L
```

Note: When assigning a long, you need to append the number with `L`!

### Float

**Float**s are fractional numbers (numbers with a decimal point).  Floats can hold 4 bytes of data.
```c#
float notQuitePi = 3.14F;
float price = 2.99F;
```

Similar to a long number, when assigning a float, you need to append the number with `F`!

### Double

**Double** is a fractional number that is up to 8 bytes of data.  

```c#
double notQuitePi = 3.14D;
double price = 2.99D;
```

## Choosing a Number Type

With so many different numerical datatypes, how do we know which one to choose?  It really depends on what we want to do with the numbers we are storing.  You should consider both the size of the number (how much memory will it take) and what operations you might perform with it (how much math precision will you need?).  Let's explore that second point with the following code example:


```c#
class Program {
  public static void Main (string[] args) {
    int num1 = 10;
    int num2 = 3;
    Console.WriteLine("int 10 divided by 3 is: " + num1 / num2);

    float num3 = 10.0F;
    float num4 = 3.0F;
    Console.WriteLine("float 10.0 divided by 3.0 is: " + num3 / num4);

    double num5 = 10.0D;
    double num6 = 3.0D;
    Console.WriteLine("double 10.0 divided by 3.0 is: " + num5 / num6);
  }
}
```

> With a partner, discuss what you think the output of each of these operations will be.  Then, run this code in a replit project and see if your assumptions were correct!.

**Instructor Note: run a discussion around the importance of math precision**

-----------------------
## Bool

A **bool** (also referred to as boolean), can be one of two values: true or false.
<!-- Similar thought on variable naming here - could we be more precise with a variable name that might actually be used like, loggedIn or hatesCoffee - I wonder if assinging isTrue = true makes things murkier? ✅-->
```c#
bool loggedIn = true;
bool hatesCoffee = false;
```

---------------------------------

# More String Things!
## Properties and Methods

Strings are special datatypes in c# because they are actually **objects**.  We will discuss objects more later, but for now, we can say that objects have special abilities; not only do strings represent information, but they can also tell you things about that information.  Take a look at the code below:

![Code snippet showing the string property Length and Method ToUpper()](/Mod1/Images/Week1/StringPropertiesAndMethods.png)

Strings have a **property** of Length which returns the number of characters in that string.  Strings also have **methods**, one of which is ToUpper(), which returns an all-caps version of that string.

<!-- It might be worth while to have students come up with their own definition of what a method is. It could allow them an opportunity to start making connections to things they already know - "A method is kind of like a special ability that a video game character has?" ✅-->

> With a partner:
>*  take a look at the [Microsoft C# String Documentation](https://docs.microsoft.com/en-us/dotnet/api/system.string.contains?view=net-6.0).  Write down two more **methods** that you can use on strings.
>* Come up with your own definitions of **property** and **method**. 

# Casting

** Instructor Note ** In this section, the idea of implicit vs explicit may be confusing.  A discussion of what these two terms mean would be good.  You could use student's knowledge as an example: they inplicitly (instuctually) know how to breath and blink; but they had to be taught (explicitly) how to read and write.

Occasionally, you need to change a piece of data from one datatype to another.  This is most common when getting data from a user.

<!-- Implicitly probably needs to be defined here to be more clear for our students. not sure everyone will know what that word means ✅-->
Casting can be done implicitly (it happens automatically, without any specific instructions from us):

```c#
int myInt = 9;
double myDouble = myInt;       // Automatic casting: int to double

Console.WriteLine(myInt);      // Outputs 9
Console.WriteLine(myDouble);   // Outputs 9
```

<!-- Same thought with defining explictly, or at least explained in a different way ✅ -->

Or, Explicitly (we have to give specific instructions on how the casting should be performed):

```c#
double myDouble = 9.78;
int myInt = (int) myDouble;    // Manual casting: double to int

Console.WriteLine(myDouble);   // Outputs 9.78
Console.WriteLine(myInt);      // Outputs 9
```

It is common to cast explicitly by using **Type Conversion Methods**.  We often do this when receiving user input:

```c#
string userInput = "45";
int age = Convert.ToInt32(userInput);
```

Casting is done _implicitly_ when moving from smaller to larger datatypes. You must _explicitly_ cast from larger to smaller datatypes.

For more information, check out this resource from [w3schools](https://www.w3schools.com/cs/cs_type_casting.php)

# Using `var`

So far, we have always indicated what datatype a variable will have when we create it.  This is a common practice, and something you will see out in the world often; but it is not the only way!  If you are going to declare and assign a variable in one go, you can use the keyword `var` instead of indicating a datatype. 

Fork [this repl](https://replit.com/@launch-team/M1W1-VariablesLesson2#main.cs) and review the following code.

```c#
var hello = "Hello World";
var myNum = 33;

Console.WriteLine("the variable hello has a value of: " + hello + " and is of type: " + hello.GetType());
Console.WriteLine("the variable myNum has a value of: " + myNum + " and is of type: " + myNum.GetType());

hello = "Hello Universe";
myNum = 4;

Console.WriteLine("the variable hello has a value of: " + hello + " and is of type: " + hello.GetType());
Console.WriteLine("the variable myNum has a value of: " + myNum + " and is of type: " + myNum.GetType());
```

We can see that our program is smart enough to know that when we assign a string value to `hello` that variable can hold a string.  It starts as "Hello World", but we can re-assign it to any string.  Similarly, we can reassign `myNum` to any integer.

What happens if you try to reassign myNum to a float? 

It won't work because at the point the variable was declared, the program recognized that variable as holding an integer - we can not make it take a different datatype.

# Check for Understanding

- Group the following items into each of their C# datatype (are there any that could be classified as more than one type?)
    > * horse
    > * 3
    > * run
    > * jump
    > * fourteen
    > * dog
    > * true
    > * rock
    > * apple
    > * 525600
    > * nothingness
    > * 3.14
- What datatype would the following statement return? `"I'm a little teapot".Length`
- How many bits of data can be stored in a float?
<!-- Should we provide a more concrete/specific example for students to practice casting with? ✅-->
- Try casting a string into one of the number datatypes.  Did it work? Why or why not? Can you cast that same string to a boolean?
