---
layout: page
title: Introduction to HTML
---

## Learning Goals

  - Understand structure of an HTML page
  - Identify the major parts of a web page
  - Identify HTML elements using start and end tags
  - Understand difference between block and inline elements
  - Understand why to use semantic tags

## Vocabulary
  - HTML
  - Tag
  - Element
  - Semantic
  - Block
  - Inline

# Hyper Text Markup Language

HTML stands for Hyper Text Markup Language. It is used to described the structure/layout of web pages.

Some HTML tags are "containers" for content, and some tags **are** the content.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
  <link rel="stylesheet" type="text/css" href="my_style.css">
  <script src="my_script.js"></script>
</head>
<body>
  <div>
    <h1>Welcome to my <span style="color:blue;font-weight:bold">first</span> webpage!</h1>
  </div>
  <div>
    <p>Here is a picture of me:</p>
    <br />
    <img src="selfie.jpg" alt="Photo of myself, taken July 2023">
  </div>
  <div>
    <p>Email me at <a href="mailto:doesnotexist@fakemail.com">this address</a>!</p>
  </div>
</body>
</html>
```

Here are the major parts of a web page:

* `<!DOCTYPE html>` - The [Type Declaration](https://www.w3schools.com/tags/tag_doctype.asp) tells our browsers that our application is using HTML5. This is NOT an html tag, but rather just an instruction for the browser about our HTML version.
* `<html>` signals the beginning of our HTML code, ending with `</html>`.
* `<head>` contains all the metadata (information *about* the document). This section may contain other tags, including:
* `<body>` - contains ALL the elements of the HTML document that will display in the browser window.

The `<head>` section often contains other tags, including:
  * `<title>` - The title that will show in the tab of your browser.
  * `<link>` - used to connect to external stylesheets, i.e. our CSS. We want this in the head so it loads first. Note: we can also style right in our html document using `<style>` tags.
  * `<script>` - used to link to our client-side statements or external script file, often JavaScript.

The other tags we will cover will be within the `<body>` section.

### HTML Elements

Most HTML elements have a start tag and end tag, with content placed between them. The end tag is the same as the start tag, preceded with a slash; e.g. `<div>` and `</div>`. 

```html
  <div>
    <h1>Welcome to my <span style="color:blue;font-weight:bold">first</span> webpage!</h1>
  </div>
```

There are three tags in this code snippet:
  * The `<div>` tag creates a division in your HTML code. This makes it easy to identify a particular section of your web page and target it for styling later. It has a matching closing tag: `</div>`.
  * The `<h1>` tag creates a first-level header on the web page, like a newspaper headline (remember those?).
  It has a matching closing tag: `</h1>`.
  * The `<span>` tag is used to mark up specific text using style attributes, either inline or using CSS. It has a matching closing tag: `</span>`.

A few HTML elements do not have end tags.

```html
  <div>
    <p>Here is a picture of me:</p>
    <br />
    <img src="selfie.jpg" alt="Photo of myself, taken July 2023">
  </div>
```

There are four tags in this snippet:
* We've briefly discussed the `<div>` tag, its purpose, and the fact that it *does* have a closing tag: `</div>`. 
* The `<p>` tag creates a paragraph on your webpage. It also *does* have a closing tag: `</p>`.
* The `<br>` tag creates a line break between the paragraph and image. It does not have an end tag, although a slash is often added inside the tag to denote that is it a self-closing tag: `<br />`.
* The `<img>` tag contains attributes that embed an image in a web page. The tag itself holds all the attributes required to render the image to the web page. It also does not have an end tag.

## Block vs Inline Elements

Every HTML element has a default display value, depending on what type of element it is (source: W3Schools). There are two display values: block and inline.

### Block-level Elements

A block-level element share the following characteristics:
  * Always start on a new line
  * A margin (i.e. extra space) is automatically added around the element
  * Always takes up the full width available; i.e. stretches as far left and right as possible
  * Can contain inline elements or other block-level elements

Here are some commonly used block-level elements:
  * `<p>`: Paragraph
  * `<h1>`-`<h6>`: Header 
    * `1` is the largest header, `6` is the smallest
  * `<ol>`: Ordered (numbered) list
  * `<ul>`: Unordered (bulleted) list
  * `<li>`: List item in an ordered or unordered list
  * `<table>`: Table
  * `<form>`: HTML form for user input
  
### Inline Elements

Inline elements share the following characteristics:
  * Does not start on a new line
  * A margin is not automatically added around the element
  * Only takes up as much width as necessary
  * Can contain another inline element, but cannot contain a block-level element

Here are some commonly used inline elements:
  * `<a>`: Hyperlink
  * `<img>`: Image
  * `<b>` or `<strong>`: used for making text bold or important
  * `<i>` or `<em>`: used to italicize or emphasize text
  * `<span>`: used to mark up specific text
  * `<button>`, `<input>`, `<select>`: Button, input field, dropdown menu; usually within a `<form>` element

## Semantic Tags

`<div>` tags are incredibly common. A good use case for a `<div>` might be creating an element on a page like a solid box. However, a `<div>` tag tells us NOTHING about the content of the element.

With the introduction of HTML5, there was a move towards semantic tags. Several tags we use are already semantic: form, link, etc.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Our Zoo</title>
    <link rel="stylesheet" type="text/css" href="my_style.css">
    <script src="my_script.js"></script>

  </head>

  <body>
    <header>
      <h2>Elephant Exhibit</h2>
    </header>

    <section>
      <nav>
        <ul>
          <li><a href="#">African Forest</a></li>
          <li><a href="#">African Savanna</a></li>
          <li><a href="#">Asian</a></li>
        </ul>
      </nav>
      
      <article>
        <h1>African Forest Elephant</h1>
        <p>The African forest elephant is one of the two living African elephant species. Its conservation status is listed as <span style="color:blue;font-weight:bold">Critically Endangered</span></p>
        <ul>
          <li>Average shoulder height: 1.8-3.0 meters</li>
          <li>Average mass: 2,000-7,000 kilograms</li>
        </ul>
      </article>
    </section>

    <footer>
      <p>Contact the zoo via <a href="mailto:doesnotexist@fakemail.com">this e-mail address</a>!</p>
    </footer>
  </body>
</html>
```

Instead of `<div>` tags, this web page makes use of the following semantic tags to better describe its part of the web page:
  * `<header>`
  * `<section>`
  * `<nav>`
  * `<article>`
  * `<footer>`

Read more about semantic tags at [W3Schools](https://www.w3schools.com/html/html5_semantic_elements.asp).

## Checks for Understanding

* What is HTML? What does the acronym stand for?
* What are the major sections of a web page?
* What is the difference between a block and inline element?
* Why would we use semantic vs. non-semantic tags?
* List 5 HTML elements and how to use them on a webpage.
* List 5 semantic tags and how to use them on a webpage.
