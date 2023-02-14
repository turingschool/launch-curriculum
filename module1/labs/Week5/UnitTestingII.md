## Lab Objectives
* Practice writing tests for existing classes
* Reinforce the importance of the Arrange testing step

** Instructor Note **  Before the lab, prepare groups of 2/3 students and post them in slack.  Plan to bring the groups back together about halfway through to review the tests for the existing classes.  Send groups back out for 10 minutes to brainstorm on an additional class to write, and bring them back together to share out ideas.

## Practice

In small groups you are going to be writing tests and adding some functionality for a [Record Label Inventory System](https://github.com/turingschool-examples/RecordLabel).  In groups, complete the following:

1. Fork and Clone [this starter repo](https://github.com/turingschool-examples/RecordLabel).  Each person should fork and clone - while you are working collaboratively, we want everyone to stretch those coding muscles!
2. Spend 10-15 minutes reviewing the existing code to become familiar with the existing functionality - don't hesitate to reach out to your instructors with questions.
3. Identify what methods need tests, and determine if each method is a command or query method.
3. Write tests for the method you identified in the previous step.

<!-- Do  you think it would be helpful before students actually write some tests is to have a step where they just identify a) what to test and b) is it a command or query test? I think that way if we have students who can't even do that first step, we know exactly where we need to work with them on. ✅-->

**Be ready to share out the tests that you have written!**

4. After you have written tests fo all of the existing methods, take another look at the program and identify one additional class that could improve the re-usability and extendability (the ease or difficulty of adding features) of the code. To help you think through this, you can start by answering the following questions:
    * Is there any code that is repeated often?
    * What if we want to track more information about songs, like length or genre?
    * Is there additional information that would be useful about an album?
There is no "right" class to build - there are a lot of ways we could improve this code.  The important thing to focus on is the idea generation!
5. Implement the class that you decided on, and make sure that all of its methods are tested!  This will require you to change the code in `Program.cs` to maintain the functionality of the application; that's ok!  Refactoring often requires small tweaks to how the classes and methods are used in the application.




