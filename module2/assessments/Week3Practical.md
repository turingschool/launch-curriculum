---
layout: page
title: Week 3 Exercise
---

# Week 3 Assessment

Follow these steps to setup the assessment:
1. Create a new database named `flight_db` using pgAdmin.
2. Copy [this script](./flight_db.txt) and paste it into the query tool to insert records into your database.
3. Run the following `SELECT` queries individually to get an understanding of the data:
> `SELECT * FROM airlines;`
> `SELECT * FROM flights;`

Please provide the QUERY (not the answer) that returns each of the following:
1. The flight numbers for all delayed flights (i.e. not on time).
1. The count of delayed flights.
1. The flight numbers, departure city, and arrival city of all flights departing from Denver (`DEN`).
1. The count of flights departing from Denver (`DEN`).
1. The sum of prices for all flights arriving to Raleigh-Durham (`RDU`).
1. The average price for all flights in the database.
1. The average price for all flights arriving to Raleigh-Durham.
1. The departure city and number of flights departing from each city.
1. The count of airlines in the database.
1. The count of flights in the database.
1. The flight number, departure city, arrival city, price, and airline name of each flight. Do not return the airline ID number.
1. The airline name, flight number, and price of each flight on the Delta airline. (Assume that you do not know the ID number of the Delta airline. In a larger database, you would be expected to memorize ID numbers).
1. The airline name and number of flights for each airline.

