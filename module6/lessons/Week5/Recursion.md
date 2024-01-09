---
layout: page
title: Recursive Functions
---

### Warmup

<section class='call-to-action' markdown='1'>

Imagine you have been given the following code challenge in an interview:

Build a function that takes in a string, and returns that string reversed.  EX: `input: "Megan", output: "nageM"`.  You must adhere to the following constraints:
* You may not use _any_ LINQ methods
* You may not use `for`, `foreach`, or `while`
* The function must work for strings of any length\

Spend 5 minutes brainstorming what this function might look like.

</section>

## Recursive Functions

Recursion is a technique for iterating over an operation by having a function (or method) call itself repeatedly until it arrives at a result.  In other words, recursion is a way to loop without using `while` or `for`!  Let's take a look at an example.

Let's say we want to countdown from a given number - the number will always be positive, but it could be * any * integer.  We could approach this in two ways: with loops, and with recursion:

```c#
public class Program
{
	public static void Main()
	{
		Console.WriteLine("Looping:");
		LoopingCountdown(20);
		Console.WriteLine("Recursive:");
		RecursiveCountdown(20);
	}
	
	static void LoopingCountdown(int num)
	{
		while (num > -1)
		{
			Console.WriteLine(num);
			num--;
		}
	}
	
	static void RecursiveCountdown(int num)
	{
		if (num == 0)
		{
			Console.WriteLine(num);
		}
		else
		{
			Console.WriteLine(num);
			RecursiveCountdown(num - 1);
		}
	}
}
```

<section class='instructor-notes' markdown='1'>

Make sure to identify the following characteristics of the method above - talk specifically about how the recursive instructions move us closer to the base case.

</section

This is a very simple example of recursion, but it does give us a chance to identify the key features of a recursive function.  Every recursive function must have these two pieces:
1. A **base case**: a terminating scenario that _does not use recursion_ to produce an answer
2. A **recursive case**: a set of instructions, moving closer towards the base case, that ends in a call to the same function

### Use Cases

As we said previously, recursion is another way of looping.  So, why do we even need to know this? Or, why is it a thing to be known? Couldn't we just rely on loops?

Recursion is typically used when an operation needs to be completed repeatedly, with different parameters.  It is most effective for solving problems around sorting, traversing nodes, and fractal math.  

Some things to consider when determining if you should use a recursive function:  
✅there is no need to keep track of state; there are no side effects _outside_ of the recursive function.  
✅optimizes traversal of non-linear datatypes.  
❌Execution contexts continue to get build on the call stack; with bigger datasets, you could run into `maximum call stack size being exceeded`  

## Functions and the Call Stack

**Stack Overflow** As developers, especially junior developers, when you see these words, you are probably imagining the website stackoverflow.com.  The inspiration for this website is a real concept - the **call stack**.

A **callstack** is at the heart of how programs are executed - it keeps track of the subroutines (methods, functions) that have started, but haven't yet finished.

Let's discuss what happens on the stack when we execute methods!

<section class='instructor-notes' markdown='1'>

Use the slides below to walkthrough what is happening on the stack.  Not _everything_ that is happening on the stack is specifically called out - I tried to include only the most necessary information.

</section>

<section class='answer' markdown='1'>

### Diagramming the Call Stack

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRFJ2pNfsOap3jgooinxMqFWbcKASjPv8b0TY_lHCh53vD3ts0DE_fGqQuJclIaWkctq-qfLtZjJ0r0/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

</section>

<section class='answer' markdown='1'>

### When Disaster Strikes

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTM6N3zr7xzZPws6wzoIvNLduMQwVMg-AItpcIRrNfqoAVoY8tA3ibd0bHMdCebh0bFAFQlhfEroY0B/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

</section>

<section class='answer' markdown='1'>

### Recursive Functions

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQTd07os2suundP21vi48fsSPO--NOzFnLHgMxgWODyvPEAVwCchApJLR10vQq3kK99OEmXmZGto_qL/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

</section>

## Exercises

The best way to start understanding recursion is to just try doing it!  Feel free to work through these problems in any language.

### Exercise 1

Reverse a string.

```js
// create a function which takes a string of characters and
// recursively calls itself to reverse the string

// e.g.

string reversedString = reverse('Ariel');

Console.WriteLine(reversedString); // leirA
```

### Exercise 2

Calculate a number to a specific power.

```c#
// create a function which takes a number and an exponent and
// recursively calls itself to calculate the product

// e.g.
int baseNum = 2;
int exponent = 4;
int product = Power(baseNum, exponent);  // 2 to the 4th power

Console.WriteLine(product);  // 16
```

### Exercise 3

In mathematics, the factorial of a non-negative integer is the product of all positive integers less than or equal to n. For example, the factorial of 5 is 120.

```
5 x 4 x 3 x 2 x 1 = 120
```

Write a recursive function that calculates the factorial of a number.

### Exercise 4

The Collatz conjecture applies to positive numbers and speculates that it is always possible to `get back to 1` if you follow these steps:

- If `n` is 1, stop.
- Otherwise, if `n` is even, repeate this process on `n/2`
- Otherise, if `n` is odd, repeat this process on `3n + 1`

Write a recursive function that calculates how many steps it takes to get to 1

n | collatz(n) |Steps
--- | :---: | --- 
2 | 1 | 2 -> 1 
3 | 7 | 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
4 | 2 | 4 -> 2 -> 1
5 | 5 | 5 -> 16 -> 8 -> 4 -> 2 -> 1
6 | 8 | 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

 
