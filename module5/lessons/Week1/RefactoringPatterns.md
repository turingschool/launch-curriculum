---
layout: page
title: SOLID Design Principles and Refactoring Patterns
---

## Learning Goals
* Be able to name the SOLID design principles
* Explore a few refactoring patterns
* Understand that there are _many_ more refactoring patterns

# SOLID

When writing code, there are many things to consider, including functionality, usability, and security.  Another important consideration is the **design** of our code.  There are _many_ strategies that have been developed to help us design understandable, flexible and maintainable code.  Today, we are going to dive into 5 of the most common: the **SOLID** principles.

**S**: Single-Responsibility  
**O**: Open-Closed  
**L**: Liskov Substitution  
**I**: Interface Segregation  
**D**: Dependency Inversion  

<section class='instructor-notes' markdown='1'>

Here is a good resource on the SOLID principles using c# examples: https://www.c-sharpcorner.com/UploadFile/damubetha/solid-principles-in-C-Sharp/

</section>

<section class='call-to-action' markdown='1'>

**Small Group Round Table**
In groups of 5(ish), you and your peers will learn about and discuss each of the 5 SOLID principles.  Your instructor will split you into groups of 5, and assign each of you one of the principles to research.  

You will have 20 minutes to learn as much as you can about your principle; as you research, consider the following:
    * Have you seen this principle being practiced in a lab, project, or lesson?
    * What analogy could you use to explain this principle to your peers?
    * Find or create an example of this principle in C# - make sure you understand what each line of code is doing!

After your individual research, you will have 30 minutes to discuss the 5 principles in your groups.  Make sure you ask questions of your peers as they present - you want to come away with as much understanding of these principles as you can! (though we do not expect you to be experts 🙂)

</section>


# Refactoring Patterns
## Extract Method

**The Problem**: A method is tooooo loooooong.  Long methods are difficult to read, and difficult to maintain.  The longer a method is, the easier it is for a bug to hide there. And, most of the time, they are breaking SRP.

So, we want to refactor to break up big methods into smaller ones.  **Extract Method** refactoring is the process of creating new methods from existing code blocks; we can then call those new methods from the original code block.

Let's take this code for example:

```c#
using System;
using System.Collections.Generic;

public class ShoppingCart
{
    private List<Item> items = new List<Item>();

    public decimal CalculateTotalPrice()
    {
        decimal totalPrice = 0;

        foreach (var item in items)
        {
            totalPrice += item.Price * item.Quantity;

            // Apply special fees for certain items
            if (item.Category == "Electronics")
            {
                totalPrice += 10;
            }
            else if (item.Category == "Clothing")
            {
                totalPrice += 5;
            }
        }

        // Apply bulk discount for high total prices
        if (totalPrice > 200)
        {
            totalPrice -= totalPrice * 0.1M; // 10% discount
        }

        // Apply tax
        totalPrice += totalPrice * 0.08M; // 8% tax

        return totalPrice;
    }
}

public class Item
{
    public string Name { get; set; }
    public string Category { get; set; }
    public decimal Price { get; set; }
    public int Quantity { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        List<Item> items = new List<Item>
        {
            new Item { Name = "Smartphone", Category = "Electronics", Price = 1000, Quantity = 1 },
            new Item { Name = "T-shirt", Category = "Clothing", Price = 20, Quantity = 3 },
            // ... add more items ...
        };

        ShoppingCart cart = new ShoppingCart();
        decimal total = cart.CalculateTotalPrice();

        Console.WriteLine($"Total Price: {total:C}");
    }
}

```

In this example, we have a method `CalculateTotalPrice` that is doing too much.  It is calculating total price **AND** processing additional fees **AND** applying bulk discounts **AND** processing tax.  All those `AND`s indicate that we can extract some functionality from this method.

```c#
public class ShoppingCart
{
    private List<Item> items = new List<Item>();

    public decimal CalculateTotalPrice()
    {
        decimal totalPrice = CalculateItemsPriceWithFees();

        totalPrice -= ApplyBulkDiscount(totalPrice);

        totalPrice += ApplyTax(totalPrice);

        return totalPrice;
    }

    private decimal CalculateItemsPriceWithFees()
    {
        decimal totalPrice = 0;

        foreach (var item in items)
        {
            totalPrice += item.Price * item.Quantity;

            totalPrice += ApplySpecialFees(item.Category);
        }

        return totalPrice;
    }

    private decimal ApplySpecialFees(string category)
    {
        if (category == "Electronics")
        {
            return 10;
        }
        else if (category == "Clothing")
        {
            return 5;
        }
        return 0;
    }

    private decimal ApplyBulkDiscount(decimal totalPrice)
    {
        if (totalPrice > 200)
        {
            return totalPrice * 0.1M; // 10% discount
        }
        return 0;
    }

    private decimal ApplyTax(decimal totalPrice)
    {
        return totalPrice * 0.08M; // 8% tax
    }
}
```

With the **extract method** refactoring pattern, our executing code can remain the same, but we have made our classes and methods _much_ easier to read.

## Extract Interfaces

**The Problem**: An interface is too large.  Interfaces that include a lot of method signatures will force us to implement those methods in ALL classes that implement that interface; regardless of if that class needs that method.

Let's take the following Interface as an example:

```c#
public interface IMediaPlayer
{
    void Play();
    void Pause();
    void Stop();
    void AdjustVolume();
    void ShowSubtitle();
}
```

We _can_ use this interface to drive the implementation of a Video Player (like youtube), and Audio Player (like spotify), and a Slide Player (like a carousel of images on a web-page).  But, we will need to be very careful with how we implement each of these classes:

```c#
public class VideoPlayer : IMediaPlayer
{
    public void Play()
    {
        // Play video
    }

    public void Pause()
    {
        // Pause video
    }

    public void Stop()
    {
        // Stop video
    }

    public void AdjustVolume()
    {
        // Adjust volume for video
    }

    public void ShowSubtitle()
    {
        // Show subtitle for video
    }
}
```

So far, so good...

```c#
public class AudioPlayer : IMediaPlayer
{
    public void Play()
    {
        // Play audio
    }

    public void Pause()
    {
        // Pause audio
    }

    public void Stop()
    {
        // Stop audio
    }

    public void AdjustVolume()
    {
        // Adjust volume for audio
    }

    public void ShowSubtitle()
    {
        // Audio player doesn't need subtitle functionality
        throw new NotImplementedException("AudioPlayer doesn't support subtitles.");
    }
}
```

Our AudioPlayer is now getting a bit more complicated...

```c#
public class SlidePlayer : IMediaPlayer
{
    public void Play()
    {
        // Play streaming content
    }

    public void Pause()
    {
        // Pause streaming content
    }

    public void Stop()
    {
        // Stop streaming content
    }

    public void AdjustVolume()
    {
        // Slide player doesn't need adjust volume functionality
        throw new NotImplementedException("SlidePlayer doesn't support volume.");
    }

    public void ShowSubtitle()
    {
        // Streaming player doesn't need subtitle functionality
        throw new NotImplementedException("StreamingPlayer doesn't support subtitles.");
    }
}
```

And now our Slide Player is just a mess.

There are really only 3 common methods for all of these players, so it would make the most sense to break up our IMediaPlayer into 3 seperate interfaces:

```c#
public interface IPlayable
{
    void Play();
    void Pause();
    void Stop();
}

public interface IVolumeAdjustable
{
    void AdjustVolume();
}

public interface ISubtitleSupport
{
    void ShowSubtitle();
}

public class VideoPlayer : IPlayable, IVolumeAdjustable, ISubtitleSupport
{
    // Implement relevant methods
}

public class AudioPlayer : IPlayable, IVolumeAdjustable
{
    // Implement relevant methods
}

public class SlidePlayer : IPlayable
{
    // Implement relevant methods
}
```

With the **Extract Interfaces** method, we have smaller, more re-usable interfaces!  This also adheres better to the Interface Segregation principle.

## Move Method

**The Problem**: A class has too many responsibilities.  Typically, this happens when a method on a class depends more on _another_ class than on the class it is housed in.  Take this example:

```c#
class AddressDetails
{
    internal string Street { get; set; }
    internal int Number { get; set; }
    internal string City { get; set; }
    internal string PostalCode { get; set; }
    internal string Country { get; set; }
}

class Person
{
    public Person()
    {
        Address = new AddressDetails();
    }

    public AddressDetails Address { get; set; }

    internal string Name { get; set; }
    internal string TelephoneNumber { get; set; }
    internal string Email { get; set; }

    internal string GetFullAddress()
    {
        return $"{Address.Street} {Address.Number}, {Address.PostalCode} {Address.City}, {Address.Country}";
    }
}
```

In this Person class, there is a method that relies very heavily on the Address class.  The code works as-is, but it could be refactored to better adhere to the **single responsibility principle**:

```c#
class AddressDetails
{
    internal string Street { get; set; }
    internal int Number { get; set; }
    internal string City { get; set; }
    internal string PostalCode { get; set; }
    internal string Country { get; set; }

    internal string GetFormattedAddress()
    {
        return $"{Street} {Number}, {PostalCode} {City}, {Country}";
    }
}

class Person
{
    public Person()
    {
        Address = new AddressDetails();
    }

    public AddressDetails Address { get; set; }

    internal string Name { get; set; }
    internal string TelephoneNumber { get; set; }
    internal string Email { get; set; }

    internal string GetFullAddress()
    {
        return Address.GetFormattedAddress;
    }
}
```

In this refactored version, we are not changing how we interact with the person class (so we know all of our existing code will still run); but we are changing _where_ the logic of getting a formatted address string lives.  

### Other Refactoring Notes

* Refactoring should not change the functionality of our code - existing tests should still pass!
* When refactoring, constantly ask yourself: Does this change make my code more readable, maintainable, or flexible? If the answer is 'no', you should proceed with extreme caution.
* There are **many** refactoring patterns.  For more info, you could check out Martin Fowler's blog on [Refactoring](https://refactoring.com/catalog/) 
