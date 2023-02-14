# Week 2 Checks for Understanding

With your group, answer each question below.  Spend some time discussing each question _without_ using any resources; use your own recall of the topics covered this week.  If, after you have discussed without resources, your group needs assistance, use the raise hand feature and an instructor will come help!

1. Define the following terms:
    * Loop
    * Iteration
    * Infinite Loop
1. Annotate the code below.  What is happening on each line?
    ```c#
    string userInput = "";
    int index = 0;

    while (userInput != "stop" && index < 101)
    {
        Console.WriteLine($"Current Count is: {index}");
        index++;
        Console.WriteLine("Enter to continue counting, 'stop' to exit");
        userInput = Console.Readline();
    }

    if (index > 100)
    {
        Console.WriteLine("I don't know any more numbers");
    }
    else
    {
        Console.WriteLine($"Thanks for letting me count to {index}");
    }
    ```
1. How many **code blocks** are in the example above?
1. Write a **for loop** that will ask a user for 10 items to put on a wish list.  Store these items in a string called `wishList`.
1. Visual Studio is an IDE.  In your own words, what is an IDE?
1. Spend 1 minute googling to see if you can find any other IDEs. How many others did you find?
1. Imagine you are chatting with your 10 year old niece about what you are learning at Turing.  How would you explain to them what a **bug** is?
1. What is a **breakpoint**, and why would we use one?
1. The code below has a bug; where would you put a breakpoint to start debugging what might be happening (feel free to recreate this code in Visual Studio and try running it 🙂)

```
// This program should print an abbreviated version of a kids song to help them learn the numbers 1 to 20.  The song should display every number, and never go above 20.

1  Console.Write("First comes: ");
2  
3  for (var i = 0; i < 20; i++)
4  {
5      Console.WriteLine(i);
6      Console.Write("then comes: ");
7  }
8  Console.WriteLine("And that's how you count to 20!");
9
```
 -->

1. Imagine you are explaining an Array or List to one of your non-developer friends; write out an explanation of what **index** is - how does it apply to lists/arrays, and why is it useful?

1. How are Arrays and Lists similar?  How are they different?

1. Create an Array that will hold your top 8 best friends.

1. Create a List that will hold your favorite movies.

1. For the two collections above, why is it appropriate for best friends to be an Array, and for favorite movies to be a List?

1. Create a Dictionary that organizes an artist's discography - you could use the data below as a starting point:
```
Jimmy Buffett: abbreviated discography

Son of a Son of a Sailor:
    - Cheeseburger in Paradise
    - Manana
    - Cowboy in the Jungle
Christmas Island:
    - Run Rudolph Run
    - Mele Kalikimaka
    - Ho Ho Ho and a Bottle of Rum
Banana Wind:
    - Only Time Will Tell
    - School Boy Heart
    - Desdamona's Building a Rocket Ship
```

Fork [this REPL](https://replit.com/@launch-team/M1W2-CFUReview1) 
1. Annotate the code. What is happening on each line?
1. How many **code blocks** are in the example above?

Fork [this other REPL](https://replit.com/@launch-team/M1W2-CFUReview2) to complete the following task.
* Write a **for loop** that will ask a user for 5 items to put on a wish list.  Store these items in a string called `wishList`.
