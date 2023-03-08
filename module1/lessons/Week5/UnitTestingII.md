---
layout:     page
title:      Unit Testing II
---

## Learning Goals
* Define the stages of a test
* Recognize difference in testing command and query methods

## Warm Up

### The Three A's of a Test

As you have practiced writing tests over the last few days, you may have noticed some similarities or patterns emerging in the structure of your tests.  That is because all tests (good, effective, tests) will have three stages: **Arrange, Act, and Assert**.

When writing a test, we first need to **Arrange** the state of the objects to set things up for testing.  Because each test is run individually, you will likely see the same arrangement reset throughout a test suite.

![Image of a test with the first line highlighted - this is the Arrange step](/assets/images/module1/Week5/ArrangeTestStep.png)

After our test has been set up with the necessary arrangement, we then need to **Act** by executing the method that we are trying to test.

![Image of a test with the second line highlighted - the Act step](/assets/images/module1/Week5/ActTestStep.png)

Finally, we will verify that the method has worked by making an **Assertion** that will let us know if the method has worked in the way we intended.

![Image of a test with the third and final line highlighted - the Assertion step](/assets/images/module1/Week5/AssertTestStep.png)


> With a partner, review the tests below - identify the Arrange, Act, and Assert steps for each test. Be prepared to share your findings!

![](/assets/images/module1/Week5/TestsForAAANotation.png)

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>We want to make sure that students start to recognize that some tests may have a combined act/assert.</p>
</aside>

## Test Patterns for Different Method Types

Well written methods will have **one responsibility**, in other words, a method does one thing.  A method can either:
* Give us information
* Change some information

> With a partner, take a look at the class below.  For each method, determine if the method is giving us information or changing information.  Be prepared to share out, including *why* you decided a method was one or the other.

```c#
public class Student
{
    public string Name { get; }
    public List<string> _skills;

    public Student(string name)
    {
        Name = name;
        _skills = new List<string>();
    }

    public string AllSkills()
    {
        string skills = "";
        foreach (var skill in _skills)
        {
            skills += $" {skill}";
        }
        return skills;
    }

    public void Learn(string lesson)
    {
        _skills.Add(lesson);
    }
}
```

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>It would be helpful for students to identify that the presence of a return value (or not) can be an indicator of the method's purpose.  A good question for the group might be "Are there any key words that indicate one way or the other?"</p>
</aside>

These two categories of methods are sometimes referred to as **command** and **query**.  A command method changes the state of a program, and a query method gives us information about the state of a program.  Because these two types of methods are intended to do different things, their test structures will look different as well.  We have already been testing both command and query methods, but you may not yet have picked up on the two different test structures that verify a command or a query method.

> With a partner, on paper or in slack, write the tests that would verify the behavior of the methods `Learn()` and `AllSkills()` above.  You do not need to write the tests in a project, you can outline them in a notebook or slack - it doesn't have to be perfect code structure.  When we come back together, we will write the tests as a group - so be ready to share out your ideas!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>When you pull the group back together, go through writing each test step by step - Arrange, Act, Assert - by asking students to navigate while you drive.  Highlight that when testing a Command method, you often need to use other methods or even other objects to confirm that the effect of the method has taken place.</p>
</aside>

## Check for Understanding
* If a test is missing the first of the three AAA steps, which step is missing, and why will that be a problem?
* Imagine a coworker has asked you to help them refactor the class below.  Knowing what you do about SRP and Command/Query methods, write up an explanation of what refactors you think would be helpful, and why.

```c#
    public class Dog
    {
        public string Name { get; }
        public int Age { get; private set; }

        public Dog(string name, int age)
        {
            Name = name;
            Age = age; 
        }

        public string HaveBirthday()
        {
            Age += 1;

            return $"Happy Birthday! {Name} is now {Age} years old!";
        }
    }
```