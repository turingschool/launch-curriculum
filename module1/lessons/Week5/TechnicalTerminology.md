---
layout: page
title: Using Technical Terminology
---

## Learning Goals
* Practice using technical terminology to describe code.
* Practice presenting technical topics in a group setting.

## Describing a class
In small groups, you will be reviewing the code below.  Your instructor will assign your group a section of lines that you will be discussing as a group and presenting to the larger cohort.  Use as many technical terms as you can - for example, use 'string' instead of 'words'.  You will have 10 minutes in small groups to discuss - elect one member of your group to lead your share-out.

```c#

class GarbageTruck
{
//Section 1
    public string Manufacturer;
    public string Model;
    public int Year;
    public double FuelLevel;
    public int TrashCapacity;
    public int TrashLevel;
    public bool IsMoving;
    public int DistanceDriven;

    public GarbageTruck(string manufacturer, string model, int year, double fuelLevel, int trashCapacity)
    {
        Manufacturer = manufacturer;
        Model = model;
        Year = year;
        FuelLevel = fuelLevel;
        TrashCapacity = trashCapacity;
        TrashLevel = 0;
        IsMoving = false;
        DistanceDriven = 0;
    }

    public string Info()
    {
        string info = ""
        info += $"Manufacturer: {Manufacturer}\n";
        info += $"Model: {Model}\n";
        info += $"Year: {Year}\n";
        info += $"Fuel Level: {FuelLevel} gallons\n";
        info += $"Trash Capacity: {TrashCapacity} units\n";
        info += $"Trash Level: {TrashLevel} units\n";
        info += $"Distance Driven: {DistanceDriven} miles\n";
        if (IsMoving)
        {
            info += "Moving: Yes\n";
        }
        else
        {
            info += "Moving: No\n";
        }
    }

//Section 2
    public void Start()
    {
        if (fuelLevel > 0)
        {
            isMoving = true;
            Console.WriteLine("The garbage truck has started.");
        }
        else
        {
            Console.WriteLine("The garbage truck has no fuel and cannot start.");
        }
    }

    public void Stop()
    {
        isMoving = false;
        Console.WriteLine("The garbage truck has stopped.");
    }

    public void CollectTrash(int amount)
    {
        if (isMoving)
        {
            Console.WriteLine("The garbage truck is moving and cannot collect trash.");
        }
        else if (trashLevel + amount > trashCapacity)
        {
            Console.WriteLine("The garbage truck cannot collect that much trash. It is already full.");
        }
        else
        {
            trashLevel += amount;
            Console.WriteLine("{0} units of trash have been collected.", amount);
        }
    }

// Section 3
    public void EmptyTrash()
    {
        if (isMoving)
        {
            Console.WriteLine("The garbage truck is moving and cannot empty its trash.");
        }
        else if (trashLevel == 0)
        {
            Console.WriteLine("The garbage truck has no trash to empty.");
        }
        else
        {
            trashLevel = 0;
            Console.WriteLine("The garbage truck has emptied its trash.");
        }
    }

    public void Drive(int distance)
    {
        if (isMoving)
        {
            distanceDriven += distance;
            fuelLevel -= distance * 0.1; // Assume 1 gallon of fuel is consumed for every 10 miles driven
            Console.WriteLine($"The garbage truck has driven {Distance} miles.");
        }
        else
        {
            Console.WriteLine("The garbage truck is not moving and cannot be driven.");
        }
    }

}

```

## Describing Program Flow
In small groups, you will be reviewing the code below.  You should prepare to share out for any line of code - your instructor will call on groups to share specific lines.  Use as many technical terms as you can - for example, use 'string' instead of 'words'.  You will have 12 minutes in small groups to discuss - elect one member of your group to lead your share-out.

In this example, there is some code that exists but is not shown - what assumptions can you make about other classes that must exist in this program?

```c#
class Program
{
    static void Main(string[] args)
    {
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();

        Console.Write("Enter your age: ");
        int age = int.Parse(Console.ReadLine());

        Person person = new Person(name, age);

        Console.WriteLine("Welcome, " + person.Name + "!");

        for (int i = 1; i <= 10; i++)
        {
            if (i % 2 == 0)
            {
                Console.WriteLine(i + " is even.");
            }
            else
            {
                Console.WriteLine(i + " is odd.");
            }
        }

        Console.WriteLine(person.Name + ", you are " + person.AgeInDogYears() + " in dog years.");

        Console.WriteLine("Thank you for using this program!");
        Console.ReadLine();
    }
}
```





