---
layout: page
title: Intro to Bootstrap
---

## Learning Goals
- 

We will build on our foundational understanding of [HTML](/module3/lessons/week1/HTMLFundamentals) and [CSS](/module3/lessons/week1/CSSFundamentals).

## Warm Up

<section class='call-to-action' markdown='1'>

If necessary, re-familiarize yourself with earlier lessons:
* [HTML Fundamentals](/module3/lessons/week1/HTMLFundamentals)
* [CSS Fundamentals](/module3/lessons/week1/CSSFundamentals)

## What is Bootstrap?

Bootstrap is a popular CSS Framework used to develop responsive and mobile-first websites. 
* It is based on a grid design. _Everything_ is built in a container.
* Rows are nested in a container.
* Columns are nested in a row.
* You can nest additional 
Most importantly, it is **FREE** to use.

## How to use Bootstrap

You can use Bootstrap in one of two ways:
1. [Download and install Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) on your machine.
1. Use a CDN to include a cached version of Bootstrap in your HTML code.

Include this `<link>` tag in the `<head>` of your webpage:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
```

Include this `<script>` tag before the closing `</body>` tag of your webpage:
_Note:_ if you are not using JavaScript, you can skip this step.
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
```