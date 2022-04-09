# Find Your Hat
## About
This is a simple terminal game that lets you move through a field filled with holes to reach your hat.

## Functionality
- Users are prompted to enter a direction they want to go: 'r' for right, 'l' for left, 'u' and 'd' for up and down respectively when the game starts. The user is always positioned at the top left indicated by an '*'
- The game ends when the user goes out of bounds, falls into a hole or when the user finds his hat.
- The game field is randomnly generated at the beginning of the game.
- The user can alter the code to specify the percentage of holes they want on the field to simulate difficulty

## Issues
- Currently, the game can generate some fields that are impossible to go through. A function needs to be created to check that every generated field can be played

## Comments
- Some extra work can be done to improve the graphics in the termnial by using https://github.com/cronvel/terminal-kit 
- A hard mode can be created a where a hole is added after every move made by the user
- The program could also have the user start at a random location instead of the top left all the time.