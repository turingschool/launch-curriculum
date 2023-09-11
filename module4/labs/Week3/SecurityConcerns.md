---
layout: page
title: Security Concerns Lab
---

<section class='instructor-notes' markdown='1'>

Encourage students to reach out to each other during this lesson.  If they complete it, they will be almost there on implementing authorization; we don't need them to get through the whole thing, but it would be good to wrap up with a short discussion of how we would compare two digests (database value to user input).

</section>

## Implementing Security Measures

In the lesson today, we discussed concepts.  Now, we are going to put these concepts into practice! Open your MVC Message Logger application (the mod3 project).  Add the following features:

### Remove Connection Strings

Using either secrets management or environment variables, remove the database connection string from your application.

_Make sure that you run your application to make sure that it still works!!_

✅Write up an explanation of the steps you took to achieve this, and send it to your instructors!

### Hashing Data

Update your application to:

* Include a password on the user model
    * When a user is created, the password should be stored as a digest in the database
* Ask for a user's password when they try to log in
    * They should only be able to add new messages if they provide a matching password

You can use these user stories to help guide the implementation:

```
As a User
When I visit '/users/new'
Then I see a form to create a new user with a name, username, and password
```

```
As a User
When I Complete the form
Then I am redirected to the new user's page
  And I can create messages for that user
```

✅Send a screenshot of the controller action that creates a user to your instructors!

```
As a User
When I visit '/users'
  And I click on 'Log In'
Then I am taken to '/users/<username>/login'
```

```
As a User
When I visit 'users/<username>/login'
Then I see a form asking for a password

When I enter the password for that user
Then I am redirected to that user's page
  And I can create messages for that user
```

```
As a User
When I visit 'users/<username>/login'
Then I see a form asking for a password

When I enter an incorrect password for that user
Then I am redirected back to '/users'
```

✅Reach out to another member of the cohort for some code-review!

