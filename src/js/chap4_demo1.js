export function chap4_demo1() {
  d3.selectAll("#chap4-demo1 > *").remove();

  var svg = d3.select("#chap4-demo1");

  var txt = svg.append("text");

  svg.attr("cursor", "crosshair")
    .on("mousemove", function(event) {
      var pt = d3.pointer(event);
      txt.attr("x", 18 + pt[0])
        .attr("y", 6 + pt[1])
        .text(`${pt[0]},${pt[1]}`);
    });
}
