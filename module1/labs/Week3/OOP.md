---
layout: page
title:  Object Oriented Programming Lab
---

## Lab Objectives
* Practice class brainstorming
* Explore how multiple class definitions can work together

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Before the lab, create groups of 2/3 students and post those in slack.</p>
</aside>

## Practice

In small groups, we are going to continue to build on the idea of a dog sitting service that we started talking about in today's [OOP lesson](/module1/lessons/Week3/OOP)

Let's imagine that you have been tasked with creating a program that will help `North Denver Dog Sitters` manage their business.  This dog sitting service has 5 dog sitters, and each of those sitters can take on 3 dogs. The dog sitting service needs to be able to assign specific dogs to one sitter.

With your group, brainstorm the classes that would exist in this program.  Try to come up with at least **3** classes.  Include the properties and methods that each class will need to have.

**Keep an eye on Slack** We will be coming together to highlight some of your ideas - be ready to share out!

** Instructor Note ** After highlighting student ideas, send a link to [this starter repo](https://github.com/memcmahon/PetSitter) for the next part of the lab - students will stay in their groups.  Let students know that there is a quick exploration that they should do BEFORE starting on this repo.

## Preparation

In your group, take a look at the code snippet below, and answer the following questions:

```c#
static DateTime CreateDate(int day, int month, int year)
{
    return new DateTime(year, month, day);
}

var birthdate = CreateDate(13, 1, 2000);
```
* What type of object is `birthdate`? How do you know?
* If we replaced the last line with `var birthdate = CreateDate(12, "February", 2000);`, would the method still work? Why, or why not?

Your instructor has posted a starter repo in slack for the next part of this lab.  Clone that starter repo, and open it in Visual Studio.

In the `Program.cs` file, there is some code that should be able to be executed, but currently is not (you should see a bunch of red squigglies).  In your group, create the classes and method signatures in those classes that will clear the red squiggles.  This exercise is intended to get you thinking about what type of object is being used for arguments, and what type of object is being returned from a method or property.

You do NOT need to implement full method definitions; you can rely only on the method signature.  Any method that you create, will follow this structure:

```c#
public void MethodName(object argumentName) // this is the method signature
{
    // You will only be creating methods that do not return anything, so you can leave this area blank!
}
```

**Keep an eye on Slack** We will be coming together to share your implementations!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>We don't need to go into too much detail on the exact implementation as this is something we will be covering in our object interaction lesson.  But, we do want to reiterate that the *type* of object is indicated for every argument and any method return value - and point out that the same is true for objects that are instances of classes that _we_ have created.</p>
</aside>