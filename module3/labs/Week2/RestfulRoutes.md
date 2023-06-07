---
layout: page
title: RESTful Routes Lab
---

### Background

Today we're going to start building an application called `Record Collection` that we'll keep building on throughout this mod.

Start by cloning [this](https://github.com/turingschool-examples/RecordCollectionStarter) repo: **Do not fork!** We might add new branches for you to check-out in the future and we are trying to avoid having many copies of the same repo. Then checkout the branch `RESTful-routes-starter`.

To get the app running, you will want to follow a few steps.
1. Run `Update-Database` to apply the migration and create your DB
2. Run some SQL in pgAdmin or create a SeedData file to seed some data

If you forget to run `Update-Database` you will get an error like this:
![Error Message in Visual Studio](/assets/images/module3/week2/ErrorMessageVisualStudio.png)

And if you press "play" in Visual Studio to continue the program. In your browser you will see an error message like this:
![Error Message in Chrome](/assets/images/module3/week2/ErrorMessageChrome.png)

### Task 1: Adding the Index page ( GET: /Albums)
Your first task is to get the application up and running and add an index page to view all Albums.

```
As a User
When I visit the albums page at /Albums
Then I see a link all of the albums in our database and their Artist and Title
```

Your Webpage should look similar to this:
![Albums without dates](/assets/images/module3/week2/AlbumsNoDates.png)
Feel free to modify the UI a bit to make it clearer, but the focus is the functionality.

### Task 2: Adding the Show page (GET: /Albums/<id>)

```
As a User
When I visit an album details page at /Albums/<id>
Then I see the information for the Album that corresponds with the id provided
```

Your next task is to implement the second RESTful route we learned about today, the show route. This page will show the information about only one movie. You might be wondering why we have a separate show page if we can see all the information on the Index page, while this is the case for our current app, in the future we will have much more information to display on our details page and add more functionality there such as the ability to edit an album.

### Task 3: Adding Release Date, Migrations Practice

Your next task is to also keep track of an album's release date. To add this feature, you will need to make use of a migration and the tools you learned in Mod 2. Once you've updated your model and database, you will need to update your views to display the album's release date.

After this task is complete your Albums page should look similar to this:
![Albums with dates](/assets/images/module3/week2/AlbumsWithDates.png)

Feel free to modify the UI a bit to make it clearer, but the focus is the functionality.

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>@item.ReleaseDate.ToShortDateString() is  one way to display the date nicely.</p>
</aside>