export function chap2_demo1() {
  var container = d3.select("#chap2-demo1");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var data = d3.csvParse(`x,y
100,50
200,100
300,150
400,200
500,250`);

  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", "red")
    .attr("cx", d => d["x"])
    .attr("cy", d => d["y"]);
}

