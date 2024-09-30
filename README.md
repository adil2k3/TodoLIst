JavaScript To-Do List & Real-Time Digital Clock

This repository contains two primary JavaScript applications: a To-Do List and a Real-Time Digital Clock. Both are simple, functional web applications designed for personal use, combining task management and a live clock display.
Features
To-Do List

    Add tasks: Users can input tasks and add them to a list.
    Edit tasks: Users can edit any task directly from the list.
    Remove tasks: Tasks can be deleted individually.
    Mark tasks as complete: Clicking on a task will toggle a "line-through" effect to visually indicate completion.
    Local Storage: All tasks are saved in the browser’s local storage and persist even after the page is refreshed or closed.

Real-Time Digital Clock

    Current Time: Displays the current time in a 12-hour format (with leading zeroes for single-digit hours, minutes, and seconds).
    AM/PM Indicator: Displays either AM or PM based on the current hour.
    Day of the Week: Highlights the current day in yellow.
    Real-Time Updates: The clock updates every second, reflecting real-time changes.

    Usage
To-Do List

    Type your task in the input box and press the "ADD" button.
    Edit tasks by clicking the "Edit" button next to the task. The task will appear in the input box for editing.
    Delete tasks by clicking the "Remove" button.
    Mark tasks as completed by clicking directly on the task text.

Real-Time Clock

    The digital clock will automatically display the current day and time, with the day highlighted and the time in 12-hour format.

Code Overview
To-Do List

    addTodo(): Adds a new to-do to the list, creates the necessary HTML elements, and stores the task in local storage.
    updateTodo(): Handles both deletion and editing of to-do items.
    saveLocalTodos(): Saves tasks to local storage.
    getLocalTodos(): Loads tasks from local storage upon page load.
    deleteLocalTodos(): Removes a specific task from local storage.
    editLocalTodos(): Updates a task in local storage.

Real-Time Clock

    displayTime(): Retrieves the current time and formats it in 12-hour AM/PM format. It also highlights the current day in yellow.
    setInterval(): Ensures the clock updates every second.

Contributing

If you would like to contribute to this project, feel free to create a pull request. All suggestions are welcome!
