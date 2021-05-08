export function chap4_demo5() {
  var container = d3.select("#chap4-demo5");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight;

  container.selectAll("*").remove();
  var svg = container.append("svg")
    .attr("width", width)
    .attr("height", height);

  var a = 3.2;
  var b = 5.9;

  var phi;
  var omega = 2 * Math.PI / 10000;

  var crrX = 150 + 100;
  var crrY = 150 + 0;

  var prvX = crrX;
  var prvY = crrY;

  var timer = d3.timer(function(t) {
    phi = omega * t;

    crrX = 150 + 100 * Math.cos(a * phi);
    crrY = 150 + 100 * Math.sin(b * phi);

    svg.selectAll("line")
      .each(function() { this.bogus_opacity *= 0.99 })
      .attr("stroke-opacity", function() {
        return this.bogus_opacity
      })
      .filter(function() {
        return this.bogus_opacity < 0.05
      })
      .remove();

    svg.append("line")
      .each(function() { this.bogus_opacity = 1.0 })
      .attr("x1", prvX)
      .attr("y1", prvY)
      .attr("x2", crrX)
      .attr("y2", crrY)
      .attr("stroke", "green")
      .attr("stroke-width", 2);

    prvX = crrX;
    prvY = crrY;

    if (t > 120e3) {
      timer.stop();
    }
  });
}
