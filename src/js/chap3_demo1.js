export function chap3_demo1() {
  d3.selectAll("#chap3-demo1 > *").remove();

  var ds1 = [["Mary", 1], ["Jane", 4], ["Anne", 2]];
  var ds2 = [["Anne", 5], ["Jane", 3]];

  var scX = d3.scaleLinear().domain([0, 6]).range([50, 300]);
  var scY = d3.scaleLinear().domain([0, 3]).range([50, 150])

  var j = -1;
  var k = -1;

  var svg = d3.select("#chap3-demo1");

  svg.selectAll("text")
    .data(ds1)
    .enter()
    .append("text")
    .attr("x", 20)
    .attr("y", () => scY(++j))
    .text(d => d[0]);

  svg.selectAll("circle")
    .data(ds1)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", "red")
    .attr("cx", d => scX(d[1]))
    .attr("cy", () => scY(++k));

  svg.on("click", function() {
    var cs = svg.selectAll("circle")
      .data(ds2, d => d[0]);
    cs.transition()
      .duration(2000)
      .attr("cx", d => scX(d[1]));
    cs.exit()
      .attr("fill", "blue");
  });
}
