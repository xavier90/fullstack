var rect = require('./rectangle.js');

function solveRec(l, b) {
  console.log("Solving for rectangle with l = " + l + "and b = " + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log("The area is: " + rectangle.area());
      console.log("The perimeter is: " + rectangle.perimeter());
    }
  });

  console.log("This statement is after the call");
}

solveRec(1,3);
solveRec(-1, 3);
