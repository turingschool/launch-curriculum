---
layout: page
title: Updating Resources in MVC Lab
---

For today's lab, we are going to continue building the Record Collection application.

**Objective**
* Add a form for updating Album
* Add a form for updating Songs


## Setup
* Open your Record Collection project.
    * Run the project, and make sure you have the Record#Index, #Show, #New, and #Create actions working.
* If you have been absent or can't find your project, follow these steps:
    * Fork and Clone it from this [Starter Repository](https://github.com/turingschool-examples/RecordCollectionStarter).
    * Build the project (let your instructor know if you receive any errors!).
        * Open the database in pgAdmin, and create some records by running the following script (feel free to update the albums and artists to your favorites!).
    ```sql
    INSERT INTO albums (title, artist, release_date)
    VALUES
    ('Stop Making Sense', 'Talking Heads', '1984-06-24'),
    ('Banana Winds', 'Jimmy Buffet', '1996-12-06')
    ```
    * Check out the branch _____________________ TODO need a branch ___________

## Updating Albums

Update your record collection application to satisfy the following user stories.  Make sure these new features are well tested!

```
As a User
When I visit an album show page
Then I see a link to Edit that Album
    And the link takes me to an edit form for that album.
```

```
As a User
When I visit the edit form for an album
Then I can update any field on the album
Then I can click 'Update Album'
    And I am redirected to the Album's show page
    And I see the updated Album information
```

## Updating Songs

Update your record collection application to satisfy the following user stories.  Make sure these new features are well tested!

```
As a User
When I visit an album show page
Then I see a link to Edit each song on the album.
    And a single link takes me to an edit form for that song.
```

```
As a User
When I visit the edit form for a song
Then I can update any field on the song (but not it's album!)
Then I can click 'Update Song'
    And I am redirected to the Album's show page
    And I see the updated song information
```

## 🌶️Add Artist Show Page 🌶️

Update your record collection application to satisfy the following user story.  Make sure these new features are well tested! You may need to make database updates to ensure this functionality 😉.  When you have questions, post them in slack, or reach out to an instructor!

```
As a User
When I visit an artist's show page
Then I see a list of all albums the artist is associated with
    And, each album title is a link to that album's show page
```

