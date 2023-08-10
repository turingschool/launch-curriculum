---
layout: page
title: Maintaining State Lab
---

In today's lab, we are going to build on the [Starter Repo](https://github.com/turingschool-examples/GoodBooksMvcStarter) from the lesson.

<section class='instructor-notes' markdown='1'>

Before letting students tackle this, go over the user stories as a group.  discuss what favoriting is, and some options for showing if a book has been favorited.  Let students know that they may need to use the following (refresh their memories on):
* String manipulation
* Working with collections
* html/css

</section>

### Comparing Books

Use cookies (and everything else you know about c# and web development!) to implement the following user stories.  You should not need to make any changes to the database!

When browsing the web, you will sometimes find lists of objects, and want to compare a few of those objects side-by-side.  Today, we are going to use cookies to manage this functionality!

```
As a User
When I visit '/books'
Then I see a button or icon to compare each book
  When I click that button, the page is reloaded and I no longer see a 'compare' button next to that book
```

```
As a User
When I visit '/books'
Then I see my all books that I want to compare are highlighted at the top of the page
```

```
As a User
When I visit '/books'
Then I see a button or icon to remove a book from the compare area
  When I click that button, the page is reloaded and that book is no longer in the compare area
```


### Demo Time!

In small groups, share out your compare functionality.  Discuss the similarities and differences in your approaches.



