---
layout:     page
title:      Git for Pairs
---

## Learning Goals
  * Outline a workflow for collaborating on a single repository
  * Identify and resolve merge conflicts

## Vocabulary
  * Pull Request (PR)
  * Clone repo
  * Fork repo

## Review
Let's go over the following Git terms you reviewed in preparation for today's lesson:

* Git
* Github
* Local Repository
* Remote Repository
* Add
* Commit
* Push
* Branch

## Paired Process
In this scenario, a developer (we'll call them **Player 1**) is creating a repository about the 50 U.S. states. Player 1 recruits another developer (let's call them **Player 2**) to assist.

> 1. P1: [Create new local repo](https://www.loom.com/share/71a517ddc5f94a1b8c8f32960e44e6cc)
> 1. P1: [Add collaborator in Github](https://www.loom.com/share/81b90d19934e4be1ba630124cf0fdaa7)
> 1. P1: [Create new branch and Pull Request](https://www.loom.com/share/a216eda4c9fa4a0d881528ef8e5458ff)


| Player 1 | Player 2 |
| -------- | -------- |
| Create new local repo: `US_States`<br>Add `all_states.txt` file<br>Add title to `all_states.txt` file<br>Add, Commit, Push to GitHub | |
| Add collaborator in GitHub | |
| Checkout new branch: `north_carolina`<br>Add `north_carolina.txt` file<br>Add "North Carolina" to `all_states.txt` file<br>Add, Commit, Push to GitHub

### Adding collaborators

We've added a new step to the process: adding a collaborator. Player 1 has invited Player 2 to contribute to the repo. There are several options when adding a collaborator; in this case, we want both developers to have equal access and rights to the repository. 

> 4. P2: [Accept GitHub invitation](https://www.loom.com/share/f0e4dce877054420877fcd51ddfad6ea)

| Player 1 | Player 2 |
| -------- | -------- |
| | Accept invitation on GitHub<br>Clone `US_States` repo to local
| | Checkout new branch: `colorado`<br>Add `colorado.txt` file<br>Add "Colorado" to `all_states.txt` file<br>Add, Commit, Push to GitHub

### Cloning a repository

Player 2 has performed two important tasks. First, they have cloned the repo created by Player 1. To clone a repository means to copy a remote Github repository to your local computer. You interact with that repository by pushing and pulling branches. Therefore, when you are working with teammates, i.e. in a group project, you all need to clone the same repository so that you are all working in the same code base.

### Pull Request

Second, Player 2 has created content in a separate branch, but it not yet merged with the `main` branch. We've discussed how to merge branches, but we want one additional step to ensure that both developers agree on the content.

To that end, Player 2 will create a Pull Request (PR). A **Pull Request** informs all collaborators of the changes made to a branch and the desire to merge this branch with another branch (usually the `main` branch).

| Player 1 | Player 2 |
| -------- | -------- |
| Review and comment on Player 2's PR<br>Merge Pull Request | |

Player 1 can review, comment, and merge the Pull Request. Player 2 can also add commits to the PR. There can be several rounds of reviews, comments, and additional commits before it is merged.

> 6. P1: [Review Pull Request and Resolve Merge Conflict](https://www.loom.com/share/7f89993c4b4b41b38e204863242ed03d)

| Player 1 | Player 2 |
| -------- | -------- |
| Still on `north_carolina` branch:<br> - Merge in `main` branch<br> - Fix Merge Conflict<br> - Add, Commit, Push to GitHub | |
| Create Pull Request on GitHub | |

There's **Good News** and _Bad News_. The **Good News** is that Player 2's content has been successfully merged into the shared repo. The _Bad News_ is that when we integrate those changes into our current branch, we encounter a pesky Merge Conflict. But there's more **Good News**: fixing a Merge Conflict when working with a collaborator is no more difficult than working solo.

Once Player 1 fixes the Merge Conflict, they will update their branch and author a Pull Request of their own.

### Merge and Update Main Branch

> 7. P1: [Fetch and Pull `main` branch](https://www.loom.com/share/09cbbc6bc2f348a89b944ebd6e0b7cf2)

| Player 1 | Player 2 |
| -------- | -------- |
| | Review and comment on Player 1's PR<br>Merge Pull Request

Let's answer a question before it's asked: **YES**, even though Player 1 owns this repo, they also make pull requests so that their changes are reviewed by the other collaborators. And **YES**, the process for Player 2 is the same.

> 8. P1 & P2: Sync local repo

| Player 1 | Player 2 |
| -------- | -------- |
| Checkout `main` branch<br>Pull `main` branch | |
| | Checkout `main` branch<br>Pull `main` branch |

The changes from both Player 1 and Player 2 have been merged. However, neither developer have ALL of the changes on their own local machine. Let's fix that.

Player 1 will check out their `main` branch, then pull down the `main` branch from GitHub. Then Player 2 will do the same thing. Or maybe Player 2 does it first, then Player 1. Maybe they do it at the same time.

### The Reality

For the sake of education, this process was presented as a linear process: Player 1 does something while Player 2 waits. Then Player 2 does something while Player 1 waits. It's like a relay race.

However, that's not usually the case. 

| Player 1 | Player 2 |
| -------- | -------- |
| Create new local repo: `US_States`<br>Add `all_states.txt` file<br>Add title to `all_states.txt` file<br>Add, Commit, Push to GitHub | |
| Add collaborator in GitHub<br>&nbsp;| Accept invitation on GitHub<br>Clone `US_States` repo to local
| Checkout new branch: `colorado`<br>Add `colorado.txt` file<br>Add "Colorado" to `all_states.txt` file<br>Add, Commit, Push to GitHub<br>&nbsp; | Checkout new branch: `north_carolina`<br>Add `north_carolina.txt` file<br>Add "North Carolina" to `all_states.txt` file<br>Add, Commit, Push<br>Create PR on GitHub |
| Review and comment on Player 2's PR<br>Merge Pull Request<br>Pull `main` branch<br> Fix Merge Conflict<br>Add, Commit, Push to GitHub<br>Create PR on GitHub | |
| | Review and comment on P1's PR<br>Merge Pull Request |
| Checkout `main` branch<br>Pull `main` branch | Checkout `main` branch<br>Pull `main` branch |

Once Player 1 invites Player 2 as a collaborator, much of the process happens simultaneously. There's little reason to "wait" for other developers to finish before working on a new task. In fact, either developer could move onto a new branch (perhaps `virginia` or `new_york`) while the other continues working. Making pull requests and fixing conflicts along the way is par for the course.

### Rules of Engagement

> 9. [Git Pairing Tips](https://www.loom.com/share/0dcb9eb1cc4945408a749e20739fcb58)

You will practice this often when working in pairs and groups throughout your time at Turing and in your new career. There are a few basic rules you should follow:
  1. **_NEVER_** work directly on the `main` branch. **NEVER** *EVER* *EVER* **_EVER_**.
  1. Always checkout a new or existing branch. If there is an open Pull Request and you need to add or change something related to that content, checkout the existing branch. Otherwise, create/checkout a new branch.
  1. A good habit is to prefix the branch you're working on with your initials: e.g. `rt-north-carolina` , `zf-colorado`. This easily informs all collaborators of the branch's author.
  1. Another good habit: if you are working with collaborators, try to avoid approving and merging your own Pull Requests. Another developer should perform those tasks. In a team of two, the non-author of the PR should approve and merge it. With a team of three or more, it's not uncommon that another developer will approve the PR, and a _third_ developer will merge it.
  1. Did we mention to never work on the `main` branch?
