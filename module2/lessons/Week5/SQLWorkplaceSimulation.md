---
layout: page
title: SQL Workplace Simulation
---

## Learning Goals
* Practice professional Slack communication
* Apply SQL skills to a more real-world scenario
* Practice giving and receiving feedback

As a developer, a large part of your job will include working with other people. Sometimes this involves working with coworkers on your development team, and sometimes it involves working with coworkers on other teams. We've already been practicing working with other developers, and today we are going to practice working with someone from another team.

As a developer who now knows the powerful language of SQL, one scenario you might run into is members of another team asking you to run some SQL to gather information or fix an error.

For today's workplace simulation, there are two roles:

* Role 1: The developer who is "On-Call" for their team and responsible for answering requests
* Role 2: The sales representative who works directly with customers and is reaching out to the development team with a request

All of your messages will be sent through Slack.

## Set up
1. Download this SQL file with your customer data: https://drive.google.com/file/d/1ukKxD3NPjEc2Z_lbrzX5DvaLPk7-GnsT/view?usp=share_link

2. Create a new database called SqlTeamSimulation in PgAdmin. Then Open the Query Tool for your SqlTeamSimulation database.
![create database in pgadmin](/assets/images/module2/Week5/create_database.png)

3. Click `Open File` and open the `SampleCustomerData` you downloaded. It's probably in your downloads folder.
![open file in pgadmin](/assets/images/module2/Week5/open_file_in_pgadmin.png)

4. Run the very large insert query to insert the 500 records. Make sure that you now have customer data by running `SELECT * FROM customers LIMIT 10;`

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br> This would be a great time for Slack waterfall.</p>
</aside>

## Warm-up
What words come to mind for the type of tone you want to have when communicating with a coworker to resolve a request? 

## Developing a Plan
Let's plan out the steps you might take when responding to a request. 


<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br> 
    What students come up with might be a bit different, but here is one example set of steps. There are two Aime's in the DB so they will need to ask a clarifying question of which one to edit and what to edit the address to.
    
    1. Developer: Ask clarifying follow-up questions.
    2. Sales Representative: Adds additional details. Maybe repeat this and the previous step.
    3. Developer: Write SQL to make the change.
    4. Developer: Have another developer review your code. Post the message you would send asking for someone to review your code.  Clearly state what the code is trying to do.
    5. Developer: Run the SQL to change the DB.
    6. Developer: Say when changes have been made and confirm that all is as expected.
</p>
</aside>

1. Sales Representative: Sends a message to the developer on call (This message is intentionally vague for practice purposes):

    > Hi, it turns out that Amie entered the wrong address in our online portal. As you know, we haven't built the edit feature for addresses yet. Can you update her data for me?

1. Developer: ????????????

## Your turn to practice!

1. Create a Slack thread that specifies who is playing which role. 
2. Go through the same steps we laid out together for Scenario 1, posting your messages on the thread. 
3. Switch roles and create a new Slack thread
4. Go through the same steps we laid out together for Scenario 2, posting your messages on the thread.

Your slack threads should look like this:
![open file in pgadmin](/assets/images/module2/Week5/workplace_simulation_thread.png)

### Scenario 1
<details><summary>Instructions for the person playing Role 2 (Sales Representative):</summary><br/>
<p align='center'>
First Message: Hello! Can you help me out with some research we are doing on our Midwest market? We are looking at a couple of key cities and we want to know where we currently have the most customers.

Follow up: You are interested to know if Chicago or Milwaukee has the most customers and how many customers each city has.
</p>
</details>

### Scenario 2
<details><summary>Instructions for the person playing Role 2 (Sales Representative):</summary><br/>
<p align='center'>
Hello! Can you help me fix some incorrect information? Florance Bookamer entered her information twice and having her in our system twice is causing a lot of confusion, especially because her address is incorrect for one of the records. Can you delete the incorrect record?

Follow up: One of the records she put her name as `Flo Bookamer`. You want to delete the record where her name is entered as `Flo Bookamer` and her address is `89999 E 15th St`. The correct address is `89992 E 15th St`.
</p>
</details>

## Feedback Time!

Now you're going to join a breakout room with another pair. Each pair will share their Slack conversations and receive feedback from the other pair.

Make sure that everyone hears **at least one thing are doing well** and **at least one thing they might want to change**.


## Debrief
How was that experience for you? Did anything surprise you or stand out?

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br> Would be good to have a bit of discussion in the debrief about if any of that felt scary. Hopefully editing and deleting records felt scary and you can talk about how it's important to have a process for making changes and to always check with your team and not just respond to whatever random requests you get.</p>
</aside>