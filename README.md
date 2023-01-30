# Work Day Scheduler

## Description

This is a simple calendar application where a 9-5 employee can utilize to jot down important events throughout their workday by the hour. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery. The app features colors that are gray for hours that have passed, red for present time, and green to plan ahead in the future time.

## Installation

A starter code was provided with the basic layout design. The functionality of the planner is made available once the page is loaded. The current date is displayed at the top. I started with adding a click event to the save button. The id in the time-block was used to pull whatever time the user put their events in. DOM traversal was used to pull specific data in terms of the value in the text box, and what time the user chooses to store in local storage. 

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![alt text](assets/images/screenshot.png)

## Credits

For date and time, the app uses the [Day.js](https://day.js.org/en/) library.






## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

