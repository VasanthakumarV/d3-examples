export function chap2_demo2() {
  var container = d3.select("#chap2-demo2");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var data = d3.csvParse(`x,y1,y2
1.0,0.001,0.63
3.0,0.003,0.84
4.0,0.024,0.56
4.5,0.054,0.22
4.6,0.062,0.15
5.0,0.100,0.08
6.0,0.176,0.20
8.0,0.198,0.71
9.0,0.199,0.65`);

  var pxX = 600;
  var pxY = 300;

  var scX = d3.scaleLinear()
    .domain(d3.extent(data, d => d["x"]))
    .range([0, pxX]);

  var scY1 = d3.scaleLinear()
    .domain(d3.extent(data, d => d["y1"]))
    .range([pxY, 0]);

  var scY2 = d3.scaleLinear()
    .domain(d3.extent(data, d => d["y2"]))
    .range([pxY, 0]);

  svg.append("g")
    .attr("id", "ds1")
    .attr("fill", "green")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("cx", d => scX(d["x"]))
    .attr("cy", d => scY1(d["y1"]));

  svg.append("g")
    .attr("id", "ds2")
    .attr("fill", "blue")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("cx", d => scX(d["x"]))
    .attr("cy", d => scY2(d["y2"]));

  var lineMaker = d3.line()
    .x(d => scX(d["x"]))
    .y(d => scY1(d["y1"]));

  d3.select("#ds1")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("d", lineMaker(data));

  lineMaker.y(d => scY2(d["y2"]));

  d3.select("#ds2")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "cyan")
    .attr("d", lineMaker(data));
}
