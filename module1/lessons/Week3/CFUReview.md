# Week 3 Checks for Understanding

With your group, answer each question below.  Spend some time discussing each question _without_ using any resources; use your own recall of the topics covered this week.  If, after you have discussed without resources, your group needs assistance, use the raise hand feature and an instructor will come help!

<!-- 
1. Imagine you are explaining an Array or List to one of your non-developer friends; write out an explanation of what **index** is - how does it apply to lists/arrays, and why is it useful?

2. How are Arrays and Lists similar?  How are they different?

3. Create an Array that will hold your top 8 best friends.

4. Create a List that will hold your favorite movies.

5. For the two collections above, why is it appropriate for best friends to be an Array, and for favorite movies to be a List?

6. Create a Dictionary that organizes an artist's discography - you could use the data below as a starting point:
```
Jimmy Buffett: abbreviated discography

Son of a Son of a Sailor:
    - Cheeseburger in Paradise
    - Manana
    - Cowboy in the Jungle
Christmas Island:
    - Run Rudolph Run
    - Mele Kalikimaka
    - Ho Ho Ho and a Bottle of Rum
Banana Wind:
    - Only Time Will Tell
    - School Boy Heart
    - Desdamona's Building a Rocket Ship
```
 -->

<!-- Jimmy Buffett lol. This is gold. I bet there is 0% chance our students will understand who/what a Jimmy Buffett is. -->

1. Create a `User` class with the following properties and methods:
    * Properties
        - string FullName
        - string UserName
        - DateTime Birthdate
        - List<string> FavoriteFoods

    * Methods
        - Age(); returns an integer representing the user's age.
        - DaysToBirthday(); returns an integer representing how many days there are until the user's next birthday.
        - AddFavoriteFood(string food); adds a new food to the user's FavoriteFoods list (no return value).
        - Introduce(); Writes to the console an introduction of the user, it would look something like:
        ```
        Hello, this is <UserName>.  My name is <FullName>, and I am <Age()> years old.
        I like <FavoriteFood>
        I like <AnotherFavoriteFood>
        I like <AnotherFavoriteFood>
        ```
        This summary should include **all** of a user's favorite foods, no matter how many, or few they have.

1. In your own words, what is the difference between a **class** and an **instance of an object**.  How are the two terms related?

1. What is OOP, and what are some benefits of this programming approach?

1. Imagine you are a developer at a new social media app, our app has two types of users: posting users, and following users.  Posting users create and post content; following users subscribe to (follow) posting users.  Come up with 2 classes that model these two user types.  Make sure there is a way to indicate how many followers a posting user has.

1. Take a look at the class below.  What tests would need to be written to verify that this class is working properly?  You don't need to write the tests, just come up with the names those tests might have :)

```c#
public class MediaPlayer
{
	private File _content;

    public MediaPlayer(File content)
    {
        _content = content;
    }

    public void Play()
    {
        // Code that plays the content.
    }

    public void Pause()
    {
        // Code that pauses the content.
    }

    public string Properties()
    {
        // Code that returns info about the file being played.
    }
}
```

6. In the code above, can you identify any abstractions? A reminder: abstractions are things that are hidden away from the person using this class.


1. A method signature could look like: `void SayHello();` or `string SayHello();`.  Based only on the signatures, what would be different about the implementation of each method?

1.  Revisit some pseudo-code you wrote in the [Methods Lab](/Mod1/Labs/Week2/Methods.md).  Now, you are going to implement the methods! Fork [this repl](https://replit.com/@launch-team/M1W3-CFUReview) and complete the following exercises:

**Exercise 1**
Implement a method called `SumSecondNumbers()` that takes a multidementional array as an argument, where each element is an array of 2 integers, and sums the second integer of each sub-array.  You may want to take a look at [this resource](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/passing-arrays-as-arguments#passing-multidimensional-arrays-as-arguments) to help you get started.  The method should be able to be called like this:

```c#
int[,] numberPairs = { { 1, 2 }, { 2, 3 }, { 3, 4 } };
int sumOfSecondNums = SumSecondNumbers(numberPairs);

Console.WriteLine(sumOfSecondNums);
//Output -> 9
```

<!-- Love to see you circling back on the pseudocode that students wrote in the labs! This could be a great pattern to try to continue as we move forward! -->

**Exercise 2**
Implement a method called `NormalizeZipCodes()` that takes an array of integers as an argument, and returns an array of stringified versions of those integers as zip codes.  
*A note on zip codes:  All zip codes are 5 characters long; if an integer zip code is fewer than 5 digits, we should add as many `0`s to the front of that number as we need to reach 5 characters.  So, a given integer zip of `525` would be normalized into `"00525"`.  The method should be able to be called like this:
```c#
var zipCodes = new[] {80228, 5031, 2112, 52556, 515 };
string[] result = NormalizedZipCodes(zipCodes);

Console.WriteLine(result);
//Output -> 80228, 05031, 02112, 52556, 00515
```

**Exercise 3**
Implement a method called `GetWordsByFirstLetter()` that takes two arguments: a character, and a list of strings.  The method should return a subset of the given list that contains all the words that start with the given character.  The method should be able to be called like this:

```c#
var words = new List<string> {"weirdo", "quill", "fast", "krill", "quaint", "quieter", "koala"};
var qWords = GetWordsByFirstLetter('q', words);
var kWords = GetWordsByFirstLetter('k', words);
var jWords = GetWordsByFirstLetter('j', words);

Console.WriteLine(qWords);
//Output -> quill, quaint, quieter

Console.WriteLine(kWords);
//Output -> krill, koala

console.WriteLine(jwords);
//Output -> 
```
