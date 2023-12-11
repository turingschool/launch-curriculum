---
layout: page
title: Binary Trees - CS Topic - Data Structure
---

## Introduction

Today's lesson on the binary tree data structure comes to you in three parts. 

**Part 1**: Independent research

**Part 2**: Class walkthrough of key operations and time complexity

**Part 3**: Diving into a C# implementation of a binary tree

### Independent Learning
Start by taking 30 minutes to independently research the binary tree Data Structure.

I recommend that you start by reading these two articles:
* [How To Not Be Stumped By Trees](https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7)
* [Leaf It Up to Binary Trees](https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d)

As you're researching, look for the answers to the following questions.

1. What does it mean for a data structure to be non-linear?
2. What is the difference between depth and height?
3. How will inserting data into a binary tree differ from inserting data into a Linked List?

## Walkthroughs
### Binary Tree

Let's walk through what it looks like to store data in a binary tree.  We will focus primarily on inserting data, and traversing the tree to find specific data points.

<section class='instructor-notes' markdown='1'>

This part should be pretty quick, we just want to illustrate inserting nodes into a tree using the next-left node.  You can use this [this random word generator](https://randomwordgenerator.com/) to pull data.

We want students to see that a pure binary tree is not super useful because of how difficult it is to find data.  This should lead in to discussing a Binary Search Tree.

</section>

<section class='answer' markdown='1'>

### Key Takeaways

* A binary tree consists of nodes with up to two child nodes
* Without insert logic, finding data is a frustrating process

</section>


### Binary Search Tree

Now that we have seen an unstructured binary tree, let's take a look at how we can better use this data structure by using some logic when we insert data.  With a little bit of logic, we can create a Binary Search Tree.

<section class='instructor-notes' markdown='1'>

For this walkthrough, show at least insert, find, and delete.  We want students to see that a BST is great for storing data in a way that is easily searchable.

</section>

<section class='answer' markdown='1'>

### Key Takeaways
* We can use a sorting strategy to insert nodes in a strategic way.
* Finding data in a search tree is much easier!
* Binary Search Trees _can_ become unbalanced.

</section>

<section class='notes' markdown='1'>

### Binary Search Trees in the Wild
We use this data structure all the time in our daily lives.  Any time we are searching through ordered data, we naturally rely on the idea of a Binary Search Tree.  

Imagine I've handed you a physical copy of the Oxford English Dictionary and asked you to find the definition of `distortion`.  How would you find that definition?

You could approach the problem linearly; starting from the first word on the first page, you could look at each word until you come to `distortion`.

Or, you could approach the problem like a Binary Search Tree; you would split the dictionary somewhere near the middle, and decide which half to focus on based on the starting letters of the page you landed on.  If that page is a letter after 'd', you would repeat the process in the first half of the book (to the left), or if that page is a letter before 'd', you would repeat the process in the second half of the book (to the right).


</section>


## Choosing a Data Structure

<section class='call-to-action' markdown='1'>

In small groups, discuss which data structure you think is best: linked lists or binary search trees.  Think about the following questions:
* How easy or difficult is it to insert data?
* How easy or difficult is it to find data?
* How easy or difficult is it to delete data?

Be ready to share out!

</section>

<section class='instructor-notes' markdown='1'>

We want to make sure students understand that there are pros and cons to any data structure.  Inserting is efficient in Linked Lists, and in-efficient in BST.  Finding is efficient in BST, and in-efficient in Linked Lists.

</section>

## Code Implementation

When working with data structures like Linked Lists and Binary Search Trees, the most difficult hurdle is understanding what a node is, and how that node points to another node (or nodes!).  With that understanding, we can extrapolate from a linked list (where a node has only one pointer), to a binary structure (two pointers), to a [trie](https://en.wikipedia.org/wiki/Trie) (unlimited pointers 😱).

<section class='call-to-action' markdown='1'>

There are **many** examples of binary search tree implementations that exist on the web.  For an exit-ticket, find one example of a binary search tree implementation (in whatever language you would like).  Send a link to that implementation to your instructor with your reflections on the following:

* How does this implementation differ from a Linked List - especially when it comes to inserting new data?
* What is confusing about this implementation?

</section>



