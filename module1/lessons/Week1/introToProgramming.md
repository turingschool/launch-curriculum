# Intro to Programming (How computers work!)

## Learning Goals
* Understand what makes something a computer
* Appreciate the importance of giving instructions
* Write a simple program

## Warm Up

> Create a list of devices or tools that you use regularly.  How many are computers?  What about these items make them computers?

# Computers

There are many objects that we interact with every day that are computers - laptops, cellphones, watches, tvs, video games consoles... the list goes on and on!  While all of these things may look and behave differently, they actually all have four very important similarities; the four tasks that make up the basis for any computer.

1. Input
1. Storage
1. Process
1. Output

![Diagram of the four tasks of a comptuer](/Mod1/Images/Week1/ComputerTasks.png)

All computers have some mechanism for taking input, storing that input as data, processing the data, and outputting the results.

> With a partner, discuss the input and output of one or more of the devices you indentified during the warm up.

## Input

Input is the information that we give to a computer.  We can give that information in a lot of different ways. On our laptops, we can use the keyboard, mouse, or maybe a touchscreen.  With a video game console, we might use a controller, or our own bodies.  Different computers can take in information differently, but all computers can receive input.

## Output

Just like input, the output for different computers will be specific to the type of computer it is.  A calculator will output numbers, a video game outputs a digital rendering.  And, the output of some computers might become the input for other computers (sneak peek: this is the basis of the internet!).

## Binary Data

Before we get too far into the storage and processing of information, we need to take a moment to understand the machinery that makes a computer work.  You may have heard that all computers work on 'ones and zeros' - this is true, but what does it mean?

Inside of all computers are a bunch of wires and circuits that carry all of the information needed to receive input, store information, process, and output results.  Wires carry electricity which is either flowing, or not flowing.  Circuits can change the state of a wire. 

![Diagram of a NOT circuit](/Mod1/Images/Week1/WireAndCircuit.png)

The electricity is either on or off.  So, the state of this wire can represent any data that has only two options: on/off, yes/no, true/false, 1/0.  This single wire is called a **bit** (it's just a little bit of information...).  This one wire can only have two possible pieces of information - 1 or 0.  How do we store more information?  With more wires!

**1 Wire:** `1` or `0`  (2 combinations)
**2 Wires:** `0|0` or `1|0` or `0|1` or `1|1` (4 combinations)
**3 Wires:** `0|0|0` or `0|0|1` or `0|1|0` or `0|1|1` or `1|0|0` or `1|0|1` or `1|1|0` or `1|1|1`  (8 combinations)

More bits, more combinations!

These combinations of binary values can be translated into all kinds of data!

A common unit of measurement in computing is a **byte**, which is made up of 8 bits.

To learn more, let's check out this video:

[![Link to 'How Computers Work' YouTube Video](/Mod1/Images/Week1/HowComputersWorkYouTube.png)](https://www.youtube.com/watch?v=ewokFOSxabs)

<!-- This might be a good place to add a quick CFU from the video - what is one or two things we want to reinforce with students from watching this? ✅-->

> With a partner:
> * What are some types of data we can store using binary?
> * If you were going to build an audio speaker, what number of bits would you want your storage system to be based on?

** Instructor Note ** We want students to understand that even though computers operate on ones and zeros (seemingly simple), we can add as much complexity as we want because computers operate on a high enough bit consumption.

## Storage and Processing

The storage and processing of information works on many of these wires and circuits, typically organized into specialized circuit boards.  Some circuit boards are for storage, others for adding numbers, others for creating images, and all of the other things that computers can do.  

For a computer like a laptop that has to perform many different tasks, we need a very specialized circuit board called a **CPU (Central Processing Unit)**.  The CPU is responsible for giving instructions to different circuits to perform a more complex task. **CAN WE ADD AN COMPARISON TO SOMETHING ELSE HERE - LIKE THE CPU IS A BRAIN? OR HAVE STUDENTS MAKE A COMPARISON HERE?**

All these wires and circuits are referred to as **hardware**.  They are the physical tools that make up your computer.

> Discuss with a partner: Based on what you know so far, what happens to the hardware of a computer when you download an app to your phone or computer?  Does downloading that app change your device?

When we download a new program or application, we are not changing the physical characteristics of our computer; but we *are* adding information and instructions.  These added programs are referred to as **software**, and they give specific instructions to the CPUs through an **Operating System (OS)**.  CPUs understand **machine language**; it is the job of an OS to translate instructions so that the CPUs can complete the correct tasks, in the correct order. 

![Diagram of Operating System Interaction](/Mod1/Images/Week1/OSLayer.png)

Thanks to the separation from software to the wires and circuits at the lowest level of computing, we no longer have to write programs in binary.  Because of operating systems and even higher level 'translators', we can use languages that are much easier for humans to read, debug, and build.

# Programming

As programmers, we build the software and applications that sit between the human user and the computer.  We write code in a language that is easier for us as humans/developers to understand.  Then that code gets **compiled** into a language that our computer (specifically our operating system), can understand.

There are ALOT of languages that we can choose from when we write code.  We are going to be using a language called C# (c-sharp).

To get a feel for how this works, let's jump right in to creating our first program!

<!-- this below paragraph feels like good context for th -->
We are going to use a site called [replit](https://replit.com/) for this exploration.  If this is your first time using replit, you will need to sign up (its free!).  If you have used this site before, you can go ahead and sign in.  

In programming, a REPL stands for Read-Evaluate-Print Loop.  So a REPL takes input, stores/processes that input, and then outputs the result, and then loops back ready to take additional input - sound familiar?  A REPL is a computer! Replit (the site) is a place where you can write and store small programs; you can also share programs that you have written with other people.

Once you are signed in to replit, **_fork_** [this project](https://replit.com/@launch-team/HelloWorld#main.cs) so that you have your own copy.  Read through the information in the center pane, and then click the green 'Run' button.  

![Image of REPLit project](/Mod1/Images/Week1/REPLitRun.png)

Replit takes a few seconds to compile (translate) your code into computer language (remember those ones and zeros?), then executes and prints the output.

Take a few minutes to play around with the code - see if you can make the output say something different, add more lines of output.  Don't be afraid to break things!  

# Check for Understanding
- In your own words, what is programming?
- For your REPLit project, Diagram the flow of information through the computer.
- Describe how a calculator is a computer.
- What is the basic language of computers? Do you need to know this language in order to be a developer? Why or why not?
- What is the relationship between bits and bytes?
