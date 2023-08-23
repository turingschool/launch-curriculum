---
layout: page
title: JavaScript DOM and Event Listeners
---

# JavaScript: The Sequel

## Learning Goals

- Understand what is the DOM
- Understand how to target HTML Elements
- Understand how to add event listeners

## Warm Up

- Have you written any Frontend JavaScript?
- If yes, what functionality did you write?

## What is the DOM?

**DOM** stands for **Document Object Model**. Let's break that down a little bit more:

- **Document**: the HTML document that makes up the view
- **Object**: every HTML element is parsed into an object by the browser
- **Model**: refers to how objects are laid out in a tree structure

The DOM consists of:
  * Parent nodes
  * Child nodes
  * Sibling nodes

With a partner, expand the following section and identify the relationships of the elements as parent, child, or sibling in the HTML code:

<section class='answer' markdown='1'>

### Expand HTML

```html
<html>
  <head>
    <title>Example Website</title>
  </head>
  <body>
    <section>
      <nav>
        <ul>
          <li>Home</li>
          <li>More Info</li>
          <li>FAQs</li>
        </ul>
      </nav>
    </section>
    <section>
      <article>
        <h2>First Header</h2>
        <p>This is the first paragraph!</p>

        <h3>Second Header</h3>
        <p>This is the second paragraph!</p>
      </article>
    </section>
  </body>
</html>
```
</section>

## Targeting Nodes

There are a few ways to target particular elements on a page.

- `document.getElementById('target-id')`
  Returns the element with matching id.

- `document.getElementsByClassName('target-class-name')`
  Returns an HTML Collection of all elements with that class.

- `document.getElementsByTagName('p')`
  Returns an HTML Collection of all elements matching that html tag.

_Note: The last two functions return a collection of `Elements`, not a single `Element`. In other words, it returns zero (0) or more items. Even it if returns one (1) item, you must treat this as a collection that may hold multiple elements._

- We can do the same thing as the above using one function like so:
    - `document.querySelector('#target-id')`
    - `document.querySelector('.target-class-name')`
    - `document.querySelector('target-tag')`
  You must specify the type of selector you are targeting by including the `#` for ids or the `.` for classes.
  This function will return the first element that matches the selector.

- `document.querySelectorAll()`
  Returns a node list with all elements matching the selector

_Fun Fact you can search for elements by other attributes using `querySelector` with bracket notation ex) `document.querySelector('[role="navigation"]')`_


### Which method do I use?

The querySelector syntax is the newer and preferred syntax. One of the reasons for this is that a node list is easier to interact with than an HTML Collection.

HTML collections and node lists look similar to arrays, but you cannot use array functions like `forEach` or `map` on an HTML Collection. In order to use array functions you must convert them into arrays. Here is an example of how you might do this:

```javascript
var allDivs = document.getElementsByTagName('div')
var divArray = Array.from(allDivs)
```

Using forEach to iterate over all items in a NodeList is much nicer!

```javascript
// Retrieve all elements with the specified class name
var divs = document.querySelectorAll('div');

// Iterate over each element using a loop
divs.forEach(function(element) {
    // Perform actions on each element
    console.log(element.textContent); // Example action: Log the element's text content
});
```

#### Why you need `document.ready()`

Before we can successfully target elements in the DOM we must first ensure that the browser has created it. We do this by using the function `document.ready(() => { #your JavaScript code here })`.
If we forget to wrap our code with `document.ready()` the return for targeting our elements will be `null`.

Another option is to link the JavaScript file at the bottom of the HTML file, just before the `</body>` tag. This allows the DOM elements to load before the script is run. Notice the placement of the `<script>` tag in the example HTML code below.

```html
<html>
  <head>
    <title>Example Website</title>
  </head>
  <body>
    <section>
      Headers, Navigation Bars, Articles, etc.
    </section>
    <script src="script.js"></script>
  </body>
</html>
```

## JavaScript Events

We usually target elements in the DOM because we want some action to occur when an _event_ takes place. For instance, maybe we want the text to change colors when we _mouseover_ it, or perhaps we want to send off information to an API when we _click_ a submit button for a form.

Both _click_ and _mouseover_ are events. Other events include: _mouseout_, _keypress_, _keydown_, _change_, etc. Google JavaScript events to find more.

## Adding an Event Listener

In order for an action to take place when an event occurs the element needs to know what event to _listen_ for and how to handle that event. First, you would target the element on which you want the event to occur and then `addEventListener()`. `addEventListener()` takes two arguments, the first argument is the event and the second is a function defining what action should occur.

JavaScript might look something like this:

```javascript
var targetElement = document.getElementById('target-id')

// Equivalent code using a regular function
targetElement.addEventListener(event, function() {
    console.log("The event happened!");
});
```

You can also define the function separately:
```javascript
function handleEvent() {
    console.log("The event happened!");
}

// Note that we are just providing the function name, not calling the function here!
targetElement.addEventListener(event, handleEvent);
```

## Let's try it out!

Fork [this](https://replit.com/@launch-team/User-Events-Playground#index.html) Repl. 

I want to output "You clicked the box" to the console when the blue box is clicked. 

* What would your pseudocode look like for this process?

I want to change the color of the box on click, so that it turns green when I click it once, and back to blue when I click it again.

* What would your pseudocode look like for this process?

When the user clicks the 🔥 button, the image inside of the div should reveal itself.

* What would your pseudocode look like for this process?


<section class="call-to-action" markdown="1">
With your partner try to accomplish the following tasks, using a forked version of that same CodePen:

* Add a new button with the following functionality:
   * Change the background color of the body element when your new button is clicked.
* When the input detects a keyup event, the colored div should grow larger.
* When the input detects a keydown event the colored div should shrink.
* When the box detects a mouseover event, it should spin (you can use the spin class in the CSS file).
* When the box is dragged by the user, it should console.log() a message of your choice.
* When the 🔥 button is clicked, the text inside of it should change to 💦, and it should change back to 🔥 when clicked again.
* Your choice: What other events can you use? What other results can you create?
</section>


<section class="call-to-action" markdown="1">
Checks For Understanding:

* What is the general process for manipulating DOM nodes / HTML elements with JavaScript?
* Which events seem the most useful? Which seem the most niche?
</section>