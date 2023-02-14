## Lab Objectives
* Practice creating tests for class Properties and Methods.
* Introduce Code Refactoring.

** Instructor Note **  Before the lab, prepare groups of 2/3 students and post them in slack.  There will be 3 group discussions (one after each Practice section).

## Practice

To reinforce our testing lesson, you are going to implement tests for the [Library System](/Mod1/Labs/Week4/ClassInteraction.md) that we worked on earlier this week.  If you would like to use a starter project other than your own, you can clone [this repository](https://github.com/memcmahon/DenverLibrary).

**Keep an eye on Slack - we will be re-grouping frequently to discuss our progress**

### Create a Test Project and First Tests

In small groups, spend 20 minutes to create an xUnit test project, called `DenverLibrary.UnitTests`.

Write tests for the methods and properties of the `Book` class.  You should end up with at least **1** test.  

Be prepared to share your test(s).

** Instructor Note **  At this point, we want to try to identify any groups or individuals that are having trouble with the procedure of creating a test project.

### Create Tests for the Branch Class

Back in your small groups, spend 20 minutes writing tests for the `Branch` class.  Keep in mind that each class should have its own test file!

When finished, you should have a minimum of **3** new tests.  

Be prepared to share your tests, and how you determined what should be tested.

** Instructor Note **  During this check-in, we will want to discuss the necessity for creating some setup for certain tests.  For example, some of the Branch tests require some books to be created.

### Create Tests for the Library Class

Individually, spend 20 minutes writing tests for the `Library` class.  When finished you should have a minimum of **4** new tests.

Be prepared to share one or more of your tests, and how you decided what tests to write.

** Instructor Note ** While this should be an activity that builds on group work, we may see some students struggling to complete this on their own - we want to take note of those students for additional support.

<!-- I wonder if it might be useful for when we do these small checkins on the lesson to do some wholegroup work on "What should we test in ____ class" before students go off to writing tests? I think this can be one of the trickier concepts for a new programmer is just the hurdle of trying to figure out what you should even be looking at from a testing perspective -->

<!-- I am glad you have an instructor note around the testing setup for certain tests. I imagine many folks might get tripped up on this - do we have any setup work in the lesson itself? -->

<!-- Overall, I think this lesson + lab combo is probably the biggest/burliest we've had yet. However, this does follow our model of gradual release, so I'm inclined to let it ride and see how it goes. What are you thinking specifically for Unit Testing Pt 2 - is that more of the same/more proactice? Or different concepts that we are adding on? I just wonder about if we push refactoring/scope out if necessary to focus more on the testing in Week 5 if necessary. -->
## Preparation

As an introduction to our Refactoring lesson next week, take a few minutes to read this [blog post on Refactoring](https://www.bmc.com/blogs/code-refactoring-explained/).  This is meant to be an _introduction_, don't worry if not everything in the post makes total sense - there are some references to other code practices that we haven't touched on yet, but you will still get a good intro to Refactoring.

After reading the post, in your journal reflect on the following questions:
1. What is refactoring?
1. Why is refactoring necessary?
