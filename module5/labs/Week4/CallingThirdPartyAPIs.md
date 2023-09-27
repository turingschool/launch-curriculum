---
layout: page
title: Calling Third Party APIs Lab
---

### Overview
For today's lab you will be creating a form that when submitted will create an issue on one of your Github Repos. This will require you to make a POST request and use the Github Issues API. [Here](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#create-an-issue) is the API documentation you will need.

Fork and Clone [this](https://github.com/turingschool-examples/IssueSubmitter) starter code. You will see a form has already been created that calls a controller action. You're responsible for filling in the TODOs in the GitHubService and GitHubController to get the form working. 

<aside class="instructor-notes" markdown="1">
<p><strong>Instructor Note</strong><br>
There is a branch called  zf-fully-working that has all the necessary code to get this working minus the personal access token.</p>
</aside>
You will be working in traditional driver/navigator pair programming for this lab.

### Set-Up

#### Access Token
The Github API requires an API Personal Access Token to create issues.

To generate a token, while logged in to GitHub visit [https://github.com/settings/tokens](https://github.com/settings/tokens). 

Generate a new token and make sure to give it `repo` access.

![Personal Access Token](/assets/images/module5/week4/PersonalAccessToken.png)

Copy your generated token, you will need it to make your POST requests in postman or from an application. 

**DO NOT PUSH TO GITHUB IF YOUR ACCESS TOKEN IS HARDCODED**
If you accidentally do, reach out to an instructor who will help you delete that token so it doesn't work anymore.

#### Enabling Issues

You will use the token and repo from one person in the pair. That person can pick any repo that they own to use, but they need to enable issues.

To enable Issues for a repo, go to `Setting` and then check the box next to `Issues`. You should now see an `Issues` tab next to `Code`.

![Enabling Issues](/assets/images/module5/week4/EnablingIssues.png)

### Tips

* I recommend that you start by trying to make the POST request in Postman
* You will probably need to add the `UserAgent` header in addition to the Bearer authorization token.

### Hungry For More

If you get your form working, continue on this extra challenge, or one of your own.

* Hardcoding your Personal Access Token is very bad practice, can you figure out how to make this more private so it won't be committed to github?