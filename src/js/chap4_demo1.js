export function chap4_demo1() {
  var container = d3.select("#chap4-demo1");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.select("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var txt = svg.append("text");

  svg.attr("cursor", "crosshair")
    .on("mousemove", function(event) {
      var pt = d3.pointer(event);
      txt.attr("x", 18 + pt[0])
        .attr("y", 6 + pt[1])
        .text(`${pt[0]},${pt[1]}`);
    });
}
