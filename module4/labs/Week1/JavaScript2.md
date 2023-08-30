---
layout: page
title: JavaScript 2 Lab
---

## Lab Objectives
* Practice making changes in the DOM
* Practice targeting HTML Elements by id, class, and tag
* Practice adding event listeners

## Match 3 Squares

The webpage in [this repl](https://replit.com/@launch-team/Mod4ThreeSquares) displays three colored squares, three buttons, and a message. Each button is designed to change the color of a square. The message displays the status of the colored squares.

Update the code in `script.js` to accomplish the following tasks:

* Each button cycles through the following list of colors for each square: `white`, `red`, `orange`, `yellow`, `green`, `blue`, `purple`.
* If the squares are all different colors, the message should display this, e.g. `The squares are different colors.`
* If any two squares are the same color, the message should display which two squares match and the matching color; e.g. `The first and third squares are blue.`
* When all three squares are the same color, the message should update accordingly; e.g. `All three squares are red!`

### Challenge 1

Add a button to reset all squares to `white` (or `green`, or `purple`, your choice). The message should update accordingly.

### Challenge 2

Add a button to randomize the colors of each square. The message should update accordingly.

### Challenge 3

Add a `mouseover` event listener that displays information of the target square in the message; e.g. `This square is orange.`
<!-- . The corresponding `mouseout` event listener should display information about all three squares.  -->

### Bonus Content

Try navigating to elements by using `parentNode`, `childNodes`, `nextSibling`, etc. See the _Related Topics_ section of this [page](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes).
