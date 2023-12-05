---
layout: page
title: Linked Lists - CS Topic - Data Structure
---

## Introduction

Today's lesson on the linked list data structure comes to you in three parts. 

**Part 1**: Independent research

**Part 2**: Class walkthrough of key operations and time complexity

**Part 3**: Diving into a C# implementation of a linked list

### Independent Learning
Start by taking 20 minutes to independently research the Linked List Data Structure.

I recommend that you start by reading [this](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d) article.

As you're researching, look for the answers to the following questions.

1. What does it mean for a data structure to be linear?
2. What is the difference between a linked list and an array? What about with regards to how they are stored in memory?
3. In the code implementation, you will have a Node class and a LinkedList class. What properties do you think these two classes will have?

### Group Walk Through
Let's walk through a couple of some key operations you might do with a linked list. After we walk through the operation a couple of times, I will call on someone to try and explain the big O time complexity of this operation.

<aside class="instructor-notes" markdown="1">
<p><strong>Instructor Note</strong><br>
I like to use paper cards to walk through the linked list, but you can also draw it using the zoom whiteboard. I like to walk through the situation first mostly on my own, and then do the operation again calling on students to tell me what to do next. 

I recommend at least doing InsertAtBeginning, InsertAtEnd. Then if time, you could do DeleteAtBeginning or search.

I'm thinking this section will also take 20 minutes, and then you will have a 5 minute pom.</p>
</aside>

### Code Implementation

You will have 15 minutes to work on [this code](https://replit.com/@Zoe-Farrell/LinkedLists). 

The InsertAtBeginning method is working, but to get the InsertAtEnd method working you will need to fill in some code. Complete the TODO by replacing the underlines with code.

<section class="answer" markdown="1">
### Finished InsertAtEnd

<img src="/assets/images/module6/week2/finishedInsertAtEnd.png" style="max-width: 50%;" >
</section>

Have one partner share their screen, and work together to get InsertAtEnd working!

If you have extra time, you can take a look at [this REPL](https://replit.com/@Zoe-Farrell/LinkedListsMoreMethods) that includes more common linked list methods and try to determine the BigO of each operation. You can check your work with the table in the `Summary` section on [this](https://www.codingninjas.com/studio/library/time-and-space-complexity-of-linear-data-structures) page.