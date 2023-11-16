---
page: layout
title: Battleship OOP Practice
---

<div style="display: flex; justify-content: center;">
    <img src="/assets/images/module6/battleship.jpg" style="max-width: 50%;" >
</div>

### Background
Battleship is a classic board game where players place one or more ships on a grid board, and then take turns trying to “sink” the other player’s ships by guessing their coordinates. The game ends when one player’s ships are all hit and “sunk”. For more information, see the [Wikipedia page](https://en.wikipedia.org/wiki/Battleship_(game)).

## Overview

Your goal is to practice OOP by implementing a Console Application that will allow a user to play a game of battleship against a computer opponent!

You will want to spend a good amount of time brainstorming what classes, properties, and methods you think you will need in order to implement this game.  Remember that the focus of OOP is to use objects to represent real ideas or things that exist in the world.  So, as you think about the design, imagine that you are getting ready to play the physical game 😉

<section class='answer' markdown='1'>

### Example Game Play

This is an overview of how a game could be played.  Your implementation does not have to look _exactly_ like this, but do make sure that you have covered the functionality checklist!

## Main Menu

When the user starts the game, they should see a welcome message that asks them if they want to play or quit. Whenever a game ends, they should return to this message so they can start a new game, or quit.

```
Welcome to BATTLESHIP
Enter p to play. Enter q to quit.
```

## Setup

Once the User has chosen to play, you need to place the computer's ships and the players ships to set up the game.

#### Computer Ship Placement

The computer player should place their ships. The baseline computer should simply use random placements but still adhere to the valid placement rules from iteration 2.

#### Player Ship Placement

Next, the user places their ships. They should receive a short explanation of how to place along with a visual representation of their board (which should be empty).

```
I have laid out my ships on the grid.
You now need to lay out your two ships.
The Cruiser is three units long and the Submarine is two units long.
  1 2 3 4
A . . . .
B . . . .
C . . . .
D . . . .
Enter the squares for the Cruiser (3 spaces):
>
```

When the user enters a valid sequence of spaces, the ship should be placed on the board, the new board with the ship should be shown to the user, and then the user should be asked to place the other ship.

```
Enter the squares for the Cruiser (3 spaces):
> A1 A2 A3

  1 2 3 4
A S S S .
B . . . .
C . . . .
D . . . .
Enter the squares for the Submarine (2 spaces):
>
```

If the user enters an invalid sequence, they should be prompted again:

```
Enter the squares for the Submarine (2 spaces):
> C1 C3
Those are invalid coordinates. Please try again:
> A1 B1
Those are invalid coordinates. Please try again:
> C1 D1
```

## The Turn

During the main game, players take turns firing at one another by selecting positions on the grid to attack.

A single turn consists of:

* Displaying the boards
* Player choosing a coordinate to fire on
* Computer choosing a coordinate to fire on
* Reporting the result of the Player's shot
* Reporting the result of the Computer's shot

#### Displaying the Boards

At the start of the turn, the user is shown both boards. The user should see their ships but not the computer's ships:

```
=============COMPUTER BOARD=============
  1 2 3 4
A M . . M
B . . . .
C . . . .
D . . . .
==============PLAYER BOARD==============
  1 2 3 4
A S S S .
B . M . .
C M . S .
D . . S .
```

Our board needs to be able to render the status of individual coordinates:
* `.` if the cell has not been fired upon.
* `M` if the cell has been fired upon and it does not contain a ship (the shot was a miss).
* `H` if the cell has been fired upon and it contains a ship (the shot was a hit).
* `X` if the cell has been fired upon and its ship has been sunk. Note that all of the cells that contain that sunken ship should render as an `X`, not just the cell that resulted in the ship being sunk.
* `S` if the cell is part of the player's board, and a ship is on that cell.

#### Player Shot

The player should be asked for a coordinate to fire on. If they enter an invalid coordinate, they should be prompted until they enter a valid one:

```
Enter the coordinate for your shot:
> D5
Please enter a valid coordinate:
> Z1
Please enter a valid coordinate:
> A4
```

#### Computer Shot

The computer should choose a random space on the board. The computer should not fire on a space that has already been fired on.

#### Results

The results of the shots should be displayed:

```
Your shot on A4 was a miss.
My shot on C1 was a miss.
```

The game needs to handle all of the following results:

* A shot missed
* A shot hit a ship
* A shot sunk a ship

#### Coordinates that have already been fired upon

It is possible that the user enters a coordinate they have already fired upon. You need to add something that informs the user that this is the case. You may choose to either prompt them again for a coordinate they haven't fired on, or let them choose it again and inform them in the results phase that they selected this coordinate again.

## End Game

The game is over when either the computer or the user sinks all of the enemy ships. When this happens, the user should see a message stating who won:

```
You won!
```

or

```
I won!
```

Then, they should be returned to the Main Menu asking them if they would like to play or quit.

## Functionality Checklist

This checklist summarizes all of the functionality you are expected to build. This will be used to assess the completion of your project:

**Main Menu**:

* User is shown the main menu where they can play or quit

**Setup**:

* Computer can place ships randomly in valid locations
* User can enter valid sequences to place both ships
* Entering invalid ship placements prompts user to enter valid placements

**Turn**:

* User board is displayed showing hits, misses, sunken ships, and ships
* Computer board is displayed showing hits, misses, and sunken ships
* Computer chooses a random shot
* Computer does not fire on the same spot twice
* User can choose a valid coordinate to fire on
* Entering invalid coordinate prompts user to enter valid coordinate
* Both computer and player shots are reported as a hit, sink, or miss
* User is informed when they have already fired on a coordinate
* Board is updated after a turn

**End Game**:

* Game ends when all the user's ships are sunk
* Game ends when all the computer's ships are sunk
* Game reports who won
* Game returns user back to the Main Menu

</section>

## 🌶️ Spice it Up

If you finish the game as described above, try adding any of the following extensions:

#### Variable Board Size
When starting a game, a user should be able to indicate the height and width of the board. All of your validations should still work with these variable board dimensions

#### Custom Ships
When starting a game, a user can optionally create the ships they will play with. They should be able to give each ship a name and length, and be able to create as many of these ships as they want.

#### Intelligent Computer
The computer should make an educated guess of what coordinate to fire on.