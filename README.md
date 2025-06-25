# Employee Directory v2

The organization is pleased with your work in creating the proof-of-concept employee-management API.
Take your work to the next level by adding middleware and organizing your endpoints into routers!

## Requirements

This repository contains the solution code to the previous workshop.
Refactor this code to meet the following requirements:

- A catch-all error-handling middleware sends status 500 for uncaught errors.
- All `/employees` routes are organized into a separate router.
- `POST /employees` adds a new employee with the provided `name` from the request body
  - Send 400 if request body or name is not correctly provided
  - Send 201 with the new employee if name is correctly provided
  - The new employee's ID should be unique (using the array index is fine!)

Feel free to make new folders and files as you see fit!

## Submission

Submit the link to your public GitHub repository.
