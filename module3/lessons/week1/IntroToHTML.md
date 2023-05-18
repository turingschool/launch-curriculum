---
layout: page
title: Introduction to HTML
---

## Learning Goals

  - Understand structure of an HTML page
  - Understand how to use `application.html.erb`
  - Understand difference between semantic/non-semantic tags
  - Understand difference between block and inline elements
  - Understand difference between class and id selectors
  - Understand how to add CSS to our apps

## Vocabulary
  - HTML
  - Tag
  - Element
  - Semantic
  - Block
  - Inline

# Hyper Text Markup Language

A Markup Language used for describing the structure/layout of web pages.

Some HTML tags are "containers" for content, and some tags **are** the content.

### Application Layout

In SetList, open up the `app/views/layouts/application.html.erb`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>SetList</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag    'application', media: 'all' %>
    <%= javascript_include_tag 'application' %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>

```

* `<!DOCTYPE html>` - The [Type Declaration](https://www.w3schools.com/tags/tag_doctype.asp) tells our browsers that our application is using HTML5 (this is NOT an html tag, but rather just an instruction for the browser about our HTML version).
* `<html>` signals the beginning of our HTML.
* `<head>` contains all the metadata (information *about* the document)
  * `<title>` - The title that will show in the tab of your browser.
  * `<%= stylesheet_link_tag %>` - An `ActionView::Helpers`. How we link to external stylesheets, i.e. our CSS. We want this in the head so it loads first. We could also style right in our html document with a `style` tag but DON'T DO THAT. We always want to use `ActionView::Helpers` when we can.
  * `<%= javascript_include_tag %>` - Another `ActionView::Helpers`. How we link to our client-side statements (JavaScript). We could use the `<script>` html tag, but we prefer the  `ActionView::Helpers`.

#### Body

Contains ALL the elements of the HTML document that we would like to display.

`<%= yield %>` is where all of our view files get rendered. This is used in a 'layout level template' to help us 'DRY' up our HTML. Now instead of needing to repeat the above in every erb/html file we can simply write the html that we want our body to contain.

This means that if there is part of a view we want to render on **every** page (like a navbar or footer), we can put it in `application.html.erb`.

## Semantic vs Non-Semantic Tags

  - How did you create HTML structure in your Task Manager app? Most everyone uses `<div>` tags at first.

### Non-Semantic

  - `div`s - incredibly common but with the introduction of HTML5, there was a move towards semantic tags.
  - `div`s tell us NOTHING about the content of the element.  
  - A good use case for a `div` might be creating an element on a page like a solid box.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Our Zoo</title>
    </head>
    <body>
      <div class="nav">
        <h1>Welcome to Our Zoo</h1>
      </div>
      <div class="animals">
        <div class="otters">
          <h2>Cuddly Otters</h2>
          <p>Come visit our friendly otters and watch them slip and slide.</p>
        </div>
        <div class="penguins">
          <h2>Cute Penguins</h2>
          <ul>
            <li>Emperor Penguins</li>
            <li>King Penguins</li>
            <li>African Penguins</li>
          </ul>
        </div>
      </div>
      <div class="exhibits">
        <div class="explore-the-shore">
          <a href="https://www.denverzoo.org/explore-shore">Explore the Shore</a>
        </div>
        <div class="lorikeet-advuenture">
          <p>Come play with out lorikeets.</p>
        </div>
      </div>
      <div class="contact-me">
        <p>email me at <a href="mailto:doesnotexist@fakemail.com">this address</a>!</p>
      </div>
    </body>
  </html>
```

### Semantic Tags

- Can act the same as a `div` but have implied meaning.
- Some examples of semantic tags:
  * `<article>`
  * `<aside>`
  * `<details>`
  * `<figcaption>`
  * `<figure>`
  * `<footer>`
  * `<header>`
  * `<main>`
  * `<mark>`
  * `<nav>`
  * `<section>`
  * `<summary>`
  * `<time>`
  * See more information about the specific tags [here](https://www.w3schools.com/html/html5_semantic_elements.asp)

Example:   

```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Our Zoo</title>
    </head>
    <body>
      <nav>
        <h1>Welcome to Our Zoo</h1>
      </nav>
      <section class="animals">
        <header>
          <p>I would like to tell you about our animals</p>
        </header>
        <article class="otters">
          <h2>Otters</h2>
          <p>Come visit our friendly otters and watch them slip and slide.</p>
        </article>
        <article class="penguins">
          <h2>Cute Penguins</h2>
          <ul>
            <li>Emperor Penguins</li>
            <li>King Penguins</li>
            <li>African Penguins</li>
          </ul>
        </article>
      </section>
      <section class="exhibits">
        <header>
          <p>Check out our exhibits!</p>
        </header>
        <article class="explore-the-shore">
          <a href="https://www.denverzoo.org/explore-shore">Explore the Shore</a>
        </article>
        <article class="lorikeet-adventure">
          <p>Come play with our lorikeets.</p>
        </article>
      </section>
      <footer class="contact-me">
        <p>email me at <a href="mailto:dione@turing.edu"></a></p>
      </footer>
    </body>
  </html>
```
- A lot of the tags we use are already semantic such as form, link, etc.

## Class vs. ID

We can give our HTML elements **attributes**. These attributes appear inside the tag itself (in between the angle brackets `< >`). For example, the following `img` tag:

```html
<img src='https://cutedogs.com/1'>
```

Has an attribute of `src` with a value of `'https://cutedogs.com/1'`.

Two very important attributes we can give our HTML elements are `class` and `id`.

```html
<div class="song" id="song-4">
<div class="song" id="song-3">
<div class="song" id="song-2">
```

* We use the `class` attribute to identify several related elements.
* We use the `id` attribute to identify a single element.
* `id` takes higher priority in CSS (more on this later).
* Only one element should have a certain `id`. If two elements have the same `id`, your page will still display, but it may not work the way you expect.
* We can use erb tags to interpolate an id in our views. The above example HTML could be rendered by the view with the following code:

```html
<% @songs.each do |song| %>
  <div class="song" id="song-<%= song.id %>">
<% end %>
```

## Checks for Understanding

* What is HTML?
* What is `application.html.erb`?
* What are `ActionView::Helpers`?
* Why would we use semantic vs. non-semantic tags?
* What is the difference between a block and inline element?
* When should we use an `id` over a `class`?
* What is CSS?
* How can you add CSS to a Rails app?
* How do you select elements, classes, and ids in CSS?