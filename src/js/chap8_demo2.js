export function chap8_demo2() {
  var container = d3.select("#chap8-demo2");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var cnv = container
    .append("canvas")
    .attr("width", width)
    .attr("height", height);
  var ctx = cnv.node()
    .getContext("2d");

  var pxX = 465;
  var pxY = 250;
  var maxIter = 2000;

  var x0 = -1.31;
  var x1 = -0.845;
  var y0 = 0.2;
  var y1 = 0.45;

  var scX = d3.scaleLinear()
    .domain([0, pxX])
    .range([x0, x1]);
  var scY = d3.scaleLinear()
    .domain([0, pxY])
    .range([y1, y0]);

  var scC = d3.scaleLinear()
    .domain([0, 10, 23, 35, 35, 55, 1999, 2000])
    .range(["white", "red", "orange", "yellow", "lightyellow", "white", "darkgrey"]);

  function mandelbrot(x, y) {
    var u = 0.0;
    var v = 0.0;
    var k = 0;

    for (k = 0; k < maxIter && (u * u + v * v) < 4; k++) {
      var t = u * u - v * v + x;
      v = 2 * u * v + y;
      u = t;
    }

    return k;
  }

  for (var j = 0; j < pxX; j++) {
    for (var i = 0; i < pxX; i++) {
      var d = mandelbrot(scX(i), scY(j));
      ctx.fillStyle = scC(d);
      ctx.fillRect(i, j, 1, 1);
    }
  }
}
