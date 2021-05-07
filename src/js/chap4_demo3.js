export function chap4_demo3() {
  var container = d3.select("#chap4-demo3");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight;

  container.selectAll("*").remove();

  var svg = container.append("svg")
    .attr("width", width)
    .attr("height", height);

  svg.append("circle")
    .attr("r", 20)
    .attr("cx", width / 4)
    .attr("cy", height / 2)
    .attr("fill", "red");
  svg.append("circle")
    .attr("r", 20)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("fill", "green");
  svg.append("circle")
    .attr("r", 20)
    .attr("cx", 3 * width / 4)
    .attr("cy", height / 2)
    .attr("fill", "blue");

  var widget = undefined;
  var color = undefined;

  var drag = d3.drag()
    .on("start", function() {
      color = d3.select(this).attr("fill");
      widget = d3.select(this).attr("fill", "lime");
    })
    .on("drag", function(event) {
      var pt = d3.pointer(event, this);
      widget.attr("cx", pt[0])
        .attr("cy", pt[1]);
    })
    .on("end", function() {
      widget.attr("fill", color);
      widget = undefined;
    });

  svg.selectAll("circle").call(drag);
}
