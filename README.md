# The Odin Project: Etch-a-Sketch in the DOM

Project done as part of the [The Odin Project] (https://www.theodinproject.com/). The brief was to recreate an [Etch-a-Sketch] (https://en.wikipedia.org/wiki/Etch_A_Sketch) in the browser, with the mouse cursor serving as pen. The user should be able to reset the sketch as well as specify the dimensions of the board. This should then be generated as an even number of rows and columns.

## My learning aims for the project

- Use DOM manipulation and event listeners to generate HTML and CSS on the page according to user input.
- Have the project serve as a refresher on web design principles from previous lessons, use these to add polish to my project.

## Reflections post-project

What I learned through this project:
-**CSS**
1. UI Design: Made use of Google Fonts and a linear-gradient to give the UI a more polished look.
2. Flex: Used flex for both the sketch board and the display div, refreshed knowledge on using flex.

- **Git**
1. Branches: I made use of branches for most sub-tasks, taking each sub-task as its own feature. On completion, I merged the feature branch into my main and pushed to GitHub. The project also taught me how to work with remote branches, how to push to them and how to delete them when no longer needeed.

- **JavaScript**
1. DOM Manipulation: How to create element in a script file, give them classes, styles etc. before appending them to the DOM. Made use of a for loop to generate mulitple squares on the page. Used a nodelist to delete all squares using a forEach() call. 
2. CSS DOM Manipulation: Made use of the CSS DOM to change the value of flex, so that squares were distributed evenly in rows and columns for arbitary dimension inputs.
3. Event Listeners: Implemented a listener on a mouseover to give divs a background of black, creating the illusion of a pen on the screen. 
4. Callback functions: Made use of callback functions via addEventListener, used the event element generated to plug into a callback function.
5. Semi-colons: Took this project as an opportunity to clarify how to properly use semi-colons in JS, removed unnecessary ones from functions declarations and function calls as a result.

- **Problem Solving**
1. Breaking larger project into sub tasks: To start, I created a single square div in my script and appended this to the DOM. Then, I created 16 square divs and arranged them in a row. I then moved onto creating 16 rows and 16 columns as per the brief. I approached all elements of the project in this way
2. Understand, plan, divide and conquer: Made use of this methodology to solve each sub-task, defining inputs and outputs, as well as writing pseudocode on how to solve the sub-task. This made it more efficient to solve the sub-tasks and debug as necessary