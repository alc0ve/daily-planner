# Work Day Scheduler

## Description

This is a simple calendar application where a 9-5 employee can utilize to jot down important events throughout their workday by the hour. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery. The app features colors that are gray for hours that have passed, red for present time, and green to plan ahead in the future time.

## Installation

A starter code was provided with the basic layout design. The functionality of the planner is made available once the page is loaded. The current date is displayed at the top. I started with adding a click event to the save button. The id in the time-block was used to pull whatever time the user put their events in. DOM traversal was used to pull specific data in terms of the value in the text box, and what time the user chooses to store in local storage. I had a TA help with "for loop" in jQuery form and she helped me with color coding for each hour. Then, I had to figure out how to pull from local storage whatever the user types into the planner so that the content stays in the boxes if the page is refreshed.

## Usage

Anyone needing a 9-5 planner can use this app to jot down important tasks to do during those hours of the day. The time blocks will change according to the current time in the day, gray showing past, red showing present time, and green for future time. The user can type directly into the boxes and will keep that information even when the page is refreshed.

![alt text](assets/images/screenshot.png)

## Credits

For date and time, the app uses the [Day.js](https://day.js.org/en/) library.

For my time tracker and changing colors of the boxes for every hour, I had a TA Sandra S., help me out and clean up my code. Thanks!


