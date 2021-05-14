export function chap5_demo2() {
  var container = d3.select("#chap5-demo2");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight;

  container.selectAll("*").remove();

  var svg = container.append("svg")
    .attr("width", width)
    .attr("height", height);

  var ds = [[1, 1], [2, 2], [3, 4], [4, 4], [5, 2], [6, 2], [7, 3], [8, 1], [9, 2]];

  var xSc = d3.scaleLinear()
    .domain([1, 9])
    .range([50, width - 50]);
  var ySc = d3.scaleLinear()
    .domain([0, 5])
    .range([height - 25, 25]);
  ds = ds.map(d => [xSc(d[0]), ySc(d[1])]);

  svg.append("g")
    .selectAll("circle")
    .data(ds)
    .enter()
    .append("circle")
    .attr("r", 3)
    .attr("cx", d => d[0])
    .attr("cy", d => d[1]);

  var lnMkr = d3.line();
  svg.append("g")
    .append("path")
    .attr("d", lnMkr(ds))
    .attr("fill", "none")
    .attr("stroke", "red");
}
