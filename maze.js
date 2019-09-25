/*
You have entered a Maze and need to find your way out of it. There are more than one possible exit from the Maze. Write a recursive function that will help you find a possible exit though the maze

You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', '*', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
The Maze is represented as a NM matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by `*`. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit can be RRDDLLDDRRRRRR
*/

const mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];


function solveMaze(grid, r = 0, c = 0, direction = '', path = '') {

  if (r < 0 || r >= grid[0].length || c < 0 || c >= grid.length || grid[r][c] === '*') {
    return false;
  }

  if (grid[r][c] === 'e') {
    return path + direction;
  }

  grid[r][c] = '*';
  // at each function call, visit every possible cell (top, right, bottom, down)...assuming we can even reach that space - we might not because it's out of bounds, or it's a * or it's been visited already

  // visit a cell and include the direction 
  // top
  return solveMaze(grid, r - 1, c, 'U', path + direction) ||
  solveMaze(grid, r, c + 1, 'R', path + direction) ||
  solveMaze(grid, r + 1, c, 'D', path + direction) || 
  solveMaze(grid, r, c - 1, 'L', path + direction)

}


solveMaze(mySmallMaze)