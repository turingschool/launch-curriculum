## Lab Objectives
* Reinforce Creating Classes that have a collection of Objects
* Practice using object methods within other class methods.

** Instructor Notes ** Before the lab, prepare groups of 2/3 students and post to slack. Today's lab will be heavy on the practice side.  Plan to bring the group back together partway through the practice section to answer any questions and cover common misunderstandings (from your observations in breakout rooms.)

## Practice
To re-inforce the concept of object interaction, and classes including references to other classes, let's build on the Library exercise from todays [warmup](/Mod1/Lessons/Week4/ClassInteraction.md#warm-up).

In small groups, create a new Console app called DenverLibrary. In this project, create the following classes:
<!-- I love that you are really specific on what each class should contain/do. However, this can get a little tricky to parse out with larger requirements. Could we possibly break these out into a bullet or checklist style to make it a little easier for students to follow along? -->

![Image of three class diagrams with required Properties and Methods](/Mod1/Images/Week4/LibraryUML.png)

A `Book` should have two properties that are set on instantiation: string Title, and string Author.  Other than a constructor, `Book` does not need any methods.

A `Branch` represents a location in the library system, like ["Central Library"](https://www.denverlibrary.org/content/central-library), or ["John "Thunderbird Man" Emhoolah, Jr. Branch Library"](https://www.denverlibrary.org/thunderbird-man-branch-library).  A branch should have one property that is set on instantiation: string Name.  The branch constructor should also create an empty `List<Book>` assigned to the Property Books. In addition to these to properties, a Branch should be able to add a book to it's Books, and provide a `List<string>` of all authors represented at that branch.

A `Library` represents a city-wide library, like ["Denver Public Library"](https://www.denverlibrary.org/).  A library should have one property that is set on instantiation: string Name.  The library constructor should also create an empty `List<Branch>` assigned to the Property Branches. In addition to these to properties, a Library should be able to add a branch to it's Branches.  A Library should also be able to provide a `List<string>` of the names of all it's branches, as well as a `List<string>` of the titles of all of the books contained within all of its branches.

When complete, the following code should be able to be run in `Program.cs`.

```c#
using DenverLibrary;

var hungerGames = new Book("The Hunger Games", "Suzanne Collins");
var catchingFire = new Book("Catching Fire", "Suzanne Collins");
var mockingjay = new Book("Mockingjay", "Suzanne Collins");
var faultyStars = new Book("The Fault In Our Stars", "John Green");
var mockingbird = new Book("To Kill a Mockingbird", "Harper Lee");

var centralLibrary = new Branch("Central Library");
centralLibrary.AddBook(mockingbird);
centralLibrary.AddBook(mockingjay);

var thunderbirdMan = new Branch("John \"Thunderbird Man\" Emhoolah, Jr. Branch Library");
thunderbirdMan.AddBook(faultyStars);
thunderbirdMan.AddBook(catchingFire);
thunderbirdMan.AddBook(hungerGames);

List<string> centralAuthors = centralLibrary.AllAuthors();
// { "Harper Lee", "Suzanne Collins" }

List<string> thunderbirdAuthors = thunderbirdMan.AllAuthors();
// { "John Green", "Suzanne Collins", "Suzanne Collins" }
// Note: it is possible to return a list of *unique* authors, but you do not have to focus on that particular problem now :) 

var denverPublicLibrary = new Library("Denver Public Library");
denverPublicLibrary.AddBranch(centralLibrary);
denverPublicLibrary.AddBranch(thunderbirdMan);

List<string> branchNames = denverPublicLibrary.BranchNames();
// { "Central Library", "John \"Thunderbird Man\" Emhoolah, Jr. Branch Library" }

List<string> allBooksTitles = denverPublicLibrary.AllBooks();
// { "To Kill a Mockingbird", "Mockingjay", "The Fault In Our Stars", "Catching Fire",  "The Hunger Games" }
```

**Keep nn Eye on Slack!** We will be coming back together a few times to answer questions and any common issues that are coming up.

## Preparation

Up to this point, we've been using [Replit](https://replit.com/), an online version of an IDE (Integrated Development Environment). It is a great environment to learn the basics of programming. In fact, Replit supports dozens of programming languages, not just C#. However, to become a professional developer, we need to use more dedicated tools.

As our first step, we will install an IDE called Visual Studio directly on our machines. While there are several versions of Visual Studio, we will use the FREE version called **Visual Studio Community**. Learn more about Visual Studio [here](https://visualstudio.microsoft.com/vs/). We will work through the installation process in the next lesson.

Before we install Visual Studio, we need to install Git on our local machine. [Follow these instructions to install Git](/Mod1/Lessons/Week3/InstallGit.md). We won't use it right away, but it will be important as we continue working on new and existing projects.

<!-- I think this is a great lab! One thing that I was thinking about re: instructor notes might be to be even more explicit for this particular lab - perhaps do a checkin after each portion of class building (one after Book, one after Branch, one after Library) and giving students some "targets" on how long they should spend on each section (although I recognize that may be difficult for us to predict! ) -->
