export function chap4_demo4() {
  var container = d3.select("#chap4-demo4");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight;

  container.selectAll("*").remove();

  var svg = container.append("svg")
    .attr("width", width)
    .attr("height", height);

  var ds1 = [2, 1, 3, 5, 7, 8, 9, 9, 8, 7, 5, 3, 1, 2, 4];
  var ds2 = [8, 9, 8, 7, 5, 3, 2, 1, 2, 3, 5, 7, 8, 9, 8];

  var n = ds1.length;
  var mx = d3.max(d3.merge([ds1, ds2]));

  var scX = d3.scaleLinear()
    .domain([0, n])
    .range([50, width - 30]);
  var scY = d3.scaleLinear()
    .domain([0, mx])
    .range([height - 20, 50]);

  svg.selectAll("line")
    .data(ds1)
    .enter()
    .append("line")
    .attr("stroke", "red")
    .attr("stroke-width", 20)
    .attr("x1", (_, i) => scX(i))
    .attr("y1", scY(0))
    .attr("x2", (_, i) => scX(i))
    .attr("y2", d => scY(d));

  svg.on("click", function() {
    [ds1, ds2] = [ds2, ds1];

    svg.selectAll("line")
      .data(ds1)
      .transition()
      .duration(1000)
      .delay((_, i) => 200 * i)
      .attr("y2", d => scY(d));
  });
}
