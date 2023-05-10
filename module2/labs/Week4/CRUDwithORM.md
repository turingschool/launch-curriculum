---
layout:     page
title:      CRUD with ORM Lab
---

## Lab Objectives
- Practice CRUD operations using Entity Framework in C#

### Setup
1. Create a new console application project in Visual Studio. Name the project "CrudOrmLab".
1. Add Entity Framework to your project.

### Instructions to create Students

1. Create a new class called `Student` with the following properties:
    * `FirstName`: first name of student
    * `LastName`: last name of student
    * `Age`: age of student in years

1. Create a new class called `StudentContext` that inherits from `DbContext`.
    ```c#
    public class StudentContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
    }
    ```

1. In your Main method, create a new instance of your `StudentContext`, add two new students, and save changes to your database:

    ```c#
    using (var context = new StudentContext())
    {
        var me = new Student { ... };    // use your name and age (age can be any number)
        var celeb = new Student { ... }; // choose a famous person's name, age can be any number

        context.Students.Add(me);
        context.Students.Add(celeb);
        context.SaveChanges();
    }
    ```

1. Retrieve the student records you just added and print them to the console:
    ```c#
    using (var context = new StudentContext())
    {
        var students = context.Student.ToList();
        foreach (var student in students)
        {
            Console.WriteLine($"Name: {student.FirstName} {student.LastName}, Age: {student.Age}");
        }
    }
    ```

1. Update your student record and save the changes:
    ```c#
    using (var context = new StudentContext())
    {
        // Replace "Megan" with your first name (unless your name is actually Megan)
        var me = context.Students.First(student => student.FirstName == "Megan"); 
        if (me != null)
        {
            me.Age = 35;
            context.SaveChanges();
        }
    }
    ```

1. Delete the celebrity student record and save the changes:
    ```c#
    using (var context = new StudentContext())
    {
        // Replace "McMahon" with your celebrity's last name (unless their last name is actually McMahon)
        var celeb = context.Students.Single(student => student.LastName == "McMahon"); 
        if (celeb != null)
        {
            context.Students.Remove(celeb);
            context.SaveChanges();
        }
    }
    ```

### Instructions to create Courses

Great job so far! Repeat the process above to create Courses.

1. Create a new class called `Course` with the following properties:
    * `Name`: name of the course
    * `Capacity`: maximum number of students
    * `Roster`: an array of students

1. Create a new class called `CourseContext` that inherits from `DbContext`.
    ```c#
    public class CourseContext : DbContext
    {
        public DbSet<Course> Courses { get; set; }
    }
    ```

1. In your Main method, create a new instance of your `CourseContext`, add two new courses, and save changes to your database:

    ```c#
    using (var context = new CourseContext())
    {
        var math = new Course { Name = "Algebra", Capacity = 8, Roster = new List<Student>()};
        var science = new Course { Name = "Chemistry", Capacity = 6, Roster = new List<Student>()};

        context.Courses.Add(math);
        context.Courses.Add(science);
        context.SaveChanges();
    }
    ```

1. Retrieve the courses you just added and print them to the console:
    ```c#
    using (var context = new CourseContext())
    {
        var courses = context.Course.ToList();
        foreach (var course in courses)
        {
            Console.WriteLine($"Name: {course.Name}, Max Students {course.Capacity}");
        }
    }
    ```

1. Add your student record to the math course and save the changes:
    ```c#
    using (var context = new CourseContext())
    {
        // Replace "Megan" with your first name (unless your name is actually Megan)
        var me = context.Students.First(student => student.FirstName == "Megan"); 
        var math = context.Courses.First(course => course.Name == "Algebra");

        if (math != null && me != null)
        {
            math.Roster.Add(me);
            context.SaveChanges();
        }
    }
    ```

1. Delete the science course and save the changes:
    ```c#
    using (var context = new CourseContext())
    {
        var science = context.Courses.Single((course => course.Name == "Chemistry"); 
        if (science != null)
        {
            context.Students.Remove(science);
            context.SaveChanges();
        }
    }
    ```