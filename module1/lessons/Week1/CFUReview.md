# Week 1 Checks for Understanding

With your group, answer each question below.  Spend some time discussing each question _without_ using any resources; use your own recall of the topics covered this week.  If, after you have discussed without resources, your group needs assistance, use the raise hand feature and an instructor will come help!

1. Create a diagram that shows the 4 tasks shared by all computers.
2. Describe how your phone demonstrates the 4 tasks of a computer.
3. What is binary? What kinds of data can be represented with binary?
4. Which is larger, a bit or a byte? 
5. Create a list of all the c# datatypes you know.  Include 2 examples of each type
6. What kind of error would the following statement produce: `"The quick brown fox" + 32;`
7. What would be the output of the following: `Console.WriteLine("The quick brown fox".Length + 32);`
8. How would you convert the string `"32"` into the integer `32`?
9. Review the code below:
```c#
var userRole = "Admin";
var tasks = "process shipping, update users";
var isLoggedIn = true;

if (isLoggedIn)
{
    if (userRole != "Admin")
    {
        Console.WriteLine("Welcome! To access tasks, contact an administrator");
    }
    elseif (userRole == "Admin" && tasks.Length > 0)
    {
        Console.WriteLine("Today's tasks are: " + tasks);
    }
}
else
{
    Console.WriteLine("Please Log In");
}
```
* What will be printed to the console?
* What would be printed if we changed line 2 to `var tasks = "";`
