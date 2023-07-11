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

Bootstrap is a popular CSS Framework used to develop responsive and mobile-first websites, based on a grid design. Most everything is built in a container, with rows and columns nested inside.

Most importantly, it is **FREE** to use.

## How to use Bootstrap

You can use Bootstrap in one of two ways:
1. [Download and install Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) on your machine.
1. Use a CDN (content delivery network) to include a cached version of Bootstrap in your HTML code. This is the option we will use.

Include this `<link>` tag in the `<head>` of your webpage:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
```

Include this `<script>` tag before the closing `</body>` tag of your webpage:
_Note:_ if you are not using JavaScript, you can skip this step.
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
```

## Containers, Rows, & Columns (Oh My!)

Out the box, Bootstrap is based on a grid design. 
* _Everything_ is built in a container.
* Rows are nested in a container.
* Columns are nested in a row.
* There are a maximum of 12 columns.

This image represents one container with seven rows. Each row has different sized elements that span a different number of columns.

![Bootstrap Container](/assets/images/module3/Week5/BootstrapGrid.png)

* The first row has 12 elements, each element spans 1 column.
* The second row has 6 elements, each element spans 2 columns.
* The third row has 4 elements, each element spans 3 columns.
* The fourth row has 3 elements, each element spans 4 columns.
* The fifth row has 2 elements, each element spans 6 columns.
* The sixth row also has 2 elements, but each element span a different number of columns (4 and 8, respectively).
* The last row has 1 element that spans all 12 columns.

_Note:_ You can have exactly 12 columns, or less than 12 columns (the unused columns will appear as empty space). However, you cannot have more than 12 columns.

## Responsiveness

* view the [website](https://launchbootstrap.launch-team.repl.co/)
* view the [code](https://replit.com/@launch-team/LaunchBootstrap#index.html) (and fork if you want)

This is where the "responsive" part happens. Here is a screenshot of our example webpage as viewed on my desktop, in all its full-screen glory:

![Website Desktop](/assets/images/module3/Week5/OlympicDesktop.png)

Here is the same webpage, viewed on my tablet in portrait mode:
![Website Tablet](/assets/images/module3/Week5/OlympicTablet.png)

Some adjustments have been made for the smaller screen, but it remains unchanged for the most part.

Same webpage, this time on my phone:
![Website Tablet](/assets/images/module3/Week5/OlympicPhone.png)

Whoa, big difference. But it would have been really difficult to read the text and view the images if they were all still side by side. I have to scroll to view the information for Paris (not to mention Beijing), but the experience is much better.

## Classes

The beauty of Bootstrap is that you attach classes to HTML tags, and the magic just... happens.

For example:
```html
<h2 class="bg-danger text-white rounded p-2">London</h2>
```
There are four classes attached to this `<h2>` tag:
* `bg-danger` turns the background (bg) of this heading red (red means danger, right?)
* `text-white` makes the text white (this is the obvious one)
* `rounded` curls up the corners of the heading (look closely)
* `p-2` adds some padding inside the heading (the bigger the number, the bigger the cushion)

Let's talk about the container a bit:

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h2 class="bg-danger text-white rounded p-2">London</h2>
        Picture and info about London...
    </div> <!-- End London column -->
    <div class="col-md-4">
      <h2 class="bg-warning text-black rounded p-2">Paris</h2>
        Picture and info about Paris...
    </div> <!-- End Paris column -->
    <div class="col-md-4">
      <h2 class="bg-success text-white rounded p-2">Beijing</h2>
        Picture and info about Beijing...
    </div> <!-- End Beijing column -->
  </div> <!-- End row -->
</div> <!-- End container -->
```

Let's break this down:
* There is a outer `<div>` for the container.
* There is a nested `<div>` inside the container for the row of cities. 
* Nested inside the row `<div>` are three city `<div>`s.

Each city `<div>` &ndash; and the information within it &ndash; can differ using tags and classes. We use the same class for each column.

## Breakpoints

The class for each city column is `col-md-4`. 
* `col` stands for column
* `md` stands for medium breakpoint
* `4` means it will span 4 columns. We have 3 cities, `4*3=12`.

A breakpoint is how wide the page needs to be to properly display its contents. In our example, each city `<div>` will remain 4 columns wide until the screen reaches the medium breakpoint, then the `<div>` becomes full screen. 

| **Category** | **Abbrev.** | **Range** | **Device**              |
|--------------|-------------|-----------|-------------------------|
| Extra Small  | (none)      | < 576 px  | Smartphone (portrait)   |
| Small        | `sm`        | >= 576    | Smartphone (landscape)  |
| Medium       | `md`        | >= 768    | Tablet |
| Large        | `lg`        | >= 992    | Laptop screen  |
| Extra Large  | `xl`        | >= 1200   | Desktop monitor |
| 2x Large     | `xxl`       | >= 1400   | High resolution monitor |

This explains why the webpage displays columns on the desktop and tablet, but becomes a single column on the phone. In our example, we set our breakpoint to `md` so that it would appear "normal" on tablets and larger devices.

## Want more Bootstrap?

Bootstrap has tons of [examples](https://getbootstrap.com/docs/5.3/examples/) to work through; scroll to **Snippets** to check out different headers, sidebars, buttons, etc. There's an entire section for **Navbars** (navigation bars to your humanoid friends). If you view the dev tools, you can see the code for each example.

The [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) is pretty fantastic. By the way, version 5.x is **_WAY_** more extensive than previous iterations, almost overwhelmingly so. Digest in small bites.

If you prefer to learn tutorial style, W3Schools (naturally) has a great [tutorial on Bootstrap 5](https://www.w3schools.com/bootstrap5/index.php). Prepare to be amazed on how complex (yet simple) Bootstrap can be to learn.

## Checks for Understanding
1. To be continued.
