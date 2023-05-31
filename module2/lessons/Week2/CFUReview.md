---
layout: page
title: Week 2 Check for Understanding
---

With your group, answer each question below.  Spend some time discussing each question _without_ using any resources; use your own recall of the topics covered this week.  If, after you have discussed without resources, your group needs assistance, use the raise hand feature and an instructor will come help!

1. What could be some of the downsides of using TDD?
1. True or False: In TDD you must write all of the tests for your feature first before doing any implementation. Explain your answer.
1. Your teammate Omar is building using TDD and has asked you to give feedback on their test. Something important is missing, what's missing and why is it important?

```c#
public void IsCreatedWithCorrectAttributes()
{
    Customer customer = new Customer("Some Person", "123 A street, Bellingham, WA 98226");
    Order order = new Order(customer);
}

```

4. What is the difference between unit tests and integration tests?
1. Which do you think it makes sense to write first, unit tests or integration tests?
1. Here is the workflow Player 1 used during the Git for Pairs lab. How do you expect this workflow would change if you were working on a team of 4 instead of a team of 2? What extra difficulties might you run into when working with git in a team of 4 instead of a team of 2?

Player 1 has the following responsibilies:
  * Create a repository titled `FavoriteRestaurants`.
  * Add a file that holds a list of everyone's favorite restaurant.
  * Commit and push the main branch to Github.
  * Add Player 2 as a collaborator.
  * Create a new branch with your initials followed by the name (or abbreviation) of your favorite restaurant (e.g. `rt/red_lobster`).
  * In your branch, add a separate file with information on your favorite restaurant: name, location, why it is your favorite restaurant, your favorite dish, etc.
  * Add your name and the name of your favorite restaurant to the list.
  * Commit and push your branch to Github.
  * Make a PR for your branch.
  * Review and merge the PR from Player 2. Fix any merge conflicts.
  * After both Pull Requests have been merged, pull the `main` branch from Github.

7. When working with Git in pairs, is it good practice to make commits on the main branch?
1. Imagine that you're working with your partner Yavor on a project. You're both Github collaborators on the project and you have each cloned down the repository from Github to your personal computers and are working in your local repositories. If Yavor creates a branch and adds some commits you won't be able to see his code. Why? What would he need to do for you to see what he's working on?