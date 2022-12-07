function main() {
  var kanvas = document.getElementById("kanvas");
  var gl = kanvas.getContext("webgl");

  var vertices = [
    4.5, 1, -2, 1, 0, 0, 0, 0, -1, 5, 1, -2, 1, 0, 0, 0, 0, -1, 5, 1.5, -2, 1, 0, 0, 0, 0, -1, 4.5, 1.5, -2, 1, 0, 0, 0, 0, -1,

    4.5, 1.5, 2, 1, 1, 0, 0, 0, 1, 5, 1.5, 2, 1, 1, 0, 0, 0, 1, 5, 1.5, -2, 1, 1, 0, 0, 0, 1, 4.5, 1.5, -2, 1, 1, 0, 0, 0, 1,

    4.5, 1, 2, 0, 1, 0, -1, 0, 0, 4.5, 1.5, 2, 0, 1, 0, -1, 0, 0, 4.5, 1.5, -2, 0, 1, 0, -1, 0, 0, 4.5, 1, -2, 0, 1, 0, -1, 0, 0,

    5, 1, 2, 0, 0, 1, 1, 0, 0, 4.5, 1, 2, 0, 0, 1, 1, 0, 0, 4.5, 1, -2, 0, 0, 1, 1, 0, 0, 5, 1, -2, 0, 0, 1, 1, 0, 0,

    5, 1.5, 2, 1, 0.5, 0, 0, -1, 0, 5, 1, 2, 1, 0.5, 0, 0, -1, 0, 5, 1, -2, 1, 0.5, 0, 0, -1, 0, 5, 1.5, -2, 1, 0.5, 0, 0, -1, 0,

    4.5, 1, 2, 1, 1, 1, 0, 1, 0, 5, 1, 2, 1, 1, 1, 0, 1, 0, 5, 1.5, 2, 1, 1, 1, 0, 1, 0, 4.5, 1.5, 2, 1, 1, 1, 0, 1, 0,

    2.5, 1, -2, 1, 0, 0, 0, 0, -1, 4, 1, -2, 1, 0, 0, 0, 0, -1, 4, 1.5, -2, 1, 0, 0, 0, 0, -1, 2.5, 1.5, -2, 1, 0, 0, 0, 0, -1,

    2.5, 1.5, -1.5, 1, 1, 0, 0, 0, 1, 4, 1.5, -1.5, 1, 1, 0, 0, 0, 1, 4, 1.5, -2, 1, 1, 0, 0, 0, 1, 2.5, 1.5, -2, 1, 1, 0, 0, 0, 1,

    2.5, 1, -1.5, 0, 1, 0, -1, 0, 0, 2.5, 1.5, -1.5, 0, 1, 0, -1, 0, 0, 2.5, 1.5, -2, 0, 1, 0, -1, 0, 0, 2.5, 1, -2, 0, 1, 0, -1, 0, 0,

    2.5, 1, -1.5, 0, 0, 1, 1, 0, 0, 4, 1, -1.5, 0, 0, 1, 1, 0, 0, 4, 1, -2, 0, 0, 1, 1, 0, 0, 2.5, 1, -2, 0, 0, 1, 1, 0, 0,

    4, 1, -1.5, 1, 0.5, 0, 0, -1, 0, 4, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0, 4, 1.5, -2, 1, 0.5, 0, 0, -1, 0, 4, 1, -2, 1, 0.5, 0, 0, -1, 0,

    2.5, 1, -1.5, 1, 1, 1, 0, 1, 0, 4, 1, -1.5, 1, 1, 1, 0, 1, 0, 4, 1.5, -1.5, 1, 1, 1, 0, 1, 0, 2.5, 1.5, -1.5, 1, 1, 1, 0, 1, 0,

    3.5, 1, -1.5, 1, 1, 1, 0, 1, 0, 4, 1, -1.5, 1, 1, 1, 0, 1, 0, 4, 1.5, -1.5, 1, 1, 1, 0, 1, 0, 3.5, 1.5, -1.5, 1, 1, 1, 0, 1, 0,

    2.5, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0, 3, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0, 4, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0, 3.5, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0,

    2.5, 1, 1.5, 0, 0, 1, 1, 0, 0, 2.5, 1.5, 1.5, 0, 0, 1, 1, 0, 0, 3.5, 1.5, -1.5, 0, 0, 1, 1, 0, 0, 3.5, 1, -1.5, 0, 0, 1, 1, 0, 0,

    3, 1, 1.5, 0, 1, 0, -1, 0, 0, 2.5, 1, 1.5, 0, 1, 0, -1, 0, 0, 3.5, 1, -1.5, 0, 1, 0, -1, 0, 0, 4, 1, -1.5, 0, 1, 0, -1, 0, 0,

    3, 1.5, 1.5, 1, 1, 0, 0, 0, 1, 3, 1, 1.5, 1, 1, 0, 0, 0, 1, 4, 1, -1.5, 1, 1, 0, 0, 0, 1, 4, 1.5, -1.5, 1, 1, 0, 0, 0, 1,

    2.5, 1, 1.5, 1, 0, 0, 0, 0, -1, 3, 1, 1.5, 1, 0, 0, 0, 0, -1, 3, 1.5, 1.5, 1, 0, 0, 0, 0, -1, 2.5, 1.5, 1.5, 1, 0, 0, 0, 0, -1,

    2.5, 1, 2, 1, 0, 0, 0, 0, -1, 4, 1, 2, 1, 0, 0, 0, 0, -1, 4, 1.5, 2, 1, 0, 0, 0, 0, -1, 2.5, 1.5, 2, 1, 0, 0, 0, 0, -1,

    4, 1.5, 2, 1, 1, 0, 0, 0, 1, 2.5, 1.5, 2, 1, 1, 0, 0, 0, 1, 2.5, 1.5, 1.5, 1, 1, 0, 0, 0, 1, 4, 1.5, 1.5, 1, 1, 0, 0, 0, 1,

    2.5, 1, 2, 0, 1, 0, -1, 0, 0, 2.5, 1.5, 2, 0, 1, 0, -1, 0, 0, 2.5, 1.5, 1.5, 0, 1, 0, -1, 0, 0, 2.5, 1, 1.5, 0, 1, 0, -1, 0, 0,

    2.5, 1, 2, 0, 0, 1, 1, 0, 0, 4, 1, 2, 0, 0, 1, 1, 0, 0, 4, 1, 1.5, 0, 0, 1, 1, 0, 0, 2.5, 1, 1.5, 0, 0, 1, 1, 0, 0,

    4, 1.5, 2, 1, 0.5, 0, 0, -1, 0, 4, 1, 2, 1, 0.5, 0, 0, -1, 0, 4, 1, 1.5, 1, 0.5, 0, 0, -1, 0, 4, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0,

    2.5, 1, 1.5, 1, 1, 1, 0, 1, 0, 4, 1, 1.5, 1, 1, 1, 0, 1, 0, 4, 1.5, 1.5, 1, 1, 1, 0, 1, 0, 2.5, 1.5, 1.5, 1, 1, 1, 0, 1, 0,

    0.5, 1, -2, 1, 0, 0, 0, 0, -1, 1, 1, -2, 1, 0, 0, 0, 0, -1, 1, 1.5, -2, 1, 0, 0, 0, 0, -1, 0.5, 1.5, -2, 1, 0, 0, 0, 0, -1,

    0.5, 1.5, 2, 1, 1, 0, 0, 0, 1, 1, 1.5, 2, 1, 1, 0, 0, 0, 1, 1, 1.5, -2, 1, 1, 0, 0, 0, 1, 0.5, 1.5, -2, 1, 1, 0, 0, 0, 1,

    0.5, 1, 2, 0, 1, 0, -1, 0, 0, 0.5, 1.5, 2, 0, 1, 0, -1, 0, 0, 0.5, 1.5, -2, 0, 1, 0, -1, 0, 0, 0.5, 1, -2, 0, 1, 0, -1, 0, 0,

    1, 1, 2, 0, 0, 1, 1, 0, 0, 0.5, 1, 2, 0, 0, 1, 1, 0, 0, 0.5, 1, -2, 0, 0, 1, 1, 0, 0, 1, 1, -2, 0, 0, 1, 1, 0, 0,

    1, 1.5, 2, 1, 0.5, 0, 0, -1, 0, 1, 1, 2, 1, 0.5, 0, 0, -1, 0, 1, 1, -2, 1, 0.5, 0, 0, -1, 0, 1, 1.5, -2, 1, 0.5, 0, 0, -1, 0,

    0.5, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1.5, 2, 1, 1, 1, 0, 1, 0, 0.5, 1.5, 2, 1, 1, 1, 0, 1, 0,

    1, 1, 1, 1, 1, 1, 0, 1, 0, 1.5, 1, 1, 1, 1, 1, 0, 1, 0, 1.5, 1.5, 1, 1, 1, 1, 0, 1, 0, 1, 1.5, 1, 1, 1, 1, 0, 1, 0,

    1, 1.5, 1, 1, 0.5, 0, 0, -1, 0, 1.5, 1.5, 1, 1, 0.5, 0, 0, -1, 0, 1.5, 1.5, 0.5, 1, 0.5, 0, 0, -1, 0, 1, 1.5, 0.5, 1, 0.5, 0, 0, -1, 0,

    1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1.5, 1, 0, 0, 1, 1, 0, 0, 1, 1.5, 0.5, 0, 0, 1, 1, 0, 0, 1, 1, 0.5, 0, 0, 1, 1, 0, 0,

    1.5, 1, 1, 0, 1, 0, -1, 0, 0, 1, 1, 1, 0, 1, 0, -1, 0, 0, 1, 1, 0.5, 0, 1, 0, -1, 0, 0, 1.5, 1, 0.5, 0, 1, 0, -1, 0, 0,

    1.5, 1.5, 1, 1, 1, 0, 0, 0, 1, 1.5, 1, 1, 1, 1, 0, 0, 0, 1, 1.5, 1, 0.5, 1, 1, 0, 0, 0, 1, 1.5, 1.5, 0.5, 1, 1, 0, 0, 0, 1,

    1, 1, 0.5, 1, 0, 0, 0, 0, -1, 1.5, 1, 0.5, 1, 0, 0, 0, 0, -1, 1.5, 1.5, 0.5, 1, 0, 0, 0, 0, -1, 1, 1.5, 0.5, 1, 0, 0, 0, 0, -1,

    1.5, 1, 0.5, 1, 0, 0, 0, 0, -1, 2, 1, 0.5, 1, 0, 0, 0, 0, -1, 2, 1.5, 0.5, 1, 0, 0, 0, 0, -1, 1.5, 1.5, 0.5, 1, 0, 0, 0, 0, -1,

    1.5, 1.5, 2, 1, 1, 0, 0, 0, 1, 2, 1.5, 2, 1, 1, 0, 0, 0, 1, 2, 1.5, 0.5, 1, 1, 0, 0, 0, 1, 1.5, 1.5, 0.5, 1, 1, 0, 0, 0, 1,

    1.5, 1, 2, 0, 1, 0, -1, 0, 0, 1, 5, 1.5, 2, 0, 1, 0, -1, 0, 0, 1.5, 1.5, 0.5, 0, 1, 0, -1, 0, 0, 1.5, 1, 0.5, 0, 1, 0, -1, 0, 0,

    2, 1, 2, 0, 0, 1, 1, 0, 0, 1.5, 1, 2, 0, 0, 1, 1, 0, 0, 1.5, 1, 0.5, 0, 0, 1, 1, 0, 0, 2, 1, 0.5, 0, 0, 1, 1, 0, 0,

    2, 1.5, 2, 1, 0.5, 0, 0, -1, 0, 2, 1, 2, 1, 0.5, 0, 0, -1, 0, 2, 1, 0.5, 1, 0.5, 0, 0, -1, 0, 2, 1.5, 0.5, 1, 0.5, 0, 0, -1, 0,

    1.5, 1, 2, 1, 1, 1, 0, 1, 0, 2, 1, 2, 1, 1, 1, 0, 1, 0, 2, 1.5, 2, 1, 1, 1, 0, 1, 0, 1.5, 1.5, 2, 1, 1, 1, 0, 1, 0,

    -1.5, 1, -2, 1, 0, 0, 0, 0, -1, 0, 1, -2, 1, 0, 0, 0, 0, -1, 0, 1.5, -2, 1, 0, 0, 0, 0, -1, -1.5, 1.5, -2, 1, 0, 0, 0, 0, -1,

    -1.5, 1.5, -1.5, 1, 1, 0, 0, 0, 1, 0, 1.5, -1.5, 1, 1, 0, 0, 0, 1, 0, 1.5, -2, 1, 1, 0, 0, 0, 1, -1.5, 1.5, -2, 1, 1, 0, 0, 0, 1,

    -1.5, 1, -1.5, 0, 1, 0, -1, 0, 0, -1.5, 1.5, -1.5, 0, 1, 0, -1, 0, 0, -1.5, 1.5, -2, 0, 1, 0, -1, 0, 0, -1.5, 1, -2, 0, 1, 0, -1, 0, 0,

    -1.5, 1, -1.5, 0, 0, 1, 1, 0, 0, 0, 1, -1.5, 0, 0, 1, 1, 0, 0, 0, 1, -2, 0, 0, 1, 1, 0, 0, -1.5, 1, -2, 0, 0, 1, 1, 0, 0,

    0, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0, 0, 1, -1.5, 1, 0.5, 0, 0, -1, 0, 0, 1, -2, 1, 0.5, 0, 0, -1, 0, 0, 1.5, -2, 1, 0.5, 0, 0, -1, 0,

    -1.5, 1.5, -1.5, 1, 1, 1, 0, 1, 0, -1.5, 1, -1.5, 1, 1, 1, 0, 1, 0, 0, 1, -1.5, 1, 1, 1, 0, 1, 0, 0, 1.5, -1.5, 1, 1, 1, 0, 1, 0,

    -0.5, 1, -1.5, 1, 1, 1, 0, 1, 0, 0, 1, -1.5, 1, 1, 1, 0, 1, 0, 0, 1.5, -1.5, 1, 1, 1, 0, 1, 0, -0.5, 1.5, -1.5, 1, 1, 1, 0, 1, 0,

    -0.5, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0, 0, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0, 0, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0, -0.5, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0,

    -0.5, 1, 1.5, 0, 0, 1, 1, 0, 0, -0.5, 1.5, 1.5, 0, 0, 1, 1, 0, 0, -0.5, 1.5, -1.5, 0, 0, 1, 1, 0, 0, -0.5, 1, -1.5, 0, 0, 1, 1, 0, 0,

    0, 1, 1.5, 0, 1, 0, -1, 0, 0, -0.5, 1, 1.5, 0, 1, 0, -1, 0, 0, -0.5, 1, -1.5, 0, 1, 0, -1, 0, 0, 0, 1, -1.5, 0, 1, 0, -1, 0, 0,

    0, 1.5, 1.5, 1, 1, 0, 0, 0, 1, 0, 1, 1.5, 1, 1, 0, 0, 0, 1, 0, 1, -1.5, 1, 1, 0, 0, 0, 1, 0, 1.5, -1.5, 1, 1, 0, 0, 0, 1,

    -0.5, 1, 1.5, 1, 0, 0, 0, 0, -1, 0, 1, 1.5, 1, 0, 0, 0, 0, -1, 0, 1.5, 1.5, 1, 0, 0, 0, 0, -1, -0.5, 1.5, 1.5, 1, 0, 0, 0, 0, -1,

    -1.5, 1, -1.5, 1, 1, 1, 0, 1, 0, -1, 1, -1.5, 1, 1, 1, 0, 1, 0, -1, 1.5, -1.5, 1, 1, 1, 0, 1, 0, -1.5, 1.5, -1.5, 1, 1, 1, 0, 1, 0,

    -1.5, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0, -1, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0, -1, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0, -1.5, 1.5, -1.5, 1, 0.5, 0, 0, -1, 0,

    -1.5, 1, 1.5, 0, 0, 1, 1, 0, 0, -1.5, 1.5, 1.5, 0, 0, 1, 1, 0, 0, -1.5, 1.5, -1.5, 0, 0, 1, 1, 0, 0, -1.5, 1, -1.5, 0, 0, 1, 1, 0, 0,

    -1, 1, 1.5, 0, 1, 0, -1, 0, 0, -1.5, 1, 1.5, 0, 1, 0, -1, 0, 0, -1.5, 1, -1.5, 0, 1, 0, -1, 0, 0, -1, 1, -1.5, 0, 1, 0, -1, 0, 0,

    -1, 1.5, 1.5, 1, 1, 0, 0, 0, 1, -1, 1, 1.5, 1, 1, 0, 0, 0, 1, -1, 1, -1.5, 1, 1, 0, 0, 0, 1, -1, 1.5, -1.5, 1, 1, 0, 0, 0, 1,

    -1.5, 1, 1.5, 1, 0, 0, 0, 0, -1, -1, 1, 1.5, 1, 0, 0, 0, 0, -1, -1, 1.5, 1.5, 1, 0, 0, 0, 0, -1, -1.5, 1.5, 1.5, 1, 0, 0, 0, 0, -1,

    -1.5, 1, 1.5, 1, 0, 0, 0, 0, -1, 0, 1, 1.5, 1, 0, 0, 0, 0, -1, 0, 1.5, 1.5, 1, 0, 0, 0, 0, -1, -1.5, 1.5, 1.5, 1, 0, 0, 0, 0, -1,

    -1.5, 1.5, 2, 1, 1, 0, 0, 0, 1, 0, 1.5, 2, 1, 1, 0, 0, 0, 1, 0, 1.5, 1.5, 1, 1, 0, 0, 0, 1, -1.5, 1.5, 1.5, 1, 1, 0, 0, 0, 1,

    -1.5, 1, 2, 0, 1, 0, -1, 0, 0, -1.5, 1.5, 2, 0, 1, 0, -1, 0, 0, -1.5, 1.5, 1.5, 0, 1, 0, -1, 0, 0, -1.5, 1, 1.5, 0, 1, 0, -1, 0, 0,

    0, 1, 2, 0, 0, 1, 1, 0, 0, -1.5, 1, 2, 0, 0, 1, 1, 0, 0, -1.5, 1, 1.5, 0, 0, 1, 1, 0, 0, 0, 1, 1.5, 0, 0, 1, 1, 0, 0,

    0, 1.5, 2, 1, 0.5, 0, 0, -1, 0, 0, 1, 2, 1, 0.5, 0, 0, -1, 0, 0, 1, 1.5, 1, 0.5, 0, 0, -1, 0, 0, 1.5, 1.5, 1, 0.5, 0, 0, -1, 0,

    -1.5, 1, 2, 1, 1, 1, 0, 1, 0, 0, 1, 2, 1, 1, 1, 0, 1, 0, 0, 1.5, 2, 1, 1, 1, 0, 1, 0, -1.5, 1.5, 2, 1, 1, 1, 0, 1, 0,
  ];
  var indices = [
    0,
    1,
    2,
    0,
    2,
    3, // Face A
    4,
    5,
    6,
    4,
    6,
    7, // Face B
    8,
    9,
    10,
    8,
    10,
    11, // Face C
    12,
    13,
    14,
    12,
    14,
    15, // Face D
    16,
    17,
    18,
    16,
    18,
    19, // Face E
    20,
    21,
    22,
    20,
    22,
    23, // Face F

    24,
    25,
    26,
    24,
    26,
    27, // Face A
    28,
    29,
    30,
    28,
    30,
    31, // Face B
    32,
    33,
    34,
    32,
    34,
    35, // Face C
    36,
    37,
    38,
    36,
    38,
    39, // Face D
    40,
    41,
    42,
    40,
    42,
    43, // Face E
    44,
    45,
    46,
    44,
    46,
    47, // Face F
    48,
    49,
    50,
    48,
    50,
    51, // Face A1
    52,
    53,
    54,
    52,
    54,
    55, // Face B1
    56,
    57,
    58,
    56,
    58,
    59, // Face C1
    60,
    61,
    62,
    60,
    62,
    63, // Face D1
    64,
    65,
    66,
    64,
    66,
    67, // Face E1
    68,
    69,
    70,
    68,
    70,
    71, // Face F1

    72,
    73,
    74,
    72,
    74,
    75, // Face A2
    76,
    77,
    78,
    76,
    78,
    79, // Face B2
    80,
    81,
    82,
    80,
    82,
    83, // Face C2
    84,
    85,
    86,
    84,
    86,
    87, // Face D2
    88,
    89,
    90,
    88,
    90,
    91, // Face E2
    92,
    93,
    94,
    92,
    94,
    95, // Face F2

    96,
    97,
    98,
    96,
    98,
    99, // Face A
    100,
    101,
    102,
    100,
    102,
    103, // Face B
    104,
    105,
    106,
    104,
    106,
    107, // Face C
    108,
    109,
    110,
    108,
    110,
    111, // Face D
    112,
    113,
    114,
    112,
    114,
    115, // Face E
    116,
    117,
    118,
    116,
    118,
    119, // Face F

    120,
    121,
    122,
    120,
    122,
    123, // Face A1
    124,
    125,
    126,
    124,
    126,
    127, // Face B1
    128,
    129,
    130,
    128,
    130,
    131, // Face C1
    132,
    133,
    134,
    132,
    134,
    135, // Face D1
    136,
    137,
    138,
    136,
    138,
    139, // Face E1
    140,
    141,
    142,
    140,
    142,
    143, // Face F1

    144,
    145,
    146,
    144,
    146,
    147, // Face A2
    148,
    149,
    150,
    148,
    150,
    151, // Face B2
    152,
    153,
    154,
    152,
    154,
    155, // Face C2
    156,
    157,
    158,
    156,
    158,
    159, // Face D2
    160,
    161,
    162,
    160,
    162,
    163, // Face E2
    164,
    165,
    166,
    164,
    166,
    167, // Face F2

    // O
    168,
    169,
    170,
    168,
    170,
    171, // A
    172,
    173,
    174,
    172,
    174,
    175, // B
    176,
    177,
    178,
    176,
    178,
    179, // C
    180,
    181,
    182,
    180,
    182,
    183, // D
    184,
    185,
    186,
    184,
    186,
    187, // E
    188,
    189,
    190,
    188,
    190,
    191, // F

    192,
    193,
    194,
    192,
    194,
    195,
    196,
    197,
    198,
    196,
    198,
    199,
    200,
    201,
    202,
    200,
    202,
    203,
    204,
    205,
    206,
    204,
    206,
    207,
    208,
    209,
    210,
    208,
    210,
    211,
    212,
    213,
    214,
    212,
    214,
    215,

    216,
    217,
    218,
    216,
    218,
    219,
    220,
    221,
    222,
    220,
    222,
    223,
    224,
    225,
    226,
    224,
    226,
    227,
    228,
    229,
    230,
    228,
    230,
    231,
    232,
    233,
    234,
    232,
    234,
    235,
    236,
    237,
    238,
    236,
    238,
    239,

    240,
    241,
    242,
    240,
    242,
    243,
    244,
    245,
    246,
    244,
    246,
    247,
    248,
    249,
    250,
    248,
    250,
    251,
    252,
    253,
    254,
    252,
    254,
    255,
    256,
    257,
    258,
    256,
    258,
    259,
    260,
    261,
    262,
    260,
    262,
    263,
  ];

  // Create a linked-list for storing the vertices data in the GPU realm
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  // VERTEX SHADER
  var vertexShaderCode = `
       attribute vec3 aPosition;
       attribute vec3 aColor;
       attribute vec3 aNormal;
       uniform mat4 uModel;
       uniform mat4 uView;
       uniform mat4 uProjection;
       varying vec3 vPosition;
       varying vec3 vColor;
       varying vec3 vNormal;
       void main () {
           vec4 position = vec4(aPosition, 1.0);
           gl_Position = uProjection * uView * uModel * position;
           // gl_Position is the final destination for storing
           //  positional data for the rendered vertex
           vColor = aColor;
           vNormal = aNormal;
           vPosition = (uModel * position).xyz;
       }
   `;
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderCode);
  gl.compileShader(vertexShader);

  // FRAGMENT SHADER
  var fragmentShaderCode = `
       precision mediump float;
       varying vec3 vColor;
       uniform vec3 uLightConstant;      // It represents the light color
       uniform float uAmbientIntensity;  // It represents the light intensity
       varying vec3 vPosition;
       varying vec3 vNormal;
       uniform vec3 uLightPosition;
       uniform vec3 uViewerPosition;
       uniform mat3 uNormalModel;
       void main() {
           vec3 ambient = uLightConstant * uAmbientIntensity;
           vec3 lightDirection = uLightPosition - vPosition;
           vec3 normalizedLight = normalize(lightDirection);
           vec3 normalizedNormal = normalize(uNormalModel * vNormal);
           float cosTheta = dot(normalizedNormal, normalizedLight);
           vec3 diffuse = vec3(0.0, 0.0, 0.0);
           if (cosTheta > 0.0) {
               float diffuseIntensity = cosTheta;
               diffuse = uLightConstant * diffuseIntensity;
           }
           vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
           vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
           float cosPhi = dot(normalizedReflector, normalizedViewer);
           vec3 specular = vec3(0., 0., 0.);
           if (cosPhi > 0.) {
               float shininessConstant = 100.0;    // bare minimum spec for metal
               float specularIntensity = pow(cosPhi, shininessConstant);
               specular = uLightConstant * specularIntensity;
           }
           vec3 phong = ambient + diffuse + specular;
           gl_FragColor = vec4(phong * vColor, 1.0);
           // gl_FragColor is the final destination for storing
           //  color data for the rendered fragment
       }
   `;
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderCode);
  gl.compileShader(fragmentShader);

  // Comparing to C-Programming, we may imagine
  //  that up to this step we have created two
  //  object files (.o), for the vertex and fragment shaders

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Local variables
  var isAnimated = false;
  var theta = 0.0;
  var direction = "";
  var dX = 0.0;
  var dY = 0.0;
  // For the model (all linear transformation)
  var uModel = gl.getUniformLocation(shaderProgram, "uModel");
  // For the camera
  var camera = [0.0, 0.0, 7.5];
  var uView = gl.getUniformLocation(shaderProgram, "uView");
  var view = glMatrix.mat4.create(); // Create an identity matrix
  glMatrix.mat4.lookAt(view, camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]);
  gl.uniformMatrix4fv(uView, false, view);
  // For the projection
  var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
  var perspective = glMatrix.mat4.create();
  glMatrix.mat4.perspective(
    perspective,
    Math.PI / 2 - 15, // 75 degrees
    1.0,
    0.5,
    50.0
  );
  gl.uniformMatrix4fv(uProjection, false, perspective);

  // For the lighting and shading
  var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
  // Ambient
  var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
  gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]); // white color
  gl.uniform1f(uAmbientIntensity, 0.455); // 40% intensity
  // Diffuse
  var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
  gl.uniform3fv(uLightPosition, [1.0, 0.0, 1.0]);
  var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
  // Specular
  var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

  // Local functions
  // MOUSE
  var dragging,
    prevx,
    prevy,
    rotation = glMatrix.mat4.create();
  function onMouseDown(event) {
    var x = event.clientX;
    var y = event.clientY;
    var rect = event.target.getBoundingClientRect();
    if (rect.left <= x && rect.right >= x && rect.top <= y && rect.bottom >= y) {
      dragging = true;
      prevx = x;
      prevy = y;
    }
  }
  function onMouseUp(event) {
    dragging = false;
  }
  function onMouseMove(event) {
    if (dragging) {
      var x = event.clientX;
      var y = event.clientY;
      var xdiff = x - prevx;
      var ydiff = y - prevy;
      var inverseRotation = glMatrix.mat4.create();
      glMatrix.mat4.invert(inverseRotation, rotation);
      var xAxis = [1, 0, 0, 0];
      var yAxis = [0, 1, 0, 0];
      glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
      glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
      glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
      glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
      prevx = x;
      prevy = y;
    }
  }
  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);
  // KEYBOARD
  function onKeyDown(event) {
    switch (event.keyCode) {
      case 73: // Object UP
        direction = "up";
        break;
      case 75: // Object DOWN
        direction = "down";
        break;
      case 74: // Object RIGHT
        direction = "right";
        break;
      case 76: // Object LEFT
        direction = "left";
        break;
      case 38: // Camera UP
        camera[1] += 0.05;
        gl.uniform3fv(uViewerPosition, camera);
        glMatrix.mat4.lookAt(view, camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]);
        gl.uniformMatrix4fv(uView, false, view);
        break;
      case 40: // Camera DOWN
        camera[1] -= 0.05;
        gl.uniform3fv(uViewerPosition, camera);
        glMatrix.mat4.lookAt(view, camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]);
        gl.uniformMatrix4fv(uView, false, view);
        break;
      case 39: // Camera RIGHT
        camera[0] += 0.05;
        gl.uniform3fv(uViewerPosition, camera);
        glMatrix.mat4.lookAt(view, camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]);
        gl.uniformMatrix4fv(uView, false, view);
        break;
      case 37: // Camera LEFT
        camera[0] -= 0.05;
        gl.uniform3fv(uViewerPosition, camera);
        glMatrix.mat4.lookAt(view, camera, [camera[0], 0.0, -10.0], [0.0, 1.0, 0.0]);
        gl.uniformMatrix4fv(uView, false, view);
        break;
      default:
        break;
    }
  }
  function onKeyUp(event) {
    direction = "";
  }
  function onKeyPress(event) {
    console.log("keypress");
    if (event.keyCode == 32) {
      // Space button
      isAnimated = !isAnimated;
    }
  }
  document.addEventListener("keypress", onKeyPress);
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  // Teach the GPU how to collect
  //  the positional values from ARRAY_BUFFER
  //  for each vertex being processed
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);
  var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
  gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 9 * Float32Array.BYTES_PER_ELEMENT, 6 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aNormal);

  function render() {
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.12, 0.54, 0.56, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var model = glMatrix.mat4.create();
    if (isAnimated) {
      theta += 0.01;
    }
    switch (direction) {
      case "up":
        dY += 0.1;
        break;
      case "down":
        dY -= 0.1;
        break;
      case "left":
        dX -= 0.1;
        break;
      case "right":
        dX += 0.1;
        break;

      default:
        break;
    }
    glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
    glMatrix.mat4.rotateZ(rotation, rotation, theta);
    glMatrix.mat4.rotateY(rotation, rotation, theta);
    glMatrix.mat4.multiply(model, model, rotation);
    gl.uniformMatrix4fv(uModel, false, model);

    // For transforming the normal vector
    var normalModel = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normalModel, model);
    gl.uniformMatrix3fv(uNormalModel, false, normalModel);

    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
