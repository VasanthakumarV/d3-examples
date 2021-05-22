export function chap9_demo4() {
  var container = d3.select("#chap9-demo4");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var ps = [{ x: 125, y: 150, vx: 0, vy: 1 },
  { x: 175, y: 150, vx: 0, vy: -1 }];
  var ln = [{ index: 0, source: ps[0], target: ps[1] }];

  var cs1 = svg.append("circle")
    .attr("r", 10)
    .attr("fill", "blue");
  var cs2 = svg.append("circle")
    .attr("r", 10)
    .attr("fill", "red");

  d3.forceSimulation(ps)
    .alphaDecay(0)
    .alphaMin(-1)
    .velocityDecay(0)
    .force("ln", d3.forceLink(ln).distance(50).strength(0.01))
    .on("tick", function() {
      cs1.attr("cx", ps[0].x)
        .attr("cy", ps[0].y);
      cs2.attr("cx", ps[1].x)
        .attr("cy", ps[1].y);
    });
}
