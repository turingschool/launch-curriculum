---
layout: page
title: Maintaining State Lab
---

In today's lab, we are going to build on the [Start Repo](https://github.com/turingschool-examples/GoodBooksMvcStarter) from the lesson.

<section class='instructor-notes' markdown='1'>

Before letting students tackle this, go over the user stories as a group.  discuss what favoriting is, and some options for showing if a book has been favorited.  Let students know that they may need to use the following (refresh their memories on):
* String manipulation
* Working with collections
* html/css

</section>

### Favoriting Books

Use cookies (and everything else you know about c# and web development!) to implement the following user stories.  You should not need to make any changes to the database!

```
As a User
When I visit '/books'
Then I see a button or icon to favorite a book
  When I click that button, the page is reloaded and that book is now a favorite
```

```
As a User
When I visit '/books'
Then I see my favorite books are highlighted at the top of the page
  I can easily see which are my favorite books, and which are not
```

```
As a User
When I visit '/books'
Then I see a button or icon to un-favorite a book
  When I click that button, the page is reloaded and that book is no longer a favorite
```


### Demo Time!

In small groups, share out your favoriting functionality.  Discuss the similarities and differences in your approaches.



