---
layout: page
title:  Mod 1 Review
---

1. For the `Unicorn` and `Power` classes below:
    * What C# datatypes are represented?
    * Are there any datatypes that are not represented?

    ```c#
    public class Unicorn
    {
        public string Name {get; private set;};
        public string Color { get; set; }
        public List<Power> MagicalPowers;
        public int Energy;

        public Unicorn(string name, string color)
        {
            Name = name;
            Color = color;
            MagicalPowers = new List<Power>();
            Energy = 100;
        }

        public void AddPower(Power magicalPower)
        {
            MagicalPowers.Add(magicalPower);
        }

        public void DisplayPowers()
        {
            foreach (var power in MagicalPowers)
            {
                Console.WriteLine($"*-*-*{power.Name}*.*.*");
            }
        }
    }

    public class Power
    {
        public string Name { get; }
        public int EnergyRequired {get; }

        public Power (string name, int energyRequired)
        {
            Name = name;
            EnergyRequired = energyRequired
        }
    }
    ```

1. Using the Unicorn and Power classes above, write the code required to create a unicorn, create two powers, and add those two powers to your unicorn? (feel free to recreate this code in Visual Studio and try running it 🙂)
1. Again, using the Unicorn and Power classes above, what tests would need to be written to verify that these classes are working properly?  You don't need to write the tests, just come up with the names those tests might have.
1. In your own words, what is the difference between a **class** and an **instance of an object**.  How are the two terms related?
1. Visual Studio is an IDE.  In your own words, what is an IDE?
1. Spend 2 minutes googling to see if you can find any other IDEs. How many others did you find?
1. The code below has a bug; where would you put a breakpoint to start debugging what might be happening (feel free to recreate this code in Visual Studio and try running it 🙂)

    ```c#
    // This program should print an abbreviated version of a kids song to help them learn the numbers 1 to 20.  The song should display every number, and never go above 20.

    1  Console.Write("First comes: ");
    2  
    3  for (var i = 0; i < 20; i++)
    4  {
    5      Console.WriteLine(i);
    6      Console.Write("then comes: ");
    7  }
    8  Console.WriteLine("And that's how you count to 20!");
    9
    ```
1. How are Arrays and Lists similar?  How are they different?
1. How would you convert the string `"32"` into the integer `32`?
1. Define the following terms:
    * Loop
    * Iteration
    * Infinite Loop