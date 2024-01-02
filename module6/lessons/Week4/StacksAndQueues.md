---
layout: page
title: Stacks and Queues - CS Topic - Data Structure
---

## Introduction

Today's lesson on Stacks and Queues will be a mixture of independent research, class walkthrough and discussion, and diving into code implementations.

### Independent Learning
Start by taking 30 minutes to independently research the Stack and Queue Data Structures.

I recommend that you start by reading these two articles:
* [Stacks and Overflows](https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67#.3l76d12dq)
* [Difference between Stacks and Queues](https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/)

As you're researching, look for the answers to the following questions.

1. What are the key operations that can be done on a Stack, what about for a Queue?
1. What is similar between Stacks and Queues?
1. What is different between Stacks and Queues?
1. What are examples of Stacks and Queues "in the wild"?

Also, start thinking about how you would use a LinkedList or an Array to build a Stack or a Queue. We will dig more into implementation in the next section!

## Walkthroughs and Code
### Stacks

The Stack Data Structure can be implemented using either an Array or a Linked List. For today, we are going to implement a Stack using an Array and it will overflow if the Stack is larger than 10.

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    I'd start by doing a quick demo of push and pop with an actual stack of books. Then pop into pair breakout rooms to talk through the code and have students think through the BigO time complexity of these two operations. For Push it's O(1), for Pop it's O(1).</p>
</aside>


Fork [this](https://replit.com/@Zoe-Farrell/Stack-Array-Implementation) repl. With your partner read through the code. Try your best to understand what each line does and determine the Big O time complexity of the operations implemented.


Hungry for more? Try implementing the other key Stack methods: Peek, Size, and IsEmpty!

### Queues

The Queue Data Structure can be implemented using either an Array or a Linked List. For today, we are going to implement a Queue using a Linked List that keeps track of both the start and end of the list.

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    I'd start by doing a quick demo of enqueue and dequeue with stuffed animals. Then pop into pair breakout rooms to talk through the code and have students think through the BigO time complexity of these two operations. For Enqueue it's O(1), for Dequeue it's O(1).</p>
</aside>

Fork [this](https://replit.com/@Zoe-Farrell/Queue-List-Implementation) repl. With your partner read through the code. Try your best to understand what each line does and determine the Big O time complexity of the operations implemented.


Hungry for more? Try implementing the other key Queue methods: Peek, Size, and IsEmpty!



