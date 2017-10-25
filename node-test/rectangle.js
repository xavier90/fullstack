module.exports = (x, y, callback) => {
  if (x <= 0 || x <= 0) {
    setTimeout(() =>
      callback(new Error("length should be greater than 0"), null)
      , 2000);
  } else {
    setTimeout(() =>
      callback(null,
      {
        perimeter: (x, y) => (2*(x+y)),
        area: (x, y) => (x*y)
      })
      , 2000);
  }
}
