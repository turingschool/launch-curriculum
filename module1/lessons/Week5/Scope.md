# Scope and Access Modifiers

## Learning Goals
* Identify how **scope** affects where variables can be accessed
* Have a reference to look at when **scope** errors show up
* Understand the difference between the **public** and **private** access modifiers
* Start thinking about when to use **public** vs **private**

# Scope

## Intro
Scope is what you have access to and where you have access to it.

Scope is the kind of thing that you think you don’t need to know until it starts causing you trouble. Even then, it is generally unnecessary to know the full rules. It’s more important that when you see unexpected behavior scope of your variables/method names is one of the things on your list to check.

## Examples of Scope Errors

You've probably already run into scope errors.

Here are two screenshots of situations where I got an error because I didn't have access to a variable I wanted.

Example 1:
![Scope Example 1](/Mod1/Images/Week5/ScopeExample1.png)

Example 2:
![Scope Example 2](/Mod1/Images/Week5/ScopeExample2.png)

Take 3 minutes to brainstorm: Have you encountered this error before? What did you do to fix the issue?

## Scope Definition

I like this definition from a [Microsoft Tutorial](https://learn.microsoft.com/en-us/training/modules/csharp-code-blocks/2-exercise-variable-scope).

> Variable scope is the **visibility of the variable** to the other code in your application. A locally scoped variable is only accessible inside of the code block in which it's defined. If you attempt to access the variable outside of the code block, you'll get a compiler error.

With this new definition in mind, we can see why the above code examples caused errors.

<!-- Instructor Note: Look to see if students ask what a code block is. We could include it, but I'm leaning on the side of less. -->

Example 1:
![Scope Example 1 With Highlighting](/Mod1/Images/Week5/ScopeExample1Highlighting.png)

We are trying to access the `username` variable outside of the scope where it is defined.

Example 2:
![Scope Example 2 With Highlighting](/Mod1/Images/Week5/ScopeExample2Highlighting.png)

Note that a variable is accessible **everywhere** inside the code block in which it's defined, even from within a nested code block.

## Practice

Here is a modified version of some code from our Class Interaction Lesson. 

>Take 3 minutes: For each variable defined, determine the box for the scope where that variable is available.

```c#
Person stevie = new Person("Stevie");

class Person
{
    public string Name { get; }
    public List<Pet> Pets { get; }

    public Person(string name)
    {
        Name = name;
        Pets = new List<Pet>();
    }

    public void AddPet(Pet pet)
    {
        Pets.Add(pet);
    }

    public List<string> ListPetsNames()
    {
        var petNames = new List<string>();

        foreach (var pet in Pets)
        {
            petNames.Add(pet.Name);
            if (pet.Name == "Fluffy")
            {
                Console.WriteLine("Fluffy is my favorite name!")
                Console.WriteLine($"We can access {petNames.Count} here too!")

            }
        }

        return petNames;
    }
}
```
<details><summary>Solution</summary><br/>

![Scope Example 3 With Highlighting](/Mod1/Images/Week5/ScopeExample3.png)
</details>

## Fixing Scope Errors

With your partner, take 15 minutes to walk through this training that introduces a common pattern for fixing scope errors, then discuss the questions below.

https://learn.microsoft.com/en-us/training/modules/csharp-code-blocks/2-exercise-variable-scope

> In your own words, why did the code in step 2 have an error? </br> In your own words, how did you fix the scope error created in step 2? </br> What would happen if scope didn't exist? What problems might this cause?

# Access Modifiers

We are already familiar with including access modifiers when adding properties to a class. 
```c#
public string UserName;
private string Role;
```
But when would you use `public` vs `private`? Why are access modifiers so helpful? Let's see an example!

## Why are access modifiers helpful?

Imagine that you're working on the development team for a bank. Your teammate Isabella wrote the following BankAccount class. 

```c#
class BankAccount
{
    public string Name;
    public double Balance { get; set; }

    public BankAccount(string name)
    {
        Name = name;
        Balance = 0;
    }

    public void MakeDeposit(double deposit)
    {
        Balance += deposit;
        // Update records to keep track of this deposit (not implemented in this example)
        updateRecords(someDataPassedInHere)
    }

    public void MakeWithdrawal(double withdrawal)
    {
        Balance -= withdrawal;
        // Update records to keep track of this withdrawal (not implemented in this example)
        updateRecords(someDataPassedInHere);
    }

    public double GetBalance() { 
    {
        return Balance;
    }

}
```

You're teammate Sergio wrote the code below using Isabella's BankAccount class. It's your job to give Sergio feedback on his code. Take 5 minutes and discuss with your partner what feedback you would give Sergio. How is Sergio using the BankAccount class differently than Isabella expected he would? Why is this a problem?

```c#
class MisusingBankAccountClass
{
    static void Main()
    {
        var bankAccountGiana = new BankAccount("Giana");
        bankAccountGiana.Balance += 100;
        Console.WriteLine(bankAccountGiana.Balance);
    }
}
```

Did you see how Sergio is directly updating the balance of the account? He isn't using the MakeDeposit method that Isabella created. And because he's not using the MakeDeposit method, the code to update the records for the deposit isn't run!

Isabella expected other developers would use the BankAccount class as follows where they use methods instead of modifying the balance directly.

```c#
class UsingBankAccountClass
{
    static void Main()
    {
        var bankAccountGiana = new BankAccount("Giana");
        bankAccountGiana.MakeDeposit(100);
        Console.WriteLine(bankAccountGiana.GetBalance());
    }
}
```

Is there a way to structure the BankAccount class to ensure other developers used the methods as expected and don't directly modify the balance?

This is where access modifiers come in!

Instead of defining the Balance variable as `public` Isabella could have defined it as `private`. This would have caused Sergio to get the following error.


![Access Modifiers Example](/Mod1/Images/Week5/AccessModifiersExample.png)

## Definitions

`public`: The code is accessible by all classes

`private`: The code is only accessible within the same class

Access modifiers can be applied to both variables and methods. Note above how Balance is still available within the MakeDeposit method because the MakeDeposit method is in the same class.


It can be helpful to as yourself the following questions when determining `public` vs `private`.

Do I need code outside of the class to have access to this variable or method? (if yes, make it public)

Is this an internal detail that should not be accessed from outside of the class? (if yes, make it private)

You *could* make all of your variables and methods public and the code would still work, but as we saw, that can lead to unexpected uses of the class and headaches down the line.

C# provides other types of access modifiers for more specific situations such as protected and internal. If you find yourself wanting a level of access between public and private, you can learn more in the documentation [here](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers). 

## Check for Understanding
* How would you describe scope?
* How would you describe the difference between the public and private access modifiers?


### Additional Practice
https://www.w3schools.com/cs/cs_access_modifiers.php