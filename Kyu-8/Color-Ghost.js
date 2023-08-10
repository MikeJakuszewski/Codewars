// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

//Solution 1

var Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][
    Math.floor(Math.random() * 4)
  ];
};

// solution 2

var Ghost = function () {
  var colors = ["white", "yellow", "purple", "red"];
  var colorIndex = Math.floor(Math.random() * colors.length);
  this.color = colors[colorIndex];
};
